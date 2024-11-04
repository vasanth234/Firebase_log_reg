import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import './profile.css'
const Profile = () => {
    const [details, setDetails] = useState(null); // Correct usage of useState

    const fetchUser = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            
            const docRef = doc(db, "Users", user.uid);
            const getDocRef = await getDoc(docRef);
            if (getDocRef.exists()) {
                setDetails(getDocRef.data());
                console.log(getDocRef.data());
            } else {
                console.log('User data not found');
            }
        }); // Closing parenthesis for fetchUser function
    }

    useEffect(() => {
        fetchUser();
    }, []);

   async function handlelog(){
        try{
                await auth.signOut();
                window.location.href='/login'
                console.log("user logout successfully")

        }
        catch(error){
                 console.log("error",error.message)
        }
    }

    return (
        <div className='profile'>
            {details ? (
                <>
                    <h2>Welcome {details.firstName}</h2>
                    <div>
                        <p>Email: {details.email}</p>
                        <p>First Name: {details.firstName}</p>
                        <p>Last Name: {details.lastName}</p>
                    </div>
                    <button  onClick={handlelog} className='btn btn-primary'>Log Out</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Profile;
