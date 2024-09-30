// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home.jsx';
// import Plantas from './pages/Plantas';
// import Desidratadas from './pages/Desidratadas';
// import Arranjos from './pages/Arranjos';
// import Orquideas from './pages/Orquideas';


// const App = () => {

//   const current_theme = localStorage.getItem('current_theme');
//   const [theme, setTheme] = useState(current_theme ?
//     current_theme : 'light');

//   useEffect(() => {
//     localStorage.setItem('current_theme', theme)
//   }, [theme])

//   return (
//     <>
//       <Router>

//         <div className={`container ${theme}`}>
//           <Navbar theme={theme} setTheme={setTheme} />
//         </div>
//         <Switch>
//           <Route exact path='/'>
//             <Home />
//           </Route>

//           <Route exact path='plantas'>
//             <Plantas />
//           </Route>

//           <Route exact path='desidratadas'>
//             <Desidratadas />
//           </Route>

//           <Route exact path='arranjos'>
//             <Arranjos />
//           </Route>

//           <Route exact path='orquideas'>
//             <Orquideas />
//           </Route>

//         </Switch>
//         <p>Footer</p>

//       </Router>
//     </>
//   )
// }

// export default App



import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Plantas from './pages/Plantas';
import Desidratadas from './pages/Desidratadas';
import Arranjos from './pages/Arranjos';
import Orquideas from './pages/Orquideas';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  return (
    <div className={`container-main ${theme}`}>
    <Router>
      <div >
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/desidratadas" element={<Desidratadas />} />
          <Route path="/arranjos" element={<Arranjos />} />
          <Route path="/orquideas" element={<Orquideas />} />
        </Routes>
      </div>
      <Footer theme={theme} setTheme={setTheme} />
    </Router>
    </div>
  );
}

export default App;
