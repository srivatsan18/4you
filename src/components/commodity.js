import React from 'react';
import Header from './header';
import axios from  'axios';
const url='https://metals-api.com/api/latest?access_key=so1788ye5spl5r64voe6c2et66s6pl8pg0le6em1fy8e56zbn5o5vhx3phvn&base=INR&symbols=XAU,XAG';
// const url="hi"
const usu="https://api.currencyscoop.com/v1/latest?api_key=a4a5e9320a6e74a7feb5d46dbc62de87";
const auu="https://api.currencyscoop.com/v1/latest?api_key=a4a5e9320a6e74a7feb5d46dbc62de87&base=aud";
const euru="https://api.currencyscoop.com/v1/latest?api_key=a4a5e9320a6e74a7feb5d46dbc62de87&base=eur";
const cadu="https://api.currencyscoop.com/v1/latest?api_key=a4a5e9320a6e74a7feb5d46dbc62de87&base=cad";
const aedu="https://api.currencyscoop.com/v1/latest?api_key=a4a5e9320a6e74a7feb5d46dbc62de87&base=aed";
class Commodity extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ra:[],
            isloading:false,
            gold:undefined,
            silver:undefined,
            usd:undefined,
            aud:undefined,
            eur:undefined,
            cad:undefined,
            aed:undefined
        }
    }
     async componentDidMount(){
      this.setState({isloading:true});
      try {
          const result=await axios.get(url);
          const usdresult=await axios.get(usu);
          const audresult=await axios.get(auu);
          const eurresult=await axios.get(euru);
          const cadresult= await axios.get(cadu);
          const aedresult=await axios.get(aedu);
          console.log(result);
          console.log(usdresult.data.response.rates.INR);
          console.log(audresult.data.response.rates.INR);

        //   console.log(result.data.rates.XAG)
          this.setState({
              gold:Math.round(result.data.rates.XAU),
              silver:Math.round(result.data.rates.XAG),
              usd:Math.round(usdresult.data.response.rates.INR),
              aud:Math.round(audresult.data.response.rates.INR),
              eur:Math.round(eurresult.data.response.rates.INR),
              cad:Math.round(cadresult.data.response.rates.INR),
              aed:Math.round(aedresult.data.response.rates.INR),
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
            <div className="commodity">
                <Header />
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="gold">Gold Price:<div className="items">{this.state.gold}</div></marquee></div>
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="silver">Silver Price:<div className="items">{this.state.silver}</div></marquee></div>
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="gray">American Dollar Rate:<div className="items">{this.state.usd}</div></marquee></div>
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="pink">Australian Dollar Rate:<div className="items">{this.state.aud}</div></marquee></div>
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="brown">      Euro Rate:<div className="items">{this.state.eur}</div></marquee></div> 
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="green">Canadian Dollar Rate:<div className="items">{this.state.cad}</div></marquee></div>   
        <div className="g-border" className="Gold"><marquee direction="left" height="100%" width="100%" bgcolor="blue">UAE Dirham Rate:<div className="items">{this.state.aed}</div></marquee></div>
        <footer>Page created by<a href="https://www.linkedin.com/in/srivatsan-murali-009479b6/">Srivatsan</a></footer> 
            </div>
          
        );
    }
}
export default Commodity