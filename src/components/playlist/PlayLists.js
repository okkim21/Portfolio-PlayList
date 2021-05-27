import { useState, useEffect } from "react";
import { getPlaylists, addPlaylist, deletePlayList } from "../../api/playlistApi";
import { Link, useRouteMatch } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'
import SongTitles from "./SongTitles";
import AddPlayList from "./AddPlayList";

function PlayLists() {
  const [playLists, setPlayLists] = useState([]);
  const [showAddPlayList, setShowAddPlayList] = useState(false);
  let { url } = useRouteMatch();

  useEffect(() => {
    async function fetchPlayLists() {
      const playLists = await getPlaylists();
      setPlayLists(playLists);
    }

    fetchPlayLists();
  }, []);

  function renderPlayLists(p) {
 
    return (
      <div id="playList_container" key={p.id}>
        <header>
          <h2 id="name">{p.name}</h2>
          <p>{p.date}</p>
          <FaTimes
          onClick={()=>deletePlay(p.id)}
          style={{ color: 'red', cursor: 'pointer' }}/>
        </header>
        <Link to={`${url}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
        </Link>
        <section>
        { p.songLists.length > 0 && <SongTitles songLists={p.songLists} />}
        </section>
      
      </div>
    );
  }

  // Add PalyList
  const addPlay = async (playlist) => {
    const data = await addPlaylist(playlist);
    setPlayLists([...playLists, data])
    setShowAddPlayList(false)
  }

  // Delete PalyList
  const deletePlay = async (id) => {
    await deletePlayList(id);
    setPlayLists(playLists.filter((p) => p.id !== id))
  }

  return (
    <>
      <button className="btn" onClick={()=> setShowAddPlayList(!showAddPlayList)} >
      {showAddPlayList ? "Close" : "Add PlayList"}
      </button>
      {showAddPlayList && <AddPlayList onAdd={addPlay} />}
      <section className="playLists">{playLists.map(renderPlayLists)}</section>
    </>
  );
}

export default PlayLists;
