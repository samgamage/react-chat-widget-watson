/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { motion } from "framer-motion";
import { useEffect } from "react";
import { connect } from "react-redux";
import { jsx } from "theme-ui";
import { sendMessage } from "../../api";
import { addResponseMessage } from "../../store/actions";
import Conversation from "../Conversation";
import Launcher from "../Launcher";

export default connect(store => ({
  showChat: store.behavior.get("showChat")
}))(function Widget(props) {
  useEffect(() => {
    (async () => {
      const { generic } = await sendMessage("");
      const text = generic[0].text;
      props.dispatch(addResponseMessage(text));
    })();
  }, []);

  const conversationAnimationConfig = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: 15
    }
  };

  return (
    <motion.div
      id="rcw-container"
      sx={{
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        margin: "0 20px 20px 0",
        maxWidth: "370px",
        position: "fixed",
        right: 0,
        zIndex: 999,
        width: props.showChat ? "90vh" : "100%"
      }}
    >
      <motion.div
        variants={conversationAnimationConfig}
        initial={{
          opacity: 0
        }}
        animate={props.showChat ? "open" : "closed"}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "none",
          boxShadow: "0px 2px 10px 1px #b5b5b5",
          borderRadius: "10px"
        }}
      >
        <Conversation />
      </motion.div>
      <Launcher />
    </motion.div>
  );
});
