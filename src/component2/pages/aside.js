import React from 'react';
import {Button} from 'react-bootstrap';
import  "../public/section.css"

export default function Aside() {
    return (
        <div className="aside_component">
            <span>Start a Project</span>
            <span className="divider"></span>

            <form>
                <div>
                    <input type="checkbox"/>
                    <label>Web Design & Development </label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Blog Website</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>E-Commerce</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Mobile App Design</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label>Graphic Design</label>
                </div>

                <div className="aside_submit_button"><Button>Submit</Button></div>
            </form>
        </div>
    )
}
