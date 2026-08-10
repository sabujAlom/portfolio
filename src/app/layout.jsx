import './globals.css'
import HomeClient from '../components/HomeClient'

export const metadata = {
  title: 'Sabuj Alom | MERN Stack Developer',
  description: 'Portfolio of Sabuj Alom - MERN Stack Developer',
  icons:{
    icon:'/favicon.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HomeClient>{children}</HomeClient>
      </body>
    </html>
  )
}
