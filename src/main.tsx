import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesWrapper } from '@/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesWrapper />
  </StrictMode>,
);
