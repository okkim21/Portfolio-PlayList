import { useState } from "react";

const AddPlayList = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please input a name");
      return;
    }

    if (!image) {
      alert("please input a image name");
      return;
    }
    const today = new Date(),
      date =
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate();

      const songLists=[];

    onAdd({ name, image, songLists, date });

    setName("");
    setImage("");
  };

   const handleReset = () => {
    setName("");
    setImage("");
  }

  return (
    <form className="add-form" id="addPlaylistForm" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="name"
          id="input-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Image</label>
        <input
          type="text"
          placeholder="Image"
          id="input-image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="formButton">
      <input type="submit" value="Save Playlist" className="btn btn-block" />
      <button id="reset-button" onClick={handleReset} className="btn btn-block"> Reset </button>
      </div>
    </form>
  );
};

export default AddPlayList;
