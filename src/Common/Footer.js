import React from 'react';
import logo from '../img/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faGooglePlay, faAppStoreIos, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {

    return (

        <footer className="bg-dark text-light text-center py-5">
            <section className='container'>
                <section className='row'>
                    <div className='col-lg-4 col-sm-12 my-3'>
                        <h5>Seguinos en:</h5>
                        <Link to='*' className='text-light'><FontAwesomeIcon icon={faFacebookSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                        <Link to='*' className='text-light'><FontAwesomeIcon icon={faTwitterSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                        <Link to='*' className='text-light'><FontAwesomeIcon icon={faInstagramSquare} className='m-2 fa-2x text-decoration-none' /></Link>
                    </div>
                    <div className='col-lg-4 col-sm-12 my-3'>
                        <Link to='./'>
                            <img src={logo} alt="logo CoDiario" className='w-50' />
                        </Link>
                    </div>
                    <div className='col-lg-4 col-sm-12 my-3'>
                        <h5>Descarga la app:</h5>
                        <Link to='*' className='text-light'><FontAwesomeIcon icon={faGooglePlay} className='m-2 fa-3x text-decoration-none' /></Link>
                        <Link to='*' className='text-light'><FontAwesomeIcon icon={faAppStoreIos} className='m-2 fa-3x text-decoration-none' /></Link>
                    </div>
                </section>
                <hr className='my-3' />
                <section className='row'>
                    <div className=' my-2 col-lg-4 col-sm-12 my-2 d-flex flex-column'>
                        <Link to='*' className='text-light text-decoration-none'> <h6>Politicas de privacidad</h6></Link>
                        <Link to='*' className='text-light text-decoration-none'> <h6>Terminos y condiciones</h6></Link>
                        <Link to='*' className='text-light text-decoration-none'> <h6>¿Como anunciar?</h6></Link>
                        <Link to='*' className='text-light text-decoration-none'> <h6>Ayuda</h6></Link>
                    </div>
                    <div className='my-2 col-lg-4 col-sm-12 my-2 d-flex flex-column'>
                        <h6>Categorias del diario:</h6>
                        <Link to='*' className='text-light text-decoration-none'>Actualidad</Link>
                        <Link to='*' className='text-light text-decoration-none'>Espectaculos</Link>
                        <Link to='*' className='text-light text-decoration-none'>Tecnologia</Link>
                        <Link to='*' className='text-light text-decoration-none'>Deporte</Link>
                        <Link to='*' className='text-light text-decoration-none'>Politica</Link>
                        <Link to='*' className='text-light text-decoration-none'>Economia</Link>
                        <Link to='*' className='text-light text-decoration-none'>Salud</Link>
                        <Link to='*' className='text-light text-decoration-none'>Fotografia</Link>
                    </div>
                    <div className='my-2 col-lg-4 col-sm-12 d-flex flex-column'>
                        <h6>General Paz 576, San Miguel de Tucumán (T4000) , Tucumán</h6>
                        <Link to='*' className='text-light text-decoration-none'><FontAwesomeIcon icon={faEnvelopeSquare} className='m-2 fa-2x text-decoration-none' />-Contacto-</Link>
                        <Link to='*' className='text-light text-decoration-none'><FontAwesomeIcon icon={faWhatsappSquare} className='m-2 fa-2x text-decoration-none' />381512345</Link>
                        </div>
                </section>
                <p className='mt-5'>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
    );
};

export default Footer;