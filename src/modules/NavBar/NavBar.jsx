import React from 'react';
import {Link} from 'react-router';

const NavBar = (props) => {
    return (
        <nav>
            Its navbar!-
            <button
             className="get-btn"
             onClick = {props.gettopNews}
             >
                Top stories
            </button>
            <button
             className="get-btn"
             onClick = {props.getNews}
             >
                New stories
            </button >
        </nav>
    );
}

export default NavBar;