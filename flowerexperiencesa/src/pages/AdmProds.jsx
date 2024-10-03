import React from 'react';
import './AdmProds.css';


const AdmProds = ({ theme, setTheme }) => {
    return (
        <div className='admprods'>
            <div className='principal'>
                <div className='div-infos-adm'>
                    <div className='foto-adm'>
                    </div>
                    <div className='nome-adm'>
                        <p>Olá ADMINISTRADOR</p>
                    </div>                   
                </div>

                <div className='principal-dois'>

                    <div className='container-mid'>
                        <div className='container-list'>
                            <div className='list-css'>

                            </div>

                        </div>

                        <div className='container-foto'>
                            <p>ADMINISTRAR <br></br>PRODUTO</p>

                        </div>

                    </div>

                    <div className='container-button'>

                        <div className='button-div'>
                        <button className='button-prod-css'>ADICIONAR PRODUTO</button>
                        <button className='button-prod-css'>EDITAR PRODUTO</button>
                        <button className='button-excluirprod-css'>EXCLUIR PRODUTO</button>
                        </div>

                    </div>

          
                </div>
            </div>
        </div>
    );
}

export default AdmProds;
