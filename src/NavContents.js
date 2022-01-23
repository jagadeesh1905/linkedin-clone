import React from 'react';
import './NavContents.css'

function NavContents({Icon,title}){
    return(<div className='navContents_container'>
        {Icon && <Icon/>}
        <h3>{title}</h3>
        </div>);

}
export default NavContents;