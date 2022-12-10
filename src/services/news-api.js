import CONFIG from '../config/config';

async function getArticleList() {
  try {
    const response = await fetch(`${CONFIG.NEWS_API_URL}health`)
    const responseJson = await response.json();
  
    if(!responseJson.success) {
      return { error: true, message: responseJson.message, articles: [] };
    } else {
      return { error: false, message:'', articles: responseJson.data.posts }
    }
  } catch (error) {
    console.log(error);
  }
}

export {
  getArticleList,
};
