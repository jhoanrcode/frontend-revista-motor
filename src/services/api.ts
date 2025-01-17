export const config = {
  //BASE_URL: "https://api.themoviedb.org/3/",
  //API_KEY: import.meta.env.VITE_API_KEY,
  BASE_URL: "/data.json",
  API_KEY: "",
};

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${config.API_KEY}`,
  },
};

export const getAllPost = async () => {
  //const response = await fetch(`${config.BASE_URL}/movie/popular`, options);
  const response = await fetch(`${config.BASE_URL}`);
  const data = await response.json();
  return data.results;
};

export const getCategoryPost = async (categoryPost: string) => {
  const response = await fetch(`${config.BASE_URL}`);
  const data = await response.json();
  return data[`${categoryPost}`];
};

export const getPost = async (idPost: string) => {
  const response = await fetch(`${config.BASE_URL}`);
  const data = await response.json();

  let dataArray = [data.results[`${Number(idPost) - 1}`]];

  return dataArray[0] ? dataArray : [];
};
