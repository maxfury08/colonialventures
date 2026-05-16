export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="
          absolute

          rounded-full

          bg-[#D4AF37]/20

          animate-pulse
          "
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,

            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,

            animationDuration: `${
              Math.random() * 4 + 2
            }s`,
          }}
        />
      ))}
    </div>
  );
}