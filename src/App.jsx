import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
          <Route path="/test" element={<TestPage />} />
          <Route path="/article" element={<Article articles={articles} />} />
          <Route path="/forum" element={<DiscussionForum />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
