import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { useRef } from "react";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface DropDownProps {
  tabs?: {
    name: string;
    url: string;
  }[];
  name: string;
  toggle?: Function;
}

export default function DropDown(props: DropDownProps) {
  const { tabs = [], name } = props;
  const { toggle } = props;
  const ref1 = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div style={{ margin: "auto 0px" }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                ref={ref1}
                style={{
                  textTransform: "capitalize",
                }}
                sx={{ color: "unset" }}
                className="header-link"
                {...bindTrigger(popupState)}
              >
                {name} <ArrowDropDownIcon />
              </Button>
              <Menu className="dropdown-menu" {...bindMenu(popupState)}>
                {tabs.map((i) => (
                  <MenuItem
                    style={{
                      textTransform: "capitalize",
                    }}
                    onClick={() => {
                      if (typeof toggle === "function") toggle(false);
                      return popupState.close();
                    }}
                    sx={{
                      color: "var(--black)",
                      padding: "10px",
                      justifyContent: "center",
                    }}
                    to={i.url || ""}
                    component={Link}
                    key={i.name}
                  >
                    {i.name}
                  </MenuItem>
                ))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </>
  );
}
