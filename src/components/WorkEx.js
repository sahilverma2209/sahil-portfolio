import React from 'react';
import '../css/workex.css'
import workex from '../utils/workex-list'

class WorkEx extends React.Component {

    constructor(){
        super()

        this.state = {
            selectedCompany: 'NYU'
        }
    }

    renderKeys(){
        const keys = Object.keys(workex)
        return keys.map(item => {
            const linkClass = item === this.state.selectedCompany ? 'workex-link selected' : 'workex-link'
            return (
                <div key={item} onClick={() => this.setState({ selectedCompany: item })} className={linkClass}>
                    {item}
                </div>
            )
        })
    }


    renderContent(){
        const data  = workex[this.state.selectedCompany]

        return (
            <React.Fragment>
                <div className="workex-heading">
                    <div className="title">{data.position}</div> &nbsp;
                    <div className="company">{`@ ${data.company}`}</div>
                </div>
                <div className="workex-date">{data.dates}</div><br/>

                <div className="workex-desc">
                    {data.desc.map(item =>
                        <div key={item} className="workex-desc-split">
                            <i className="fas fa-caret-right color-caret"></i>
                            <div>{item}</div>
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className="workex-container">
                <div className="workex-content">
                    <div className="section-desc wow fadeInUp"><div className="section-no">02.</div> Where I've Worked <div className="section-line"/></div>
                    <br/><br/>
                    <div className="workex-split wow fadeInUp">
                        <div className="workex-left">
                            {this.renderKeys()}
                        </div>
                        
                        <div className="workex-right">
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkEx;
