import { Button, ButtonBase, ButtonTypeMap, ExtendButtonBase } from "@mui/material";
import { styled } from "@mui/system";



const MyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "12px 24px",
  border: "1px solid",
  color: "var(--yellow)",
  lineHeight: 1.5,
  backgroundColor: "transparent",
  borderColor: "var(--yellow)",

  "&:hover": {
    backgroundColor: "#3D3926;",
    borderColor: "var(--yellow)",
    boxShadow: "none",
  },
});
export default MyButton;
