import '../styles/globals.css';
import Header from '@/components/header/pages';
import Footer from '@/components/footer/pages';

export const metadata = {
   title: 'سایت فروشگاه من',
   description: 'mernfa default next 13 project',
}

export default function RootLayout({ children }) {
   return (
      <html lang="fa-IR">
         <body>
            <Header/>
            {children}
            <Footer/>
            </body>
      </html>
   )
}
