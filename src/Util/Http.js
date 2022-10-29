import axios from 'axios'

export const HttpPost = async (url, body) => {
    const postResponse = axios
      .post(url, {body})
      .then((response) => response)
      .catch((err) => console.log(err));
      
    return postResponse;
}

export const HttpGet = (baseURL, url, setResGet, setLoad) => {
    axios({
        method: 'get',
        url: url,
        baseURL: baseURL,
        headers: {
          "x-requested-with": "XMLHttpRequest",
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "access-control-allow-credentials": "true",
          "access-control-allow-methods": "*"
        }
    })
      .then((response) => {
        setResGet(response)
        setLoad(false)
      })
      .catch((err) => console.error(err));
}

export const HttpDelete = async (url) => {
    const deleteResponse = await axios
    .delete(url)
    .then((response) => response)
    .catch((err) => console.error(err));

  return deleteResponse;   
}

