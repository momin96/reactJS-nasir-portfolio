import React from 'react'
import './ProfileSummary.css';

const ProfileSummary = () => {
    return (
        <div>
            <header className="name-center-header" >
                NASIR AHMED MOMIN
            </header>
            <div id="experience">
                <p className='experience-text'>I am a mobile app developer with 8+ years of experience in developing native iOS, Android and Flutter applications and can integrate them with various back-end services and APIs.</p>
                <p className='experience-text'>I have expertise in developing high-quality, high-performance apps that are optimized for usability and user experience.</p>
                <p className='experience-text'>I am proficient in Swift, Objective-C, Java, Kotlin and Dart languages.</p>
                <p className='experience-text'>I can help you design and develop mobile apps tailored to your specific needs and requirements.</p>
            </div>
        </div>
    );
}

export default ProfileSummary;