import React from 'react';
import { data } from '../data/data';
import "../public/header1.css"

export default function Header1() {
    return (
        <ul className="header1_social_icon">
           <div className="list_content"> {Object.values(data).map(data =>
                <li className="sub_header"><a href={data.link}>{data.icon}</a></li>
            )}
            </div>
            <span>LOGO</span>
        </ul>
    )
}
