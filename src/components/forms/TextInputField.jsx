/** @format */

import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const TextInputField = ({
  name,
  label,
  control,
  type = "text",
  errors,
  defaultValue = "",
  required = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: required }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          id={name}
          type={type}
          error={Boolean(errors[name])}
        />
      )}
    />
  );
};

export default TextInputField;
