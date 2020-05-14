import React from 'react';
import axios from  'axios';
import Header from './header';
// const url="https://api.covid19india.org/state_district_wise"
const url="https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search"
class tracker extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            dis:[],
            confirmed:undefined,
            active:undefined,
            death:undefined,
            isloading : false
        }
    }
    async componentDidMount() {
        this.setState({isloading:true});
      try {
          const result=await axios.get(url);
          console.log(result)
          console.log(result.data.data.rows);
          this.setState({
              dis:result.data.data.rows,
              isloading:false
          });
      }catch (error) {
          this.setState({
              error,
              isloading:false
          });
      }
}
render(){
    return(
    <div className="covid">
        <Header />
    <div className="Tracker">
    <table>
        <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Death</th>
            <th>Recovered</th>
        </tr>
        {this.state.dis.map((item,index)=>{
                return (
                    <tr>
                    <td>{item.country}</td>
                    <td>{item.total_cases}</td>
                    <td>{item.active_cases}</td>
                    <td>{item.total_deaths}</td>
                    <td>{item.total_recovered}</td>
                    </tr>
                        );
            })}
    </table>
    </div>
    <footer>Page created by<a href="https://www.linkedin.com/in/srivatsan-murali-009479b6/">Srivatsan</a></footer>
    </div>
    )
}
}
export default tracker
