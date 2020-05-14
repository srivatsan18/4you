import React from 'react';
import Header from './header';
import axios from  'axios';
class news extends React.Component{
    constructor(props){
        super(props);
        this.state={
            articles:[],
            isloading:false
        }
    
    }
    async componentDidMount() {
        const url='http://newsapi.org/v2/top-headlines?country=in&apiKey=e8924b92124f4eb2840dc0b84729ec01';
        this.setState({isloading:true});
      try {
          const result=await axios.get(url);
          console.log(result);
          console.log(result.data.articles)
          this.setState({
              articles:result.data.articles,
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
            <div className="info">
            <Header />
            {this.state.articles.map((item,index)=>{
                return (
                    <div className="News">
                        <h2>
                        <a href={item.url} target="_blank">{item.title}</a>
                        </h2>
                        <img src={item.urlToImage} alt="news" style={{width:'30vw'}} />
                        <p>{item.description}</p>
                    </div>
                        );
            })}
             <footer>Page created by<a href="https://www.linkedin.com/in/srivatsan-murali-009479b6/">Srivatsan</a></footer>
            </div>
        );
    }
}
export default news