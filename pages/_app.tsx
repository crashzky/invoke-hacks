import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import '@/styles/globals.css';
import '@/styles/fonts.css';
import '@/styles/typeface.css';
import '@/styles/radio.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>
					Invoke
				</title>
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default App;
