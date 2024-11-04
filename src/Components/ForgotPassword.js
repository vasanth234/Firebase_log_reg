// ForgotPassword.js

import React, { useState } from 'react';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import './forgot.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      toast.success('Password reset email sent successfully', {
        position: 'top-center',
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: 'bottom-center',
      });
    }
  };

  return (
    <div className='forgot'>
        <div className='contain-for'>
      <h2 style={{color:'pink'}}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Enter email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>
            Reset Password
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

