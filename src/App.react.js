import React, {Component} from 'react';
import Header from './Header.react';
import Footer from './Footer.react';
import Homepage from './modules/homepage/Homepage.react';
import {Route} from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header />
                <Route exact path="/" component={Homepage} />
            <Footer />
        </div>
    );
};
