import React, { useEffect, useState } from 'react';
import Button from '../../components/atoms/Button';
import showFormattedDate from '../../utils/formattedDate';
import PropTypes from 'prop-types';
import Skeleton from './Skeleton';
import Footer from '../../components/organisms/Footer';

function Article({ articles, message }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen pt-20">
        <div>
          <h1 className="font-extrabold text-4xl py-7 text-center">Artikel FamCare</h1>
        </div>
        <div className="lg:px-36">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="min-h-screen pt-20">
        <div>
          <h1 className="font-extrabold text-4xl py-7 text-center">Artikel FamCare</h1>
        </div>
        {articles.length !== 0 ? (
          <div className="lg:px-36 flex flex-col items-center">
            <div className="max-w-[1200px]">
              {articles.map((article, index) => (
                <div key={index} className="px-8 py-4 mb-5 w-full lg:grid lg:grid-cols-2 lg:mb-8 justify-center lg:gap-10">
                  <div className="w-full md:items-center mb-5">
                    <img src={article.thumbnail ? article.thumbnail : '/images/thumbnailArticleDefault.webp'} alt={`Image ${article.title}`} className="object-cover max-h-72 w-full rounded-tl-[50px] rounded-br-[50px] lg:min-w-[300px]" />
                  </div>
                  <div className="text-black">
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold duration-300 hover:opacity-70"><a href={article.link} target="_blank">{article.title}</a></h3>
                    <p className="text-xs lg:text-sm font-light lg:mb-3">{showFormattedDate(article.pubDate)}</p>
                    <p className="text-sm lg:text-base mb-4 lg:mb-5 line-clamp-2">{article.description}</p>
                    <Button href={article.link} target="_blank" text="Baca Selengkapnya" className="mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[65vh]">
            <div className="w-full max-w-[300px]">
              <img src="/images/504-error-gateway-timeout.svg" alt="504-[Gateway Timeout]" />
              <h4 className="text-center font-semibold text-lg">Oops... Coba lagi yaa</h4>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  message: PropTypes.string,
};

export default Article;
