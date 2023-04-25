import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import DropDown from "./DropDown";
import "./NavBar.css";
import { useEffect } from "react";
import MobileDrawer from "./MobileDrawer";
import AcUnitIcon from "@mui/icons-material/AcUnit";
interface Page {
  name: string;
  url?: string;

  dropdown?: boolean;
  tabs?: {
    name: string;
    url: string;
  }[];
}

export const pages = [
  {
    name: "About",
    url: "about-me",
    dropdown: false,
  },
  { name: "Experience", url: "job-experience", dropdown: false },
  { name: "Contact", url: "contact-me", dropdown: false },

  {
    name: "Features",
    dropdown: true,
    url: "",
    tabs: [
      // { name: "Calculator", url: "/Cal" },
      { name: "Book Search", url: "/bookSearch" },
      { name: "PokeDex", url: "/PokeDex" },
    ],
  },
];

function NavBar() {
  const [mobileDrawerActive, setMobileDrawerActive] = React.useState(false);
  const setMobileDA = (input: boolean) => {
    setMobileDrawerActive(input);
  };

  const fontColor = "#FEE715FF";
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <AppBar
      className="header"
      position="fixed"
      style={{
        color: "var(--dark-white)",
        backgroundColor: mobileDrawerActive
          ? "transparent"
          : "rgb(17, 25, 33,0.8)",

        zIndex: "1300",
        boxShadow: mobileDrawerActive ? "none" : "",
        counterReset: "item 0",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            style={{ color: fontColor }}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignItems: "center",
            }}
          >
            <AcUnitIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            Ming
          </Typography>
          {/* mobile logo */}

          <Typography
            style={{
              textTransform: "capitalize",
              alignItems: "center",
            }}
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: "2px",
              color: "var(--yellow)",
              textDecoration: "none",
            }}
          >
            <AcUnitIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            Ming
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <MobileDrawer func={setMobileDA} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page: Page) => (
              <React.Fragment key={page.name}>
                {page.dropdown ? (
                  <DropDown name={page.name} tabs={page.tabs} />
                ) : (
                  <a className="header-link" href={`/#${page.url}`}>
                    {page.name}
                  </a>
                )}
              </React.Fragment>
            ))}
            <a
              className="my-button"
              style={{ padding: "10px 20px" }}
              target="_blank"
              href="https://docs.google.com/document/d/11zg7zaL7jbxSVUAFXa8uv1tIHmGUcuhYqng4Ry_YrA4/edit"
            >
              Resume
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
