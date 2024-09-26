import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/Sections/DownloadApp/DownloadApp";
import FAQs from "./components/Sections/FAQs/FAQs";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
