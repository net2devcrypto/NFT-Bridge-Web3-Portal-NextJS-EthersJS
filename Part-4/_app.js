import '../styles/globals.css'

import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}
export default MyApp
