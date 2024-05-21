/* eslint-disable react/prop-types */

function Search({ search, setSearch, handleSearch }) {
  return (
    <div className=' w-full flex justify-around items-center mb-8 mt-3 '>
      <input
        className=' w-[70%] h-[45px] border rounded-[8px] px-[15px] py-[2px] bg-white text-[#555555] '
        type='text'
        name='search'
        placeholder='Enter City Name'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className=' rounded-[8px] bg-slate-900 text-white text-[20px] cursor-pointer px-[15px] py-[10px] '
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
