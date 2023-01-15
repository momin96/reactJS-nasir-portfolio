import React from 'react'
import Footer from './landing_components/Footer'; 
import ProfilePic from './landing_components/ProfilePic'
import Experience from './landing_components/Experience'

export default function Main() {
    return (
        <div id="main-container">
            {<ProfilePic />}
            {<Experience />}
            {<Footer /> }
        </div>
    )
}

