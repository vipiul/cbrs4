import "../styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
}
