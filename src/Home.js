import image from './main.jpeg';
import './App.css';
function Home(){
    return(
        <div className="main">
            <img className = "mainPic" src= {image} width = "600px" alt="mainPic"/>
        </div>
    );
}
export default Home;