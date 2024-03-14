import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import CursoImagem from "../Assets/Loucurso.jpg"
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return ( <div className='about-section-container'>
        <div className='about-background-image-container'>
        <img src={AboutBackground} alt=""/>
        </div>
        <div className='about-section-image-container'>
            <img src={CursoImagem} alt=""/>
        </div>
        <div className='about-section-text-container'>
        {/* <p className='primary-subheading'>  teste </p> */}
        <h1 className='primary-heading'>
        Neste curso você terá acesso a: 11
        </h1>
        <p className='primary-text'>
        Conteúdo Abrangente: Explore os fundamentos da semiologia, desde a anamnese até o exame físico, adaptados às particularidades dos animais silvestres.
        </p>
        <p className='primary-text'>
        Experiência Prática: Aprenda com casos reais e situações do dia a dia, proporcionando uma compreensão aprofundada e prática.
        </p>
        <p className='primary-text'>
        Instrutores Especializados: Nossa equipe é composta por profissionais experientes e apaixonados pela medicina veterinária de animais silvestres e exóticos.
        </p>
        <p className='primary-text'>
        Online e Acessível: Participe do curso de qualquer lugar, no seu ritmo. Conteúdo disponível 24 horas por dia, 7 dias por semana.
        </p>
        {/* <div className='about-buttons-container'>
        <button className='secondary-button'>Learn More </button>
        <button className='watch-videos-button'>
            {""}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3fy0qSQUTHk?si=VOtWBP90641nKD8R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <BsFillPlayCircleFill/> Watch Video 
            
        </button>
        </div> */}
        </div>
    </div>
  )
}

export default About