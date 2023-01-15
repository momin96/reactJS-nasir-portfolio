import react from "react";
import './ProfileBlogs.css'

const ProfileBlogs = () => {
    return (
        <div>
            <header className="blogs-header">
                Tech Articles
            </header>
            <div className="blogs-links-container">
                <div >
                    <a className="blogs-link" href='https://medium.com/@nasirahmedmomin/capture-memory-leak-with-xctest-9b763d042f68' target='_blank' rel='noopener noreferrer'>Capture Memory Leak with XCTest</a>

                    <a className="blogs-link" href='https://towardsdev.com/swift-concurrency-dispatch-semaphore-d642d64e526e' target='_blank' rel='noopener noreferrer'>Swift Concurrency: Dispatch Semaphore</a>

                    <a className="blogs-link" href='https://medium.com/@nasirahmedmomin/integrate-google-signin-in-swiftui-ios-b227f5b243b2' target='_blank' rel='noopener noreferrer'>Integrate Google Sign In in SwiftUI (iOS)</a>

                    <a className="blogs-link" href='https://medium.com/@nasirahmedmomin/swiftui-uialertcontroller-with-textfield-inside-it-ae3c979e8e5b' target='_blank' rel='noopener noreferrer'>SwiftUI: UIAlertController with TextField inside it</a>

                    <a className="blogs-link" href='https://medium.com/@nasirahmedmomin/content-hugging-vs-content-compression-resistance-57d4b5d2d015' target='_blank' rel='noopener noreferrer'>Content Hugging vs Content compression resistance</a>

                    <a className="blogs-link" href='https://dev.to/momin96/linked-list-implementation-in-swift-6lc' target='_blank' rel='noopener noreferrer'>Linked list implementation in Swift</a>
                </div>
            </div>
        </div>
    );
}

export default ProfileBlogs;