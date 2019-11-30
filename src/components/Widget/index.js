/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import Conversation from "../Conversation";
import Launcher from "../Launcher";

export default connect(store => ({
  showChat: store.behavior.get("showChat")
}))(function Widget(props) {
  return (
    <div
      id="rcw-container"
      css={css`
        bottom: 0;
        display: flex;
        flex-direction: column;
        margin: 0 20px 20px 0;
        max-width: 370px;
        position: fixed;
        right: 0;
        z-index: 999;
        width: ${props.showChat ? "90vh" : "100%"};
      `}
    >
      {console.log(props)}
      {props.showChat && <Conversation />}
      <Launcher />
    </div>
  );
});
