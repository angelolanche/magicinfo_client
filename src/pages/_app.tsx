import '@components/styles/globals.css'
import type { AppProps } from 'next/app'
import { Authprovider } from '../contexts/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Authprovider>
                <Component {...pageProps} />
            </Authprovider>
        </>
    )
}
