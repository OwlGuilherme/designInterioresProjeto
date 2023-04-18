import './index.css'

export const Home = () => {

  return(
    <div className='container'>
      <div className='pageHome'>
        <header>
          <div className='sectionTop'>
            <div className='logoName'>
              <img src='/images/logo2.png'/>
              <p className='title'>
                Design de Interiores
              </p>
            </div>
            <nav>
              <ul>
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
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
    </div>
  )
}
