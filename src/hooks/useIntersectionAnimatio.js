// hooks/useIntersectionAnimation.js
import { useEffect, useRef } from "react";
import anime from "animejs";

const useIntersectionAnimation = (classNames, options = { threshold: 0.4 }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!Array.isArray(classNames) || classNames.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime.timeline().add({
            targets: classNames.map((className) => `.${className}`).join(", "),
            translateY: [100, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: anime.stagger(200),
          });

          observer.unobserve(ref.current);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [classNames, options]);

  return ref;
};

export default useIntersectionAnimation;
