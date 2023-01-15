import React from "react";
import './TechSkills.css'

const TechSkills = () => {
    return (
        <div>
            <header id="skills-header">
                Tech Skills
            </header>
            <div className="container">
                <p className="tech-skills-left">Platform: </p>
                <p className="tech-skills-right">iOS, Android, Flutter, Web (ReactJS)</p>

                <p className="tech-skills-left">Languages: </p>
                <p className="tech-skills-right">Swift, Kotlin, Java, Dart, Objective-C, JavaScript</p>

                <p className="tech-skills-left">VCS: </p>
                <p className="tech-skills-right"> Github, GitLab, BitButcket</p>

                <p className="tech-skills-left">Database: </p>
                <p className="tech-skills-right"> Firebase RTDB, Firestore, CouchBase lite, CoreData SQLite, MySQL</p>

                <p className="tech-skills-left">IDE: </p>
                <p className="tech-skills-right"> Xcode, Android Studio, VS Code</p>

                <p className="tech-skills-left">AI Tools: </p>
                <p className="tech-skills-right"> Github Copilot, ChatGPT, Dall-E</p>
            </div>
        </div>
    );
}


export default TechSkills;