
const Search = ({ searchHandler }) => {

    return (
        <div className="search">
            <form>
                <input type="text" placeholder="Search...." onChange={(e) => searchHandler(e.target.value)} />
            </form>
        </div>
    )
}

export default Search;