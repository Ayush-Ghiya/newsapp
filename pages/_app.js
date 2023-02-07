import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  
    
  }, [router.events])
  
  return <>
          <LoadingBar
        color="#0046E5"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
  <Component {...pageProps} /></>
}

export default MyApp
