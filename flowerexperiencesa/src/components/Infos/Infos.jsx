import React from 'react'
import './Infos.css'

function Infos() {
    return (
        <div className='body-container'>
          
            <div className='body-infos'>

                <div className='frete-container'>

                    <div className='frete-box'>

                        <div className='frete-icon'>
                        <img src={theme == 'dark' ? insta_light : insta_dark} alt='' className='social-media-icon' />

                        </div>

                        <div className='frete-infos'>

                            <div className='titulo-frete'>
                                 <p className='poppins-bold'>LEVAMOS E BUSCAMOS</p> 

                            </div>

                            <div className='frase-frete'>
                                 <p className='poppins-regular'>não se preocupe com o deslocamento.</p> 

                            </div>

                        </div>

                    </div>

                </div>

                <div className='card-container'>

                    <div className='card-box'>

                        <div className='card-icon'>
                        <img src={theme == 'dark' ? insta_light : insta_dark} alt='' className='social-media-icon' />

                        </div>

                        <div className='card-infos'>

                            <div className='titulo-card'>   
                            <p className='poppins-bold'>ASSINE AINDA HOJE</p>

                            </div>

                            <div className='frase-card'>    
                                <p className='poppins-regular'>assinatua mensal, trimestral, semestral e anual.</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='calendario-container'>

                    <div className='calendario-box'>

                        <div className='calendario-icon'>
                        <img src={theme == 'dark' ? insta_light : insta_dark} alt='' className='social-media-icon' />
                        </div>

                        <div className='calendario-infos'>

                            <div className='titulo-calendario'>
                            <p className='poppins-bold'>AGENDE SUA ENTREGA</p>
                            </div>

                            <div className='frase-calendario'>
                            <p className='poppins-regular'>escolha o melhor dia para florir.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Infos