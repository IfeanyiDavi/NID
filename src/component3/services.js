import React from 'react';
import "./services.css"

export default function Services() {
    return (
        <div className="services_component">
            <div>
              <label><b>Our Services</b></label>
            </div>
            <div className="services_component2">
                    <div className="web_design">
                        <span>Web Development</span>
                        <div>We offer best web design and development to your exact need</div>
                    </div>
                    <div className="web_design">
                        <span>Mobile App Design</span>
                        <div>Our team creates a clean  mobile design </div>
                    </div>
                    <div className="web_design">
                        <span>Graphics Design</span>
                        <div>We offer web design and development to your exact need</div>
                    </div>
            </div>
        </div>
    )
}
