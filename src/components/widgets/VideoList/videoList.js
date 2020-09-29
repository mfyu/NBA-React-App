import React, { Component } from 'react';
import style from './videoList.module.css';
import {firebase, firebaseTeams, firebaseVideos, firebaseLooper} from '../../../firebase';
import Button from '../Button/button';
import CardInfo from '../CardInfo/cardInfo';
import VideosTemplate from './videosTemplate';

class VideoList extends Component {
    state={
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start+this.props.amount,
        amount: this.props.amount
    }

    renderTitle = ()=>{
        return this.props.title ? 
            <h3><strong>NBA</strong> Videos</h3>
            : null
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request = (start, end) =>{
        if(this.state.teams.length<1){
            firebaseTeams.once('value').then((snapshot)=>{
                const teams = firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })
           
        }

        firebaseVideos.orderByChild('id').startAt(start).endAt(end).once('value')
        .then((snapshot)=>{
            const videos = firebaseLooper(snapshot);
            this.setState({
                videos:[...this.state.videos,...videos],start,end
            })
        }).catch(e=>{
            console.log(e);
        })

        
    }

    renderVideos = () =>{
       
        let template=null;

        switch(this.props.type){
            case('card'):  
                
                template=<VideosTemplate data={this.state.videos} teams={this.state.teams}/>
                break;
            default:
                template=null;
        }
        return template;
    }

    loadMore = () =>{
        console.log(this.props);
        let end = this.state.end + this.state.amount;
        this.request(this.state.end +1, end);
    }

    renderButton = () =>{
        
        return this.props.loadmore ? 
        <Button type="loadmore" cta="Load More Videos" loadMore={()=>this.loadMore()}/> : 
        <Button type="linkTo" cta="More Videos" linkTo="/videos"/>
    }

    render() {
        
        return (
            <div className={style.videoList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        );
    }
}

export default VideoList;