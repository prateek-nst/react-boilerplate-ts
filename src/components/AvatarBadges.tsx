import { Box, Typography } from "@mui/material";
 
const AvatarBadges = ({ show = "bm" }: { show: "both" | "bm" | "cms" }) => {
  if (show === "both") {
    return (
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "1.8rem",
            height: "1.8rem",
            backgroundColor: "#FFB9DD",
            borderRadius: "50%",
            backgroundSize: "contain",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={"0.7rem"} sx={{ color: "#D25699" }}>
            BM
          </Typography>
        </Box>
 
        <Box
          sx={{
            width: "1.8rem",
            height: "1.8rem",
            backgroundColor: "#DFEFFF",
            borderRadius: "50%",
            ml: "-10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={"0.7rem"} sx={{ color: "#477BB2" }}>
            CMS
          </Typography>
        </Box>
      </Box>
    );
  }
  if (show === "bm") {
    return (
      <Box
        sx={{
          width: "1.8rem",
          height: "1.8rem",
          backgroundColor: "#FFB9DD",
          borderRadius: "50%",
          backgroundSize: "contain",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={"0.7rem"} sx={{ color: "#D25699" }}>
          BM
        </Typography>
      </Box>
    );
  }
  if (show === "cms") {
    return (
      <Box
        sx={{
          width: "1.8rem",
          height: "1.8rem",
          backgroundColor: "#DFEFFF",
          borderRadius: "50%",
          ml: "-10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={"0.7rem"} sx={{ color: "#477BB2" }}>
          CMS
        </Typography>
      </Box>
    );
  }
};
 
export default AvatarBadges;