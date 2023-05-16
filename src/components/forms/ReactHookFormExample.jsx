import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TextInputField from './TextInputField';
import { Box, Button, Card, Typography } from '@mui/material';

const cardStyle = {
    padding: '1rem',
    margin: '1rem',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

const ReactHookFormExample = () =>  {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [dataOutput, setDataOutput] = useState();
  
  const onSubmit = (data) => {
    console.log({data})
    setDataOutput(JSON.stringify(data, null, 2))
  }

  return (
    <Card sx={cardStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInputField name="email" label="Email" control={control} errors={errors} required />
            <TextInputField name="password" label="Password" control={control} errors={errors} required />
            <TextInputField name="firstName" label="First Name" control={control} errors={errors} />
            <TextInputField name="lastName" label="Last Name" control={control} errors={errors} />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
        <Box>
            <Typography variant="h6">{dataOutput}</Typography>
        </Box>
    </Card>
  );
}
export default ReactHookFormExample;
