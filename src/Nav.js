import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents  from "./NavContents";
import HomeIcon from '@material-ui/icons/Home';


function Nav(){
    return(
        <div className="nav_container">
            <div className="nav_left">
                <img src="https://th.bing.com/th/id/OIP.7y88DqLREW8ApbxWuMBmzgHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=" "></img>
                <div className="search_box">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="nav_right">
                <NavContents Icon={HomeIcon} title="Home"/>
                <NavContents Icon={HomeIcon} title="Home"/>
                <NavContents Icon={HomeIcon} title="Home"/>
                <NavContents Icon={HomeIcon} title="Home"/>
                <NavContents Icon={HomeIcon} title="Home"/>


            </div>
        </div>
        
    )
}

export default Nav;