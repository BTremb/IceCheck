import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const SlimTextInputField = ({
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
          InputProps={{
            style: {
              // Customize the input field width
              width: "200px", // Adjust the width as needed
              borderRadius: "2px", // Adjust the borderRadius to match the outline
              margin: "0.5rem", // Add some margin to create space from the map
            },
          }}
          variant="outlined" // Move variant from SlimTextInputField to here
        />
      )}
    />
  );
};

export default SlimTextInputField;

