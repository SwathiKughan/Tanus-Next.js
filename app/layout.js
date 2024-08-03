import '../styles/global.css';

import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS link


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tanus-AI-Chatbot</title>
        <link rel="icon" href="https://angular.envytheme.com/tanus/assets/images/logo-icon.svg"></link>
      </head>
      <body>
        
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

