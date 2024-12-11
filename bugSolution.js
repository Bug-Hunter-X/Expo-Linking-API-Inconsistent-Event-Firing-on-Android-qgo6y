The solution involves a combination of using `Linking.getInitialURL` to capture the initial deep link on app launch and `Linking.addEventListener` for subsequent deep links.  This approach ensures that a deep link is never missed:

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);
  useEffect(() => {
    const handleInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };
    handleInitialUrl();
  }, []);

  useEffect(() => {
    const subscription = Linking.addEventListener('url', (event) => {
      // Handle the deep link here
      console.log('Deep link received:', event.url);
    });

    return () => subscription.remove();
  }, []);

  // Handle both initialUrl and the ones received through the listener
  useEffect(() => {
    if (initialUrl) {
      console.log('Initial URL:', initialUrl);
      // Handle the initial URL here
    }
  }, [initialUrl]);

  return (
    // ... your app content
  );
}
```