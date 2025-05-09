import React from "react";
import NavBar from "../components/navBar/navBar";
import '../pages/css-files/home.css'

function Home() {
    return(
        <div className="home-main-container">
            <NavBar />
            <div id="page-contents">
                <div id="contents-container" className="box">
                    <div id="profile-card" className="box">
                        <p>Adding picture, linkedIn, Github links here soon!</p>
                    </div>
                </div>

                <div id="information" className="flex">
                    <div id="resume" className="box">
                        <h3>Resume:</h3>
                        <a href="https://docs.google.com/document/d/1Ec0_pxhQQk8n2fjsOz10pHX8X7z3Ko8THU183AzZRNs/edit?usp=sharing">
                            <p>
                                Comp-Sci version
                            </p>
                        </a>
                        <p> | </p>
                        <a>
                            <p>
                                Data Science version (work in progress)
                            </p>
                        </a>
                    </div>
                    <div id="about-me" className="box">
                        <p>
                            My name is Nicholas Lodge, and I'm a 21 year old computer science and data science dual major graduand at Siena College in Albany, New York.
                            I came into school as a major in actuarial science before realizing that wasn't for me. I then changed into sports communications
                            as I love sports, but quickly realized that even moreso wasn't for me. I ended up trying data science and computer science collectively in the spring of my sophomore year,
                            and quickly found that I love the field. I enjoy learning to code and am very eager to learn more as I have tons of room for growth and improvement.
                            
                        </p>
                    </div>
                    <div id="interests" className="box">
                        <p>
                            Some of my interests and hobbies include sports, video games, and music. I'm a big NBA fan and love the Boston Celtics. I also like soccer and I support AC Milan. 
                            I like to play a variety of video games such as Minecraft, Pokemon, FIFA, and a further variety of RPG's. Lastly, I enjoy listening to music all the time for any given reason, and my favorite artist is Mac Miller.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;