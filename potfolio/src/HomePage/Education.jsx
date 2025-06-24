import '../css/Education.css'
import EducationIcon from '../assets/Icons/EducationIcon.png'
import CertificateIcon from '../assets/Icons/certificateIcon1.png'
import LAU from '../assets/LAU.png'
import mercycorps from '../assets/MercyCorps.png'
function Education(){

    return(
        <div className='container'>
            <div className= "half-card">
                <div className='title2'>
                    <img src={EducationIcon} className="EducationIcon halfIcon" alt="education icon" />
                    <h2>Education</h2>
                </div>
                <div className='education'>
                       <img src={LAU} className='imagelogo'></img>
                       <p className='degree-intro'>Bachelor’s of Science in</p>
                        <p className='degree-major'>Computer Science</p>
                        <p className='degree-dates'>Fall 2022 - Spring 2026</p>
                </div>
             
          
            </div>
            <div className='half-card'>
                <div className='title2'>
                    <img src={CertificateIcon} className="CertificateIcon halfIcon" alt="certificate icon" />
                    <h2>Certifications</h2>
                </div>
                 <div className='education'>
                       <img src={mercycorps} className='Certificateimagelogo'></img>
                        <p className='certificate-title'>Web Freelancing</p>
                        <p className='certificate-dates'>August 2024 - September 2024</p>
                </div>
            </div>
        </div>
      
    );
}
export default Education