import React from 'react'
import ProfilePic from './landing_components/ProfilePic'
import ProfileSummary from './landing_components/ProfileSummary'
import ProfileLinks from './landing_components/ProfileLinks'; 
import TechSkills from './landing_components/TechSkills';

export default function Main() {
    return (
        <div id="main-container">
            {<ProfilePic />}
            {<ProfileSummary />}
            {<ProfileLinks /> }
            {<TechSkills />}
        </div>
    )
}

