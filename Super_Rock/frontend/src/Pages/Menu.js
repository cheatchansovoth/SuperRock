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
        <div className="main">
        <div className="section-title">
            <h2>
                Menu
            </h2>
            <p>Super rock awesome food all day!!</p>
        </div>
        <div className="menus">
            <div className="menu-column">
                <h4>breakfast</h4>
                <div className="single-menu">
                    <img src={p9} alt=""/>
                    <div className="menu-content">
                        <h5>fried rice <span>$20</span></h5>
                        <p>This Chinese-inspired fried rice recipe is my absolute fave. It’s quick and easy to make, customizable with any of your favorite mix-ins, and so irresistibly delicious.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={th}alt=""/>
                    <div className="menu-content">
                        <h5>Italian noodle <span>$12</span></h5>
                        <p>These easy Italian pasta recipes are some of our most favorite staples. They’re economical, wonderfully delicious and make great weeknight meals perfect for the whole family.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={th1} alt=""/>
                    <div className="menu-content">
                        <h5>kiwi breakfast <span>$30</span></h5>
                        <p>portobello mushroomsa，avocado ,roasted tomatoes ,hashbrown,fried eggs ,sourdough toast.</p>
                    </div>
                </div>
            </div>      
            <div className="menu-column">
                <h4>lunch</h4>
                <div className="single-menu">
                    <img src={p4} alt=""/>
                    <div className="menu-content">
                        <h5>Mapo Tofu <span>$44</span></h5>
                        <p>Mapo Tofu is a popular Chinese dish from Sichuan Province, where spicy food is king and the signature spice of the region––the Sichuan.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={p5} alt=""/>
                    <div className="menu-content">
                        <h5>spicy fish <span>$52</span></h5>
                        <p>Tendre fish fillet poached in seasoned water, then topped with spices, Sichuan boiled fish is tasty, pungent and super addictive.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={p6}alt=""/>
                    <div className="menu-content">
                        <h5>Chinese dumplings <span>$28</span></h5>
                        <p>One of your favorite take out foods, Chinese Dumplings (also commonly known as potstickers), are easy to make and taste much better when you make them homemade!</p>
                    </div>
                </div>
            </div>      
            <div className="menu-column">
                <h4>dinner</h4>
                <div className="single-menu">
                    <img src={p7} alt=""/>
                    <div className="menu-content">
                        <h5>Shaomai <span>$25</span></h5>
                        <p>Shumai is a type of traditional Chinese dumpling. In Cantonese cuisine, it is usually served as a dim sum snack. In addition to accompanying the Chinese diaspora.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={p8} alt=""/>
                    <div className="menu-content">
                        <h5>pork slices <span>$17</span></h5>
                        <p>Crispy, fatty, and very flavorful, these tasty strips are perfect as a first course, or you could try them for breakfast instead of bacon.</p>
                    </div>
                </div>
                <div className="single-menu">
                    <img src={p7} alt=""/>
                    <div className="menu-content">
                        <h5>duck skin rolls <span>$18</span></h5>
                        <p>Place on a medium to high heat and add the duck. When the fat starts to render, remove the duck from the wok with a slotted spoon and wipe the wok clean.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu;