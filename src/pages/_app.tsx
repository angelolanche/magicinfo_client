import type { AppProps } from 'next/app'
import { ApiProvider } from '../contexts/ApiContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ApiProvider>
                <Component {...pageProps} />
            </ApiProvider>
        </>
    )
}
