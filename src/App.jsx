import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import { getArticleList } from './utils/news-api';

const Page404 = Loadable({
  loader: () => import('./pages/404'),
  loading: Loading,
});
const LandingPage = Loadable({
  loader: () => import('./pages/LandingPage'),
  loading: Loading,
});
const TestPage = Loadable({
  loader: () => import('./pages/TestPage'),
  loading: Loading,
});
const Article = Loadable({
  loader: () => import('./pages/ArticlePage'),
  loading: Loading,
});
const DiscussionForum = Loadable({
  loader: () => import('./pages/DiscussionForum'),
  loading: Loading,
});
const AboutUs = Loadable({
  loader: () => import('./pages/AboutUs'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('./pages/Auth/Login'),
  loading: Loading,
});
const Register = Loadable({
  loader: () => import('./pages/Auth/Register'),
  loading: Loading,
});
const Test1 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-1'),
  loading: Loading,
});
const Test2 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-2'),
  loading: Loading,
});
const Test3 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-3'),
  loading: Loading,
});
const Test4 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-4'),
  loading: Loading,
});
const Test5 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-5'),
  loading: Loading,
});
const Test6 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-6'),
  loading: Loading,
});
const Test7 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-7'),
  loading: Loading,
});
const Test8 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-8'),
  loading: Loading,
});
const Test9 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-9'),
  loading: Loading,
});
const Test10 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-10'),
  loading: Loading,
});
const Test11 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-11'),
  loading: Loading,
});
const Test12 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-12'),
  loading: Loading,
});
const Test13 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-13'),
  loading: Loading,
});
const Test14 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-14'),
  loading: Loading,
});
const HasilTest = Loadable({
  loader: () => import('./pages/TestPage/HasilTest'),
  loading: Loading,
});


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loader = document.getElementById('startingLoader');
    window.onload = () => {
      if (loader) {
        loader.remove();
      }
    };

    getArticleList().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="article" element={<Article articles={articles} />} />
          <Route path="forum" element={<DiscussionForum />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="test1" element={<Test1 />} />
          <Route path="test2" element={<Test2 />} />
          <Route path="test3" element={<Test3 />} />
          <Route path="test4" element={<Test4 />} />
          <Route path="test5" element={<Test5 />} />
          <Route path="test6" element={<Test6 />} />
          <Route path="test7" element={<Test7 />} />
          <Route path="test8" element={<Test8 />} />
          <Route path="test9" element={<Test9 />} />
          <Route path="test10" element={<Test10 />} />
          <Route path="test11" element={<Test11 />} />
          <Route path="test12" element={<Test12 />} />
          <Route path="test13" element={<Test13 />} />
          <Route path="test14" element={<Test14 />} />
          <Route path="hasil" element={<HasilTest />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
