import './App.css';
function DanceButton({filterDance}){
    return(
        <div className='commonBtn'>
<button className="choseBtn" onClick = {( )=>filterDance('classic')}>Classic Dance</button>
<button className="choseBtn" onClick = {() =>filterDance('modern')}>Modern Dance</button>
<button className="choseBtn" onClick = {() =>filterDance('wedding')}>Wedding Dance</button>
<button className="choseBtn" onClick = {() =>filterDance('kids')}>Kids Dance</button>
        </div>
    );
}
export default DanceButton;