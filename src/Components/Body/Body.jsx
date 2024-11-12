// import "./body.scss";
// import "../navbar/navbar.scss";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export default function Body({ selectedTag, setSelectedPhoto }) {
//   const [photos, setPhotos] = useState([]);
//   const [filter, openFilter] = useState(false);
//   const [activeTag, setActiveTag] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchPhotos() {
//       try {
//         const response = await fetch("https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5");
//         const data = await response.json();
//         setPhotos(data);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       }
//     }
//     fetchPhotos();
//   }, []);

//   const handleTagClick = (tag) => {
//     if (activeTag === tag) {
//       setActiveTag(null);
//     } else {
//       setActiveTag(tag);
//     }
//   };

//   const handlePhotoClick = (photo) => {
//     setSelectedPhoto(photo);
//     navigate(`/photo/${photo.id}`);
//   };

//   const filteredPhotos = selectedTag
//     ? photos.filter((photo) => photo.tags.includes(selectedTag))
//     : photos;

//   return (
//     <section className="photoscontainer">
//       <h3 className="bodyheader"> Our Mission: </h3>
//       <h2 className="missionstatement">
//         Provide photographers a space to share photos of the neighborhoods they cherish, <span className="italicized-ms"> expressed in their unique style. </span>
//       </h2>
//       <section className="photosGallery">
//         {filteredPhotos.map((photo, index) => (
//           <section key={index} className="photoItem" onClick={() => handlePhotoClick(photo)}>
//             <img className="photos" src={photo.photo} alt={`Photo by ${photo.photographer}`} />
//             <h3 className="photographer">{photo.photographer}</h3>
//             <section className="tagsContainer">
//               {photo.tags.map((tag, tagIndex) => (
//                 <span key={tagIndex} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </section>
//           </section>
//         ))}
//         {filter && (
//           <section className="FilterSection">
//             <h2> Filters </h2>
//             <section className="items">
//               {photos.map((photo) => (
//                 photo.tags.map((item, index) => (
//                   <ul key={index}>
//                     <li className={`list ${activeTag === item ? "active" : ""}`}
//                       onClick={() => handleTagClick(item)}
//                     >{item}</li>
//                   </ul>
//                 ))
//               ))}
//             </section>
//           </section>
//         )}
//       </section>
//     </section>
//   );
// }

import "./body.scss";
import "../navbar/navbar.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Body({ selectedTag, setSelectedPhoto }) {
  const [photos, setPhotos] = useState([]);
  const [filter, openFilter] = useState(false);
  const [activeTag, setActiveTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/photos", {
          params: { api_key: 'e8074c35-df85-4e66-868d-1d9e334d5ae5' }
        });
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  const handleTagClick = (tag) => {
    setActiveTag(activeTag === tag ? null : tag);
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    navigate(`/photo/${photo.id}`);
  };

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <section className="photos-container">
      <h3 className="photos-container__header"> Our Mission: </h3>
      <h2 className="photos-container__mission-statement">
        Provide photographers a space to share photos of the neighborhoods they cherish, <span className="photos-container__mission-statement--italic"> expressed in their unique style. </span>
      </h2>
      <section className="photos-gallery">
        {filteredPhotos.map((photo, index) => (
          <section key={index} className="photos-gallery__item" onClick={() => handlePhotoClick(photo)}>
            <img className="photos-gallery__image" src={photo.photo} alt={`Photo by ${photo.photographer}`} />
            <h3 className="photos-gallery__photographer">{photo.photographer}</h3>
            <section className="photos-gallery__tags">
              {photo.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="photos-gallery__tag">
                  {tag}
                </span>
              ))}
            </section>
          </section>
        ))}
        {filter && (
          <section className="photos-container__filter">
            <h2> Filters </h2>
            <section className="photos-container__filter-items">
              {photos.map((photo) => (
                photo.tags.map((item, index) => (
                  <ul key={index}>
                    <li className={`photos-container__filter-item ${activeTag === item ? "photos-container__filter-item--active" : ""}`}
                      onClick={() => handleTagClick(item)}
                    >{item}</li>
                  </ul>
                ))
              ))}
            </section>
          </section>
        )}
      </section>
    </section>
  );
}
