import React from 'react';
import Header from './header';
 import axios from  'axios';
import Form from './Form';
class stock extends React.Component{
    constructor(props){
        super(props);
    // console.log(l);
        this.state={
            stock:undefined,
            low:undefined,
            high:undefined,
            price:undefined,
            dates:[],
            openvalues:[],
            highvalues:[],
            lowvalues:[],
            closevalues:[]

        
        }
    }
 loader = async(e)=> {
     e.preventDefault();
     const pointertoThis=this;
  const   market=e.target.elements.stock.value;
    const url=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${market}&apikey=H6LXESYN9Y65EBV0.`
     const result= await axios.get(url);
     console.log(result);
      console.log(result.data["Time Series (Daily)"]);
     let xfun=[];
     let openfun=[];
     let highfun=[];
     let lowfun=[];
     let closefun=[];
     for(var key in result.data["Time Series (Daily)"]){
         xfun.push(key);
         openfun.push(result.data["Time Series (Daily)"][key]['1. open']);
         closefun.push(result.data["Time Series (Daily)"][key]['4. close']);
         highfun.push(result.data["Time Series (Daily)"][key]['2. high']);
         lowfun.push(result.data["Time Series (Daily)"][key]['3. low']);

        //  console.log(key)
        //["2019-12-13"]["2. high"]["2019-12-13"]["4. close"]

     }
     pointertoThis.setState({
        dates:xfun.slice(0,10),
        // dates:dates.round(),
        openvalues:openfun.slice(0,10),
        // openvalues:openvalues.round(),
        closevalues:closefun.slice(0,10),
        // closevalues:closevalues.round(),
        highvalues:highfun.slice(0,10),
        // highvalues:highvalues.round(),
        lowvalues:lowfun.slice(0,10),
        // lowvalues:lowvalues.round(),
        stock:market

     })

    //  console.log(xfun);

    //  let year=new Date().getFullYear()
    //  let month= new Date().getMonth()
    //  let day=new Date().getDay()
    //  let full=year+'-'+month +'-'+'-'+day
    //  console.log(result.data["Time Series (Daily)"][full]);
    //  data["Time Series (Daily)"][0]
 }
render()
{
    return(
        <div className="stockimg" ><Header />
        <Form loadstock={this.loader}/>
        <div>
        <h2 className="stockname">{this.state.stock}</h2>
        <table>
       
        <tr>
            <th>Date</th>
            <th>Opening Price</th>
            <th>High Price</th>
            <th>Low Price</th>
            <th>Closing Price</th>
         </tr> 
         {this.state.dates.map((item,index)=>{

                return (
                    <tr>
                    <td>{item}</td>
                    
                <td>{Math.round(this.state.openvalues[index])*75}</td>
                <td>{Math.round(this.state.highvalues[index])*75}</td>
                <td>{Math.round(this.state.lowvalues[index])*75}</td>
                <td>{Math.round(this.state.closevalues[index])*75}</td>

                    </tr>
                        );
            })}
         
        </table>
        <div>Stock Price in INR</div>
        *Last 10 days data 
        </div>
        <footer>Page created by<a href="https://www.linkedin.com/in/srivatsan-murali-009479b6/">Srivatsan</a></footer>
         </div>
    );

}
}
export default stock;

    