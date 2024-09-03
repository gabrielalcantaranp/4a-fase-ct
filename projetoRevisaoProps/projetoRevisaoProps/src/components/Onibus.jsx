import React from 'react'
import './Onibus.css'

// const carros = [
//     { modelo: "Fusca", ano: 1969, genero: "Hatchback", id: Date.now()+ 0},
//     { modelo: "Civic", ano: 2022, genero: "Sedan", id: Date.now() + 1},
//     { modelo: "Camaro", ano: 2023, genero: "Conversível", id: Date.now() + 2},
//     { modelo: "Pajero", ano: 2018, genero: "SUV", id: Date.now() + 3},
//     { modelo: "Fiesta", ano: 2020, genero: "Hatchback", id: Date.now() + 4},
//     { modelo: "Golf", ano: 2019, genero: "Hatchback", id: Date.now() + 5},
//     { modelo: "Corolla", ano: 2021, genero: "Sedan", id: Date.now() + 6  },
//     { modelo: "Ranger", ano: 2022, genero: "Pickup", id: Date.now() + 7  },
//     { modelo: "Strada", ano: 2023, genero: "Pickup", id: Date.now() + 8  },
//     { modelo: "Onix", ano: 2020, genero: "Hatchback", id: Date.now() + 9  },
//     { modelo: "Jetta", ano: 2021, genero: "Sedan", id: Date.now() + 10  },
//     { modelo: "Compass", ano: 2022, genero: "SUV", id: Date.now() + 11  },
//     { modelo: "Tracker", ano: 2023, genero: "SUV", id: Date.now() + 12  },
//     { modelo: "Palio", ano: 2017, genero: "Hatchback", id: Date.now() + 13  },
//     { modelo: "C4", ano: 2018, genero: "Sedan", id: Date.now() + 14  },
//     { modelo: "HB20", ano: 2019, genero: "Hatchback", id: Date.now() + 15  },
//     { modelo: "Kicks", ano: 2020, genero: "SUV", id: Date.now() + 16  },
//     { modelo: "T-Cross", ano: 2021, genero: "SUV", id: Date.now() + 17  },
//     { modelo: "Hilux", ano: 2022, genero: "Pickup", id: Date.now() + 18  },
//     { modelo: "S10", ano: 2023, genero: "Pickup", id: Date.now() + 19  },
//     { modelo: "EcoSport", ano: 2019, genero: "SUV", id: Date.now() + 20  }
//   ];

function Onibus(props) {
    let onibus = props.onibus
  return (
    <div className="onibus-container">
      <h2>{onibus.modelo}</h2>
      <p>{onibus.ano}</p>
      <p>{onibus.genero}</p>
      <p>{onibus.id}</p>
    </div>
  )
}

export default Onibus
