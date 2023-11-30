import { Grid, Typography } from "@mui/material";

import DummyImg from "../assets/svg/DummyProfile.svg";

interface IconicCardProps {
  title: string;
  number: string;
  role?: string;
}

const IconicCard: React.FC<IconicCardProps> = ({ title, number, role }) => {
  const buttonTextStyle = {
    display: "flex",
    margin: "0.2rem 0rem",
    fontWeight: "600",
    fontSize: "0.6rem",
    color: "#01468E",
    alignItems: "center",
    cursor: "pointer",
    textDecoration: "underline",
    border: "none",
    background: "none",
    padding: 0,
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "transparent",
    },
  };

  const handleViewDetails = () => alert("hi");

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <div
            style={{
              height: "3.9rem",
              aspectRatio: 1 / 1,
              backgroundImage: `url(${DummyImg})`,
              backgroundPosition: "left",
              backgroundSize: "cover",
            }}
          ></div>
        </Grid>
        <Grid item marginLeft="0.7rem">
          <Grid container direction="column">
            <Grid item>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: "0.8rem",
                  margin: "0.2rem 0rem",
                }}
              >
                {title}
              </p>
            </Grid>
            <Grid item>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "0.7rem",
                  margin: "0.2rem 0rem",
                  color: "#838383",
                }}
              >
                {number}
              </p>
            </Grid>
            <Grid item>
              {role ? (
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "0.8rem",
                    margin: "0.2rem 0rem",
                    color: "#838383",
                  }}
                >
                  {role}
                </Typography>
              ) : (
                <Typography
                  noWrap
                  component="button"
                  onClick={handleViewDetails}
                  sx={buttonTextStyle}
                >
                  View Details
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IconicCard;
