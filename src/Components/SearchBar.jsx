const SearchBar = ({searchParameter, setSearchParameter}) => {
    return (
        <div>
            <label>
                Search:
                <input value={searchParameter} onChange={(event) => setSearchParameter(event.target.value)}/>
            </label>
        </div>
    )
}

export default SearchBar;