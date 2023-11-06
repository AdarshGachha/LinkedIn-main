import './globals.css'
import Wrapper from "@/components/wrapper/Wrapper";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job | Internship Finder & Creator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>

      <Wrapper>{children}</Wrapper>
      
      </body>
      
    </html>
  )
}
