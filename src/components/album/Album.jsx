/* eslint-disable no-undef */

import "./Album.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        console.log("Xatolik bor!!!!", error);
      }
    };
    fetchAlbum();
  }, [id]);

  return (
    <div className="album">
      <div className="container">
        <div className="album_head">
          <Link to={"/"}>
            <button>go back</button>
          </Link>
          <h1>Album</h1>
        </div>
        <div className="album_content">
          {albums.map((album) => {
            if (album.userId === parseInt(id)) {
              return (
                <div className="album_card" key={album.id}>
                  <div className="name">
                    <p>{album.id}th user</p>
                    <h3>{album.title}</h3>
                    <Link to={`/photos/${album.id}`}>
                      <span>photo</span>
                    </Link>
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

export default Album;
