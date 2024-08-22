import React from 'react'
import './index.css'
import Check from '../Check/index'
import Marcia from '../Marcia/index'

function Body() {
    return (
        <div className='body-container'>


            <div className='body-info'>

                <div className='body-top'>
                    <h1 className='info-contexto'>A Farmácia mais <br/>querida do bairro!</h1>
                </div>

                <div className='body-down'>

                </div>

                <div className='body-contexto'>
                    <img src='./images/placa.png' className='placa-css'/>
                    <img src='./images/camisetap.png' className='camisetap-css'/>
                </div>

                <div className='body-contexto-tres'>
                    
                    <div className='linha-um'>
                        <div className='check-box-um'>  
                        <Check/>
                        </div>
                        <text className='check-list'>Promoções especiais em toda a loja!</text>
                    </div>     

                    <div className='linha-dois'>
                        <div className='check-box-dois'>
                        <Check/>
                        </div>
                        <text className='check-list'>15% de Desconto para novos clientes!</text>
                        
                    </div>  

                    <div className='linha-tres'>
                        <div className='check-box-tres'>
                        <Check/>
                        </div>
                        <text className='check-list'>Traga um amigo e ganhe uma camiseta exclusiva!</text>
                    </div>   

                    <div className='linha-quatro'>
                        <div className='check-box-quatro'>
                        <Check/>
                        </div>
                        <text className='check-list'>Estacionamento amplo e exclusivo para clientes!</text>
                    </div>                                                            
                                  
                </div>

            </div>

            <div className='body-image'>
                <Marcia/>
            </div>

        </div>
    )

}

export default Body 