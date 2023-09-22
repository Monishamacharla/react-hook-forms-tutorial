 import React from 'react'
 import {useForm} from 'react-hook-form'
 import options from './optionsList'; 
 export const RhsForm = () => {


  const form = useForm<FormData>();
  
  interface FormData {
    username: string;
    email: string;
    fruit: string;
  }
const {register, handleSubmit, formState: { errors }} = form;
 const onSubmit = (data: any) => {
  console.log('Form data:', data);
}

const sortedOptions = options.slice().sort();  

    return (
      <div>
        <h1>Form</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register('username', { required: 'Username is required',pattern: {
                value: /^[a-zA-Z]{5,}$/,  // At least 8 letters (more than 7)
                message: 'Username should have more than 7 letters'
              } })} /> 
              
              {errors.username && <p>{errors.username.message}</p>}
  
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}/>
        
          {errors.email && <p>{errors.email.message}</p>}

          <label htmlFor="fruit">Select a fruit:</label>
        <select id="fruit" {...register('fruit')}>
          {sortedOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

       <div>
            
            <button>Submit</button>

       </div>
       
        </form>
      </div>
    );
  };

 
 