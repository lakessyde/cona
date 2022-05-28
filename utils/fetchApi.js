import axios from "axios";

export const baseUrl = "https://coinranking1.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    },
  });

  return data;
};

export const fetchingApi = async(url)=>{
  try{
    const{data, errors} = await axios.get(url, {
      headers:{
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      },
    })
    return data;
  }catch(errors){
    console.log(e)
  }
}
