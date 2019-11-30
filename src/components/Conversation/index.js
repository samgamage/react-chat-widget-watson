/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect } from "react";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import Header from "../Header";
import Messages from "../Messages";
import Sender from "../Sender";

export default connect()(function Conversation(props) {
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
    <div
      css={css`
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <Header />
      <Messages />
      <Sender />
    </div>
  );
});
