/** @jsx jsx */
import { createRef, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import { jsx, Styled, useThemeUI } from "theme-ui";
import { sendMessage } from "../../api";
import { addResponseMessage, addUserMessage } from "../../store/actions";

function scrollToBottom() {
  setTimeout(
    () =>
      animateScroll.scrollToBottom({
        containerId: "rcw-messages-container",
        duration: 100,
        delay: 0,
        offset: 50,
        smooth: false,
        isDynamic: true
      }),
    50
  );
}

export default connect()(function Sender(props) {
  const messagesInputRef = createRef();
  const [message, setMessage] = useState("");
  const { theme } = useThemeUI();

  const onSend = async event => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      props.dispatch(addUserMessage(userInput));
      scrollToBottom();
      setMessage("");
      await processResponse(userInput);
      scrollToBottom();
    }
  };

  const processResponse = async input => {
    const { generic } = await sendMessage(input);
    const text = generic[0].text;
    props.dispatch(addResponseMessage(text));
    setTimeout(
      () =>
        animateScroll.scrollToBottom({
          containerId: "rcw-messages-container",
          duration: 100,
          delay: 0,
          offset: 50,
          smooth: false,
          isDynamic: true
        }),
      50
    );
  };

  useEffect(() => {
    messagesInputRef.current.focus();
  }, [messagesInputRef]);

  return (
    <form
      onSubmit={onSend}
      sx={{
        alignItems: "center",
        display: "flex",
        backgroundColor: theme.colors.gray[50],
        py: 3,
        px: 4,
        borderRadius: "0 0 10px 10px"
      }}
    >
      <Styled.div
        as="input"
        name="message"
        type="text"
        placeholder="Type a message..."
        autoComplete="off"
        ref={messagesInputRef}
        value={message}
        onChange={e => setMessage(e.target.value)}
        sx={{
          width: "100%",
          border: 0,
          backgroundColor: theme.colors.gray[50],
          py: 1,
          px: 1,
          fontSize: 16
        }}
      />
      {/* <button
        sx={{
          background: "none",
          border: 0,
          mx: 1,
          color: theme.colors.gray[500],
          ":disabled": {
            color: theme.colors.gray[300]
          }
        }}
      >
        <FiSmile size={26} />
      </button> */}
      <button
        type="submit"
        disabled={message.length === 0}
        sx={{
          background: "none",
          border: 0,
          mx: 1,
          color: theme.colors.gray[500],
          ":disabled": {
            color: theme.colors.gray[300]
          }
        }}
      >
        <IoMdSend size={26} />
      </button>
    </form>
  );
});
