/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { IoIosChatboxes, IoMdClose } from "react-icons/io";
import { connect } from "react-redux";
import { toggleChat } from "../../store/actions";

export default connect(store => ({ showChat: store.behavior.get("showChat") }))(
  function Launcher(props) {
    return (
      <button
        css={css`
          align-self: flex-end;
          border: 0;
          border-radius: 50%;
          background-color: #000;
          color: white;
          height: 60px;
          width: 60px;
          margin-top: 10px;
        `}
        onClick={() => {
          props.dispatch(toggleChat());
        }}
      >
        {props.showChat ? (
          <IoMdClose size={32} />
        ) : (
          <IoIosChatboxes size={32} />
        )}
      </button>
    );
  }
);
