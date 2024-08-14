import React from 'react'
import './index.css'
import Estrelas from'../Estrelas/index'

function Body() {
    return (
        <div className='body-container'>

            <div className='body-info'>

                <div className='body-estrelas'>
                 <Estrelas/>
                 <h1 className=''>Mais de 150mil Clientes satisfeitos!</h1>
                
                </div>

            </div>

            <div className='body-image'>

            </div>

        </div>
    )

}

export default Body 