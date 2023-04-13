import '@/styles/globals.css'
import {UsernameContextProvider} from "@/contexts/UsernameContext";
import {ThemeProvider} from "@/contexts/ThemeContext";

export default function App({Component, pageProps}) {
    return (
        <UsernameContextProvider>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </UsernameContextProvider>
    )
}

