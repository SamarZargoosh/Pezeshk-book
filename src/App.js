import React from 'react';
import Api from './components/Api';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Api />
        </div>
    );
};

export default App;