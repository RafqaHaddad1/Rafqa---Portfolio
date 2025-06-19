import '../css/DescriptionBox.css';
import PicMe1 from '../assets/PictureMe1.jpg';

function DescriptionBox() {
    return (
        <div className="description-wrapper">
            <div className="description-card">
                <div className="text-section">
                    <p className="name">Hi, I’m Rafqa Haddad</p>
                    <p className="role">Software Engineer</p>
                    <span className="description">
                        I was born and raised in Lebanon. From a young age, I’ve been passionate about technology
                      
                        and am always eager to explore new opportunities to learn and grow in the field.
                    </span>
                </div>
            </div>

            <div className="image-section">
                <img src={PicMe1} alt="Rafqa" className="profile-pic" />
            </div>
        </div>
    );
}

export default DescriptionBox;
