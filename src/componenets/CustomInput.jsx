import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const inputStyle = {
  "& input::-webkit-outer-spin-button,\n input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: "0",
  },
  width: "100%",
  "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
    color: "white",
  },
  "& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon": {
    color: "white",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #4c8185",
    },
    "&:hover fieldset": {
      border: "1px solid #4c8185",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #4c8185",
    },
  },
};

const CustomInput = (props) => {
  return <TextField {...props} sx={inputStyle} />;
};

export default CustomInput;

export const CustomField = ({
  placeholder,
  // amount,
  image,
  readOnly,
  // value,
  // name,
  onChange,
}) => {
  return (
    <CustomInput
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      // name={name}
      // value={value}
      InputProps={{
        readOnly,
        endAdornment: (
          <InputAdornment position="start">
            <img src={image} alt="logo" width="30px" />
            {/* <Box display="flex" alignItems="center" gap={1} color="#fff"> */}
            {/* <Typography>{amount ?? ""}</Typography> */}
            {/* <Typography>{currency?.toUpperCase() ?? ""}</Typography> */}
            {/* </Box> */}
          </InputAdornment>
        ),
      }}
    />
  );
};
