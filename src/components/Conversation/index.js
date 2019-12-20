import React, { useEffect } from "react";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import Header from "../Header";
import Messages from "../Messages";
import Sender from "../Sender";

export default connect()(function Conversation() {
  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: "rcw-messages-container",
      duration: 0,
      delay: 0,
      offset: 50,
      smooth: false,
      isDynamic: true
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Messages />
      <Sender />
    </React.Fragment>
  );
});
