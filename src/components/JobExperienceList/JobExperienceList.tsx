import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { makeStyles } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
// const useStyles = makeStyles({
//   desktopIndicator: {
//     left: "0px",
//   },
// });
// type Classes = ReturnType<typeof useStyles>;

// const classes : any = useStyles();

const color = {
  bg: "#101820ff",
  yellow: "#fee715ff",
  gray: "",
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className={value === index ? "" : "hidden"}
      style={{ backgroundColor: color.bg }}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ padding: "0 30px " }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function JobExperienceList() {
  const dispatch = useDispatch();
  const { switchJob } = bindActionCreators(actionCreators, dispatch);
  const job = useSelector((state: State) => state.job);

  const JobExpList = [
    {
      jobTitle: "Front End developer",
      companyName: "BMO",
      period: "April 2022 - Feb 2023",
      companyWeb: "https://www.bmo.com/main/personal",
      jobDesc: [
        "Work with vanila Javascript modify the BMO pages as request using Adobe Target",
        " Write clean, maintable code for all the sub tasks in the web page.",
        "Unit test and debug for writtien code",
        "Working with React.js with component library to make code reuseable",
      ],
    },
    {
      jobTitle: "Web developer",
      companyName: "Signature Cosmetic",
      period: "Sep 2020 - March 2022",
      companyWeb: "https://signaturemedispa.com/",

      jobDesc: [
        "Maintenance and managing over 6 websites under our company name using wordpress, shopify and React",
        "Creating tools that provide high performance for reducing repeating work",
        "Problem solving all the potential problem on the websites",
      ],
    },
    {
      jobTitle: "Full Stack developer",
      companyName: "Mark2Win",
      period: "June 2019 - March 2020",
      companyWeb: "https://mark2win.com/zh",

      jobDesc: [
        "Using Angular and React creating projects for clients",
        "Building project independently .",
      ],
    },
    {
      jobTitle: "Software developer Co-op",
      companyName: "Tweebaa",
      period: " Aug 2017 - Dec 2017",
      companyWeb: "https://tweebaa.cn/",

      jobDesc: [
        "Unit Tesing for all pages",
        "Languages transfer system for English and Chinese pages.",
      ],
    },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    switchJob(newValue);
  };

  return (
    <div>
      <Box
        className="desktop "
        sx={{
          flexGrow: 1,
          bgcolor: color.bg,
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          className="tabs-title "
          textColor="inherit"
          style={{
            overflow: "unset",
          }}
          orientation="vertical"
          TabIndicatorProps={{
            style: {
              backgroundColor: color.yellow,
              left: 0,
            },
          }}
          variant="scrollable"
          value={job.value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
          }}
        >
          {JobExpList.map((i, index) => (
            <Tab
              className="tabs-title"
              key={"list" + i.companyName}
              label={i.companyName}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        {JobExpList.map((i, index) => (
          <TabPanel key={i.companyName} value={job.value} index={index}>
            <div className="align-left">
              <div style={{ marginBottom: "10px" }}>
                {i.jobTitle}{" "}
                <a className="job-link" href={i.companyWeb}>
                  @{i.companyName}
                </a>
              </div>
              <div>
                <span className="job-period"> {i.period}</span>
                <ul className="duty-list">
                  {i.jobDesc.map((j) => (
                    <li key={j}>
                      <DoneOutlinedIcon />
                      {j}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabPanel>
        ))}
      </Box>
    </div>
  );
}
