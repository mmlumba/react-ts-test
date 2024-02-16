import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import {
    applyPolyfills,
    defineCustomElements,
  } from "@department-of-veterans-affairs/component-library";
  
  applyPolyfills().then(() => {
    defineCustomElements();
  });

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App />)