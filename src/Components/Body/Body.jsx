import "./body.scss";
import "../navbar/navbar.scss";
import photosData from "../../data/photos.json";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Body({ selectedTag }) {
    const filteredPhotos = selectedTag
        ? photosData.filter((photo) => photo.tags.includes(selectedTag))
        : photosData;
    const [filter, openFilter] = useState(false);
    const [activeTag, setActiveTag] = useState(null);

    const handleTagClick = (tag) => {
        if (activeTag === tag) {
            setActiveTag(null);
            setSelectedTag(null);
        } else {
            setActiveTag(tag);
            setSelectedTag(tag);
        }
    };

    return (
        <div className="photoscontainer">
            <h3 className="bodyheader"> Our Mission: </h3>
            <h2 className="missionstatement"> Provide photographers a space to share photos of the neighborhoods they cherish, <span className="italicized-ms"> expressed in their unique style. </span></h2>
            <div className="photosGallery">
                {filteredPhotos.map((photo, index) => (
                    <div key={index} className="photoItem">
                        <Link to="/page" className={handleClick}>
                            <img className="photos" src={photo.photo} alt={`Photo by ${photo.photographer}`} />
                        </Link>
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
                            {tagsData.map((item, index) => (
                                <ul key={index}>
                                    <li className={`list ${activeTag === item ? "active" : ""}`}
                                        onClick={() => handleTagClick(item)}
                                    >{item}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}