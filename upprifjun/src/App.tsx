import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import PageNotFoundPage from "./pages/404";
import HomePage from "./pages/homePage";
import PostsPage from "./pages/posts";
import PostPage from "./pages/post";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<PageNotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
