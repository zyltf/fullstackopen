import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import {getAll, createPerson, deleteOp, update} from './Ops'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const fetchPersons = () => {
    getAll()
      .then(data => setPersons(data))
      .then(() => console.log("promise fulfilled <fetchPersons>"))
  }
  useEffect(fetchPersons, [])

  const addPerson = () => {
    const personObject = {name: newName, number: newNumber}
    const exist = persons.filter(person => person.name === newName)
    if(exist){
      confirm(`${newName} is already added to phonebook, replace the old number with a new one`)
      ? update(exist[0].id, personObject)
        .then(data => 
          setPersons(persons.map(person => person.id == exist[0].id ? data : person)))
      : console.log("not updated")
    } else {
      createPerson(personObject)
        .then(data => setPersons(persons.concat(data)))
        .then(() => console.log("promise fulfilled <addPerson>")) 
    }
  }

  const deletePerson = (id) => {
    if(confirm("Are you sure you want to delete this person?")) {
      deleteOp(id)
      .then(response => setPersons(persons.filter(person => person.id !== id)))
      .then(() => console.log("promise fulfilled <deletePerson>"))
    }
  }

  const personsToShow = showAll 
  ? persons 
  : persons.filter(person => person.name.includes(newFilter))

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(false)
  }

  const submitBtn = (event) => {
    event.preventDefault()
    addPerson()
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} 
        handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} submitBtn= {submitBtn}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
    </div>
  )
}

export default App