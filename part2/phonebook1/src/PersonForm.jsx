const PersonForm = ({newName, newNumber, handleNameChange, handleNumberChange, submitBtn}) => {
    return (
        <>
            <form>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
                <div><button type="submit" onClick={submitBtn}>add</button></div>
            </form>
        </>
    )
}

export default PersonForm