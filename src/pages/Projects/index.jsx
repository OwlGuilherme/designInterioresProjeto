import './index.css'

export const Projects = () => {
    return(
        <div id='projetos' className='containerProjects'>
            <div className='titleProject'>
                <p>Eficiência, inovação e soluções de qualidade.</p>
                <div className='linePage'>
                    <div className='lineTitle'></div>
                </div>
            </div>
            <div className='projects'>
                <div className='combo1'>
                    <div className='photo1'>
                        <p>Casas</p>
                        <img src='/images/casa.webp'/>
                    </div>
                    <div className='photo2'>
                        <p>Escritórios</p>
                        <img src='/images/escritorio.webp'/>
                    </div>
                </div>
                <div className='combo2'>
                    <div className='photo3'>
                        <p>Cozinhas</p>
                        <img src='/images/cozinhas.png'/>
                    </div>
                    <div className='photo4'>
                        <p>Banheiros</p>
                        <img src='/images/banheiro.jpg'/>
                    </div>
                </div>
            </div>
        </div>
    )
}