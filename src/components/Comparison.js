import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import badLanding from "../../public/landing/bad-landing.png";
import badMvp from "../../public/landing/bad-mvp.png";
import badUi from "../../public/landing/bad-ui.png";
import goodLanding from "../../public/landing/good-landing.png";
import goodMvp from "../../public/landing/good-mvp.png";
import goodUi from "../../public/landing/good-ui.png";

const Comparison = ({ onCategoryChange }) => {
  const containerRef = useRef(null);
  const [sliderX, setSliderX] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState("UI/UX Design");
  const imageMap = {
    "Landing Page": {
      before: badLanding,
      after: goodLanding,
    },
    "UI/UX Design": {
      before: badUi,
      after: goodUi,
    },
    "MVP": {
      before: badMvp,
      after: goodMvp,
    },
  };
  const isDragging = useRef(false);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  // Handle mouse drag
  const handleDrag = (e) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    const newX = ((clientX - bounds.left) / bounds.width) * 100;
    if (newX >= 0 && newX <= 100) setSliderX(newX);
  };

  // Mouse events for desktop
  useEffect(() => {
    const onMouseMove = (e) => {
      if (isDragging.current) handleDrag(e);
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  // Touch events for mobile
  useEffect(() => {
    const onTouchMove = (e) => {
      if (isDragging.current) handleDrag(e);
    };
    const onTouchEnd = () => {
      isDragging.current = false;
    };
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    // Animate slider: right → left → center
    setSliderX(100);
    const t1 = setTimeout(() => setSliderX(0), 900);
    const t2 = setTimeout(() => setSliderX(50), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [selectedCategory]);

  // Auto-rotate categories every 5 seconds
  useEffect(() => {
    const categories = ["Landing Page", "UI/UX Design", "MVP"];
    let currentIndex = categories.indexOf(selectedCategory);

    const rotationInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % categories.length;
      handleCategoryChange(categories[currentIndex]);
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, [selectedCategory]);

  // Notify parent of initial category
  useEffect(() => {
    if (onCategoryChange) {
      onCategoryChange(selectedCategory);
    }
  }, []);

  const startDrag = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const startTouch = (e) => {
    isDragging.current = true;
  };

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-row justify-between w-full">
        <p className=" text-primary flex items-center gap-4 mb-2">
          After the Free Call <FiArrowDown/>
        </p>
        <p>
          Before
        </p>
      </div>
      <div
        className="relative w-[550px] h-[450px] md:w-full md:h-[360px] sm:h-[300px] bg-white rounded-[10px] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden border border-black"
        ref={containerRef}
      >
        {/* Before Image */}
        <div className="absolute inset-0 relative bg-[url('/checkerboard.png')]">
          <Image
            src={imageMap[selectedCategory].before}
            alt="Before"
            className="w-full h-full object-cover object-left"
            sizes="(min-width: 768px) 640px, 100vw"
          />
        </div>
        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden bg-slate-300"
          style={{
            width: `${sliderX}%`,
            transition: 'width 1.5s ease-in-out'
          }}
        >
          <Image
            src={imageMap[selectedCategory].after}
            alt="After"
            className="w-full h-full object-cover object-left shadow-[2px_0px_5px_rgba(0,0,0,0.5)]"
            sizes="(min-width: 768px) 640px, 100vw"
          />
        </div>
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[4px] bg-[#C94694] cursor-col-resize z-10"
          style={{
            left: `${sliderX}%`,
            transform: "translateX(-50%)",
            transition: 'left 1.5s ease-in-out'
          }}
          onMouseDown={startDrag}
          onTouchStart={startTouch}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -left-[12px] bg-[#C94694] text-white text-sm rounded-full w-8 h-8 flex items-center justify-center shadow select-none animate-bounce">
            ↔
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center gap-3 md:flex-row md:gap-4 w-full">
        <button
          onClick={() => handleCategoryChange("Landing Page")}
          className={`py-4 border border-black text-sm rounded transition-all duration-500 ${
            selectedCategory === "Landing Page"
              ? "bg-[#C94694] text-white font-medium w-full"
              : "bg-[#F0F0F0] w-[180px] md:w-full"
          }`}
        >
          Landing Page
        </button>
        <button
          onClick={() => handleCategoryChange("UI/UX Design")}
          className={`py-4 border border-black text-sm rounded transition-all duration-500 ${
            selectedCategory === "UI/UX Design"
              ? "bg-[#C94694] text-white font-medium  w-full"
              : "bg-[#F0F0F0] w-[180px] md:w-full"
          }`}
        >
          UI/UX Design
        </button>
        <button
          onClick={() => handleCategoryChange("MVP")}
          className={`py-4 border border-black text-sm rounded transition-all ${
            selectedCategory === "MVP"
              ? "bg-[#C94694] text-white font-medium  w-full"
              : "bg-[#F0F0F0] w-[180px] md:w-full"
          }`}
        >
          MVP
        </button>
      </div>
    </div>
  );
};

export default Comparison;
