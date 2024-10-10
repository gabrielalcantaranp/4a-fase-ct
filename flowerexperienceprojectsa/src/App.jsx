// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar/Navbar';
// // import Home from './pages/Home';
// // import Plantas from './pages/Plantas';
// // import Desidratadas from './pages/Desidratadas';
// // import Arranjos from './pages/Arranjos';
// // import Orquideas from './pages/Orquideas';
// // import Usuario from './pages/Usuario';
// // import Adm from './pages/Adm';
// // import TelaArranjos from './pages/TelaArranjos';
// // import TelaPlantas from './pages/TelaPlantas';
// // import TelaDesidratadas from './pages/TelaDesidratadas';
// // import TelaOrquideas from './pages/TelaOrquideas';
// // import Login from './pages/Login';
// // import Cadastro from './pages/Cadastro';

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const [isAdmin, setIsAdmin] = useState(false); // Estado para admin
// //   const current_theme = localStorage.getItem('current_theme');
// //   const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

// //   useEffect(() => {
// //     localStorage.setItem('current_theme', theme);
// //   }, [theme]);

// //   return (
// //     <div className={`container-main ${theme}`}>
// //       <Router>
// //         <Navbar theme={theme} setTheme={setTheme} isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
// //         <Routes>
// //           <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
// //           <Route path="/plantas" element={<Plantas />} />
// //           <Route path="/desidratadas" element={<Desidratadas />} />
// //           <Route path="/arranjos" element={<Arranjos />} />
// //           <Route path="/orquideas" element={<Orquideas />} />
// //           <Route path="/usuario" element={<Usuario />} />
// //           <Route path='/adm' element={<Adm />} />
// //           <Route path='/telaarranjos' element={<TelaArranjos />} />
// //           <Route path='/telaplantas' element={<TelaPlantas />} />
// //           <Route path='/teladesidratadas' element={<TelaDesidratadas />} />
// //           <Route path='/telaorquideas' element={<TelaOrquideas />} />
// //           <Route path='/login' element={<Login theme={theme} setTheme={setTheme} setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
// //           <Route path='/cadastro' element={<Cadastro theme={theme} setTheme={setTheme} />} />
// //           <Route path='/sair' element={<Home theme={theme} setTheme={setTheme} />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;


// // import React, { useEffect, useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar/Navbar';
// // import Home from './pages/Home';
// // import Plantas from './pages/Plantas';
// // import Desidratadas from './pages/Desidratadas';
// // import Arranjos from './pages/Arranjos';
// // import Orquideas from './pages/Orquideas';
// // import Usuario from './pages/Usuario';
// // import Adm from './pages/Adm';
// // import TelaArranjos from './pages/TelaArranjos';
// // import TelaPlantas from './pages/TelaPlantas';
// // import TelaDesidratadas from './pages/TelaDesidratadas';
// // import TelaOrquideas from './pages/TelaOrquideas';
// // import Login from './pages/Login';
// // import Cadastro from './pages/Cadastro';

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
// //   const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
// //   const current_theme = localStorage.getItem('current_theme');
// //   const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

// //   useEffect(() => {
// //     localStorage.setItem('current_theme', theme);
// //   }, [theme]);

// //   const handleLogin = (isAdmin) => {
// //     setIsLoggedIn(true);
// //     setIsAdmin(isAdmin);
// //     localStorage.setItem('isLoggedIn', true);
// //     localStorage.setItem('isAdmin', isAdmin);
// //   };

// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     setIsAdmin(false);
// //     localStorage.removeItem('isLoggedIn');
// //     localStorage.removeItem('isAdmin');
// //   };

