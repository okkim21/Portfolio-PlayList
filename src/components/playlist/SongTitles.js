const SongTitles = ({ songLists }) => {
  function renderSongTitle(s) {
    return (
      <span key={s.songid}>
        <span style={{fontSize:'1.5em', color:'steelblue'}}>{s.songName.substring(0,1)}</span>{s.songName.substr(1)} {}
      </span>
    );
  }

  return <div>{songLists.map(renderSongTitle)}</div>;
};

export default SongTitles;
