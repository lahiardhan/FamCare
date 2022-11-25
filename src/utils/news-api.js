import CONFIG from '../config/config';

const API_ENDPOINT = {
  ARTICLES: `${CONFIG.NEWS_API_URL}v2/top-headlines?country=id&category=health&pageSize=50`,
}

async function getArticleList() {
  const response = await fetch(`${API_ENDPOINT.ARTICLES}&apiKey=${CONFIG.NEWS_API_KEY}`)
  const responseJson = await response.json();

  if(responseJson.status === 'error') {
    alert(responseJson.message);
    return { error: true, articles: []};
  } else {
    return { error: false, articles: responseJson.articles }
  }
}

export {
  getArticleList,
};
