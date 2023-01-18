import balletPic from './ballet.jpeg';
import './App.css';

function Contact(){
    return(
        <div>
            <div className='free'>
            <h1>Trial class for free</h1>
            <p className='trialText'>In order to choose your preferred dance style, we invite you to a free trial lesson for any dance class. Yhere you will find out how our classes work, meet the teachers and take your first step into the world of dance.</p>
            <button className='trialBtn'>Get a trial class</button>
            </div>
            <img  src={balletPic} alt="ballet" width="100%"/>

            <div className='footer'>
            <div className="workingHours">
            <h2>Working Hours</h2>
            <p className="cont">Monday - Friday: 9.00AM - 8.00PM</p>
            <p  className="cont">Saturday: 9.00AM - 3.00PM</p>
            <p  className="cont">Sunday: Closed</p>
            </div>
            <div className="workingHours"> 
            <h2>Location</h2>
            <p  className="cont">Address: 250 MacArthur ave., Paramus, NJ, 07653</p>
            <p  className="cont">Phone Number: +1(000)000-00-00</p>
            </div>
             <div className='workingHours'>
            <h2>Email</h2>
            <p  className="cont blue">pointdance@gmail.com</p>
            </div>
            </div>
             
            </div>
    );
}
export default Contact;