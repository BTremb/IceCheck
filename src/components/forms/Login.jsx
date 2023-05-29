import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TextInputField from './TextInputField';
import { Box, Button, Card, Typography } from '@mui/material';

const cardStyle = {
    padding: '1rem',
    margin: '1rem',
    marginTop: '1rem',
    marginBottom: '1rem',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
          <Box mb={1.5}>
            <TextInputField name="email" label="Email" control={control} errors={errors} required/>
          </Box> 
          <Box mb={1.5}>
            <TextInputField name="password" label="Password" control={control} errors={errors} required/>
            </Box>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
    </Card>
  )
  
}
export default ReactHookFormExample;
