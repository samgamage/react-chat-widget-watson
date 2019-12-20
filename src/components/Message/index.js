/** @jsx jsx */
import Color from "color";
import { motion } from "framer-motion";
import { jsx, Styled, useThemeUI } from "theme-ui";

export default function Message(props) {
  const { theme } = useThemeUI();
  const lightPrimary = Color(theme.colors.primary)
    .lighten(0.6)
    .hex();

  return (
    <motion.div
      positionTransition
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{ opacity: 0, transition: { duration: 0.2, stiffness: 500 } }}
      sx={{
        margin: "5px",
        wordWrap: "break-word",
        display: "flex"
      }}
    >
      <Styled.p
        as="div"
        sx={{
          backgroundColor:
            props.sender === "client" ? lightPrimary : theme.colors.gray[100],
          borderRadius: "1rem",
          color:
            props.sender === "client" && Color(lightPrimary).isDark()
              ? "white"
              : "black",
          padding: "0.75rem",
          maxWidth: "215px",
          textAlign: "left",
          marginLeft: props.sender === "client" ? "auto" : "none"
        }}
      >
        {props.text}
      </Styled.p>
    </motion.div>
  );
}
