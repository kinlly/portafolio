import React from 'react';
import {useHistory, useLocation} from "react-router-dom";

function useLocationHook() {
  const location = useHistory();

  return (
    <div>
      <h1>Users page</h1>
      <p>{location.pathname}</p>
      <p>{new URLSearchParams(location.search).get('name')}</p>
    </div>
  );
}

export default useLocationHook;