import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MetropolisBold from '@/assets/fonts/Metropolis/Metropolis-Bold.otf';
import MetropolisLight from '@/assets/fonts/Metropolis/Metropolis-Light.otf';
import MetropolisRegular from '@/assets/fonts/Metropolis/Metropolis-Regular.otf';
import MetropolisThin from '@/assets/fonts/Metropolis/Metropolis-Thin.otf';
import CustomLoader from '@/components/Loader/CustomLoader.tsx';

import { routes } from './routes.tsx';

const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

const router = createBrowserRouter(routes);

const darkTheme = createTheme({
	palette: {
		error: {
			main: '#f44336',
		},
	},
	typography: {
		fontFamily: 'Metropolis, Arial',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Metropolis'), local('Metropolis-Regular'), url(${MetropolisRegular}) format('woff2');
        },
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Metropolis'), local('Metropolis-Bold'), url(${MetropolisBold}) format('woff2');
        },
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('Metropolis'), local('Metropolis-Light'), url(${MetropolisLight}) format('woff2');
        },
        @font-face {
          font-family: 'Metropolis';
          font-style: normal;
          font-display: swap;
          font-weight: 200;
          src: local('Metropolis'), local('Metropolis-Thin'), url(${MetropolisThin}) format('woff2');
        }
      `,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<RouterProvider router={router} />
				<CustomLoader />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>,
);
