import React from 'react';
import style from './sideNav.module.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SideNavItems = (props) => {

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: "Home",
            link: '/'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            text: "News",
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: "Videos",
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: "Sign In",
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: "Sign Out",
            link: '/sign-out'
        }
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type} >
                    <Link to={item.link} onClick={props.onHideNav}>
                        <FontAwesome name={item.icon}  />
                        {item.text}
                    </Link>
                </div>
            )
        })
    }

    return (


        <div>
            {showItems()}
        </div>
    );
};

export default SideNavItems;