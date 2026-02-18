import * as React from "react";
import { motion, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0, duration = 1.5 }) {
  const ref = React.useRef(null);
  const [displayValue, setDisplayValue] = React.useState(0);
  const spring = useSpring(0, { stiffness: 75, damping: 15 });

  React.useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  React.useEffect(() => {
    return spring.on("change", (v) => {
      setDisplayValue(v);
    });
  }, [spring]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
