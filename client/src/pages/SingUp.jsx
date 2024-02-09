import React, { useState } from 'react';
import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

export default function SignUp() {
  const [formData, setFormData] = useState({});
const [errorMessage, seterrorMessage] = useState(null);
const[loading, setloading] = useState(false);
  const textHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const formSubmit = async (e) => {
    e.preventDefault();
if(!formData.username || !formData.email || !formData.password){
  return seterrorMessage('All Fields are required')
}
    const url = 'http://localhost:3002/api/user/singup';

    try {
      const response = await axios.post(url, formData);
      console.log(response);
      if(response.success === false){
        return seterrorMessage(response.message)
      }
    } catch (error) {
     // console.log(error);
    }
  };

  return (
    <div className='min-h-screen mt-6 flex flex-col md:flex-row'>
      <div className='flex p-3 mx-auto flex-col md:flex-row md:items-center'>
        <Link to="/">
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500  object-center '>Sandy's</span>
          Blog
        </Link>
      </div>

      <div className='flex mx-auto flex-col md:items-center md:max-w-3xl'>
        <div className='w-full'>
          <form className='flex max-w-lg flex-col gap-4' onSubmit={formSubmit}>
            <div>
              <Label value='Username' />
              <TextInput
                placeholder='username'
                type='text'
                onChange={textHandler}
                id='username'
              />
            </div>
            <div>
              <Label value='Email' />
              <TextInput
                placeholder='email@example.com'
                type='text'
                onChange={textHandler}
                id='email'
              />
            </div>
            <div>
              <Label value='Password' />
              <TextInput
                placeholder='************'
                type='password'
                onChange={textHandler}
                id='password'
              />
            </div>

            <Button gradientDuoTone={'purpleToPink'} type='submit'>
              Signup
            </Button>
          </form>

          <div className='mt-2 flex gap-2 text-sm '>
            <span>Have an Account ? </span>
            <Link to='/signin'>Sign in</Link>
          </div>
        </div>
   {  errorMessage &&(
    <Alert>
          {errorMessage}
          </Alert>
   )}
      </div>
    </div>
  );
}
