import React, { useState } from 'react';
import {useLazySearchUsersQuery} from './services/userApi';

function App() {

const [searchTerm, SetsearchTerm] = useState('');

const [triggerSearch, {data, error, isLoading, isUninitialized}] = useLazySearchUsersQuery();

const handleSearch = (e) => {
   e.preventDefault();
   if(searchTerm.trim()){
     triggerSearch(searchTerm)
   }
}
console.log(data.id);

  return (
    <>
     <form onSubmit={handleSearch}>
       <input type="text" placeholder='search user...' onChange={(e) => SetsearchTerm(e.target.value)}/>
       <button type='submit' onClick={handleSearch}>search</button>
     </form>
     <div>
        
     </div>
    </>
  )
}

export default App;