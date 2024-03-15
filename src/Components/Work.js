import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import KellyPerfil from "../Assets/Kelly.png";
import MarinaPerfil from "../Assets/Marina.png";
import LouPerfil from "../Assets/Louysse.png";


const Work = () => {
const workInfoData = [
{
    image :KellyPerfil,
    title: "Kelly Souza",
    text: "Bióloga e Médica Veterinária Especializada em Clínica e Cirurgia de Animais Silvestres Mestrado em Saúde Animal na Amazônia",

},
{
    image :LouPerfil,
    title: "Louysse Monteiro",
    text: "Médica Veterinária Especializada em Clínica e Cirurgia de Animais Silvestres Mestrado em Saúde Animal na Amazônia",
    
},
{
    image :MarinaPerfil,
    title: "Marina Benarrós",
    text: "Médica Veterinária Especializada em Clínica e Cirurgia de Animais Silvestres Mestrado em Sanidade Animal e Saúde Pública nos Trópicos",
    
}
]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        {/* <p className='primary-subheading'> teste </p> */}
        <h1 className='primary-heading'>Público-Alvo: </h1>
        <p className='primary-text'>
        Alunos e Profissionais da Medicina Veterinária, Interessados em Animais Silvestres e Pets Exóticos
        </p>
        </div>
        <div className='work-section-top'>
        {/* <p className='primary-subheading'> teste </p> */}
        <h1 className='primary-heading'>O que você vai aprender: </h1>
        <p className='primary-text'>
        - 📋 Anamnese detalhada para identificação de sintomas e histórico de vida.
        - 🐾 Exame físico adaptado às diferentes espécies.
        - 🚑 Diagnóstico diferencial e condutas clínicas.
        - 📊 Abordagem específica para pets exóticos e silvestres na rotina clínica.

        </p>
        </div>
        <div className='work-section-top'>
        {/* <p className='primary-subheading'> teste </p> */}
        <h1 className='primary-heading'>Duração do Curso: </h1>
        <p className='primary-text'>
        - ⏰ 6 horas de conteúdo rico e envolvente.
        </p>
        </div>

        <div className='work-section-top'>
        {/* <p className='primary-subheading'> teste </p> */}
        <h1 className='primary-heading'>Com Emissão de Certificado de Conclusão: </h1>
        <p className='primary-text'>
        - 🎓 Receba um certificado e valide sua expertise em semiologia de animais silvestres.
        </p>
        </div>

        <div className='work-section-top'>
        {/* <p className='primary-subheading'> teste </p> */}
        <h1 className='primary-heading'>Formas de Pagamento </h1>
        <p className='primary-text'>
        - 💸 Valor acessível e opções de pagamento facilitadas (Pix, cartão de crédito e débito). Mais informações no link;/

        Não perca a oportunidade de aprimorar suas habilidades na medicina veterinária de animais silvestres! Inscreva-se agora e leve sua prática para o próximo nível. 🚀🌏

        Junte-se a nós na jornada de cuidado e respeito à Vida Selvagem!

        [Inscreva-se Agora] [Link de Inscrição]

        Clínica Vida Selvagem - Cuidando da Natureza, Cuidando de Você

        </p>
        </div>
        <div className='work-section-bottom'>   
            {workInfoData.map((data) =>(
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                        ))}
        </div>
    </div>
  )
}

export default Work