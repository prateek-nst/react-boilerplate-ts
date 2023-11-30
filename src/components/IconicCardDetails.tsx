import { Grid } from '@mui/material';

import DummyImg from '../assets/dummyProfile.png';

interface IconicCardProps {
  title: string;
  number: string;
}

const IconicCardDetails: React.FC<IconicCardProps> = ({ title, number }) => {
  return (
    <div>
      <Grid container direction='row' alignItems="center">
        <Grid item >
          <img style={{display:"flex"}} src={DummyImg} alt="profile pic" />
        </Grid>
        <Grid item marginLeft="20px">
          <Grid container direction="column" >
            <Grid item>{title}</Grid>
            <Grid item sx={{marginTop:"8px",marginBottom:"8px"}}>{number}</Grid>
            <Grid item>view Details</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default IconicCardDetails;
