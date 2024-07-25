import React, { useState } from 'react';
import './App.css';

const persons = [
  { id: 1, name: 'Person 1', contact: '123-456-7890' },
  { id: 2, name: 'Person 2', contact: '987-654-3210' },
  { id: 3, name: 'Person 3', contact: '123-456-7890' },
  { id: 4, name: 'Person 4', contact: '987-654-3210' },
  // Add more persons as needed
];

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleContactClick = (person) => {
    setSelectedPerson(person);
  };

  const closePopup = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="App">
      {persons.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
          <p>
            <button className="button" onClick={() => handleContactClick(person)}>
              Contact
            </button>
          </p>
        </div>
      ))}

      {selectedPerson && (
        <div className="popup">
          <div className="popup-content">
            <h2>Contact Information</h2>
            <p>Name: {selectedPerson.name}</p>
            <p>Contact Number: {selectedPerson.contact}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
