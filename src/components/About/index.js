import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
// import {
//   faAngular,
//   faCss3,
//   faGit,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          My Name is Manogya Manandhar and I'm a Bachelor's Final Year Student.
          <br></br>
          <br></br>
          I'm a Passionate, fun-loving and aspiring Developer with a knack for making
          work enjoyable!
        </p>
        <p>
          I bring positive energy, productivity, and a dash of humor to every
          project.
        </p>
        
      </div>

      {/* <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGit} color="#EC4D28" />
          </div>
        </div> 
      </div>*/}
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About
