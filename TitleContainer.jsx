import "./container.css";
export default function TitleContainer({
  title = "title",
  startIcon,
  endIcon,
}) {
  return (
    <>
      <div className="title-container">
        <div className="title-start">
          <div className="title-start-icon">{startIcon}</div>
          <h3>{title}</h3>
        </div>
        <div className="title-end-icon">{endIcon}</div>
      </div>
    </>
  );
}
