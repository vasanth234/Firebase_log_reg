import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import React from 'react';
import { useState ,useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading ,setLoading]=useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            setLoading(false); // After 4000ms (4 seconds), set loading to false
        }, 4000);

        return () => clearTimeout(id); // Cleanup function to clear timeout on component unmount or re-render
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when form is submitted
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully');
            toast.success('User logged in successfully', {
                position: 'top-center',
            });
            // Redirect or update state upon successful login
            // Example redirect:
            window.location.href = '/profile';
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: 'bottom-center',
            });
        } finally {
            setLoading(false); // Reset loading state after login attempt (whether success or failure)
        }
    };


    if(loading) return <h2>Loading please wait........</h2>

    return (
        <div className='log-container'>
          <div className='log-box'>
            <form onSubmit={handleSubmit}>
                <h2>Login Form</h2>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className="forgot-password text-right">
  <a href="/forgot-password">Forgot Password?</a>
</p>
                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
                <p className="forgot-password text-right">New user <a href="/register">Register Here</a></p>
            </form>
            </div>
        </div>
    );
};

export default Login;
