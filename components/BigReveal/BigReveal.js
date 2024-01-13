const { motion, useScroll, useTransform } = require("framer-motion");
const { useRef } = require("react");
const { stylesWithCssVar } = require("../motion/motion");

function BigReveal() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(
    scrollYProgress, 
    [0.1, 0.7], 
    ["100%", "-120%"]
  );
  const opacitySection = useTransform(
    scrollYProgress,
    [0.1, 0.5],
    [0, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.7],
    [1, 0.7]
  );
  // const opacityBorder = useTransform(
  //   scrollYProgress,
  //   [0.7, 0.71, 0.72],
  //   [1, 1, 0]
  // );
  const opacityBorder = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.25, 0.35, 0.4, 0.45, 0.5, 0.6],
    [0, 1, 1, 1, 1, 1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        "--scale": scale,
        "--opacity-border": opacityBorder,
      })}
      ref={targetRef}
      className="mt-[50vh] flex h-[500vh] items-start justify-start"
      id="scrolled-to"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[40rem] min-w-[50rem] -translate-x-1/3 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#64CCC5] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
        >
          SolarSquared
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
        >
          SolarSquared
        </motion.p>

        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
         />
        
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#64CCC5] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};

export default BigReveal;
