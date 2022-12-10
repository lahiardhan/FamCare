import React, { useEffect, useState } from 'react';
import Loadable from 'react-loadable';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from './components/atoms/Loader';
import Navbar from './components/organisms/Navbar';
import { getArticleList } from './services/news-api';
import 'react-toastify/dist/ReactToastify.css';

const Page404 = Loadable({
  loader: () => import('./pages/404'),
  loading: Loader,
});
const LandingPage = Loadable({
  loader: () => import('./pages/LandingPage'),
  loading: Loader,
});
const TestPage = Loadable({
  loader: () => import('./pages/TestPage'),
  loading: Loader,
});
const Article = Loadable({
  loader: () => import('./pages/ArticlePage'),
  loading: Loader,
});
const DiscussionForum = Loadable({
  loader: () => import('./pages/DiscussionForum'),
  loading: Loader,
});
const DiscussionContent = Loadable({
  loader: () => import('./pages/DiscussionForum/DiscussionList/Discussion'),
  loading: Loader,
})
const AboutUs = Loadable({
  loader: () => import('./pages/AboutUs'),
  loading: Loader,
});
const Login = Loadable({
  loader: () => import('./pages/Auth/Login'),
  loading: Loader,
});
const SignUp = Loadable({
  loader: () => import('./pages/Auth/SignUp'),
  loading: Loader,
});
const Test1 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-1'),
  loading: Loader,
});
const Test2 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-2'),
  loading: Loader,
});
const Test3 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-3'),
  loading: Loader,
});
const Test4 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-4'),
  loading: Loader,
});
const Test5 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-5'),
  loading: Loader,
});
const Test6 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-6'),
  loading: Loader,
});
const Test7 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-7'),
  loading: Loader,
});
const Test8 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-8'),
  loading: Loader,
});
const Test9 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-9'),
  loading: Loader,
});
const Test10 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-10'),
  loading: Loader,
});
const Test11 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-11'),
  loading: Loader,
});
const Test12 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-12'),
  loading: Loader,
});
const Test13 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-13'),
  loading: Loader,
});
const Test14 = Loadable({
  loader: () => import('./pages/TestPage/TestList/Test-14'),
  loading: Loader,
});
const HasilTest = Loadable({
  loader: () => import('./pages/TestPage/HasilTest'),
  loading: Loader,
});


function App() {
  const [articles, setArticles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const loader = document.getElementById('startingLoader');
    window.onload = () => {
      if (loader) {
        loader.remove();
      }
    };

    getArticleList().then(({ message, articles }) => {
      setArticles(articles);
      setMessage(message);
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
          <Route path="/forum" element={<DiscussionForum />}/>
          <Route path='/forum/:id' element={<DiscussionContent/>}/>
          <Route path="test" element={<TestPage />} />
          <Route path="article" element={<Article articles={articles} message={message} />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
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
      <ToastContainer
        position="top-center"
        theme="colored" 
      />
    </div>
  );
}

export default App;
