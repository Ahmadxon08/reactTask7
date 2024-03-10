/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Photo.scss";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.log("Xatolik bor!!!!", error);
      }
    };
    fetchPhoto();
  }, []);

  return (
    <div className="photo">
      <div className="container">
        <div className="photo_head">
          <Link to={"/"}>
            <button>go back</button>
          </Link>
          <h1>Photos info</h1>
        </div>

        <div className="photo_card">
          {photos.map((photo) => {
            if (parseInt(photo.userId) === parseInt(id)) {
              return (
                <div className="card" key={photo.id}>
                  <div className="card_head">
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                    <span>{photo.id}th user's photo</span>
                    <h1>{photo.title}</h1>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Photo;
