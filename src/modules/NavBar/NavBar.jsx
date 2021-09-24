import React from 'react';

const NavBar = (props) => {
    return (
        <div>
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
        </div>
    );
}

export default NavBar;