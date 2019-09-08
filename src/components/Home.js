import React from 'react';
import '../css/home.css';
import WorkEx from './WorkEx';
import projects from '../utils/project-list';

class Home extends React.Component {

    constructor(){
        super()

        this.state = {
            themesOpen: false,
            themes: [
                { name: 'og', color: 'linear-gradient(to right, #0a192f 70%, #64ffda 100%)'},
                { name: "white", color: 'linear-gradient(to right, #eeeeee 70%, #10608f 100%)'},
                { name: "red", color: 'linear-gradient(to right, #000000 70%, #c74242 100%)'},
                { name: 'purple', color: 'linear-gradient(to right, #180f42 70%, #acf5ff 100%)'}
            ]
        }
    }

    componentDidMount(){
        let theme = localStorage.getItem('theme') || 'og'
        this.changeTheme(theme)
    }

    changeTheme(theme){
        localStorage.setItem('theme', theme)
        switch(theme){
            case 'og':
                // let root = document.documentElement;
                document.documentElement.style.setProperty("--main-background", "#0a192f");
                document.documentElement.style.setProperty("--main-background-fade", "#172a45");
                document.documentElement.style.setProperty("--main-background-dark", "#020c1b");
                document.documentElement.style.setProperty("--main-highlight", "#64ffda");
                document.documentElement.style.setProperty("--main-fade-text", "#606a86");
                document.documentElement.style.setProperty("--main-super-fade-text", "#8892b0");
                document.documentElement.style.setProperty("--main-super-fade", "#e6f1ff");
                document.documentElement.style.setProperty("--main-fade-line", "#2d3952");
                document.documentElement.style.setProperty("--main-img-fade", "#0ba8834d");
                break;
            case 'purple':
                let root = document.documentElement;                
                document.documentElement.style.setProperty("--main-background","#180f42");
                document.documentElement.style.setProperty("--main-background-fade","#291f58");
                document.documentElement.style.setProperty("--main-background-dark","#020c1b");
                document.documentElement.style.setProperty("--main-highlight","#acf5ff");
                document.documentElement.style.setProperty("--main-fade-text","#deedee");
                document.documentElement.style.setProperty("--main-super-fade-text","#d5e3e7");
                document.documentElement.style.setProperty("--main-super-fade","#23c3f3");
                document.documentElement.style.setProperty("--main-fade-line","#336b7c");
                document.documentElement.style.setProperty("--main-img-fade","#1d92a75b");
                break;
            case 'white':
                // let root = document.documentElement;
                document.documentElement.style.setProperty("--main-background", "#eeeeee");
                document.documentElement.style.setProperty("--main-background-fade", "#f5f5f5");
                document.documentElement.style.setProperty("--main-background-dark", "#d8d8d8");
                document.documentElement.style.setProperty("--main-highlight", "#10608f");
                document.documentElement.style.setProperty("--main-fade-text", "#5a606b");
                document.documentElement.style.setProperty("--main-super-fade-text", "#24323d");
                document.documentElement.style.setProperty("--main-super-fade", "#285174");
                document.documentElement.style.setProperty("--main-fade-line", "#909cb3");
                document.documentElement.style.setProperty("--main-img-fade", "#88aac28f");
                break;
            case 'red':
                // let root = document.documentElement;
                document.documentElement.style.setProperty("--main-background", "#000000");
                document.documentElement.style.setProperty("--main-background-fade", "#a33434");
                document.documentElement.style.setProperty("--main-background-dark", "#240404");
                document.documentElement.style.setProperty("--main-highlight", "#c74242");
                document.documentElement.style.setProperty("--main-fade-text", "#b36666");
                document.documentElement.style.setProperty("--main-super-fade-text", "#ffffff");
                document.documentElement.style.setProperty("--main-super-fade", "#ac5151");
                document.documentElement.style.setProperty("--main-fade-line", "#522d2d");
                document.documentElement.style.setProperty("--main-img-fade", "#9e3b3b50");
                break;
            

        }

        this.setState({ themesOpen: false})
       
    }

    renderProjects(){
        const projectList = projects;
        
        return projectList.map((item, index) => {
            return (
                <div className="project-row">
                    <div className="project-img">
                        <div className="proj-filter"></div>
                        <div className="proj-design"></div>
                        <img className="site-img" src={require(`../assets/images/${item.img}.png`)}  alt="project" />
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
                        <div className="logo-img">S</div>
                    </div>

                    <div className="nav-links">
                        <div className="navlink"><div><span className="navlink-sno">01.</span>&nbsp;About</div></div>
                        <div className="navlink"><div><span className="navlink-sno">02.</span>&nbsp;Experience</div></div>
                        <div className="navlink"><div><span className="navlink-sno">03.</span>&nbsp;Projects</div></div>
                        <div className="navlink"><div><span className="navlink-sno">04.</span>&nbsp;Contact</div></div>
                        <a href={require("../assets/sahil_verma_resume.pdf")} className="navlink-resume">Resume</a>
                        <div className="navlink theme-changer">
                            {this.state.themesOpen && 
                                <div className="themes-dropdown">
                                    {this.state.themes.map(item => 
                                        <div className="theme-btn" onClick={() => this.changeTheme(item.name)} style={{ backgroundImage: item.color }}></div>
                                    )}
                                </div>
                            }
                            <i onClick={() => this.setState({ themesOpen: !this.state.themesOpen })} class="fas fa-palette theme-cog"></i>
                        </div>
                        
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
                                <img className="sahil-img" src={require('../assets/images/sahil.jpeg')} alt="sahil" />
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

                <div className="contact-container">
                    <div className="contact-content">
                        <div className="whats-next"> 04. What's Next?</div>
                        <div className="get-in-touch2">Get In Touch</div>
                        <div className="contact-txt">I'm actively searching for full-tim/part-time oppurtunities. Feel free to contact me for a project or just to say hi!</div>
                        <div className="hello-container"><button className="say-hello">Say Hello</button></div>
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
