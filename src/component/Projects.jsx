import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import '../css/Projects.css';
import sassSVG from '../assets/svg/sassLogo.svg';
import webGenerator from '../assets/WebsiteGenerator.jpg';
import playlistMaker from '../assets/PlaylistMaker.jpg';
import gestor from '../assets/gestor.jpg';
import vital from '../assets/vital.jpg';
import authySite from '../assets/TicketAuthSite.jpg';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
  const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
  const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;

  function updateIndex(newIndex) {
    newIndex < 0
      ? newIndex = 0
      : newIndex >= projects.length 
      ? newIndex = projects.length - 1 
      : newIndex
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "Gestor Empresarial",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
          {sassLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React Router</p>
        </>
      ),
      description: (
        <>
          <p>
            Este proyecto es una plataforma web moderna diseñada para pequeñas y medianas empresas que buscan digitalizar su operación. Incluye:

Gestión de clientes: Alta y edición rápida por nombre, correo y sucursal.

Inventario con tabla interactiva: Ordenable por nombre o precio.

Gráficas dinámicas: Para visualizar ventas mensuales por sucursal o producto.

Página de contacto: Horarios por sucursal, teléfono y redes sociales.

Diseño responsive y profesional en tonos azul oscuro y gris claro.

Ideal para empresas que buscan eficiencia, control y presentación profesional desde cualquier dispositivo.


          </p>
        </>
      ),
      demoUrl: "https://gestor-empresarial.netlify.app/",
      image: gestor,
    },
    {
      name: "Vital Arquitectura",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>React Router</p>
          <p>Gatsby</p>
        </>
      ),
      description: (
        <>
          <p>
            Sitio desarrollado para una empresa de arquitectura con el objetivo de presentar sus proyectos anteriores a clientes potenciales. Incluye una galería de imágenes y un visor de renders interactivo para mostrar diseños arquitectónicos en detalle. La página facilita una experiencia visual profesional y atractiva, mejorando la comunicación del portafolio de la firma.
          </p>
        </>
      ),
      demoUrl: "https://vital-arquitectura.netlify.app/",
      image: vital,
    },
  ];

  return (
    <div className="projectWheelContainer" onTouchMove={updateIndex}>
      <div
        className="projectWheel"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          return (
            <section className="project" key={index}>
              <div className='projectImg'>
                <img src={project.image} />
              </div>
              <div className='projectInfo'>
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className='projectDeps'>
                  {project.dependencies}
                </div>
                <div className='projectDesc'>
                  {project.description}
                </div>
                <a target='_blank' href={project.demoUrl}>Ver Demo</a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}>
                <span className={
                  `${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`
                  }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
