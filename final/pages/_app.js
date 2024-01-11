import { NextUIProvider } from '@nextui-org/react';
import { createTheme } from "@nextui-org/react";
import '../styles/globals.css'

const darkTheme = createTheme({
  type: 'dark',
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;