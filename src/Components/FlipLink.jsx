import { motion } from "motion/react";
export const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      variants={{
        initial: {},
        hovered: {},
      }}
      href={href}
      style={{ lineHeight: "11px" }}
      initial="initial"
      whileHover="hovered"
      className="block  relative cursor-pointer text-[#4d4d4d] overflow-hidden whitespace-nowrap font-Polysans  flex-col gap-3 uppercase
         text-[14px] font-bold text-right"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 text-[#b7ab98]"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};
