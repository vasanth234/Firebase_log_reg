import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'; // Import CSS file for styling
import Wikipedia from './Wikipedia'

const Register = () => {
      const navigate=useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userDetails = await createUserWithEmailAndPassword(auth, email, password);
            const user = userDetails.user;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    firstName: firstName,
                    lastName: lastName,
                  
                });
                console.log('User registered successfully');
                toast.success('User registered successfully', {
                    position: 'top-center',
                });
            }
navigate('Wikipedia')
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-center',
            });
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <form onSubmit={handleRegister}>
                    <h2>Sign Up</h2>
                    <div className='mb-3'>
                        <label>First Name</label>
                        <input type='text' placeholder='Enter first name' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label>Last Name</label>
                        <input type='text' placeholder='Enter last name' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Sign Up</button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <a href="/login">Login?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
