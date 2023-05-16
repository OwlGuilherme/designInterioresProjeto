import './index.css'

export const AboutMe = () => {
    return (
        <div className='cantainerAboutMe'>
            <div id='quemSou' className='aboutMe'>
                <div className='photo'>
                    <img src='/images/FotoOficial.png'/>
                </div>
                <div className='description'>
                    <div className='titleLine'>
                        <div className='titleAboutMe'>
                            Quem sou
                        </div>
                        <div className='lineAboutMe'></div>
                        <div className='circle'>
                            <div className='photoCel'>
                                <img src='/images/FotoOficial.png'/>
                            </div>
                        </div>
                    </div>
                    <div className='textAboutMe'>
                        <p>
                            Com mais de 12 anos de experiência como designer de interiores, possuo as habilidades e qualificações necessárias para transformar qualquer 
                            espaço em um ambiente funcional, confortável e esteticamente agradável. Meu conhecimento técnico inclui domínio de materiais, acabamentos, 
                            iluminação e mobiliário, e minhas habilidades criativas permitem-me criar projetos personalizados que atendam às necessidades e preferências de 
                            cada cliente. Ao longo dos anos, tive a oportunidade de trabalhar com uma ampla variedade de projetos, incluindo novas construções, reformas e 
                            remodelações, e desenvolvi habilidades em gerenciamento de projetos, trabalhando dentro de prazos e orçamentos, além de ter excelentes habilidades 
                            de comunicação e negociação.
                        </p>
                    </div>
                    <div className='textAboutMeCell'>
                        <p>
                        Com mais de 12 anos de experiência em design de interiores, transformo espaços em ambientes funcionais, confortáveis e esteticamente agradáveis. 
                        Com habilidades em materiais, acabamentos, iluminação e mobiliário, crio projetos personalizados para cada cliente. Trabalhei em projetos variados, 
                        incluindo construções, reformas e remodelações, gerenciando prazos e orçamentos. Minhas habilidades de comunicação e negociação garantem colaboração
                        harmoniosa com os clientes.
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 320"><path fill="#005000" fill-opacity="1" d="M0,320L60,293.3C120,267,240,213,360,202.7C480,192,600,224,720,213.3C840,203,960,149,1080,117.3C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>          
        </div>
    )
}