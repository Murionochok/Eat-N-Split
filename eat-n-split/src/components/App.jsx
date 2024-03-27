import { useState } from "react";
import FriendsList from "./FriendsList";
import SplitBillMenu from "./SplitBillMenu";

export default function App() {
  const [friends, setFriends] = useState([]);
  const [openSplitBill, setOpenSplitBill] = useState(-1);
  function handleSetOpenSplitBill(id) {
    id === openSplitBill ? setOpenSplitBill((s) => -1) : setOpenSplitBill(id);
  }
  function handleSetFriends(friend) {
    setFriends((items) => [...items, friend]);
  }
  return (
    <div className="App">
      <FriendsList
        friends={friends}
        addFriend={handleSetFriends}
        getFriendId={handleSetOpenSplitBill}
      />
      {openSplitBill >= 0 && <SplitBillMenu friend={friends[openSplitBill]} />}
    </div>
  );
}
