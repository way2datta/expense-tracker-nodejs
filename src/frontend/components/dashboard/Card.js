import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Card(props) {
    return <div className={props.parentClassName}>
        <div className={`card ${props.cardClassName}`}>
            <Link to={props.linkUrl} className="nav-link">
                {props.linkTitle}
            </Link>
        </div>
    </div>;
}

Card.propTypes = {
    parentClassName: PropTypes.string,
    cardClassName: PropTypes.string,
    linkUrl: PropTypes.string,
    linkTitle: PropTypes.string 
};