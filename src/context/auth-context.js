import React from 'react';

const authContext = React.createContext({
    authetificated: false, login: () => {}
});

export default authContext;