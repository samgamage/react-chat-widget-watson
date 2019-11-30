/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { connect } from "react-redux";
import Message from "../Message";

export default connect(store => ({ messages: store.messages }))(
  function Messages(props) {
    return (
      <div
        css={css`
          background-color: white;
          height: 50vh;
          max-height: 410px;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
        `}
        id="rcw-messages-container"
      >
        {props.messages.map(message => (
          <Message
            key={message.get("id")}
            sender={message.get("sender")}
            text={message.get("text")}
          />
        ))}
      </div>
    );
  }
);
