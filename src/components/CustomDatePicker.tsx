// import * as React from "react";
// import TextField from "@mui/material/TextField";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
// import DatePicker from "@mui/x-date-pickers/DatePicker";

// export default function CustomDatePicker() {
//   const [value, setValue] = React.useState<Date | null>(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   border: "none",
//                 },
//                 "&:hover fieldset": {
//                   border: "none",
//                 },
//                 "&.Mui-focused fieldset": {
//                   border: "none",
//                 },
//               },
//             }}
//           />
//         )}
//       />
//     </LocalizationProvider>
//   );
// }
