import '../css/ProjectsBox.css'
import Monopoly from '../assets/ProjectsIcons/Monopoly.png'
import arrow from '../assets/right-arrow.png'
import karmed from '../assets/ProjectsIcons/k-armed.png'
import hospital from "../assets/ProjectsIcons/Hospital.jpg"
import design  from '../assets/TechnicalIcons/designpatterns.png'
import malware from "../assets/ProjectsIcons/malware.jpg"
import proxy from "../assets/ProjectsIcons/proxy.png"
import gym from "../assets/ProjectsIcons/gym.avif"
import mate from "../assets/ProjectsIcons/motimate.jpg"
import parkit from "../assets/ProjectsIcons/parkit.jpg"
import portfolio from "../assets/ProjectsIcons/portfolio.jpg"
function ProjectsBox(){
    const projectList = [
        {id: 1, name: "Monopoly Game: Learning-based Monte Carlo Simulation (Parallel Algorithm)", category:"High performance, AI, ML", image: Monopoly },
        {id: 2, name:"Parallelize the K-arm Bandit problem using OpenMP and MPI", category: "High performance, AI, ML", image: karmed },
        {id: 3, name:"Hospital Management System", category: "Software engineer", image:hospital },
        {id: 4, name: "Design Patterns", category: "OOP", image: design},
        {id: 5, name:"ParkIt", category:"Software engineer", image:parkit},
        {id: 6, name: "Reverse Engineering of Malware", category: "Computer Security" , image:malware},
        {id: 7, name: "Proxy Server Project", category : "Networks", image: proxy },
        {id: 8, name: "My gym Diary ", category: "Web development", image:gym},
        {id: 9, name: "Moti-Mate", category: "Flutter Mobile Development", image: mate},
        {id: 10, name: 'Portfolio', category:"Web Development",image: portfolio}
    ]
    return(
        <>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            
                <div className='project-card'>
                    <img src={project.image} className='project-image'></img>
                    <h3>{project.name}</h3>
                    <p className='project-category'>{project.category}</p>

                    <div className='learnmore'>
                        <p>Learn More</p>
                        <img src={arrow}></img>
                    </div>
                </div>
            ))}
        </div>

            
        </>
    );
}
export default ProjectsBox