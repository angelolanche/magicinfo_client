import type { AppProps } from 'next/app'
import { ApiProvider } from '../contexts/ApiContext'
import GlobalStyles from '@components/styles/global'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <ApiProvider>
                <Component {...pageProps} />
            </ApiProvider>
        </>
    )
}
