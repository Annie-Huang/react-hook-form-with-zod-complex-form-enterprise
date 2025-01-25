import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesWrapper } from './routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesWrapper />
  </StrictMode>,
);
