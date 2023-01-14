import React from 'react'

export default function Main() {
    return (
        <div>
            {ProfilePic()}
            {Experience()}
            {showFooter()}
        </div>
    )
}

const ProfilePic = () => {
    return (
        <img className='profile-pic' src={process.env.PUBLIC_URL + '/assets/images/profilepic.png'} alt='Profile Pic'/>
    );
}

const Experience = () => {
    return (
        <div className="experience">
            <p>I am a mobile app developer with 8+ years of experience in developing native iOS, Android and Flutter applications. I have expertise in developing high-quality, high-performance apps that are optimized for usability and user experience. I am proficient in Swift, Objective-C, Java, Kotlin and Flutter. I can develop apps for both Android and iOS platforms, and can integrate them with various back-end services and APIs. I am confident that I can help you design and develop mobile apps tailored to your specific needs and requirements.</p>
        </div>
    );
}


// create a react component which shows a footer with links of Github, LinkedIn, StackOverflow, Email & properly provide space between them.

function showFooter() {
    return (
        <div>
            <div className="footer-attached-bottom">
                <a className="footer-links-space" href="https://github.com/momin96" target="_blank" rel="noreferrer">Github</a>
                <a className="footer-links-space" href="https://www.linkedin.com/in/nasirahmed-momin-21102872" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="footer-links-space" href="https://stackoverflow.com/users/4260623/nasir" target="_blank" rel="noreferrer">StackOverflow</a>
                <a className="footer-links-space" href="mailto:momin96@gmail.com" target="_blank" rel="noreferrer">Email</a>
            </div>
            <p className="footer-app-info">
                This site is made with ReactJS & Github Copilot.
            </p>
        </div>
    );
}