import React from 'react';
import '../css/home.css';
import WorkEx from './WorkEx';
import projects from '../assets/project-list';

class Home extends React.Component {

    constructor(){
        super()

    }

    changeTheme(){
        let root = document.documentElement;
        root.style.setProperty('--main-background', "#280a2f");
    }

    renderProjects(){
        const projectList = projects;
        
        return projectList.map((item, index) => {
            return (
                <div className="project-row">
                    <div className="project-img">
                        <div className="proj-filter"></div>
                        <div className="proj-design"></div>
                        <img className="site-img" src={require(`../assets/images/${item.img}.png`)} />
                    </div>
                    <div className="project-details">
                        <div>
                            <div className="featured">Featured Project</div>
                            <div className="project-name">{item.name}</div>
                            <div className="project-desc">{item.desc}</div>
                            <div className="project-tech">{item.tech.map(item => <div className="tech-item">{item}</div>)}</div>
                        </div>
                    </div>
                </div>
            )
        })

    }

    render(){
        return (
            <div className="main-container">

                <nav className="nav-container">
                    <div className="logo">
                        <div className="logo-img" onClick={()=> this.changeTheme()}>S</div>
                    </div>

                    <div className="nav-links">
                        <div className="navlink"><div><span className="navlink-sno">01.</span>&nbsp;About</div></div>
                        <div className="navlink"><div><span className="navlink-sno">02.</span>&nbsp;Experience</div></div>
                        <div className="navlink"><div><span className="navlink-sno">03.</span>&nbsp;Projects</div></div>
                        <div className="navlink"><div><span className="navlink-sno">04.</span>&nbsp;Contact</div></div>
                        <a href={require("../assets/sahil_verma_resume.pdf")} className="navlink-resume">Resume</a>
                    </div>
                </nav>

                <div className="left-text">
                    <a href="https://github.com/sahilverma2209" target="_blank" rel="noopener noreferrer" className="social-media-link"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sahil-verma-957130106/" className="social-media-link" ><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/sahilvma/" className="social-media-link"><i className="fab fa-instagram"></i></a>
                    <br/>
                    <hr className="short-line-left"/>
                </div>

                <div className="right-text">
                    <span className="email">sahilverma@nyu.edu</span><hr className="short-line-right"/>
                </div>

                <div className="landing-content-container">
                    <div className="landing-content">
                        <div className="hi">Hi, my name is</div>
                        <div className="name">Sahil Verma.</div>
                        <div className="build">I build things for the web.</div>
                        <div className="bio">
                            I'm a graduate student pursuing Master's in Computer Science from NYU. 
                            I've been building for the web for the past 4 years and I specialize
                            in building exceptional, high-quality websites and 
                            applications.
                        </div>
                        <button className="get-in-touch" onClick={this.function}>Get In Touch</button>
                    </div>
                </div>

                <div className="about-container">
                    <div className="about-content">

                        <div className="about-left">
                            <div className="section-desc"><div className="section-no">01.</div> About Me <div className="section-line"/></div>
                            <p className="about-me-para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="about-me-para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className="about-me-para3">Here are a few technologies I've been working with recently:</p>
                            
                            <div className="skills">

                                <div className="skills-left">
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">C/C++</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">JavaScript (ES6+)</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">HTML/CSS</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">React + Redux</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">Python</div>
                                    </div>
                                </div>

                                <div className="skills-left">
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">Node</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">PHP</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">SQL</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">Mongoose</div>
                                    </div>
                                    <div className="skill-row">
                                        <i className="fas fa-caret-right color-caret"></i>
                                        <div className="skill-desc">SQL</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="about-right">
                            <div className="my-img">
                                <div className="img-filter"></div>
                                <img className="sahil-img" src={require('../assets/images/sahil.jpeg')} />
                                <div className="extra-frame"></div>
                            </div>
                        </div>

                    </div>
                </div>

                <WorkEx />

                <div className="projects-container">
                    <div className="projects-content">
                        <div className="section-desc"><div className="section-no">03.</div> Some Things That I've Built <div className="section-line"/></div> <br/><br/>
                        
                        {this.renderProjects()}
                    </div>

                </div>

                <div className="footer-container">
                    <div>Designed by <a className="brittany" href="https://www.linkedin.com/in/bchiang7/" >Brittany Chiang</a>, Developed by <a className="brittany" href="https://www.linkedin.com/in/sahil-verma-957130106/" >Sahil Verma</a></div><br/>
                    {/* <div>sahilverma.0922@gmail.com</div> */}
                </div>

            </div>
        );
            
    }
}

export default Home;
