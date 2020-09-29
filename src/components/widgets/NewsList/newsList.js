import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import style from './newsList.module.css';
import Button from '../Button/button';
import CardInfo from '../CardInfo/cardInfo';
import {firebase, firebaseTeams, firebaseArticles, firebaseLooper} from '../../../firebase';

class NewsList extends Component {
    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start+this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) =>{
        if(this.state.teams.length<1){
            firebaseTeams.once('value').then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })
            // axios.get(`${URL}/teams`)
            // .then(response=>{
            //     this.setState({
            //         teams:response.data
            //     })
            // })
        }

        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot)=>{
            const articles = firebaseLooper(snapshot);
            this.setState({
                items:[...this.state.items,...articles],start,end
            })
        }).catch(e=>{
            console.log(e);
        })

        // axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        // .then(response=>{
        //     this.setState({
        //         items:[...this.state.items,...response.data],start,end
        //     })
        // })
    }

    loadMore = () =>{
        let end = this.state.end + 3;
        this.request(this.state.end+1, end);
    }

    renderNews = (type) =>{
        let template = null;

        switch(type){
            case('card'):
                template = this.state.items.map((item,i) =>(
                    <CSSTransition
                        classNames={{
                            enter:style.newslist_wrapper,
                            enterActive:style.newslist_wrapper_enter
                            
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={style.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                    
                )
                )
                break;
            case('cardWithImages'):
            template = this.state.items.map((item,i) =>(
                <CSSTransition
                    classNames={{
                        enter:style.newslist_wrapper,
                        enterActive:style.newslist_wrapper_enter
                        
                    }}
                    timeout={500}
                    key={i}
                >
                    <Link to={`/articles/${item.id}`}>
                    
                        <div className={style.newslist_item}>
                            <div className={style.left} style={{background: `url(/images/articles/${item.image}`}}>
                                <div></div>
                            </div>
                            <div className={style.right}>
                                
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                
                            </div>
                            
                        </div>
                    
                    </Link>
                </CSSTransition>
                
            )
            )
                break;
            default:
                template=null;
        }

        return template;
            
    }

    renderButton = () =>{
        
        return this.props.loadmore ? 
        <Button type="loadmore" cta="Load More News" loadMore={()=>this.loadMore()}/> : 
        <Button type="linkTo" cta="More News" linkTo="/news"/>
    }

    render() {
        return (
            <div>
                <TransitionGroup component="div" className="list">
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                {this.renderButton()}
                
                
                
            </div>
        );
    }
}

export default NewsList;