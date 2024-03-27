import { useState } from "react";

import Button from "./Button";

import "./AddFriendMenu.scss";

export default function AddFriendMenu({ addFriend }) {
  const [name, setName] = useState("");
  const [picPath, setPicPath] = useState("");
  const [toggle, setToggle] = useState(true);
  function handleSetToggle() {
    setToggle((s) => !s);
  }
  function handleSetName(e) {
    setName(e.target.value);
  }
  function handleSetPicPath(e) {
    setPicPath(e.target.value);
  }

  function getFriend() {
    addFriend({ picPath, name, debt: 0 });
  }
  return (
    <>
      {toggle ? (
        <Button onClick={handleSetToggle}>Add Friends</Button>
      ) : (
        <>
          <div className="add-friend-menu">
            <div className="add-friend-menu__name-section">
              <label htmlFor="name">Friend's name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleSetName}
              />
            </div>
            <div className="add-friend-menu__url-section">
              <label htmlFor="url">Image URL</label>
              <input
                id="url"
                type="text"
                value={picPath}
                onChange={handleSetPicPath}
              />
            </div>
            <div className="add-friend-menu__button-section">
              <Button className="add-friend-menu__add" onClick={getFriend}>
                Add
              </Button>
            </div>
          </div>
          <div className="close_button">
            <Button onClick={handleSetToggle}>Close</Button>
          </div>
        </>
      )}
    </>
  );
}
