/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Message(props) {
  return (
    <div
      css={css`
        margin: 10px;
        word-wrap: break-word;
        display: flex;
      `}
    >
      <div
        css={css`
          background-color: ${props.sender === "client"
            ? "#a3eaf7"
            : "#f4f7f9"};
          border-radius: 1em;
          padding: 0.75rem;
          max-width: 215px;
          text-align: left;
          margin-left: ${props.sender === "client" ? "auto" : "none"};
        `}
      >
        {props.text}
      </div>
    </div>
  );
}
