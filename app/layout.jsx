import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import "@/assets/css/styles.css";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: "dvbhjvbd ",
  data: "nsj cxjb j"
};

const layout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default layout;