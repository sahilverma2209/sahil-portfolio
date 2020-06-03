import React from 'react';
import { changeTheme, BIG_SCREEN  } from '../utils/utils'



class Nav extends React.Component {

    render(){
        const isBigScreen = window.matchMedia(BIG_SCREEN).matches;
        const themeDrawerClass = this.props.themesOpen ? "themes-dropdown-open" : "themes-dropdown-close"
        const navLinksClass = this.props.navDrawerOpen ? "nav-links" : "nav-links nav-links-mobile-hide"
        const hamburgerClass = !this.props.navDrawerOpen ? "hamburger hamburger--arrow" : "hamburger hamburger--arrow is-active"
        const navDrawerMaskClass = this.props.navDrawerOpen ? "navDrawerMask" : "navDrawerMask-disable"
        return (
            <nav className="nav-container">
                <div className="logo wow fadeInDown"> 
                {/* {`logo wow fadeInDown ${this.props.navDrawerOpen ? 'blur' : ''} */}
                {!isBigScreen && <div className={themeDrawerClass} style={{ left: '18.5px', top: '95%'}}>
                                {this.props.themes.map(item => 
                                    <div key={item.color} className="theme-btn" onClick={() =>  {this.props.toggleThemeDrawer();changeTheme(item.name)}} style={{ backgroundImage: item.color }}></div>
                                )}
                </div> }
                    <div className="logo-img" onClick={() => this.props.toggleThemeDrawer()}>S</div>
                </div>
                
                <div className="burger" onClick={this.props.toggleNavDrawer}>
                    <button className={hamburgerClass} type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button> 
                </div> 

                <div className={navDrawerMaskClass}></div>
                <div className={navLinksClass}>
                    <a href="#about" className="navlink wow fadeInDown" onClick={this.props.toggleNavDrawer} data-wow-delay="0ms"><div><span className="navlink-sno">01.</span>&nbsp;About</div></a>
                    <a href="#workex" className="navlink wow fadeInDown" onClick={this.props.toggleNavDrawer} data-wow-delay="200ms"><div><span className="navlink-sno">02.</span>&nbsp;Experience</div></a>
                    <a href="#projects" className="navlink wow fadeInDown" onClick={this.props.toggleNavDrawer} data-wow-delay="400ms"><div><span className="navlink-sno">03.</span>&nbsp;Projects</div></a>
                    <a href="#contact" className="navlink wow fadeInDown" onClick={this.props.toggleNavDrawer} data-wow-delay="600ms"><div><span className="navlink-sno">04.</span>&nbsp;Contact</div></a>
                    <a href="yolo" target="_blank" rel="noopener noreferrer" className="navlink-resume wow fadeInDown" data-wow-delay="800ms">Resume</a>
                    {isBigScreen &&
                    <div className="navlink theme-changer">
                        {/* {this.state.themesOpen &&  */}
                            <div className={themeDrawerClass}>
                                {this.props.themes.map(item => 
                                    <div key={item.color} className="theme-btn" onClick={() =>  {this.props.toggleThemeDrawer();changeTheme(item.name)}} style={{ backgroundImage: item.color }}></div>
                                )}
                            </div>
                        {/* } */}
                        <i onClick={() => this.props.toggleThemeDrawer()} className="fas fa-palette theme-cog wow shake" data-wow-delay="2100ms"></i>
                    </div>
                    }
                    
                </div>
            </nav>
        )
    }
}


export default Nav;