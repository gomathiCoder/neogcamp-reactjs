import "./styles.css";

export default function Ex07() {
  var likeCounter = 0;
  function clickHandler() {
    likeCounter += 1;
    console.log("Number of likes: " + likeCounter);
  }

  return (
    <div className="Ex07">
      <button onClick={clickHandler}>Like</button>
    </div>
  );
}
