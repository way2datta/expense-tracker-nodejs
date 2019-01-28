import React from 'react';
import { Link } from 'react-router-dom';
export function Card(props) {
    return <div className={props.parentClassName}>
        <div className={`card ${props.backgroundColor}`}>
            <Link to={props.linkUrl} className="nav-link">
                {props.linkTitle}
            </Link>
        </div>
    </div>;
}
