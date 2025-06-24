import FolderPic from '../assets/FolderPic.png'
import "../css/ProjectBottom.css"
function BottomBox (){
    return(
        <div className="BottomSection">
            <div className='bottomHalf'>  
                <h1 className='bottomTitle'>Interested In Working Together?</h1>
                <p className='bottomParag'>I'm always excited to explore new projects, innovative ideas, 
                    or ways I can contribute to bringing your vision to life. I'm always excited to explore new projects, innovative ideas, or ways I can contribute to bringing your vision to life.</p>
                </div>
                <div className='bottomHalf'>
                    <img src={FolderPic} className='bottomImage'></img>
                </div>
        </div>
    );
}
export default BottomBox