const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const getPlaylists = async ()  => {
  const url = baseUrl + "playlists";

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


export const addPlaylist = async (palyList)  => {
  const url = baseUrl + "playlists";

  try {
    const response = await fetch(url, {
      method : 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(palyList),
    })

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

export const deletePlayList = async (id)  => {

  const url = baseUrl + `playlists/${id}`;

  try {
    const response = await fetch(url, {
      method : 'DELETE',
    });

    if (response.status !== 200) {
      throw response;
    }
  } catch (e) {
    throw e;
  }
};