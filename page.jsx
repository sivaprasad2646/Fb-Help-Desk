"use client";
import TitleContainer from "@/app/ui/components/container/TitleContainer";
import "./individualChat.css";
import Image from "next/image";
import avatar from "@/app/icon2.png";
import Button from "@/app/ui/components/inputs/Button";
import Link from "next/link";
import { createContext } from "react";
import Input from "@/app/ui/components/inputs/Input";
export default function ConversationPage({}) {
  return (
    <div className="individual-chat">
      <div className="chat-container">
        <TitleContainer title="Siva Prasad" />
        <ChatContainer />
      </div>
      <div className="profile-container">
        <ProfileCard />
        <DetailsCard />
      </div>
    </div>
  );
}

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <Avatar src={avatar} />
      <div className="flex-box" style={{ flexDirection: "column" }}>
        <p className="title">Siva Prasad</p>
        <div className="flex-box online-status">
          <div className="online-tag-2" online={"online"}></div> <p>online</p>
        </div>
        <div className="flex-box">
          <Button
            variant="outline"
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            }
            style={{
              padding: "2px 10px",
              minHeight: "30px",
            }}
            color="neutral"
          >
            call me
          </Button>
          <Button
            startIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            }
            color="neutral"
            style={{
              padding: "2px 10px",
              minHeight: "30px",
            }}
            variant="outline"
          >
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
};
const DetailsCard = () => {
  return (
    <div className="details-card">
      <div className="details-container">
        <h3 className="head">Customer Details</h3>
        <div className="detail-item">
          <p>Email</p>
          <p className="detail">mssiva2646@gmail.com</p>
        </div>
        <div className="detail-item">
          <p>First Name</p>
          <p className="detail">Siva Prasad</p>
        </div>
        <div className="detail-item">
          <p>Last Name</p>
          <p className="detail">MS</p>
        </div>
        <Link href={"details"}>View more details</Link>
      </div>
    </div>
  );
};

const Avatar = ({ src }) => {
  return <Image className="avatar-image" src={src} alt="avatar.png" />;
};

const ChatContext = createContext();

const ChatContainer = () => {
  return (
    <ChatContext.Provider>
      <div className="chat-container">
        <div className="msgs-container">
          <Message msgSender={true} />
          <Message />
        </div>
        <div className="msg-input-container">
          <Input placeholder="Message Siva" />
        </div>
      </div>
    </ChatContext.Provider>
  );
};

const MessageSender = ({ msgs, time }) => {
  return (
    <div className="msg msg-sender">
      <div className="msg-list">
        <p className="msg-item">Hi</p>
        <p className="msg-item">Siva</p>
        <p className="msg-item">How are You</p>
        <p className="msg-caption">Siva Prasad MS - Mar 05, 2:22 AM</p>
      </div>
      <Avatar src={avatar} />
    </div>
  );
};

const MessageReceiver = ({ msgs, time }) => {
  return (
    <div className="msg msg-receiver">
      <Avatar src={avatar} />
      <div className="msg-list">
        <p className="msg-item">Hi</p>
        <p className="msg-item">Siva</p>
        <p className="msg-item">How are You</p>
        <p className="msg-caption">Siva Prasad MS - Mar 05, 2:22 AM</p>
      </div>
    </div>
  );
};

const Message = ({ msgSender }) => {
  const Msg = msgSender ? MessageReceiver : MessageSender;
  return (
    <>
      <Msg />
    </>
  );
};
