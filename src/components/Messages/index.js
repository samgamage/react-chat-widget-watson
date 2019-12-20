/** @jsx jsx */
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import { jsx, Styled } from "theme-ui";
import Message from "../Message";

export default connect(store => ({
  messages: store.messages,
  showChat: store.behavior.get("showChat")
}))(function Messages(props) {
  const isEmptyList = props.messages.size === 0;

  return (
    <div
      sx={{
        backgroundColor: "white",
        height: "50vh",
        maxHeight: "410px",
        overflowY: "scroll",
        p: 1
      }}
      id="rcw-messages-container"
    >
      {isEmptyList && <Styled.div></Styled.div>}
      <AnimatePresence initial={false}>
        {props.messages.map(message => (
          <Message
            key={message.get("id")}
            sender={message.get("sender")}
            text={message.get("text")}
          />
        ))}
      </AnimatePresence>
    </div>
  );
});
