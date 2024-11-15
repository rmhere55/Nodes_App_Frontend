import React from 'react'
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {IoMdClose} from 'react-icons/io'
const SearchBar = ({
    value,
    onChange,
    handleSearch, onclearSearch
}) => {
  return (
    <div className='w-80 flex items-center px-4 bg-slate-100 rounded-md'>
        <input type='text' placeholder='Search Notes' 
        value={value}
        onChange={onChange} 
        className='w-full text-xs bg-transparent py-[11px] outline-none'
/>
{ value &&
<IoMdClose onClick={onclearSearch} className='text-slate-500 cursor-pointer hover:text-black mr-3'/>}
<FaMagnifyingGlass
className='text-slate-400 text-2xl ml-2 cursor-pointer'
onClick={handleSearch}
/>

    </div>
  )
}

export default SearchBar