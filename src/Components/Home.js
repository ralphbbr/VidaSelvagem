import React from "react";
import Navbar from "./Navbar"; 
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import VidaSelvagemGrupo from "../Assets/VidaSelvagem.jpg"
import Socias from "../Assets/Socias.jpg"
import { FiArrowRight} from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src ={BannerBackground} alt=""/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                Curso: Semiologia de Animais Silvestres - Da Anamnese ao Exame Físico
                </h1>
                <p className="primary-text">
                Bem-vindo ao curso que transformará a sua prática veterinária!
                Você é apaixonado por animais silvestres e deseja aprimorar suas habilidades na área? Apresentamos o curso "Semiologia de Animais Silvestres - Da Anamnese ao Exame Físico", ministrado pela renomada equipe da Empresa Vida Selvagem, composta pelas experientes Médicas Veterinárias: Marina Benarrós, Louysse Monteiro e Kelly Souza.

                </p>
                {/* <button className="secondary-button">
                    Order now <FiArrowRight />
                </button> */}

            </div>
            <div className="home-image-section">
                <img src={VidaSelvagemGrupo} alt=""/>
            </div>
        </div>
    </div>
  );
};

export default Home