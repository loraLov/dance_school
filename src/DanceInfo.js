import './App.css';
function DanceInfo({danceType}){
    return(
        <div className='allReviews'>
            {danceType.map ((element =>{
                const{id,imageDance, name, duration, groups, price} = element;
                return <div className='differDance' key = {id}>
                    <img src = {imageDance} width="320px" alt="dance"/>
                    <h1 className="danceName">{name}</h1>
                    <h3 className='infoDance'>{duration}</h3>
                    <h3 className='infoDance'>{groups}</h3>
                    <h3 className='infoDance'>{price}</h3>
                </div>
            }))}
        </div>
    );
}
export default DanceInfo;