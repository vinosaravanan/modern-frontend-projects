import React, { useState } from "react";
import { useLazySearchUsersQuery } from "../services/userApi";
import SearchForm from '../Components/SearchForm'

function UserDirectory() {
  const [lastSearch, SetlastSearch] = useState(); 
  const [triggerSearch, { data, error, isLoading, isUninitialized }] =
    useLazySearchUsersQuery();

    const handleSearch = (searchTerm) => {
       SetlastSearch(searchTerm);
       triggerSearch(searchTerm)
    }
    const users = data?.users || []
    console.log(data)

  return (
    <div className="max-w-4xl py-10 px-4">
        <div className="text-center mb-8">
           <h1 className="text-3xl font-extrabold text-slate-800 mb-2">User Directory</h1>
        </div>

        <div className="mb-10">
           <SearchForm 
              onSearch={handleSearch}
              isLoading={isLoading} 
              placeholder='Search by first or last name...'
             />
        </div>
        {/* States Handling */}
       {error && (
        <div className="p-4 text-center text-red-700 bg-red-100 rounded-lg border border-red-200">
          Failed to fetch users. Please try again.
        </div>
       )}

       {isUninitialized && (
        <div className="text-center text-slate-500 py-10">
          Enter a name to search the directory.
        </div>
      )}

      {!isLoading && !isUninitialized && users.length === 0 && !error && (
        <div className="text-center py-10 text-slate-500 bg-white rounded-xl shadow-sm border border-slate-200">
          No users found matching "{lastSearch}".
        </div>
      )}


   </div>
  )
  
}

export default UserDirectory;
