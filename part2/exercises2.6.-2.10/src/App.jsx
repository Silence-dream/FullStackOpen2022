import { useState } from "react";

function Filter({ filterName, handleFilter }) {
  return (
    <input type="text" value={filterName} onChange={(e) => handleFilter(e)} />
  );
}
function PersonForm({
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  addPerson,
}) {
  return (
    <form>
      <div>
        name:
        <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>

      <div>
        <button type="submit" onClick={(e) => addPerson(e)}>
          add
        </button>
      </div>
    </form>
  );
}
function Persons({ persons }) {
  return (
    <>
      {persons.map((item, index) => {
        return (
          <p key={index}>
            {item.name}
            &nbsp; &nbsp;
            {item.number}
          </p>
        );
      })}
    </>
  );
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  function handleFilter(e) {
    let value = e.target.value.trim();
    setFilterName(value);

    let arr = persons.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase())
        ? item
        : null;
    });

    setFilteredPersons(arr);

    if (value === "") {
      setPersons(persons);
    }
  }

  function addPerson(e) {
    e.preventDefault();
    if ([newName, newNumber].map((item) => item.trim()).includes("")) {
      alert("Please fill in all fields");
      return false;
    }

    let flag = persons.find((item) => item.name === newName);

    if (flag) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }

    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <Filter {...{ filterName, handleFilter }} />
      <h3>add a new</h3>
      <PersonForm
        {...{ newName, setNewName, newNumber, setNewNumber, addPerson }}
      />
      <h2>Numbers</h2>
      {filteredPersons.length > 0 ? (
        <Persons persons={filteredPersons} />
      ) : (
        <Persons persons={persons} />
      )}
    </div>
  );
};

export default App;
