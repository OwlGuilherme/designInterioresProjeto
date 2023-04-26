import './index.css'
import { AboutMe } from '../AboutMe/index'
import { Projects } from '../Projects'

export const Home = () => {

  return(
    <div className='container'>
      <div className='pageHome'>
        <header>
          <div className='sectionTop'>
            <div className='logoName'>
              <img src='/images/logo5.png'/>
              <p className='title'>
                Design de Interiores
              </p>
            </div>
            <nav>
              <ul>
                <a href="#">Início</a>
                <a href="#quemSou">Quem Sou</a>
                <a href="#projetos">Projetos</a>
                <a href="#">Contato</a>
              </ul>
            </nav>
          </div>
        </header>
        <div className='sectionCenter'>
          <div className='line1'></div>
          <p className='name'>Soraia Duarte</p>
          <p className='design'>Design de Interiores</p>
          <div className='line2'></div>
        </div>
      </div>
      <AboutMe/>
      <Projects/>
    </div>
  )
}
