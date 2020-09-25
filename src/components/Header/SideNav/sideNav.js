import React from 'react';
import Sidenav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items'

const SideNavigation = (props) => {
    return (
        <div>
            <Sidenav 
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background: '#242424',
                    maxWidth: '220px'

                }}>
                <SideNavItems{...props}/>
                
            </Sidenav>
        </div>
    );
};

export default SideNavigation;