import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const fetchPersons = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      }
      )
  }
  useEffect(fetchPersons, [])

  const addPerson = () => {
    const personObject = {name: newName, number: newNumber}
    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })
  }

  const deletePerson = (id) => {
    if(confirm("Are you sure you want to delete this person?")) {
    const url = `http://localhost:3001/persons/${id}`

      axios.delete(url).then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
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

  const submitBtn = () => {
    event.preventDefault()
    persons.some(person => person.name === newName) 
    ? alert(`${newName} is already added to phonebook`)
    : addPerson()
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