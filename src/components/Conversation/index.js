/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Header from "../Header";
import Messages from "../Messages";
import Sender from "../Sender";

export default function Conversation(props) {
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
}
