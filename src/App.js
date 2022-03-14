import React from 'react';
import Header1 from './component1/pages/header1';
import Header2 from './component1/pages/header2';
import Aside from './component2/pages/aside';
import Aside2 from './component2/pages/aside2';
import Services from './component3/services';
import MainFooter from './component6/footer'
import "./app.css";

function App() {
    
         window.addEventListener("resize", function(){
            console.log(window.innerWidth);
         })
    return (
        <div className="app_component">
            <div className="header_component">
                <Header1/>
                <Header2/>
            </div>
            <div className="section_component">
                <Aside/>
                <Aside2/>
            </div>
            <div className="services">
                <Services/>
            </div> 
            <MainFooter/>
        </div>
    )
}

export default App