import React from 'react';
import {data, menuItem} from "../component1/data/data";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer_component">
            <span>is a web design company in Nigeria that offers Web design creation, App design and Graphics design </span>
            <div className="footer_social_media_icon">
                <ul>
                    <span> Join us On</span>
                    {Object.values(data).map(data=>{
                        return(
                            <li><a href={data.link}>{data.icon}</a></li>
                        ) 
                    })}
                </ul>
                    <div className="header_items">
                        {menuItem.map((data,key)=>{
                            return(
                                <span key={key}>{data.title}</span>
                            )
                        })}
                    </div>
            </div>
            <div>
                <label><b>Contact us</b></label>
                <span>engineerdavid04@yahoo.com</span>
                <span>08130759887</span>
                <span>08024818416</span>
            </div>
            <div>
                <span>Copyright @copy 2023 | Powered by </span>
            </div>

        </div>
    )
}
