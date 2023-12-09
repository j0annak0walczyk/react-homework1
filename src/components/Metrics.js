import "./Metrics.css";

export const Metrics = ({ number, what }) => {
  return (
    <div className="metrics">
      <p className="metrics-main">{number}</p>
      <p className="metrics-detail">{what}</p>
    </div>
  );
};
