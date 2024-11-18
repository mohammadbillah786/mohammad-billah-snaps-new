import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar/navbar';
import FilterPanel from './components/filterpanel/filterpanel';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
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
