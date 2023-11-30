import Box from "@mui/material/Box";

type Anchor = "top" | "left" | "bottom" | "right";

interface State {
  value: boolean;
}

const CustomList = (
  anchor: Anchor,
  state: State,
  Component: React.FC,
  props?: any
) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 510 }}
      role="presentation"
    >
      <Component {...props} state={state} />
    </Box>
  );
};
export default CustomList;
