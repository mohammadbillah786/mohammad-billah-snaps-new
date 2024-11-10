// import "./body.scss";
// import "../navbar/navbar.scss";
// import photosData from "../../data/photos.json";
// import { useState } from "react";
// import { Link } from 'react-router-dom';

// export default function Body({ selectedTag }) {
//     const filteredPhotos = selectedTag
//         ? photosData.filter((photo) => photo.tags.includes(selectedTag))
//         : photosData;
//     const [filter, openFilter] = useState(false);
//     const [activeTag, setActiveTag] = useState(null);

//     const handleTagClick = (tag) => {
//         if (activeTag === tag) {
//             setActiveTag(null);
//             setSelectedTag(null);
//         } else {
//             setActiveTag(tag);
//             setSelectedTag(tag);
//         }
//     };

//     return (
//         <div className="photoscontainer">
//             <h3 className="bodyheader"> Our Mission: </h3>
//             <h2 className="missionstatement"> Provide photographers a space to share photos of the neighborhoods they cherish, <span className="italicized-ms"> expressed in their unique style. </span></h2>
//             <div className="photosGallery">
//                 {filteredPhotos.map((photo, index) => (
//                     <div key={index} className="photoItem">
//                         <Link to="/page">
//                             <img className="photos" src={photo.photo} alt={`Photo by ${photo.photographer}`} />
//                         </Link>
//                         <h3 className="photographer">{photo.photographer}</h3>
//                         <div className="tagsContainer">
//                             {photo.tags.map((tag, tagIndex) => (
//                                 <span key={tagIndex} className="tag">
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//                 {filter && (
//                     <div className="FilterSection">
//                         <h2> Filters </h2>
//                         <div className="items">
//                             {tagsData.map((item, index) => (
//                                 <ul key={index}>
//                                     <li className={`list ${activeTag === item ? "active" : ""}`}
//                                         onClick={() => handleTagClick(item)}
//                                     >{item}</li>
//                                 </ul>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import "./body.scss";
import "../navbar/navbar.scss";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Body({ selectedTag, setSelectedPhoto }) {
  const [photos, setPhotos] = useState([]);
  const [filter, openFilter] = useState(false);
  const [activeTag, setActiveTag] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await fetch("https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5");
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  const handleTagClick = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    navigate(`/photo/${photo.id}`);
  };

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <div className="photoscontainer">
      <h3 className="bodyheader"> Our Mission: </h3>
      <h2 className="missionstatement">
        Provide photographers a space to share photos of the neighborhoods they cherish, <span className="italicized-ms"> expressed in their unique style. </span>
      </h2>
      <div className="photosGallery">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="photoItem" onClick={() => handlePhotoClick(photo)}>
            <img className="photos" src={photo.photo} alt={`Photo by ${photo.photographer}`} />
            <h3 className="photographer">{photo.photographer}</h3>
            <div className="tagsContainer">
              {photo.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        {filter && (
          <div className="FilterSection">
            <h2> Filters </h2>
            <div className="items">
              {photos.map((photo) => (
                photo.tags.map((item, index) => (
                  <ul key={index}>
                    <li className={`list ${activeTag === item ? "active" : ""}`}
                      onClick={() => handleTagClick(item)}
                    >{item}</li>
                  </ul>
                ))
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
