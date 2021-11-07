import React from 'react'
import profile from '../src/imgresources/profilepic.png'

export default function Main() {
    return (
        <div>
            {showProfilePicture()}
            {showDetailContent()}
            {showFooter()}
        </div>
    )
}

// create a react component to show a responsive image in center of the screen with 200px width and height 200px
function showProfilePicture() {
    return (
        <div>
            <img alt="Profile Pic" src={profile} width="200" height="200" />
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

/**
 * Create a react component which displays lorem ipsum text in center of the screen.
 */
function showDetailContent() {
    return (
        <div>
            <header className="name-center-header" >
                NASIR AHMED MOMIN
            </header>
            <div className="content-center-text">
                Hello World, I am a happy father of two very cute girls, both of them are source of my focus towards professional career.
                <br />
                Speaking of my expertise, I have more than 7 years of experience in Software design, development, testing, deployment and maintenance.
                <br />
                Mainly I worked on Mobile Applications with iOS, Android & Flutter, with backend design & solution using NodeJS.
            </div>
        </div>
    );
}