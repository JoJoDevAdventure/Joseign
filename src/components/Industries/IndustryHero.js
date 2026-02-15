import useAvailability from "@/hooks/useAvailability";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * @param {Object} data
 * @param {string} data.eyebrow       - e.g. "Websites for Landscapers"
 * @param {string} data.headline      - e.g. "Your Work Is Stunning.\nYour Website Should Be Too."
 * @param {string} data.subheadline   - e.g. "We build premium landing pages for landscaping companies in 3-7 days..."
 * @param {string} data.ctaText       - e.g. "Claim Your Spot"
 * @param {string} data.ctaLink       - e.g. "/bookme"
 * @param {string} data.heroImage     - e.g. "/placeholder.png"
 * @param {string} data.badge         - e.g. "Only 3 Spots This Week"
 * @param {string} data.accentColor   - e.g. "#16A34A"
 */
const IndustryHero = ({ data }) => {
  const { spotsLeft, isSunday } = useAvailability();
  const badgeText = isSunday
    ? "Booking for Next Week"
    : `Only ${spotsLeft} Spot${spotsLeft !== 1 ? "s" : ""} Left This Week`;

  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      let normalizedWebsite = website.trim();
      if (normalizedWebsite && !/^https?:\/\//i.test(normalizedWebsite)) {
        normalizedWebsite = `https://${normalizedWebsite}`;
      }

      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          websiteLink: normalizedWebsite,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setErrorMsg(result.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[auto] bg-light overflow-hidden">
      {/* Gradient Accent Glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07]"
        style={{ backgroundColor: data.accentColor }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.05]"
        style={{ backgroundColor: data.accentColor }}
      />

      <div className="relative z-10 flex items-center min-h-[90vh] md:min-h-[auto] px-32 lg:px-20 md:px-12 sm:px-8 xs:px-4 ">
        <div className="w-full flex flex-row md:flex-col items-center gap-16 md:gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-[600px] md:max-w-full"
          >
            {/* Badge */}
            {data.badge && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark/10 mb-8"
                style={{ backgroundColor: `${data.accentColor}08` }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: data.accentColor }}
                />
                <span className="text-sm font-medium text-dark/70">{badgeText}</span>
              </motion.div>
            )}

            {/* Eyebrow */}
            <p
              className="text-sm font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: data.accentColor }}
            >
              {data.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl font-extrabold text-dark leading-[1.1] mb-6 whitespace-pre-line">
              {data.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-lg text-dark/50 leading-relaxed mb-10 max-w-[520px]">
              {data.subheadline}
            </p>

            {/* Demo Request Form */}
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-dark/10 bg-white"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: data.accentColor }} />
                  <p className="text-dark/70 font-medium">
                    We received your request! We&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 max-w-[480px]"
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-dark/40 mb-1">
                    Request a Free Demo
                  </p>
                  <div className="flex flex-row sm:flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-3.5 rounded-xl border border-dark/10 bg-white text-dark placeholder:text-dark/30 text-sm font-medium focus:outline-none focus:border-dark/20 transition-colors"
                    />
                    <input
                      type="text"
                      required
                      placeholder="yourwebsite.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="flex-1 px-4 py-3.5 rounded-xl border border-dark/10 bg-white text-dark placeholder:text-dark/30 text-sm font-medium focus:outline-none focus:border-dark/20 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-70 disabled:hover:scale-100"
                    style={{ backgroundColor: data.accentColor }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Free Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
                  )}
                  <span className="text-dark/40 text-xs">No commitment required. We&apos;ll review your site and get back within 24h.</span>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative md:w-full"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-10 blur-sm"
                style={{ backgroundColor: data.accentColor }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark/10">
                <Image
                  src={data.heroImage}
                  alt={data.eyebrow}
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Stat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 md:bottom-4 md:left-4 bg-white rounded-xl px-6 py-4 shadow-2xl"
              >
                <p className="text-3xl font-extrabold text-dark">3-7</p>
                <p className="text-sm text-dark/60 font-medium">Days Delivery</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
