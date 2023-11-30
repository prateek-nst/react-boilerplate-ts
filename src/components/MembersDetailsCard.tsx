import React from "react";

import {
  Box,
  IconButton,
  Tooltip,
  TooltipProps,
  Typography,
} from "@mui/material";

import FederalBank from "../assets/svg/FederalLogo.svg";
import MoreInfo from "../assets/svg/MoreInfo";
import PendingIcon from "../assets/svg/PendingIcon";
import SucessIcon from "../assets/svg/SuccessIcon";

interface MembersDetailsCardProps {}

const HtmlTooltip = (props: TooltipProps) => (
  <Tooltip enterTouchDelay={0} placement="bottom" arrow {...props} />
);

const MembersDetailsCard: React.FC<MembersDetailsCardProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#F3F3F3",
      }}
    >
      <Box
        sx={{
          width: "100%",
          mt: 1,
          p: 2,
          height: "100px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            height: "100%",
          }}
        >
          <Box
            sx={{
              
              backgroundColor: "red",
              height: "100%",
              aspectRatio: 1 / 1,
              backgroundImage: `url(
            "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/08/09174004/rajinikanth-net-worth-2023.jpeg"
          )`,
              backgroundSize: "contain",
              borderRadius: "0.5rem",
            }}
          ></Box>
          <Box
            sx={{
              height: "100%",
              width: "max-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography noWrap fontWeight={700} fontSize={"0.9rem"}>
                Sharadamma G1
              </Typography>
              <HtmlTooltip
                title={
                  <>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{"some"}</b> <u>{"content"}</u>.{" "}
                    {"about prospect!!!"}
                  </>
                }
              >
                <IconButton
                  aria-label="delete"
                  sx={{
                    padding: 0,
                    width: "0.9rem",
                  }}
                >
                  <MoreInfo style={{ cursor: "pointer" }} />
                </IconButton>
              </HtmlTooltip>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${FederalBank})`,
                  width: "80px",
                  aspectRatio: 3 / 0.7,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></Box>
              <Typography fontWeight={700}>JLG</Typography>
            </Box>
            <Typography
              sx={{
                textDecoration: "underline",
                ":hover": {
                  textDecoration: "none",
                },
                color: "#01468E",
                cursor: "pointer",
                fontSize: "0.8rem",
              }}
            >
              View Details
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#EAF7EE",
              display: "flex",
              alignItems: "center",
              borderRadius: "0.3rem",
              gap: 1,
              p: 0.5,
            }}
          >
            <SucessIcon />
            <Typography noWrap sx={{ color: "#00C300", fontWeight: 700,fontSize:"0.8rem",lineHeight:1 }}>
              ₹ 15,000
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PendingIcon />
            <Typography
              fontWeight={100}
              fontStyle={"italic"}
              sx={{ opacity: 0.5, fontSize: "0.7rem" }}
            >
              2 members
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MembersDetailsCard;
