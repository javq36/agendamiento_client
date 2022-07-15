import '../styles/globals.css'
import { Loader } from "../components/Loader";
import React from "react"


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 10000);
  })
  return (
    <>
      <Loader />
      <>
        <Component {...pageProps} />
      </>
    </>
  )
}

export default MyApp
