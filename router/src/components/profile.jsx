import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = (props) => {
    const navigate = useNavigate();
          <>
          <h1>Profile</h1>
          <button onClick={() => {
            navigate('/');
          }}>Go to Profile</button>
          </>  
    };

export default Profile;