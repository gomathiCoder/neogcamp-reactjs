import "./styles.css";

export default function Ex06() {
  function clickHandler() {
    console.log("liked");
  }

  return (
    <div className="Ex06">
      <button onClick={clickHandler}>Like</button>
    </div>
  );
}
