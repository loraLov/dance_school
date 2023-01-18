import { useState } from 'react';
import {data} from './data';
import './App.css';
import imageTwo from './ballet_about.jpeg';
import imageFour from './ballet_about_three.jpeg';
function About (){
    const [review] = useState(data);
    const [showText, setShowText] = useState(false);
    const showTextClick = (element) =>{
        element.showMore = !element.showMore;
        setShowText(!showText);
    } 
    return(
        <div>
        <div className="aboutCommon">
<img src={imageTwo} width="700px" alt="about"/>
<div className="text">
<p>Our dance studio was opened in 2010.</p>
<p>The idea of creating the schoold belongs to the American dancer Jack Harman, who wanted to pass on his experience to a new generation of dancers.</p>
<p>The natives of our school teach choreagraphy all over the world, many of them have created their own dance studios, others have become laureats of international dance conpetitions.</p>
<p>The main idea of our school is self-expression of one's personality through dance.</p>
<p>We will help you discover more in yourself that you might expect.</p>
</div>
        </div>
        <img  src={imageFour} width="100%" alt="about_two"/>
        <div className="container">
                <h1>Reviews</h1>
            </div>
            <div className='allReviews'>  
        {review.map((element =>{
            const{id,name, rev, showMore} = element;
            return(
                <div className="row" key={id}>
                  <h2>{name}</h2>
                  <p className="textRev">{showMore? rev:rev.substring(0,40)+"..."} <button className="btn" onClick={() => showTextClick(element)}>{showMore? "Show less" : "Show more"}</button></p>
                </div>
            )
        }))}
         </div>
        </div>
    );
}
export default About