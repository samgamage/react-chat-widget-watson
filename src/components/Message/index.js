/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Message(props) {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        word-wrap: break-word;
      `}
    >
      <div
        css={css`
          background-color: lightsteelblue;
          border-radius: 10px;
          padding: 15px;
          max-width: 215px;
          text-align: left;
        `}
      >
        {props.text}
      </div>
    </div>
  );
}
