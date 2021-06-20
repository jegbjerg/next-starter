import type { AppProps /*, AppContext */ } from 'next/app';
import '~/styles/main.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
