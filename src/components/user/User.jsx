/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.scss";

const User = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("APIdan ma'lumotlarni olishda xatolik yuz berdi.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (error) {
    return <p>Hatolik yuz berdi: {error}</p>;
  }

  return (
    <>
      <div className="users">
        <div className="container">
          <div className="user_head">
            <h1>Users' info</h1>
          </div>
          <div className="user_content">
            {users.map((user, index) => (
              <div className="user_card" key={index + 1}>
                <div className="card_head">
                  <h1>{user.name}</h1>
                  <span>{user.username}</span>
                </div>
                <div className="card_body">
                  <div className="links">
                    <span>Email:</span>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>
                  <div className="links">
                    <span>Website:</span>
                    <a href={user.website}>{user.website}</a>
                  </div>
                  <div className="links">
                    <span>Address:</span>
                    <span>
                      {user.address.street}, {user.address.city},{" "}
                    </span>
                  </div>
                  <div className="links">
                    <span>Phone:</span>
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                  </div>
                </div>
                <div className="card_btn">
                  <Link to={`/post/${user.id}`} className="btn1">
                    Posts
                  </Link>
                  <Link to={`/todo/${user.id}`}>
                    <a className="btn2">Todos</a>
                  </Link>

                  <Link to={`/albums/${user.id}`} className="btn3">
                    Albums
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
