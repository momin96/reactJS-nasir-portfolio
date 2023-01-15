import React from 'react';
import './ProfileLinks.css';

const ProfileLinks = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-links'>
                    <a href='https://github.com/momin96' target='_blank' rel='noopener noreferrer'>GitHub</a>
                    <a href='https://www.linkedin.com/in/nasirahmed-momin-21102872' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
                    <a href='https://stackoverflow.com/users/4260623/nasir' target='_blank' rel='noopener noreferrer'>Stack Overflow</a>
                    <a href='mailto:momin96@gmail.com'>Email</a>
                </div>
               
            </div>
        </footer>
    );
}

export default ProfileLinks;