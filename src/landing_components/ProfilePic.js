import React from 'react';
import './ProfilePic.css'

const ProfilePic = () => {
    return (
        <img className='profile-pic' src={process.env.PUBLIC_URL + '/assets/images/profilepic.png'} alt='Profile Pic'/>
    );
}

export default ProfilePic;