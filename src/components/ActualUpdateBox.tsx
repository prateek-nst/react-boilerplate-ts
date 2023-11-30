import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Divider, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

import { signal } from "@preact/signals-react";

import FederalLogo from "../assets/svg/FederalLogo";
import CashDenominationBox from "./CashDenominationBox";
import ImageUpload from "./ImageUpload";
import TextHeading from "./TextHeading";
import { CollectionIdList } from "./UpdateProofBox";
import { value2 } from "./UpdateProofDrawer";

const UTRInput = signal("");

const ActualUpdateBox = () => {
  return (
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
        <TextHeading text="UPDATE PROOF" color={"#F7A800"} fontWeight={700} />
        <Button
          sx={{
            textTransform: "none",
            borderRadius: 7,
            border: "2px solid #194889",
            fontSize: "1rem",
            color: "#194889",
          }}
          onClick={() => (value2.value = 0)}
        >
          Back
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", marginRight: 4 }}>
        <Typography fontStyle={"italic"}>15 August 2023</Typography>
      </Box>

      <Box
        sx={{
          p: 2,
          flex: 1,
          backgroundColor: "yellow",
          marginTop: 2,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Bank Product</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <FederalLogo />
              <Typography>JLG</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>Date & Time</Typography>
            <Typography fontStyle={"italic"}>15 August 2023, 2:00PM</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Collection File ID</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {CollectionIdList.value.map((item, index) => (
                <Typography fontWeight={700} key={`collectionId-${index}`}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "yellow",
            }}
          >
            <Accordion
              sx={{
                width: "100%",
                "&.MuiAccordion-root": {
                  boxShadow: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: "flex" }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography fontWeight={700}>Cash Denomination</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Typography fontWeight={700}>Total Amount:</Typography>
                  <Typography fontWeight={700}>
                    ₹{(35000).toLocaleString()}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CashDenominationBox />
              </AccordionDetails>
            </Accordion>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Bank Name</Typography>
            <FederalLogo />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Total Amount</Typography>
            <Typography>₹{(5000).toLocaleString()}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Bank Account Number</Typography>
            <Typography>127356357</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>UTR Number</Typography>
            <Typography>12735635757698</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Deposited By</Typography>
            <Typography>Shecommerz Branch Name</Typography>
          </Box>
        </Box>

        <Typography>Proof of Deposit</Typography>

        <ImageUpload />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>UTR Number</Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
              marginTop: 1,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter Valid UTR Number"
              inputProps={{ "aria-label": "enter UTR Number" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                (UTRInput.value = e.target.value)
              }
            />
          </Paper>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Button sx={{ textTransform: "none" }} variant="outlined">
            Archieve
          </Button>
          <Button sx={{ textTransform: "none" }} variant="outlined">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ActualUpdateBox;
