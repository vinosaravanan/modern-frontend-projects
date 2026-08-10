import React, { useState } from "react";
import Button from './Button'

function SearchForm({onSearch, isLoading, placeholder = "search..."}) {
  const [searchTerm, SetsearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
        onSearch(searchTerm.trim())
    }
  }


  return (
  <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-lg mx-auto">
    <input 
      type="text"
      value={searchTerm}
      onChange={(e) => SetsearchTerm(e.target.value)} 
      placeholder={placeholder}
      className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm text-slate-800 placeholder-slate-400"
    />

   <Button type='submit' isLoading={isLoading} disabled={!searchTerm.trim()}>
       Search
   </Button>

  </form>
 );
}

export default SearchForm;
