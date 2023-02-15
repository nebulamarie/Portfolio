import calculator from '../images/calculator.JPG'
import snail from '../images/snail.JPG'
import { Link } from "react-router-dom";
export default function Projects() {
    return (
      <div className="Projects">
        <h2>Projects
          <p>These are a couple of projects I've created on my way to being a developer</p>
        </h2>
        <section>
          <img className="calpic" src={calculator}/> <a href="https://github.com/nebulamarie/CalculatorProject">Calculator Project</a>
      <p>A simple calculator project that I'm very proud of. This was my first full stack project.
      It started putting the pieces together for me on how development works. 
      </p>
      </section>
      <section>
          <img className="snail" src={snail}/> <a href="https://github.com/nebulamarie/Game-Project">Game Project</a>
      <p>This was my second development project. 
        I built a children's spelling game inspired by the games I played with my children when they were learning to spell!
      </p>
      </section>  

      <footer className='Contactfooter'>
        <p><Link to={'/home'}>Home</Link></p>
      </footer>  
      </div>
  
    );
  }