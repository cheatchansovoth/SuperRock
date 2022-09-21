import React from 'react';
import th from '../asset/th.jpg';
import th1 from '../asset/th (1).jpg'
import th2 from '../asset/th (2).jpg'
import p4 from '../asset/OIF (4).jpg'
import p5 from '../asset/OIF (5).jpg'
import p6 from '../asset/OIF (6).jpg'
import p7 from '../asset/OIF (7).jpg'
import p8 from '../asset/OIF (8).jpg'
import p9 from '../asset/OIF.jpg'
import ('./style.css');
import ('./responsive.css');



const Menu=()=>
{
    return (
        <div>
                <div class="main">
        <div class="section-title">
            <h2>
                Test
            </h2>
            <br></br>
            <h2>
                Menu
            </h2>
            <p>Super rock awsome food all day!!</p>
        </div>
        <div class="menus">
            <div class="menu-column">
                <h4>breakfast</h4>
                <div class="single-menu">
                    <img src={th} alt="OIF"/>
                    <div class="menu-content">
                        <h5>food title <span>$20</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={th1} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$12</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={th2} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$30</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>      
            <div class="menu-column">
                <h4>lunch</h4>
                <div class="single-menu">
                    <img src={p4} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$44</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={p5} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$52</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={p6} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$28</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>      
            <div class="menu-column">
                <h4>dinner</h4>
                <div class="single-menu">
                    <img src={p7}  alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$25</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={p8} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$17</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="single-menu">
                    <img src={p9} alt="OIF" />
                    <div class="menu-content">
                        <h5>food title <span>$18</span></h5>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Menu;