// //   return (
// //     <div className={`container-main ${theme}`}>
// //       <Router>
// //         <Navbar theme={theme} setTheme={setTheme} isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleLogout={handleLogout} />
// //         <Routes>
// //           <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
// //           <Route path="/plantas" element={<Plantas />} />
// //           <Route path="/desidratadas" element={<Desidratadas />} />
// //           <Route path="/arranjos" element={<Arranjos />} />
// //           <Route path="/orquideas" element={<Orquideas />} />
// //           <Route path="/usuario" element={<Usuario />} />
// //           <Route path="/adm" element={<Adm />} />
// //           <Route path="/telaarranjos" element={<TelaArranjos />} />
// //           <Route path="/telaplantas" element={<TelaPlantas />} />
// //           <Route path="/teladesidratadas" element={<TelaDesidratadas />} />
// //           <Route path="/telaorquideas" element={<TelaOrquideas />} />
// //           <Route path="/login" element={<Login theme={theme} setTheme={setTheme} handleLogin={handleLogin} />} />
// //           <Route path="/cadastro" element={<Cadastro theme={theme} setTheme={setTheme} />} />
// //           <Route path="/sair" element={<Home theme={theme} setTheme={setTheme} />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Plantas from './pages/Plantas';
// import Desidratadas from './pages/Desidratadas';
// import Arranjos from './pages/Arranjos';
// import Orquideas from './pages/Orquideas';
// import Usuario from './pages/Usuario';
// import Adm from './pages/Adm';
// import TelaArranjos from './pages/TelaArranjos';
// import TelaPlantas from './pages/TelaPlantas';
// import TelaDesidratadas from './pages/TelaDesidratadas';
// import TelaOrquideas from './pages/TelaOrquideas';
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
//   const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
//   const current_theme = localStorage.getItem('current_theme');
//   const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
//   const [pedidos, setPedidos] = useState([]);

//   useEffect(() => {
//     localStorage.setItem('current_theme', theme);
//   }, [theme]);

//   const handleLogin = (isAdmin) => {
//     setIsLoggedIn(true);
//     setIsAdmin(isAdmin);
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('isAdmin', isAdmin);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('isAdmin');
//   };

//   const addPedido = (pedido) => {
//     setPedidos([...pedidos, pedido]);
//   };

//   const removePedido = (index) => {
//     setPedidos((prevPedidos) => prevPedidos.filter((_, i) => i !== index));
// };


//   return (
//     <div className={`container-main ${theme}`}>
//       <Router>
//         <Navbar theme={theme} setTheme={setTheme} isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
//           <Route path="/plantas" element={<Plantas />} />
//           <Route path="/desidratadas" element={<Desidratadas />} />
//           <Route path="/arranjos" element={<Arranjos addPedido={addPedido} />} />
//           <Route path="/orquideas" element={<Orquideas />} />
//           <Route path="/usuario" element={<Usuario pedidos={pedidos} removePedido={removePedido} />} />
//           <Route path="/adm" element={<Adm />} />
//           <Route path="/telaarranjos" element={<TelaArranjos addPedido={addPedido} />} />
//           <Route path="/telaplantas" element={<TelaPlantas addPedido={addPedido} />} />
//           <Route path="/teladesidratadas" element={<TelaDesidratadas addPedido={addPedido} />} />
//           <Route path="/telaorquideas" element={<TelaOrquideas addPedido={addPedido} />} />
//           <Route path="/login" element={<Login theme={theme} setTheme={setTheme} handleLogin={handleLogin} />} />
//           <Route path="/cadastro" element={<Cadastro theme={theme} setTheme={setTheme} />} />
//           <Route path="/sair" element={<Home theme={theme} setTheme={setTheme} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Plantas from './pages/Plantas';
// import Desidratadas from './pages/Desidratadas';
// import Arranjos from './pages/Arranjos';
// import Orquideas from './pages/Orquideas';
// import Usuario from './pages/Usuario';
// import Adm from './pages/Adm';
// import TelaArranjos from './pages/TelaArranjos';
// import TelaPlantas from './pages/TelaPlantas';
// import TelaDesidratadas from './pages/TelaDesidratadas';
// import TelaOrquideas from './pages/TelaOrquideas';
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
//   const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
//   const current_theme = localStorage.getItem('current_theme');
//   const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
//   const [pedidos, setPedidos] = useState(() => {
//     // Recupera os pedidos do localStorage
//     const savedPedidos = localStorage.getItem('pedidos');
//     return savedPedidos ? JSON.parse(savedPedidos) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('current_theme', theme);
//   }, [theme]);

