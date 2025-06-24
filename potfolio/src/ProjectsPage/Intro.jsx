import animatedMe from '../assets/animatedMe.png'
import "../css/ProjectsIntro.css"
function Intro(){
    return (
        <div className='introSection'>
            <div className='introHalf'>
                 
            <h1 className='introTitle'>Turning <i>Ideas</i> into <i>Reality</i></h1>
            <p className='introParag'>Turning ideas into reality in computer science means transforming concepts into functional software through coding,
                design, and problem-solving. It blends creativity with technical skill to build solutions that address real-world challenges and drive innovation.</p>
            </div>
            <div className='introHalf'>
                <img src={animatedMe} className='introImage'></img>
            </div>
        </div>
    );

}
export default Intro