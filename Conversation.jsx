import Input from "../inputs/Input";
import "./listItems.css";
export default function Conversation({selected}) {
  return (
    <div className="conversation-item" active={selected}>
      <div className="conversation-top">
        <div className="conversation-title-box">
          <Input type="checkbox" />
          <div>
            <p className="title">Siva</p>
            <p className="caption1">Developer</p>
          </div>
        </div>
        <p>10m</p>
      </div>
      <div className="conversation-bottom-details">
        <p className="subject">subject</p>
        <p className="caption2">
          {"This is a best app i never seen before this".slice(0, 40)}...
        </p>
      </div>
    </div>
  );
}
