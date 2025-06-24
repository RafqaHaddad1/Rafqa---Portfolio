import '../css/TechnicalSkills.css';

import pencilicon from '../assets/icons/pencil 1.png'

//icons
import netcore from '../assets/TechnicalIcons/.netcore.png'
import agile from '../assets/TechnicalIcons/agile.png'
import C from '../assets/TechnicalIcons/C.png'
import C2 from '../assets/TechnicalIcons/C2.png'
import CSS from '../assets/TechnicalIcons/CSS.png'
import design from '../assets/TechnicalIcons/designpatterns.png'
import flask from '../assets/TechnicalIcons/flask.png'
import flutter from '../assets/TechnicalIcons/flutter.png'
import git from '../assets/TechnicalIcons/git.png'
import html from '../assets/TechnicalIcons/html.png'
import java from '../assets/TechnicalIcons/java.png'
import JS from '../assets/TechnicalIcons/JS.png'
import kmm from '../assets/TechnicalIcons/kmm.png'
import MCSimulation from '../assets/TechnicalIcons/MCSimulation.png'
import MPI from '../assets/TechnicalIcons/MPI.png'
import MVC from '../assets/TechnicalIcons/MVC.png'
import MVVM from '../assets/TechnicalIcons/MVVM.png'
import mysql from '../assets/TechnicalIcons/mysql.png'
import Nvidia from '../assets/TechnicalIcons/Nvidia.png'
import oop from '../assets/TechnicalIcons/oop.png'
import openmp from '../assets/TechnicalIcons/openmp.png'
import php from '../assets/TechnicalIcons/php.png'
import postman from '../assets/TechnicalIcons/postman.png'
import  python from '../assets/TechnicalIcons/python.png'
import react from '../assets/TechnicalIcons/react.png'
import restapi from '../assets/TechnicalIcons/restapi.png'
import RL from '../assets/TechnicalIcons/RL.png'
import SQL from '../assets/TechnicalIcons/SQL.png'
import SQLServer from '../assets/TechnicalIcons/SQLserver.png'
import swagger from '../assets/TechnicalIcons/swagger.png'
import vite from '../assets/TechnicalIcons/vite.png'
import webapi from '../assets/TechnicalIcons/webApi.png'


function TechnicalSkills(){
    const allSkills = [
        {id: 1, name: "Java", image: java},
        {id: 2, name: "python", image: python},
        {id: 3, name: 'C', image: C},
        {id: 4, name: "SQL", image: SQL},
        {id: 5, name: "HTML", image: html},
        {id: 6, name: "CSS", image: CSS},
        {id: 7, name: "JavaScript", image: JS},
        {id: 8, name:"PHP", image:php},
        {id: 9 , name: "Flutter", image: flutter},
        {id: 10, name:"C#", image: C2},
        {id: 11, name:"ASP .NET Core", image: netcore},
        {id: 12, name:"Flask", image: flask},
        {id: 13, name: "ReactJS", image: react},
        {id: 14, name: "React Vite", image: vite},
        {id: 15, name: "Kotlin MultiPlatform", image: kmm},
        {id: 16, name: "Rest Api", image: restapi},
        {id: 17, name: "Design Patterns", image: design},
        {id: 18, name: "Git", image: git},
        {id: 19, name: "Microsoft SQL Server", image:SQLServer},
        {id: 20, name: "MySQL", image: mysql},
        {id: 21, name:"Reinforcement Learning", image: RL},
        {id: 22, name:"MonteCarlo Simulation", image: MCSimulation},
        {id: 23, name: "NVIDIA CUDA", image: Nvidia},
        {id: 24, name: "OpenMP", image: openmp},
        {id: 25, name: "MPI", image: MPI},
        {id: 26, name: "Postman" , image: postman},
        {id: 27, name: "Object Oriented Programming", image:oop},
        {id: 28, name:"MVC Architecture", image: MVC},
        {id: 29, name: "MVVM Architecture", image: MVVM},
        {id: 30, name: "Swagger", image:swagger},
        {id: 31, name: ".NET Web API", image: webapi},
        {id: 32, name: "Agile / Scrum", image: agile},
    ]
    return (
    <>
        <div className="Card">
        <div className="title">
            <img src={pencilicon} className="WorkIcon" alt="skills icon" />
            <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
            {allSkills.map((skill, index) => (
            <div key={index} className="skill-card">
                <img src={skill.image} alt={`${skill.name} logo`} className="logo" />
                <p>{skill.name}</p>
            </div>
            ))}
        </div>
        </div>
    </>
    );
}
export default TechnicalSkills