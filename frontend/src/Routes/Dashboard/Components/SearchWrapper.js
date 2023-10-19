import './SearchWrapper.css'

const SearchWrapper = () => {
  return (
    <div className='search-wrapper'>
        <input type="text" placeholder='Enter a city'/>
        <button>Add City</button>
    </div>
  )
}

export default SearchWrapper