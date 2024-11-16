import { useNavigate } from "react-router-dom";
import './Photo.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LikeOutlineIcon from '../../assets/images/Like_Outline.svg';
import ArrowIcon from '../../assets/images/Arrow.svg';

const URL = import.meta.env.VITE_APP_SERVER_URL;

export function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  let navigate = useNavigate();
  function handleClick2() {
    navigate('/');
  }

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`${URL}/photos/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`${URL}/photos/${id}/comments`);
        setComments(response.data.reverse());
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPhoto();
    fetchComments();
  }, [id]);

  if (!photo) {
    return <p>Loading photo...</p>;
  }

  const formattedDate = new Date(photo.timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const comment = e.target.elements[1].value;
    if (!name || !comment) {
      console.error('Name and comment are required');
      return;
    }
    try {
      const response = await axios.post(
        `${URL}/photos/${id}/comments`,
        { name, comment },
        { params: { api_key: 'e8074c35-df85-4e66-868d-1d9e334d5ae5' } }
      );
      setComments((prevComments) => [response.data, ...prevComments]);
      e.target.reset();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <>
      <section className="top-bar">
        <h1 onClick={handleClick2}> Snaps </h1>
        <h2 onClick={handleClick2} className="top-bar__item"><img onClick={handleClick2} src={ArrowIcon}></img> Home </h2>
      </section>
      <section className="photo">
        <section className="photo__item">
          <img className="photo__image" src={`${URL}/${photo.photo}`} alt={photo.photoDescription} />
          <section className="photo__info">
            <section className="photo__tags">
              {photo.tags.map((tag, index) => (
                <span key={index} className="photo__tag">
                  {tag}
                </span>
              ))}
            </section>
            <section className="photo__subcontainer">
              <span className="photo__likes">
                <img src={LikeOutlineIcon} alt="Like Icon" /> {photo.likes} likes
              </span>
              <span className="photo__date"> {formattedDate} </span>
              <p className="photo__description"> Photo by {photo.photographer}</p>
            </section>
          </section>
        </section>
        <section className="photo__comments">
          <form className="photo__form" onSubmit={handleCommentSubmit}>
            <input type="text" placeholder="Name" className="photo__input" />
            <textarea placeholder="Comment" className="photo__input"></textarea>
            <button type="submit" className="photo__submit">Submit</button>
          </form>
          <h3> {comments.length} Comments</h3>
          {comments.length > 0 ? (
            comments.map((comment) => {
              const commentDate = new Date(comment.timestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              });
              return (
                <section key={comment.id} className="photo__comment">
                  <p className="photo__comment-name">
                    {comment.name} <span className="photo__comment-date">{commentDate}</span>
                  </p>
                  <p className="photo__comment-text">{comment.comment}</p>
                </section>
              );
            })
          ) : (
            <p>No comments yet</p>
          )}
        </section>
      </section>
    </>
  );
}

export default Photo;

