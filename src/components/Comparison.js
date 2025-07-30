import { useEffect, useRef, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

const Comparison = () => {
  const containerRef = useRef(null);
  const [sliderX, setSliderX] = useState(50);
  const [selectedCategory, setSelectedCategory] = useState("UI/UX Design");
  const imageMap = {
    Ads: {
      before: "/bad-ad.png",
      after: "/good-ad.png"
    },
    "UI/UX Design": {
      before: "/bad-ui.png",
      after: "/good-ui.png"
    },
    Branding: {
      before: "/bad-b.gif",
      after: "/good-b.gif"
    }
  };
  const isDragging = useRef(false);
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
        <div className="absolute inset-0 bg-[url('/checkerboard.png')]">
          <Image
            src={imageMap[selectedCategory].before}
            alt="Before"
            className="w-full h-full object-cover object-left"
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
          onClick={() => handleCategoryChange("Ads")}
          className={`py-4 border border-black text-sm rounded transition-all duration-500 ${
            selectedCategory === "Ads"
              ? "bg-[#C94694] text-white font-medium w-full"
              : "bg-[#F0F0F0] w-[180px] md:w-full"
          }`}
        >
          Ads
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
          onClick={() => handleCategoryChange("Branding")}
          className={`py-4 border border-black text-sm rounded transition-all ${
            selectedCategory === "Branding"
              ? "bg-[#C94694] text-white font-medium  w-full"
              : "bg-[#F0F0F0] w-[180px] md:w-full"
          }`}
        >
          Branding
        </button>
      </div>
    </div>
  );
};

export default Comparison;
