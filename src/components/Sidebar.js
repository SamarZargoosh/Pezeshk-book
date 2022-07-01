import React from 'react';
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <h1>Pezeshkbook</h1>
            <p>I'm a simple responsive blog template. Easily add new blog posts using the Webflow Editor or customize your layout/design using the Webflow Designer.</p>
            <nav>
                <a>Home</a>
                <a>Blog</a>
                <a>About</a>
                <a>Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;