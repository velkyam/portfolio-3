import React from 'react';
import "../components/style.css";
import ponder from './assets/images/ponder.png'
import excuse from './assets/images/excuse.png'
import team from './assets/images/team.png'
import weather from './assets/images/weather.png'
import dayplanner from './assets/images/dayplanner.png'

export default function Portfolio() {

    return (
        <div className='pagecontainer'>
            <h1 className='bigtitle'>Portfolio</h1>
<section className='container'>
<div className='block'>
    <h2>Ponder: Social Media</h2>
    <p> Ponder is a randomized social forum, whereby the user is able to 'Go Fish' from a pool of thoughts
        collected from all around the world, or post a thought themselves. The user has the option to create
        an account and post their thoughts, or 'Ponders,' under their username, but they can also elect to
        post anonymously. No account is necessary to use Ponder--anyone can join the conversation. However,
        only users with an account will be able to see a history of all their posts, and users posting
        anonymously will have a profanity filter applied to help curb toxicity.

        <a href="https://pacific-ravine-12135.herokuapp.com/" target="blank"> Deployed Application</a>
        <br></br>
           <a href="https://github.com/Chrisle206/ponder" target="blank">Github</a>
    </p>
</div>
<a href="https://pacific-ravine-12135.herokuapp.com/" target="blank"> <img src={ponder}
        alt='ponder_home_page'/></a>
</section>
<section className='container'>
<div className='block'>
    <h2>Excuse Generator</h2>
    <p> The goal of this app was to generate random exucses that was able to be preformatted for you in a
        email format or a SMS format. You are also capable of looking up synonyms to a word you want to
        change in the text. <a href="https://velkyam.github.io/excuse-generator/#team-8" target="blank"> Deployed Application</a>
        <br></br>
           <a href="https://github.com/velkyam/excuse-generator" target="blank">Github</a></p>
</div>
<a href="https://velkyam.github.io/excuse-generator/#team-8" target="blank"> <img
        src={excuse} alt='excuse-generator-screenshot'/></a>
</section>
<section className='container'>
<div className='block'>
    <h2>Team Profile Generator</h2>
    <p> The goal of this project was to generate a webpage with information about my team. Each team member
        entered into the application has its own employee card with name, id, role, email, and (github,
        school, or office number), as well as appropriate icon. The application was built through test
        driven development and object oriented programming. <a
            href="https://www.youtube.com/watch?v=LHDwnzxTw0Y" target="blank">Video Walkthrough</a>
            <br></br>
           <a href="https://github.com/velkyam/team-profiles" target="blank">Github</a>
            </p>
</div>
<a href="https://www.youtube.com/watch?v=LHDwnzxTw0Y" target="blank"> <img src={team}
        alt='team-profiles-screenshot'/></a>
</section>
<section className='container'>
<div className='block'>
    <h2>Weather Application</h2>
    <p> The goal of this project was to create a weather web application. The website was build to provide
        current weather and near future weather forecast at any user input city. The app provides icon,
        temperature, wind, and humidity for today and 5 other days. Furthermore, it stores user input cities
        in local storage to make cities quickly accessible even if the site closes. <a
            href="https://velkyam.github.io/weather-app" target="blank"> Deployed Application</a>
<br></br>
           <a href=" https://github.com/velkyam/weather-app" target="blank">Github</a>
           
            </p>
    <a href="https://velkyam.github.io/weather-app" target="blank"><img src={weather}
            alt='weather-app-screenshot'/></a>
</div>
</section>
<section className='container'>
<div className='block'>
    <h2>Day Planner</h2>
    <p> The goal of this project was to develop a day planner site for an emplyee during regular working
        hours. The application can store user's events in and color coordinates them based on the current
        time. Present time slot is colored in red, past in gray, and future in green. The planner stores
        data in local storage, therefore stored events will appear even after closing. Each even has
        corresponding save button with a checkmark on it. <a
            href="https://velkyam.github.io/third-party-api-scheduler/" target="blank"> Deployed
            Application</a>
            <br></br>
           <a href=" https://github.com/velkyam/third-party-api-scheduler" target="blank">Github</a></p>
            
</div>
<a href="https://velkyam.github.io/third-party-api-scheduler/" target="blank"><img
        src={dayplanner} alt='dayplan-app-screenshot'/></a>
</section>
</div>
);
        }