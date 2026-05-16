export default function BackgroundNoise() {
  return (
    <div
      className="
      fixed
      inset-0
      pointer-events-none
      opacity-[0.03]
      z-[999]
      mix-blend-overlay
      "
      style={{
        backgroundImage:
          "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
    />
  );
}