import { useState } from 'react';
import {dataTeam} from './dataTeam';
import './App.css';

function Team(){
    const [team, setTeam] = useState(0);
    const {image, name, dance, description, imageOne, imageTwo, imageThree} = dataTeam[team];
    
    const previousTeam = () =>{
        setTeam ((team => {
            team --;
            if(team < 0) {
                return dataTeam.length-1;
            }
            return team;
        }))
    }
    const nextTeam = () =>{
        setTeam((team =>{
            team++;
            if (team > dataTeam.length -1){
                team=0;
            }
            return team;
        }))
    }

    return(
        <div>
            <div className='commonTeam'>
            <img src = {image} alt="dancer" width="550px"/>
            <div className='infoTeam'>
            <h1 className='teamName'>{name}</h1>
            <h3 className='typeDance'>{dance}</h3>
            <p className='infoTeam'>{description}</p>
            </div>
            </div>

            <div className='picTeam'>
                <img src = {imageOne} width="350px" alt="dancer"/>
                <img src = {imageTwo} width="350px" alt="dancer"/>
                <img src = {imageThree} width="350px" alt="dancer"/>
            </div>

            <div className="btnTeam">
                <button className="clickTeam" onClick={previousTeam}>Previous</button>
                <button className="clickTeam"  onClick={nextTeam}>Next</button>
            </div>

        </div>
    );
}
export default Team;