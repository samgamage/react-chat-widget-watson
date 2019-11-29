/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import Conversation from "./components/Conversation";

export default connect(store => ({ messages: store.messages }))(function Widget(
  props
) {
  return (
    <div
      css={css`
        bottom: 0;
        display: flex;
        flex-direction: column;
        margin: 0 20px 20px 0;
        max-width: 370px;
        position: fixed;
        right: 0;
        z-index: 999;
      `}
    >
      {console.log(props)}
      Widget
      <Conversation />
    </div>
  );
});
