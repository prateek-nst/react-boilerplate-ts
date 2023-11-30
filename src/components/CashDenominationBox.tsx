import { useMemo, useState } from "react";

import { Box, Divider, Typography } from "@mui/material";

import CashDenominationCard from "./CashDenominationCard";

const CashDenominationBox = () => {
  const [total, setTotal] = useState({
    "2000": 0,
    "500": 0,
    "200": 0,
    "100": 0,
    "50": 0,
    "20": 0,
    "10": 0,
    "5": 0,
  });

  const totalAmount = useMemo(() => {
    let result = 0;
    for (const value of Object.values(total)) {
      result += value;
    }
    return result;
  }, [total]);

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#fff",
        borderRadius: 2,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F7A800",
          height: "50px",
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ flex: 1, fontWeight: 700, marginLeft: 2 }}>
          Denomination
        </Typography>
        <Typography
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          Notes(#)
        </Typography>
        <Typography
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            fontWeight: 700,
            marginRight: 2,
          }}
        >
          Total
        </Typography>
      </Box>
      <CashDenominationCard setTotal={setTotal} denomination={2000} />
      <CashDenominationCard setTotal={setTotal} denomination={500} />
      <CashDenominationCard setTotal={setTotal} denomination={200} />
      <CashDenominationCard setTotal={setTotal} denomination={100} />
      <CashDenominationCard setTotal={setTotal} denomination={50} />
      <CashDenominationCard setTotal={setTotal} denomination={20} />
      <CashDenominationCard setTotal={setTotal} denomination={10} />
      <CashDenominationCard setTotal={setTotal} denomination={5} />
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Total</Typography>
        <Typography
          sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
        >
          ₹{totalAmount.toLocaleString()}/-
        </Typography>
      </Box>
      <Divider sx={{ border: "1px solid #F7A800" }} />
    </Box>
  );
};

export default CashDenominationBox;
