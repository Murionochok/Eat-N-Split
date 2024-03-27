import "./FriendCard.scss";

export default function FriendCard({ getFriendId, picPath, name, debt }) {
  return (
    <div className="friend-card" onClick={getFriendId}>
      <div className="friend-card__img-box">
        <img className="friend-card__img" src={picPath} alt="friend" />
      </div>
      <div className="friend-card__info">
        <h1 className="friend-card__name">{name}</h1>
        {debt < 0 && (
          <h2 className="friend-card__debt friend-card__debt-minus">
            You owe {name} {Math.abs(debt)}$
          </h2>
        )}
        {debt > 0 && (
          <h2 className="friend-card__debt friend-card__debt-plus">
            {name} owes you {debt}$
          </h2>
        )}
        {debt === 0 && (
          <h2 className="friend-card__debt">You and {name} are even</h2>
        )}
      </div>
    </div>
  );
}
