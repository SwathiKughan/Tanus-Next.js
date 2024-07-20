import '../styles/global.css';
import Navbar from '../components/Navbar';
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

