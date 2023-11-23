import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import ConfirmationPage from "./pages/confirmation/ConfirmationPage";
import ReportFormPage from "./pages/report-form/ReportFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ConfirmationPage />,
    
  },
  {
    path: "/report",
    element: <ReportFormPage />,
    
  },
], {
	basename: "/blockaid-false-positive-portal/"
});

function App() {
  return (
    <>
      <Topbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
