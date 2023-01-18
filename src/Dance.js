import { useState } from 'react';
import{dataDance} from './dataDance';
import DanceInfo from './DanceInfo';
import DanceButton from './DanceButton';
import './App.css';

function Dance(){
    const[dance, setDance] = useState (dataDance);
    const chosenDance = (searchTerm) => {
       const newChosenDance = dataDance.filter(element => element.searchTerm === searchTerm);
       setDance(newChosenDance);
    }
    return(
        <div>
<DanceButton filterDance={chosenDance}/>
<DanceInfo danceType={dance}/>
        </div>
    );
}
export default Dance;