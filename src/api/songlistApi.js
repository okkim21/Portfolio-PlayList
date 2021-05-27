const baseUrl = process.env.REACT_APP_API_BASE_URL;


export const getSonglists = async (id)  => {

  const url = baseUrl + `playlists/${id}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      throw response;
    }
  } catch (e) {
    throw e;
  }
};

