
import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function Home() {
  
  //ignore below code as it is used to counter problems in SSR vs CSR
  const [hydrated, setHydrated] = React.useState(false);
  
  const [name, setName] = useLocalStorage('name', '');
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  // ignore code till here.
  
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
}

export default Home;
