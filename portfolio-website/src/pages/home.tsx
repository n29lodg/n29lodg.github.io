import React from "react";
import NavBar from "../components/navBar/navBar";
import '../pages/css-files/home.css'

function Home() {
    return(
        <div className="home-main-container">
            <NavBar />
            <div className="page-contents">
                <div className="contents-container">
                    <div id="profile-card" className="box">

                    </div>
                </div>

                <div id="information">
                    <div id="about-me" className="box">
                        <p>My name is Nicholas Lodge, and I'm a 21 year old computer science and data science dual major graduand at Siena College in Albany, New York.
                            I came into school as a major in actuarial science before realizing that wasn't for me. I then changed into sports communications
                            as I love sports, but quickly realized that even moreso wasn't for me. I ended up trying data science and computer science collectively in the spring of my sophomore year,
                            and quickly found that I love the field. I enjoy learning to code and am very eager to learn more as I have tons of room for growth and improvement.
                            I'm newer to the field compared to my peers as I didn't write my first lines of code until I was nearly 20 years old, but I share an equal desire to build software that helps people, and to make an impact in some way.
                        </p>
                    </div>
                    <div className="box">
                        <p>
                            Some of my interests and hobbies include
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;