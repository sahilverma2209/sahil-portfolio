import React from 'react';
import '../css/home.css';
import WorkEx from './WorkEx';
import projects from '../utils/project-list';
import { changeTheme } from '../utils/utils'
import { BIG_SCREEN } from "../utils/utils";
import Nav from './Nav';
class Home extends React.Component {

    constructor(){
        super()

        this.state = {
            themesOpen: false,
            themes: [
                { name: 'og', color: 'linear-gradient(to right,#0a192f,#64ffda'},
                { name: "red", color: 'linear-gradient(to right,#000000,#c74242'},
                { name: 'purple', color: 'linear-gradient(to right,#180f42,#acf5ff'},
                { name: "white", color: 'linear-gradient(to right,#eeeeee,#10608f'},
                // { name: 'og', color: 'linear-gradient(to right,#0a192f,#64ffda'},
                // { name: "white", color: 'linear-gradient(to right,#eeeeee,#10608f'},
                // { name: "red", color: 'linear-gradient(to right,#000000,#c74242'},
                // { name: 'purple', color: 'linear-gradient(to right,#180f42,#acf5ff'}
            ],
            navDrawerOpen: false

        }
        
    }

    componentDidMount(){
        document.documentElement.style.transition = "all 2s";
        let theme = localStorage.getItem('theme') || 'og'
        changeTheme(theme)
    }
    
    componentWillUnmount(){
        localStorage.clear()
    }

    renderProjects(){
        const projectList = projects 
        return projectList.map(item => 
            <div key={item.name} className="project-row  wow fadeInUp">
                <a href={item.links.other.link} rel="noopener noreferrer" target="_blank" className="project-img">
                    <div className="proj-filter"></div>
                    <div className="proj-design"></div>
                    <img className="site-img" src={require(`../assets/images/${item.img}.png`)}  alt="project" />
                </a>
                <div className="project-details">
                    <div>
                        <div className="featured">Featured Project</div>
                        <div className="project-name">{item.name}</div>
                        <div className="project-desc">{item.desc}</div>
                        <div className="project-tech">{item.tech.map(item => <div key={item} className="tech-item">{item}</div>)}</div>
                    </div>
                </div>
            </div> 
        )
    }

    render(){
        
        const isBigScreen = window.matchMedia(BIG_SCREEN).matches;
        // return !isBigScreen ? 
        //     <div className="under-construction">
        //         <i className="fas fa-toolbox"></i>
        //         <div className="maintenance">Under Maintenance</div>
        //         <div className="desktop">Please visit on Desktop/Laptop :)</div>
        //     </div> 
        //     : (
        return(
            <div className="main-container">

                <Nav 
                    themes={this.state.themes}
                    themesOpen={this.state.themesOpen} 
                    toggleThemeDrawer={() => this.setState({ themesOpen: !this.state.themesOpen })}
                    toggleNavDrawer={() => this.setState({ navDrawerOpen: !this.state.navDrawerOpen })}
                    navDrawerOpen={this.state.navDrawerOpen}
                />

                <div className="left-text wow fadeIn" data-wow-delay="1900ms">
                    <a href="https://github.com/sahilverma2209" target="_blank" rel="noopener noreferrer" className="social-media-link"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/sahil-verma-957130106/" className="social-media-link" ><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/sahilvma/" className="social-media-link"><i className="fab fa-instagram"></i></a>
                    <br/>
                    <hr className="short-line-left"/>
                </div>

                <div className="right-text wow fadeIn" data-wow-delay="1900ms">
                    <a href="mailto:sahilverma@nyu.edu" className="email">sahilverma@nyu.edu</a><hr className="short-line-right"/>
                </div>

                <div className={`landing-content-container ${this.state.navDrawerOpen ? 'freeze' : ''}`}>
                    <div className="landing-content">
                        <div className="hi wow fadeInUp" data-wow-delay="900ms">Hi, my name is</div>
                        <div className="name wow fadeInUp" data-wow-delay="1100ms">Sahil Verma.</div>
                        <div className="build wow fadeInUp" data-wow-delay="1300ms">I build things for the web.</div>
                        <div className="bio wow fadeInUp" data-wow-delay="1500ms">
                            I'm a graduate student pursuing Master's in Computer Science from NYU. 
                            I've been building for the web for the past 4 years and I specialize
                            in building exceptional, high-quality websites and 
                            applications.
                        </div>
                        <a href="mailto:sahilverma@nyu.edu" className="get-in-touch wow fadeInUp" data-wow-delay="1700ms" onClick={this.function}>Get In Touch</a>
                    </div>
                </div>

                <div className="about-container" id="about">
                    <div className="about-content wow fadeIn" data-wow-duration="1000ms">

                        <div className="about-left">
                            <div className="section-desc"><div className="section-no">01.</div><div className="section-name">About Me</div> <div className="section-line"/></div>
                            <p className="about-me-para1">I'm a Software Engineer (specialize in UI Engineering) based in New York, NY. I have been developing websites since 2015 and React is my favourite tool. I love what JavaScript has evolved into and am always excited about what's next!</p>
                            <p className="about-me-para2">It's the best feeling in the world when you can bend the uncoorporative browser to your will and see your ideas come to life! I love exploring new frameworks/technologies and am always willing to step outside my comfort zone and implement something that I've never done before (in this case, the <span onClick={() => this.setState({ themesOpen: !this.state.themesOpen })} className="theme-alert">theme changer</span> on top-right of the screen) </p>
                            <p className="about-me-para2"></p>
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
                                        <div className="skill-desc">AWS</div>
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

                <div className="projects-container" id="projects">
                    <div className="projects-content">
                        <div className="section-desc wow fadeInUp"><div className="section-no">03.</div><div className="section-name"> Some Things That I've Built </div> <div className="section-line"/></div> <br/><br/>
                        
                        {this.renderProjects()}
                    </div>

                </div>

                <div className="contact-container" id="contact">
                    <div className="contact-content wow fadeInUp">
                        <div className="whats-next"> 04. What's Next?</div>
                        <div className="get-in-touch2">Get In Touch</div>
                        <div className="contact-txt">I'm actively searching for full-time/part-time oppurtunities. Feel free to contact me for a project or just to say hi!</div>
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
