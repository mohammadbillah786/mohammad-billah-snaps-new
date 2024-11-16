import "./body.scss";
import "../Navbar/navbar.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_APP_SERVER_URL}/photos`;
const URL = import.meta.env.VITE_APP_SERVER_URL;
export default function Body({ selectedTag, setSelectedPhoto }) {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(API_URL);
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    navigate(`/photo/${photo.id}`);
  };

  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  return (
    <section className="photos-container">
      <h3 className="photos-container__header">Our Mission:</h3>
      <h2 className="photos-container__mission-statement">
        Provide photographers a space to share photos of the neighborhoods they cherish,{" "}
        <span className="photos-container__mission-statement--italic">
          expressed in their unique style.
        </span>
      </h2>
      <section className="photos-gallery">
        {filteredPhotos.map((photo) => (
          <section
            key={photo.id}
            className="photos-gallery__item"
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              className="photos-gallery__image"
              src={`${URL}/${photo.photo}`}
              alt={`Photo by ${photo.photographer}`}
            />
            <h3 className="photos-gallery__photographer">{photo.photographer}</h3>
            <section className="photos-gallery__tags">
              {photo.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`photos-gallery__tag ${selectedTag === tag ? "photos-gallery__tag--active" : ""
                    }`}
                >
                  {tag}
                </span>
              ))}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
