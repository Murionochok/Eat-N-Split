import AddFriendMenu from "./AddFriendMenu";

import FriendCard from "./FriendCard";
export default function FriendsList({ friends, addFriend, getFriendId }) {
  return (
    <div className="friends-list">
      {friends.map((friend, index) => (
        <FriendCard
          getFriendId={() => getFriendId(index)}
          picPath={friend.picPath}
          name={friend.name}
          debt={friend.debt}
          key={index}
        />
      ))}
      <AddFriendMenu addFriend={addFriend} />
    </div>
  );
}
