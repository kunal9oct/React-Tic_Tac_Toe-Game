import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // !!!!!  passing a function is recomended inside state updating function especially when your new state value is based on previous state value like reversing it whenever button clicked

    // setIsEditing(!isEditing); // here current value is first or previous state value which is calculated or transformed instantly into new state & that value is scheduled for future by react
    // while in below same code --  it's whole code function inside is scheduled for future which will calculate or transform value at that time with current value present at that time
    setIsEditing((editing) => !editing); // react will automatically pass current state value to state updating function
    // & remember if their is another state updating function executed before this one then value out of it will be treated as actual current value for this state updating function

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

/*
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </li>
  );
*/

// !!!!!!    CODING EXERCISE OR ITEM NO.- 78 IN REACT COURSE BY MAXIMILAN     !!!!!
/* !!!!      HOW TODO OR GET SINGLE, COMBINED STATE OBJECT      !!!!
import React from 'react';
// import Review from './Review.js';

export default function Review({ feedback, student }) {
  return (
    <figure>
      <blockquote>
        <p>{feedback}</p>
      </blockquote>
      <figcaption>{student}</figcaption>
    </figure>
  );
}

// don't change the Component name "App"
function App() {
    // const [ feedbackValue, setFeedback ] = React.useState("Awesome Course!!!");
    // const [ studentValue, setStudent ] = React.useState("Conqueror Kunal");
    
    const [ updatedValue, setValue ] = React.useState({feedback: "Awesome Course!!!", student: "Conqueror Kunal"});
    
    function handleChange(event) {
        setValue({feedback: event.target.value, student: event.target.value});
    }
    
    // function handleFeedback(event) {
    //     setFeedback(event.target.value);
    // }
    
    // function handleStudent(event) {
    //     setStudent(event.target.value);
    // }
    
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={updatedValue.feedback} onChange={handleChange} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={updatedValue.student} onChange={handleChange} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedbackValue} student={studentValue} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
*/
