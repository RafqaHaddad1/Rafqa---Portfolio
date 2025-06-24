import Navigation from './Navigation.jsx'
import DescriptionBox from './HomePage/DescriptionBox.jsx'
import WorkExperience  from './HomePage/WorkExperience.jsx'
import TechnicalSkills  from './HomePage/TechnicalSkills.jsx'
import './App.css'
import Education from './HomePage/Education.jsx'

function Home() {
  return(
    <>
    <DescriptionBox/>
    <WorkExperience/>
    <TechnicalSkills/>
    <Education/>
    </>
  )
}
export default Home
