const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient" />
      
      <div className="wave-container">
        <div className="wave wave1" />
        <div className="wave wave2" />
        <div className="wave wave3" />
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.5;
          }
        }

        .animate-gradient {
          animation: gradient 20s ease-in-out infinite;
        }

        .wave-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .wave {
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            hsl(var(--primary) / 0.1),
            transparent,
            hsl(var(--accent) / 0.1)
          );
          animation: wave 15s ease-in-out infinite;
        }

        .wave1 {
          top: -50%;
          left: -50%;
          animation-duration: 15s;
        }

        .wave2 {
          top: -30%;
          left: -30%;
          animation-duration: 20s;
          animation-delay: -5s;
        }

        .wave3 {
          top: -40%;
          left: -40%;
          animation-duration: 25s;
          animation-delay: -10s;
        }

        @keyframes wave {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10%, 10%) rotate(90deg);
          }
          50% {
            transform: translate(0, 20%) rotate(180deg);
          }
          75% {
            transform: translate(-10%, 10%) rotate(270deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
