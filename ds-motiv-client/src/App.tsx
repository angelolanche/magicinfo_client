import { ApiProvider } from './contexts/ApiContext.tsx'
import GlobalStyles from './styles/global.ts'
import Home from './components/home.tsx'

export default function App() {
    return (
        <>
            <GlobalStyles />
            <ApiProvider>
              <Home />
            </ApiProvider>
        </>
    )
}

