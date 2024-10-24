import React from "react";
import VideoStream from "./VideoStream";
import ChatWindow from "./ChatWindow";

const LiveChat = () => {
  return (
    <>
      <h3>Live Chat</h3>
      <div style={{ padding: "10px", display: "flex" }}>
        <VideoStream />
        <ChatWindow />
      </div>
    </>
  );
};

export default LiveChat;
