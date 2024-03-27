import "./Button.scss";

export default function Button({ className, onClick, children }) {
  return (
    <button className={"custom-button " + className} onClick={onClick}>
      {children}
    </button>
  );
}
