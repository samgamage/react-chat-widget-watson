/** @jsx jsx */
import { IoMdMore, IoMdPaper, IoMdPower } from "react-icons/io";
import { jsx, Styled } from "theme-ui";
import MenuItem from "../MenuItem";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger
} from "../Popover";

export default function Header() {
  return (
    <div
      sx={{
        backgroundColor: "primary",
        borderRadius: "10px 10px 0 0",
        color: "white",
        display: "flex",
        textAlign: "center",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem"
      }}
    >
      <Styled.p as="div" sx={{ margin: 0 }}>
        Header
      </Styled.p>
      <div>
        <Popover closeOnBlur={false}>
          <PopoverTrigger>
            <button
              sx={{
                background: "transparent",
                border: 0
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
}
