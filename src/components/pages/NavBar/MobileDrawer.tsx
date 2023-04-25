import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { pages } from "./NavBar";
import { AnimateBurger } from "@hahaym6164/burger-animated-icon";
import DropDown from "./DropDown";

interface MobileDrawerProps {
  func: Function;
}

export default function MobileDrawer(props: MobileDrawerProps) {
  const { func } = props;
  const [state, setState] = React.useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      func(open);
      setState(open);
    };
  const list = () => (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        width: "auto",
        padding: " 10vh 0",
      }}
      role="presentation"
    >
      <List className="mobile-header">
        {pages.map((i) => (
          <ListItem key={i.name} disablePadding>
            <ListItemButton style={{ marginTop: "30px", marginLeft: "10%" }}>
              {i.dropdown ? (
                <DropDown
                  name={i.name}
                  tabs={i.tabs}
                  toggle={toggleDrawer(false)}
                />
              ) : (
                <a
                  className="header-link"
                  onClick={toggleDrawer(false)}
                  href={`/#${i.url}`}
                >
                  {i.name}
                </a>
              )}
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton style={{ marginTop: "30px", marginLeft: "10%" }}>
            <a
              className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-15baowo-MuiButtonBase-root-MuiButton-root"
              style={{ padding: "10px 20px", marginLeft: "10px" }}
              target="_blank"
              href="https://docs.google.com/document/d/11zg7zaL7jbxSVUAFXa8uv1tIHmGUcuhYqng4Ry_YrA4/edit"
            >
              Resume
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setState(false);
    });
  }, []);
  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(!state)}>
          <AnimateBurger
            classes={state ? "is-active" : ""}
            color="var(--yellow)"
            num={6}
            size="small"
          />
        </Button>
        <Drawer open={state} onClose={toggleDrawer(false)} anchor="right">
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
