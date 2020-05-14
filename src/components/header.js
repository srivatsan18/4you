import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import history from './history';
// import Tracker from './covid_tracker';
import HI from '@material-ui/icons/Home';
import AI from '@material-ui/icons/AnnouncementOutlined';
import SI from '@material-ui/icons/ShowChartOutlined';
import MI from '@material-ui/icons/MonetizationOnSharp';
import logo from './logo.jpg';
// import Forecast from './weather';
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturaday'];
class header extends React.Component {
constructor(props){
    super(props);
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturaday'];
    this.state={
        home:undefined,
        gold:undefined,
        stock:undefined,
        news:undefined,
        date:new Date().toLocaleDateString(),
        day:days[new Date().getDay()],
        time:new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds()

    };
}
    callMe() {
        setInterval(()=>{
            this.setState({
                date:new Date().toLocaleDateString(),
                time:new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
                day:days[new Date().getDay()]
            });
        },1000);
    }

 
render(){
    return(
        <Router>
        <div className="header">
            <div className="header_content">
          <a href={()=>history.push('./')}><img className="logo" src={logo} alt="4you" /></a>
            </div>
            <div>
           <div className="features"><button className="btn"onClick={()=>history.push('./')}><span><HI color="inherit"/></span>Home</button></div>
                <div className="features"><button className="btn"onClick={()=>history.push('./commodity')}><span><MI /></span>Commodities</button></div>
                <div className="features"><button className="btn"onClick={()=>history.push('./stock')}><span><SI /></span>Stocks</button></div>
                <div className="features"><button className="btn" onClick={()=>history.push('./news')}><span><AI /></span>News</button></div>
                <div className="features" id="time">
                    {this.state.date}
                    <div>
                   <div>{this.state.day}</div>
                    {this.state.time}
                    </div>
                </div>
                <div>{this.callMe()}</div>
               
            </div>
            </div>
            </Router>
    )
}

}

export default header

