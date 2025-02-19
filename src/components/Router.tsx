import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/home';
import PostList from 'pages/post';
import PostDetail from 'pages/post/detail';
import PostNew from 'pages/post/new';
import PostEdit from 'pages/post/edit';
import ProfilePage from 'pages/profile';
import LoginPage from 'pages/login';
import SignupPage from 'pages/signup';

export default function Router() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="/posts/edit/:id" element={<PostEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<Navigate to ="/" />} />
    </Routes>
  </>
  );
}