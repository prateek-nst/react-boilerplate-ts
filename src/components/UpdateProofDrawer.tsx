import React from "react";

import ClearIcon from "@mui/icons-material/Clear";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { signal } from "@preact/signals-react";

import ActualUpdateBox from "./ActualUpdateBox";
import HistoryProofBox from "./HistoryProofBox";
import { isImageChipShow } from "./ImageChip";
import TextHeading from "./TextHeading";
import UpdateProofBox from "./UpdateProofBox";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

const value = signal(0);
export const value2 = signal(0);

const UpdateProofDrawer = () => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    value.value = newValue;
  };
  return (
    <>
      {value2.value === 0 ? (
        <Box
          sx={{
            backgroundColor: "#F3F3F3",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              alignItems: "center",
            }}
          >
            <TextHeading
              text="ALL DEPOSIT SLIP"
              color={"#F7A800"}
              fontWeight={700}
            />
            <ClearIcon sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", marginRight: 4 }}
          >
            <Typography fontStyle={"italic"}>15 August 2023</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              flex: 1,
              backgroundColor: "#F3F3F3",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                position: "sticky",
                top: 0,
                backgroundColor: "#F3F3F3",
                zIndex: isImageChipShow.value ? 1 : 10000,
              }}
            >
              <Tabs
                value={value.value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTabs-indicator": { backgroundColor: "#F7A800" },
                  "& .MuiTab-root.Mui-selected": {
                    color: "#000",
                  },
                  width: "max-content",
                  marginLeft: 2,
                }}
              >
                <Tab
                  label="UPDATE"
                  {...a11yProps(0)}
                  sx={{ fontWeight: 700, fontSize: "1.3rem" }}
                />
                <Tab
                  label="HISTORY"
                  {...a11yProps(1)}
                  sx={{ fontWeight: 700, fontSize: "1.3rem" }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value.value} index={0}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <UpdateProofBox />
                <UpdateProofBox />
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value.value} index={1}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <HistoryProofBox />
                <HistoryProofBox />
              </Box>
            </CustomTabPanel>
          </Box>
        </Box>
      ) : (
        <ActualUpdateBox />
      )}
    </>
  );
};

export default UpdateProofDrawer;
