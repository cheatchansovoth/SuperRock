import React from 'react';
import photo from '../asset/superrock.png';
import './About.css';

const About=()=>
{

    return (
        <div>
            <section id="ourStory">
            <div class="container">
            <div class="ourStory">
                <div class="ourStory__img">
                    <img src={photo} alt=""/>
                </div>
                <div class="ourStory__info">
                    <h3 class="ourStory__title">
                        Super Rock Story
                    </h3>
                    <p class="ourStory__subtitle">
                        start at 2022 located in Auckland CBD
                    </p>
                    <p class="ourStorytext">
                         Welcome to Super Rock resturant. We take pride
                        in delivering warm and friendly service and creating
                        mouth-watering culinary delights for all. We'll ensure 
                        you have a excellent experience to remember.
                        <br/>
                        All of our menu items are inspired by SiChuan cuisine and have been created by our head chef Kenny after studying authentic SiChuan cuisine in China. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from.
                    </p>
                </div>
            </div>
            </div>
            </section>


        </div>
    );
}
export default About;