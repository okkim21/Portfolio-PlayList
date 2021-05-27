import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSonglists } from "../../api/songlistApi";

function SongLists() {
  const params = useParams();
  const [songLists, setSongLists] = useState([]);
  const [playList, setPlayList] = useState("");

  useEffect(() => {
    async function fetchSongLists() {
      const playInfo = await getSonglists(params.id);
      setSongLists(playInfo.songLists);
      setPlayList(playInfo);
    }

    fetchSongLists();
  }, [params.id]);

  function renderSongLists(s) {
    return (
      <div className="songDetails" key={s.id}>
        <img src={`/images/${s.image}`} alt={s.songName} />
        <div className="songDesc">
          <h3>{s.songName}</h3>
          <p style={{ color: "lightgray" }}>{s.singer}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="songListsHeader">
        <img
          src={`/images/${playList.image}`}
          alt={playList.name}
          className="playListImage"
        />

        <p style={{ fontSize: 18 }}>{playList.name}</p>
      </div>

      <section className="songLists">{songLists.map(renderSongLists)}</section>
    </>
  );
}

export default SongLists;
