// import './App.scss'
// import "./styles/partials/_global.scss";
// import { Navbar } from './Components/navbar/navbar';
// import { FilterPanel } from './Components/filterpanel/filterpanel';
// import { useState } from 'react';
// import { Body } from './Components/Body/Body';
// import { Footer } from './Components/Footer/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {

//   const [filterOpen, setFilterOpen] = useState(false);

//   const [selectedTag, setSelectedTag] = useState(null);

//   return (
//     <>
//       <Navbar filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
//       <div className="filterbody">
//         <FilterPanel
//           filterOpen={filterOpen}
//           setSelectedTag={setSelectedTag}
//           activeTag={selectedTag}
//         />
//         <Body selectedTag={selectedTag} />
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/navbar/navbar';
import FilterPanel from './Components/filterpanel/filterpanel';
import Body from './Components/Body/Body';
import Footer from './Components/footer/Footer'; 
import { useNavigate } from 'react-router-dom';
import { Photo } from './pages/photo/photo';

function App() {

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);

  return (
    <BrowserRouter>
      <Navbar filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
      <div className="filterbody">
        <FilterPanel
          filterOpen={filterOpen}
          setSelectedTag={setSelectedTag}
          activeTag={selectedTag}
        />
        <Routes>
          <Route path="/" element={<Body selectedTag={selectedTag} />} />
          <Route path="/page" element={<Photo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
