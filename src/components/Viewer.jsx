export function Viewer({ name, isVisible }) {
  return (
    <div className="viewer" style={{ display: isVisible ? "block" : "none" }}>
      Name: {name}
    </div>
  );
}
