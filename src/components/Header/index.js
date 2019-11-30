/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Header() {
  return (
    <div
      css={css`
        background-color: black;
        border-radius: 10px 10px 0 0;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 15px 0 25px;
      `}
    >
      Header
    </div>
  );
}
