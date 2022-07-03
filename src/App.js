import React from 'react';
import { Route } from 'react-router-dom';
import Firstpost from './components/Firstpost';
import Api from './components/Api';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div>
                <Route exact path="/" component={Api} />
                <Route path="/post1" component={Firstpost} />
            </div>    
        </div>
    );
};

export default App;