import AppInput from '../AppInput'

function SearchPanel({ placeholder, queryString, onSearch }) {
  return (
    <AppInput
      placeholder={placeholder}
      value={queryString}
      onInput={onSearch}
      className="search-input"
    />
  )
}

export default SearchPanel
