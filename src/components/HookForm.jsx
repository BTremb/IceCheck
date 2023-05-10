import React from 'react';
import { useForm } from 'react-hook-form';

const hookForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" {...register('firstName', { required: true })} />
      {errors.firstName && <p>This field is required</p>}

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" {...register('lastName', { required: true })} />
      {errors.lastName && <p>This field is required</p>}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && <p>Please enter a valid email address</p>}

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register('password', { required: true, minLength: 8 })} />
      {errors.password && <p>Password must be at least 8 characters long</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default hookForm;
