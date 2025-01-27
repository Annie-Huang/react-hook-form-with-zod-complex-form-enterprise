import { ConfirmProvider } from '@/features/confirm/components/provider';
import { RoutesWrapper } from '@/routes';
import { theme } from '@/utils/theme';
import { setupZodErrors } from '@/utils/zodConfig';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();
// show custom error message, you can comment it out and it will show the default error message when each field is invalid.
setupZodErrors();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ConfirmProvider>
            {/* https://mui.com/material-ui/react-css-baseline/?srsltid=AfmBOoom62aVVYrgiDnEKmcRej9MvB5yZu0zUzZGx6Ex8iv3rIdcOcyV
                Add normalize.css to make each each browser has consistent styling with each other.
            */}
            <CssBaseline />
            {/* Not adding SnackbarProvider also seems to work */}
            <SnackbarProvider />
            <RoutesWrapper />
          </ConfirmProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
