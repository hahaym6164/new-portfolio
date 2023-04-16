import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
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
}

export default function DropDown(props: DropDownProps) {

  const { tabs = [], name } = props;
  return (
    <>
      <div style={{ margin: "16px 0" }}>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                style={{
                  textTransform: "capitalize",
                }}
                sx={{ color: "unset" }}
                className="header-link"
                {...bindTrigger(popupState)}
              >
                {name} <ArrowDropDownIcon />
              </Button>
              <Menu {...bindMenu(popupState)}>
                {tabs.map((i) => (
                  <MenuItem key={i.name}>
                    <Button
                      style={{
                        textTransform: "capitalize",
                        padding: "0",
                      }}
                      onClick={popupState.close}
                      sx={{ color: "var(--black)" }}
                      to={i.url || ""}
                      component={Link}
                    >
                      {i.name}
                    </Button>
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
