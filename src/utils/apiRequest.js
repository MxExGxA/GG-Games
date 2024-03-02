import axios from "axios";

const client_id = import.meta.env.VITE_IGDB_CLIENT_ID;
const access_token = import.meta.env.VITE_IGDB_ACCESS_TOKEN;
// const corsAnywhere = import.meta.env.VITE_CORS_ANYWHERE_URI;
const Api = import.meta.env.VITE_IGDB_API_URI;

const apiRequest = async (config) => {
  try {
    const results = await axios({
      method: config.method,
      url: `${Api}/${config.path}`,
      headers: {
        "Content-Type": "text/plain",
        "Client-ID": client_id,
        Authorization: `bearer ${access_token}`,
      },
      data: config.data,
    });
    const data = await results.data;
    return data;
  } catch (err) {
    return err;
  }
};

export { apiRequest };
