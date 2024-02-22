import TitleContainer from "@/app/ui/components/container/TitleContainer";
import "./inbox.css";
import Conversation from "@/app/ui/components/listItems/Conversation";
export default function Layout({ children }) {
  const endIcon = (
    <svg
      width={20}
      height={20}
      fill="grey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" />
    </svg>
  );
  const startIcon = (
    <svg
      width="24"
      height="24"
      fill="grey"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu-icon">
        <rect width="24" height="24" fill="white" />
        <path id="Line 3" d="M4 17H20" stroke="black" stroke-linecap="round" />
        <path id="Line 2" d="M4 12H17" stroke="black" stroke-linecap="round" />
        <path id="Line 4" d="M4 7H20" stroke="black" stroke-linecap="round" />
      </g>
    </svg>
  );

  return (
    <>
      <div className="inbox-container">
        <div className="main-container">
          <TitleContainer
            startIcon={startIcon}
            title="Conversations"
            endIcon={endIcon}
          />
          <div className="conv-list-container">
            <Conversation selected={"selected"} />
            <Conversation />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}