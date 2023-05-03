import './index.css'
import { AboutMe } from '../AboutMe/index'
import { Projects } from '../Projects'
import { AboutProjects } from '../AboutProject'
import { Contatos } from '../Contatos'

export const Home = () => {

  return(
    <div className='container'>
      <div className='pageHome'>
        <header>
          <div className='sectionTop'>
            <div className='logoName'>
              <img src='/images/logo.png'/>
              <p className='title'>
                Design de Interiores
              </p>
            </div>
            <nav>
              <ul>
                <a href="#quemSou">Quem Sou</a>
                <a href="#projetos">Projetos</a>
                <a href="#contatos">Contatos</a>
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
      <AboutProjects/>
      <Contatos/>
    </div>
  )
}
