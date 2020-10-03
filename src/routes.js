import React from 'react';
import { Switch} from 'react-router-dom';

import Home from './components/Home/home'
import Layout from './hoc/Layout/layout';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import News from './components/Articles/News/news';
import Videos from './components/Home/videos';
import SignIn from './components/Signin/signin';
import Dashboard from './components/Dashboard/dashboard';
import PrivateRoute from './components/AuthRoutes/privateRoutes';
import PublicRoute from './components/AuthRoutes/publicRoutes';

const Routes = (props)=> {
    
        return (
            <Layout user={props.user}>
                <Switch>
                <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
                    <PublicRoute {...props} restricted={false} path="/articles/:id" exact component={NewsArticle}/>
                    <PublicRoute {...props} restricted={false} path="/videos/:id" exact component={VideoArticle}/>
                    <PublicRoute {...props} restricted={false} path="/news" component={News}/>
                    <PublicRoute {...props} restricted={false} path="/videos" component={Videos}/>
                    <PublicRoute {...props} restricted={true} path="/sign-in" exact component = {SignIn}/>
                    <PrivateRoute {...props} path="/dashboard" exact component = {Dashboard}/>
                </Switch>
            </Layout>
            
        );
    }


export default Routes; 