import React from "react";
import Navbar from "./Navbar"; 
import BannerBackground from "../Assets/home-banner-background.png";
import FundoVida from "../Assets/Fundolaranja1.png"
import BannerImage from "../Assets/home-banner-image.png";
import VidaSelvagemGrupo from "../Assets/FotoVS.png"
import Socias from "../Assets/FotoVS.png"
import { FiArrowRight} from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src ={FundoVida} alt=""/>
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                Semiologia de Animais Silvestres - Da Anamnese ao Exame Físico
                </h1>
                <p className="primary-text">
                Seja bem-vindo ao curso que transformará a sua prática veterinária!
                {/* Você é apaixonado por animais silvestres e deseja aprimorar suas habilidades na área? Apresentamos o curso "Semiologia de Animais Silvestres - Da Anamnese ao Exame Físico", ministrado pela renomada equipe da Empresa Vida Selvagem, composta pelas experientes Médicas Veterinárias: Marina Benarrós, Louysse Monteiro e Kelly Souza. */}                
                </p>
                <p className="primary-text">
                Você é apaixonado por animais silvestres e deseja aprimorar suas habilidades na área?
                </p>
                <p className="primary-text">
                Então venha conhecer o curso "Semiologia de Animais Silvestres - Da Anamnese ao Exame Físico", ministrado pela equipe do Vida Selvagem, composta pelas experientes Médicas Veterinárias: Marina Benarrós, Louysse Monteiro e Kelly Souza.
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