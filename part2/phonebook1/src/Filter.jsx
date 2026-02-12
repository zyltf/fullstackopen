const Filter = ({newFilter, handleFilterChange}) => {
    return (
        <>
            <div>
                <label>filter shown with</label>
                <input value={newFilter} onChange={handleFilterChange}/>
            </div>
        </>
    )
}

export default Filter