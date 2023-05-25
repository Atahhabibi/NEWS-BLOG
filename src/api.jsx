
export const FetchNews = async (query) => {
  try {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=2fa1039c7cbe45baa0f93b35233a6252`);

    let result = await response.json();
    return result;

  } catch (error) {
    console.log(error);
  }

  return result;
};
