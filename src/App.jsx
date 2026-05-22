// import Nav from './pages/nav'
// import Hero from './pages/hero'
// import About from './pages/About'
// import Highlight from './pages/Highlight'
// import Featured from './pages/Featured'
// import './App.css'
// import Footer from './pages/Footer'

// function App() {
//   return (
//     <>
//       <Nav />
//       <Hero />
//       <About/>
//       <Highlight/>
//       <Featured/>
//       <Footer/>

   
//     </>
//   )
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import Women from "./pages/Women";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN LAYOUT */}
        <Route path="/" element={<Layout />}>

          {/* HOME PAGE */}
          <Route index element={<Home />} />

          {/* WOMEN PAGE */}
          <Route path="women" element={<Women />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;