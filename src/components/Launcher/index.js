/** @jsx jsx */
import { motion } from "framer-motion";
import { IoIosChatboxes, IoMdClose } from "react-icons/io";
import { connect } from "react-redux";
import { jsx } from "theme-ui";
import { toggleChat } from "../../store/actions";

export default connect(store => ({ showChat: store.behavior.get("showChat") }))(
  function Launcher(props) {
    const launcherAnimationConfig = {
      open: {
        rotate: 180
      },
      closed: {
        rotate: 0
      }
    };

    return (
      <button
        sx={{
          alignSelf: "flex-end",
          border: 0,
          borderRadius: "50%",
          backgroundColor: "primary",
          color: "white",
          height: "60px",
          width: "60px",
          marginTop: "10px",
          zIndex: 99999
        }}
        onClick={() => {
          props.dispatch(toggleChat());
        }}
      >
        <motion.div
          sx={{ width: "fit-content", margin: "auto" }}
          variants={launcherAnimationConfig}
          animate={props.showChat ? "open" : "closed"}
        >
          {props.showChat ? (
            <IoMdClose size={32} />
          ) : (
            <IoIosChatboxes size={32} />
          )}
        </motion.div>
      </button>
    );
  }
);
