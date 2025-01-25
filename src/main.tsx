import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesWrapper } from '@/routes';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/utils/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RoutesWrapper />
    </ThemeProvider>
  </StrictMode>,
);
