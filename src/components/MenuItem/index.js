/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";

function MenuItem({ text, Icon }) {
  const { theme } = useThemeUI();
  return (
    <Styled.div
      sx={{
        p: 2,
        display: "flex",
        transition: "all 0.2s ease-in-out",
        ":hover": {
          background: theme.colors.gray[50],
          cursor: "pointer"
        }
      }}
      tabIndex="0"
    >
      {Icon && (
        <Icon
          sx={{ color: theme.colors.gray[500], mx: 2, my: "auto" }}
          size={20}
        />
      )}
      <Styled.p as="div" sx={{ color: "black", my: "auto" }}>
        {text}
      </Styled.p>
    </Styled.div>
  );
}

export default MenuItem;
