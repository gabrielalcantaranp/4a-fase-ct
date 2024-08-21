import React from 'react'
import './index.css'
import Estrelas from'../Estrelas/index'

function Body() {
    return (
        <div className='body-container'>

            <div className='body-info'>

                <div className='body-top'>
                    <div className='body-estrelas'>
                     <Estrelas/>
                    </div>

                    <div className='body-info-estrelas'>
                    <h1 className='info-estrelas'>Mais de 150mil Clientes satisfeitos!</h1>
                    </div>
                </div>

                <div className='body-down'>

                </div>

                <div className='body-contexto'>
                    <h1 className='info-contexto'>Renauguração da Farmácia mais querida do bairro!</h1>
                </div>

                <div className='body-contexto-dois'>
                    <h1 className='info-contexto-dois'>Venha conhecer nosso novo cantinho, com um espaço maior e uma grande variedade de novos produtos. Esperamos você!</h1>
                </div>

                <div className='body-contexto-tres'>
                    <div className='linha-um'>
                        <div className='check-box-um'>

                        </div>
                    </div>     

                    <div className='linha-dois'>
                        <div className='check-box-dois'>

                        </div>
                    </div>  

                    <div className='linha-tres'>
                        <div className='check-box-tres'>

                        </div>
                    </div>   

                    <div className='linha-quatro'>
                        <div className='check-box-quatro'>

                        </div>
                    </div>                                                            
                                  
                </div>

            </div>

            <div className='body-image'>
            </div>

        </div>
    )

}

export default Body 