// import './Photo.scss';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// export function Photo() {
//   const { id } = useParams();
//   const [photo, setPhoto] = useState(null);
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     async function fetchPhoto() {
//       try {
//         const response = await fetch(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5`);
//         if (response.ok) {
//           const data = await response.json();
//           setPhoto(data);
//         } else {
//           console.error('Photo not found');
//         }
//       } catch (error) {
//         console.error('Error fetching photo:', error);
//       }
//     }

//     async function fetchComments() {
//       try {
//         const response = await fetch(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5`);
//         if (response.ok) {
//           const data = await response.json();
//           setComments(data);
//         } else {
//           console.error('Comments not found');
//         }
//       } catch (error) {
//         console.error('Error fetching comments:', error);
//       }
//     }

//     fetchPhoto();
//     fetchComments();
//   }, [id]);

//   if (!photo) {
//     return <p>Loading photo...</p>;
//   };

//   const formattedDate = new Date(photo.timestamp).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit"
//   });

//   return (
//     <div className="single-photo-view-unique">
//       <div className="photo-item-unique">
//         <div className="photo-info-unique">
//           <div className="tags-container-unique">
//             {photo.tags.map((tag, index) => (
//               <span key={index} className="tag-unique">
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="photo-info__subcontainer">
//             <span className="likes-unique"><img src="../../assets/images/Like_Outline.svg"></img> {photo.likes} likes </span>
//             <span className="date-unique"> {formattedDate} </span>
//             <p className="photo-description-unique"> Photo by {photo.photographer}</p>
//           </div>
//         </div>
//         <img className="photo-unique" src={photo.photo} alt={photo.photoDescription} />
//       </div>
//       <div className="comments-section-unique">
//         <form className="comment-form-unique">
//           <input type="text" placeholder="Name" className="comment-input-unique" />
//           <textarea placeholder="Comment" className="comment-input-unique"></textarea>
//           <button type="submit" className="comment-submit-unique">Submit</button>
//         </form>
//         <h3> {comments.length} Comments</h3>
//         {comments.length > 0 ? (
//           comments.map((comment) => {
//             const commentDate = new Date(comment.timestamp).toLocaleDateString("en-US", {
//               year: "numeric",
//               month: "2-digit",
//               day: "2-digit"
//             });
//             return (
//               <div key={comment.id} className="comment-unique">
//                 <p className="comment-name-unique">{comment.name} <span className="comment-date-unique">{commentDate}</span></p>
//                 <p className="comment-text-unique">{comment.comment}</p>
//               </div>
//             );
//           })
//         ) : (
//           <p>No comments yet</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Photo;

import './Photo.scss';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LikeOutlineIcon from '../../assets/images/Like_Outline.svg';

export function Photo() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchPhoto() {
      try {
        const response = await fetch(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5`);
        if (response.ok) {
          const data = await response.json();
          setPhoto(data);
        } else {
          console.error('Photo not found');
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    }

    async function fetchComments() {
      try {
        const response = await fetch(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5`);
        if (response.ok) {
          const data = await response.json();
          setComments(data.reverse()); // Ensure comments are displayed with the most recent at the top
        } else {
          console.error('Comments not found');
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    }

    fetchPhoto();
    fetchComments();
  }, [id]);

  if (!photo) {
    return <p>Loading photo...</p>;
  };

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
      const response = await fetch(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=e8074c35-df85-4e66-868d-1d9e334d5ae5`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, comment })
      });
      if (response.ok) {
        const newComment = await response.json();
        setComments((prevComments) => [newComment, ...prevComments]);
        e.target.reset();
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="single-photo-view-unique">
      <div className="photo-item-unique">
        <div className="photo-info-unique">
          <div className="tags-container-unique">
            {photo.tags.map((tag, index) => (
              <span key={index} className="tag-unique">
                {tag}
              </span>
            ))}
          </div>
          <div className="photo-info__subcontainer">
            <span className="likes-unique"><img src={LikeOutlineIcon} alt="Like Icon" /> {photo.likes} likes </span>
            <span className="date-unique"> {formattedDate} </span>
            <p className="photo-description-unique"> Photo by {photo.photographer}</p>
          </div>
        </div>
        <img className="photo-unique" src={photo.photo} alt={photo.photoDescription} />
      </div>
      <div className="comments-section-unique">
        <form className="comment-form-unique" onSubmit={handleCommentSubmit}>
          <input type="text" placeholder="Name" className="comment-input-unique" />
          <textarea placeholder="Comment" className="comment-input-unique"></textarea>
          <button type="submit" className="comment-submit-unique">Submit</button>
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
              <div key={comment.id} className="comment-unique">
                <p className="comment-name-unique">{comment.name} <span className="comment-date-unique">{commentDate}</span></p>
                <p className="comment-text-unique">{comment.comment}</p>
              </div>
            );
          })
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
}

export default Photo;

