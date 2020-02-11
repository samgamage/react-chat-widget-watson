/** @jsx jsx */
import { IoMdMore, IoMdPaper, IoMdPower } from "react-icons/io";
import { connect } from "react-redux";
import { jsx, Styled } from "theme-ui";
import MenuItem from "../MenuItem";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger
} from "../Popover";

const getPropsFromState = store => ({
  appearance: store.config.get("appearance")
});

const defaultAppearance = {
  header_text: "Chat Widget",
  header_text_color: "#fff"
};

export default connect(getPropsFromState)(function Header({ appearance }) {
  return (
    <div
      sx={{
        backgroundColor: "primary",
        borderRadius: "10px 10px 0 0",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <Styled.p
        as="div"
        sx={{
          margin: 0,
          fontFamily: "heading",
          color:
            appearance.header_text_color || defaultAppearance.header_text_color
        }}
      >
        {appearance.header_text || defaultAppearance.header_text}
      </Styled.p>
      <div sx={{ display: "flex" }}>
        <Popover closeOnBlur={false}>
          <PopoverTrigger>
            <button
              sx={{
                background: "transparent",
                border: 0,
                m: "auto"
              }}
            >
              <IoMdMore
                size={24}
                sx={{
                  color: "white"
                }}
              />
            </button>
          </PopoverTrigger>
          <PopoverContent width="fit-content" py={4}>
            <PopoverArrow />
            <MenuItem text="Get Transcription" Icon={IoMdPaper} />
            <MenuItem text="End Chat" Icon={IoMdPower} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
});
