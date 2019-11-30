/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { createRef, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { connect } from "react-redux";
import { animateScroll } from "react-scroll";
import { addUserMessage } from "../../store/actions";

export default connect()(function Sender(props) {
  const messagesInputRef = createRef();
  const [message, setMessage] = useState("");

  const onSend = event => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput.trim()) {
      props.dispatch(addUserMessage(userInput));
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
        100
      );
    }
    setMessage("");
    event.target.message.value = "";
  };

  useEffect(() => {
    messagesInputRef.current.focus();
  }, [messagesInputRef]);

  return (
    <form
      onSubmit={onSend}
      css={css`
        align-items: center;
        display: flex;
        background-color: lightgray;
        height: 45px;
        padding: 5px;
        border-radius: 0 0 10px 10px;
      `}
    >
      <input
        name="message"
        type="text"
        placeholder="Type a message..."
        autoComplete="off"
        ref={messagesInputRef}
        onChange={e => setMessage(e.target.value)}
        css={css`
          width: 100%;
          border: 0;
          background-color: lightgray;
          height: 30px;
          padding-left: 15px;

          &:focus {
            outline: none;
          }
        `}
      />
      <button
        type="submit"
        disabled={message.length === 0}
        css={css`
          background: none;
          border: 0;

          &:disabled {
            svg {
              color: lightgray !important;
            }
          }
        `}
      >
        <IoMdSend size={32} color="gray" />
      </button>
    </form>
  );
});
