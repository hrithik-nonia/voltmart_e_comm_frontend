import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function VoltmartPreloader({ onComplete }) {
  const spinnerRef = useRef(null);
  const progressValueRef = useRef({ val: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Continuous smooth 360-degree rotation of the cyan glowing arc ring
    const rotationAnim = gsap.to(spinnerRef.current, {
      rotation: 360,
      duration: 1.5,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });

    // 2. Animate percentage counter from 0% to 100%
    const progressAnim = gsap.to(progressValueRef.current, {
      val: 100,
      duration: 3.2,
      ease: "power1.inOut",
      onUpdate: () => {
        setProgress(Math.round(progressValueRef.current.val));
      },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    return () => {
      rotationAnim.kill();
      progressAnim.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040813] text-white overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Orbital Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <span className="absolute -top-24 left-1/3 h-1 w-1 rounded-full bg-cyan-400/40 blur-[1px]" />
        <span className="absolute top-20 right-1/3 h-1.5 w-1.5 rounded-full bg-cyan-400/60 blur-[1px]" />
        <span className="absolute bottom-24 left-1/4 h-1 w-1 rounded-full bg-cyan-400/50 blur-[1px]" />
        <span className="absolute bottom-16 right-1/4 h-1.5 w-1.5 rounded-full bg-blue-500/50 blur-[1px]" />
      </div>

      {/* Center Preloader Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* SVG Circular Loader */}
        <div className="relative h-44 w-44 flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="h-full w-full overflow-visible">
            <defs>
              {/* Cyan Gradient for Arc */}
              <linearGradient
                id="cyanArcGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Dark Inner Base Circle Track */}
            <circle
              cx="80"
              cy="80"
              r="62"
              fill="none"
              stroke="#0E1A2E"
              strokeWidth="2.5"
            />

            {/* GSAP Animated Rotating Cyan Arc Ring */}
            <g ref={spinnerRef}>
              <circle
                cx="80"
                cy="80"
                r="62"
                fill="none"
                stroke="url(#cyanArcGradient)"
                strokeWidth="3"
                strokeDasharray="110 280"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
              />

              {/* Leading Tip Glow Dot */}
              <circle
                cx="142"
                cy="80"
                r="3"
                fill="#FFFFFF"
                className="drop-shadow-[0_0_6px_rgba(255,255,255,1)]"
              />
            </g>
          </svg>

          {/* Center Brand Text "VM" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-black tracking-widest text-white drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">
              VM
            </span>
          </div>
        </div>

        {/* Bottom Loading Progress Info */}
        <div className="mt-8 text-center space-y-1.5">
          <p className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">
            POWERING UP...
          </p>
          <p className="text-xs font-mono font-bold text-cyan-400">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