//   useEffect(() => {
//     // Armazena os pedidos no localStorage
//     localStorage.setItem('pedidos', JSON.stringify(pedidos));
//   }, [pedidos]);

//   const handleLogin = (isAdmin) => {
//     setIsLoggedIn(true);
//     setIsAdmin(isAdmin);
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('isAdmin', isAdmin);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('isAdmin');
//   };

//   const addPedido = (pedido) => {
//     setPedidos((prevPedidos) => [...prevPedidos, pedido]);
//   };

//   const removePedido = (index) => {
//     setPedidos((prevPedidos) => prevPedidos.filter((_, i) => i !== index));
//   };

//   return (
//     <div className={`container-main ${theme}`}>
//       <Router>
//         <Navbar theme={theme} setTheme={setTheme} isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
//           <Route path="/plantas" element={<Plantas />} />
//           <Route path="/desidratadas" element={<Desidratadas />} />
//           <Route path="/arranjos" element={<Arranjos addPedido={addPedido} />} />
//           <Route path="/orquideas" element={<Orquideas />} />
//           <Route path="/usuario" element={<Usuario pedidos={pedidos} removePedido={removePedido} />} />
//           <Route path="/adm" element={<Adm />} />
//           <Route path="/telaarranjos" element={<TelaArranjos addPedido={addPedido} />} />
//           <Route path="/telaplantas" element={<TelaPlantas addPedido={addPedido} />} />
//           <Route path="/teladesidratadas" element={<TelaDesidratadas addPedido={addPedido} />} />
//           <Route path="/telaorquideas" element={<TelaOrquideas addPedido={addPedido} />} />
//           <Route path="/login" element={<Login theme={theme} setTheme={setTheme} handleLogin={handleLogin} />} />
//           <Route path="/cadastro" element={<Cadastro theme={theme} setTheme={setTheme} />} />
//           <Route path="/sair" element={<Home theme={theme} setTheme={setTheme} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Plantas from './pages/Plantas';
// import Desidratadas from './pages/Desidratadas';
// import Arranjos from './pages/Arranjos';
// import Orquideas from './pages/Orquideas';
// import Usuario from './pages/Usuario';
// import Adm from './pages/Adm';
// import TelaArranjos from './pages/TelaArranjos';
// import TelaPlantas from './pages/TelaPlantas';
// import TelaDesidratadas from './pages/TelaDesidratadas';
// import TelaOrquideas from './pages/TelaOrquideas';
// import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
//   const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
//   const current_theme = localStorage.getItem('current_theme');
//   const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
//   const [pedidos, setPedidos] = useState(() => {
//     // Recupera os pedidos do localStorage
//     const savedPedidos = localStorage.getItem('pedidos');
//     return savedPedidos ? JSON.parse(savedPedidos) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('current_theme', theme);
//   }, [theme]);

//   useEffect(() => {
//     // Armazena os pedidos no localStorage
//     localStorage.setItem('pedidos', JSON.stringify(pedidos));
//   }, [pedidos]);

//   const handleLogin = (isAdmin) => {
//     setIsLoggedIn(true);
//     setIsAdmin(isAdmin);
//     localStorage.setItem('isLoggedIn', 'true');
//     localStorage.setItem('isAdmin', isAdmin);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsAdmin(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('isAdmin');
//   };

//   const addPedido = (pedido) => {
//     setPedidos((prevPedidos) => [...prevPedidos, pedido]);
//   };

//   const removePedido = (index) => {
//     setPedidos((prevPedidos) => prevPedidos.filter((_, i) => i !== index));
//   };

//   const clearPedidos = () => {
//     setPedidos([]); // Limpa todos os pedidos
//   };

