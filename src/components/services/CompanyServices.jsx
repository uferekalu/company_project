import React from 'react'
import { NavLink } from 'react-router-dom'

function CompanyServices(props) {
    const { className } = props;
    return (
        <div className={`box ${className}`}>
            <img src={props.image} alt={props.imageName}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <NavLink to={props.serviceLink} className="btn">learn more</NavLink>
        </div>
    )
}

export default CompanyServices