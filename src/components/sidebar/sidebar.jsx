import React, { Component } from 'react';
import './sidebar.scss';

const SidebarComponent = (props) => {
    return(
        <div className="sidebar">
            {props.children}
        </div>
    );

}

export default SidebarComponent;