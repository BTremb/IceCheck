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
  maxLength,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: required, maxLength: maxLength }} 
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          id={name}
          type={type}
          error={Boolean(errors[name])}
          helperText={errors[name]?.type === "maxLength" && `Maximum length exceeded (${maxLength} characters)`}
          inputProps={{
            maxLength: maxLength,
          }}
        />
      )}
    />
  );
};

export default TextInputField;


