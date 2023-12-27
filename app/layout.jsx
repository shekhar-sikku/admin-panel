import NextTopLoader from 'nextjs-toploader';
import './ui/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Admin Homepage Next.js',
    description: 'Next.js 14 Tutorial',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextTopLoader height={2} color="crimson" easing="cubic-bezier(0.53,0.21,0,1)" showSpinner={false} />
                {children}
            </body>
        </html>
    )
}