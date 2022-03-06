import React from 'react';
import "../components/style.css";
import profile from './assets/images/DatNguyen.jpg'
import { Github, Linkedin, Inbox, Person } from 'react-bootstrap-icons';


export default function Nav() {

return (
<section className='aboutcontainer'>
            <div className='containerrow'>
                <img src={profile} alt="profile_picture" className='profile'/>
                <div className='block'>
                    <h2>About Me</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ea qui assumenda quis cupiditate
                        quasi facilis doloremque voluptatibus expedita sed voluptatem quo labore, fuga ex dolorum ab
                        magni! Maxime, culpa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae quia
                        et sunt sapiente consectetur veritatis numquam harum in porro exercitationem, pariatur cum fuga
                        laudantium esse? Impedit totam earum ad.</p>
                </div>
            </div>
            <div className='contact'>
                <a href="https://github.com/velkyam" target="blank" className='button'> <Github/> Github</a>
                <a href="https://www.linkedin.com/in/dat-tien-nguyen-42746a105" target="blank" className='button'><Linkedin/> Linkedin</a>
                <a href="mailto:dat.nguyen97@outlook.com" className='button'><Inbox/> Email</a>
                <a href="https://www.linkedin.com/in/dat-tien-nguyen-42746a105 " target="blank" className='button'><Person/> Resume</a>
            </div>
        </section>
          );
        }