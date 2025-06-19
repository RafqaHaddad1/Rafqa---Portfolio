import '../css/WorkExperience.css';
import workicon from '../assets/Icons/WorkIcon.png';
import UDlogo from '../assets/UDLogo.png';
import NovaLogo from '../assets/NovaLogo.png';

function WorkExperience() {
  const AllWork = [
    { id: 4, company: "Unite Digital", role: "Software Engineer", dateRange: "July 2025 - Present", logo: UDlogo },
    { id: 3, company: "Unite Digital", role: "Technical Production Support", dateRange: "February 2025 - July 2025", logo: UDlogo },
    { id: 2, company: "Nova4", role: "Web Developer", dateRange: "September 2024 - June 2025", logo: NovaLogo },
    { id: 1, company: "Nova4", role: "Software Engineer Intern", dateRange: "May 2024 - September 2024", logo: NovaLogo }
  ];

  return (
    <div className="description-wrapper">
      <div className="Card">
        <div className='title'>
          <img src={workicon} className="WorkIcon" alt="work icon" />
          <h2>Work Experience</h2>
        </div>

        {/* Timeline Section */}
        <div className='timeline-scroll-wrapper'>

            <div className="timeline-container">
                    {AllWork.map(work => (
                        <div className="timeline-item" key={work.id}>
                          <div className="dot"></div>
                          <div className="work-entry">
                              <img src={work.logo} alt={`${work.company} logo`} className="company-logo" />
                              <h3>{work.role}</h3>
                              <h6>{work.dateRange}</h6>
                          </div>
                        </div>
                    ))}
               </div>
        </div>
       
      </div>
    </div>
  );
}

export default WorkExperience;
