import "tailwindcss/tailwind.css";
import "../src/styles/main.scss";
import { store } from "../src/state/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
