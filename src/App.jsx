import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/navbar/navbar';
import FilterPanel from './Components/filterpanel/filterpanel';
import Body from './Components/Body/Body';
import Footer from './Components/footer/Footer';
import { Photo } from './pages/photo/photo';

function App() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar filterOpen={filterOpen} setFilterOpen={setFilterOpen} />
              <section className="filterbody">
                <FilterPanel
                  filterOpen={filterOpen}
                  setSelectedTag={setSelectedTag}
                  activeTag={selectedTag}
                />
                <Body selectedTag={selectedTag} setSelectedPhoto={setSelectedPhoto} />
              </section>
            </>
          }
        />
        <Route
          path="/photo/:id"
          element={<Photo selectedPhoto={selectedPhoto} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
