import React from 'react';
import {Link} from 'react-router-dom';
import style from './button.module.css';

const Button = (props) => {
    let template=null;

    switch(props.type){
        case('loadmore'):
            template=(
                <div className={style.blue_btn}
                     onClick={props.loadMore}>  
                    {props.cta}
                </div>
            )
            break;
        case('linkTo'):
            template=(
                <div>
                    <Link to={props.linkTo}
                    className={style.blue_btn}>
                    {props.cta}
                    </Link>
                </div>
                
            )
            break;
        default:
            template=null;
    }

    return template;
};

export default Button;