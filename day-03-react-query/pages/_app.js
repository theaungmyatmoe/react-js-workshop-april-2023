import '@/styles/globals.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
            staleTime: 1000 * 60 * 60 * 24,
        },
    },
})

export default function App({Component, pageProps}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </QueryClientProvider>
    )
}
