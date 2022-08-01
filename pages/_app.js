import '../styles/globals.css'
import { Loader } from "../components/Loader";
import React from "react"
import { Provider } from 'react-redux';
import store from '../store';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  })
  return (
    <Provider store={store}>
      <Loader />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