//   return (
//     <div className={`container-main ${theme}`}>
//       <Router>
//         <Navbar theme={theme} setTheme={setTheme} isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleLogout={handleLogout} />
//         <Routes>
//           <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
//           <Route path="/plantas" element={<Plantas />} />
//           <Route path="/desidratadas" element={<Desidratadas />} />
//           <Route path="/arranjos" element={<Arranjos addPedido={addPedido} />} />
//           <Route path="/orquideas" element={<Orquideas />} />
//           <Route path="/usuario" element={<Usuario pedidos={pedidos} removePedido={removePedido} clearPedidos={clearPedidos} />} />
//           <Route path="/adm" element={<Adm />} />
//           <Route path="/telaarranjos" element={<TelaArranjos addPedido={addPedido} />} />
//           <Route path="/telaplantas" element={<TelaPlantas addPedido={addPedido} />} />
//           <Route path="/teladesidratadas" element={<TelaDesidratadas addPedido={addPedido} />} />
//           <Route path="/telaorquideas" element={<TelaOrquideas addPedido={addPedido} />} />
//           <Route path="/login" element={<Login theme={theme} setTheme={setTheme} handleLogin={handleLogin} />} />
//           <Route path="/cadastro" element={<Cadastro theme={theme} setTheme={setTheme} />} />
//           <Route path="/sair" element={<Home theme={theme} setTheme={setTheme} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Plantas from './pages/Plantas';
import Desidratadas from './pages/Desidratadas';
import Arranjos from './pages/Arranjos';
import Orquideas from './pages/Orquideas';
import Usuario from './pages/Usuario';
import Adm from './pages/Adm';
import TelaArranjos from './pages/TelaArranjos';
import TelaPlantas from './pages/TelaPlantas';
import TelaDesidratadas from './pages/TelaDesidratadas';
import TelaOrquideas from './pages/TelaOrquideas';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === 'true');
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [pedidos, setPedidos] = useState(() => {
    const savedPedidos = localStorage.getItem('pedidos');
    return savedPedidos ? JSON.parse(savedPedidos) : [];
  });

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  const handleLogin = (isAdmin) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isAdmin', isAdmin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('emailLogado'); // Remove o email logado
    // Limpar pedidos, se necessário
    setPedidos([]); // Opcional, se você quiser limpar os pedidos ao fazer logout
  };

  const addPedido = (pedido) => {
    setPedidos((prevPedidos) => [...prevPedidos, pedido]);
  };

  const removePedido = (index) => {
    setPedidos((prevPedidos) => prevPedidos.filter((_, i) => i !== index));
  };

  const clearPedidos = () => {
    setPedidos([]); // Limpa todos os pedidos
  };

  return (
    <div className={`container-main ${theme}`}>
      <Router>
        <Navbar
          theme={theme}
          setTheme={setTheme}
          isLoggedIn={isLoggedIn}
          isAdmin={isAdmin}
          handleLogout={handleLogout}
        />
<Routes>
    <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
    <Route path="/plantas" element={<Plantas />} />
    <Route path="/desidratadas" element={<Desidratadas />} />
    <Route path="/arranjos" element={<Arranjos addPedido={addPedido} />} />
    <Route path="/orquideas" element={<Orquideas />} />
    <Route path="/usuario" element={<Usuario pedidos={pedidos} removePedido={removePedido} clearPedidos={clearPedidos} handleLogout={handleLogout} />} />
    <Route path="/adm" element={<Adm />} />
    <Route path="/telaarranjos" element={<TelaArranjos addPedido={addPedido} isLoggedIn={isLoggedIn} />} />
    <Route path="/telaplantas" element={<TelaPlantas addPedido={addPedido} />} />
    <Route path="/teladesidratadas" element={<TelaDesidratadas addPedido={addPedido} />} />
    <Route path="/telaorquideas" element={<TelaOrquideas addPedido={addPedido} />} />
    <Route path="/login" element={<Login theme={theme} setTheme={setTheme} handleLogin={handleLogin} />} />
    <Route path="/cadastro" element={<Cadastro theme={theme} setTheme={setTheme} />} />
    <Route path="/sair" element={<Home theme={theme} setTheme={setTheme} />} />
</Routes>

      </Router>
    </div>
  );
}

export default App;

