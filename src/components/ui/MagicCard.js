import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const MagicCard = ({ children, className = "", gradientColor = "#262626" }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    // Tilt variants
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative group rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-primary-500/10 transition-shadow duration-300 ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10 h-full"
            >
                {children}
            </div>

            {/* Border Glow */}
            <motion.div
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) =>
                            `radial-gradient(
                600px circle at ${x * 500 + 250}px ${y * 500 + 250}px,
                ${gradientColor}40,
                transparent 40%
              )`
                    ),
                }}
                className="absolute inset-0 z-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
        </motion.div>
    );
};
