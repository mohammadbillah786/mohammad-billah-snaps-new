import axios from "axios";
import React, { useEffect, useState } from "react";
import "./filterpanel.scss";

const URL = import.meta.env.VITE_APP_SERVER_URL;

export default function FilterPanel({ filterOpen, setSelectedTag, activeTag }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${URL}/tags`); 
        setTags(response.data || []); 
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === activeTag ? null : tag); 
  };

  return (
    <section className={`filterpanel ${filterOpen ? "open" : ""}`}>
      {filterOpen && (
        <ul className="tags">
          {tags.map((tag, index) => (
            <ul
              key={index}
              onClick={() => handleTagClick(tag)}
              className={`tags__item ${tag === activeTag ? "active" : ""}`}
            >
              {tag}
            </ul>
          ))}
        </ul>
      )}
    </section>
  );
}
