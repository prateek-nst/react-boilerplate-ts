import { Grid, Typography } from "@mui/material/";

import CollectRow from "./CollectRow";
const CollectTable = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Grid container gap={0.5}>
        <Grid container item>
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "0.7rem 0rem",
              width: "100%",
              boxShadow: "0px 4px 4px 0px #00000012",
              position: "sticky",
              top: 0,
            }}
          >
            <div style={{ marginRight: "2rem" }}>
              <Grid container sx={{ paddingLeft: "1%" }} alignItems={"center"}>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Relationship Officer
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Bank Product
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Collection Target
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Total Collected
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Cash With RO
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Cash Handover
                  </Typography>
                </Grid>
                <Grid item xs={1.7}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      lineHeight: 1,
                      color: "#838383",
                    }}
                  >
                    Receive Cash
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid container item gap={0.5}>
          <CollectRow />
          <CollectRow />
          <CollectRow />
          <CollectRow />
          <CollectRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default CollectTable;
