import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// Remove the instant loading screen after React starts rendering
requestAnimationFrame(() => {
  const loader = document.getElementById('initial-loader');

  if (loader) {
    loader.remove();
  }
});
