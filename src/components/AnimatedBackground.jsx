import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <span className="glow glow-one" />
      <span className="glow glow-two" />
      <span className="glow glow-three" />
      <span className="diagonal diagonal-one" />
      <span className="diagonal diagonal-two" />
      <span className="particles" />
    </div>
  );
}
