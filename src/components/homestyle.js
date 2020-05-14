import React from 'react';
class moveimg extends React.Component{
    render(){
    return(
        <div class="slideshow-container">
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="imgstock.jpg" style="width:100%">
    <div class="text">Stocks</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="imgnews.jpg" style="width:100%">
    <div class="text">News</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="imggoldsilver.jpg" style="width:100%">
    <div class="text">Commodity</div>
  </div>

  {/* <!-- Next and previous buttons --> */}
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
    );
}
}
export default moveimg;