import axios from "axios";

export const baseUrl = "https://coinranking1.p.rapidapi.com/";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": "c555d93c04msh1e0fa512ba704a9p1edc09jsn60b8306f8db5",
    },
  });
  return data;
};
