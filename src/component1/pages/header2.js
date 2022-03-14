import React, {useState} from 'react';
import {AiOutlineHome, GiHamburgerMenu, ImCross} from "react-icons/all";
import {data, menuItem} from "../data/data"

export default function Header2() {
    const [Menu, setMenu] = useState(false);
     const menu_item = ()=>{
         setMenu(prev=>!prev);
         console.log(Menu)
     }
    
    return (
        <div>
            <ul className="header2_component">
                <li style={{fontSize : "1.8em"}}><a href="#"><AiOutlineHome/></a></li>
                {menuItem.map((data,key)=>{
                    return(
                        <li key={key}><a href={data.link}>{data.title}</a></li>
                    )
                })}
            </ul>
            <div className="mobile_responsive_component">
                <span className="logo">LOGO</span>

                <span className="menuItem"
                      onClick={menu_item}
                > 
                    {!Menu?<GiHamburgerMenu/>:<ImCross/>}
                </span>

               <ul className="menuBar_items" style={!Menu? {display :"none"} : {display : "block"}}> 
                    {menuItem.map((data,key)=>{
                        return(
                            <li key={key}><a href={data.link}>{data.title}</a></li>
                        )
                    })}

               </ul>

            </div>
        </div>
    )
}
