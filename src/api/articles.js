const apiKey = process.env.REACT_APP_API_KEY;

const serverAddress = "https://content.guardianapis.com";

export const getArticlesUrl = ({ section, query, page = 1, pageSize = 20 }) =>
  `${serverAddress}/search?format=json&show-fields=all&api-key=${apiKey}&page=${page}&page-size=${pageSize}${
    section ? "&section=" + section : ""
  }${query ? "&q=" + query : ""}`;

export const getArticleByIdUrl = ({ articleId }) =>
  `${serverAddress}/${articleId}?format=json&show-fields=all&api-key=${apiKey}`;
