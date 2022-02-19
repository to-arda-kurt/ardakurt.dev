import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider storageKey="theme" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
