import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/home'
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import News from './components/Articles/News/news';
import Videos from './components/Home/videos';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                    <Route path="/news" component={News}/>
                    <Route path="/videos" component={Videos}/>
                </Switch>
            </Layout>
            
        );
    }
}

export default Routes;