import React, { useState } from 'react';
import {useLazySearchUsersQuery} from './services/userApi';
import UserDirectory from './pages/UserDirectory';

function App() {

  return (
    <>
      <UserDirectory/>
    </>
  )
}

export default App;