import * as React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import MembersDetailsCard from "../../../components/MembersDetailsCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface StyledTabProps {
  label: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ margin: "1rem 0" }}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GroupsAndCustomerTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const AntTabs = styled(Tabs)({
    borderBottom: "-1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: "#01468E",
      height: "0.2rem",
    },
  });

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "700",
    marginRight: theme.spacing(1),
    color: "#808080",
    "&.Mui-selected": {
      color: "#000000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "15rem" }}>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="GROUPS" {...a11yProps(0)} />
          <StyledTab label="CUSTOMERS" {...a11yProps(1)} />
        </AntTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div>
          <MembersDetailsCard />
          <MembersDetailsCard />
          <MembersDetailsCard />
          <MembersDetailsCard />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        CUSTOMERS
      </CustomTabPanel>
    </Box>
  );
}
