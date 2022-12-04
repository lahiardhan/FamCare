import React, { useEffect, useState } from 'react';
import Button from '../../components/atoms/Button';
import showFormattedDate from '../../utils/formattedDate';
import PropTypes from 'prop-types';
import Skeleton from './Skeleton';
import Footer from '../../components/organisms/Footer';

function Article({ articles }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
  }, []);

  if (loading) {
    return (
      <section>
        <div>
          <h1 className="font-extrabold text-4xl mt-24 lg:py-7 text-center">Artikel FamCare</h1>
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
      <section>
        <div>
          <h1 className="font-extrabold text-4xl mt-24 lg:py-7 text-center">Artikel FamCare</h1>
        </div>
        <div className="lg:px-36">
          {articles.map((article, index) => (
            <div key={index} className="px-8 py-4 mb-5 w-full lg:flex lg:mb-8 justify-center lg:gap-10">
              <div className="w-full md:items-center mb-5">
                <img src={article.urlToImage ? article.urlToImage : '/images/thumbnailArticleDefault.webp'} alt={`Image ${article.title}`} className="object-cover max-h-72 w-full rounded-tl-[50px] rounded-br-[50px]" />
              </div>

              <div className="text-black lg:max-w-[475px]">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold duration-300 hover:opacity-70"><a href={article.url} target="_blank">{article.title}</a></h3>
                <p className="text-xs lg:text-sm font-light lg:mb-3">{showFormattedDate(article.publishedAt)} | {article.author ? article.author : 'N/A'}</p>
                <p className="text-sm lg:text-base mb-4 lg:mb-5 line-clamp-2">{article.description}</p>
                <Button href={article.url} target="_blank" text="Baca Selengkapnya" className="mt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Article;
