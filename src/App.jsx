import { Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import Todo from "./components/todo/Todo";
import Post from "./components/post/Post";
import Album from "./components/album/Album";
import Photo from "./components/photo/Photo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/todo/:id" element={<Todo />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/albums/:id" element={<Album />} />
      <Route path="/photo/:id" element={<Photo />}/>
    </Routes>
  );
};

export default App;
