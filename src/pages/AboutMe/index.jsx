import './index.css'

export const AboutMe = () => {
    return (
        <div className='cantainerAboutMe'>
            <div id='quemSou' className='aboutMe'>
                <div className='photo'></div>
                <div className='description'>
                    <div className='titleLine'>
                        <div className='titleAboutMe'>
                            Quem sou eu
                        </div>
                        <div className='lineAboutMe'></div>
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
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#713FFF" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,106.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}