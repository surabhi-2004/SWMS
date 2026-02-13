import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Navbar from "./components/Navbar";
import Companies from "./pages/admin/Companies";
import Reports from "./pages/admin/Reports";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import MachineDetails from "./pages/customer/MachineDetails";
import MachineHealth from "./pages/customer/MachineHealth";
import Helpdesk from "./pages/customer/Helpdesk";
import CustomerSessions from "./pages/customer/CustomerSessions";
import CustomerAlerts from "./pages/customer/CustomerAlerts";
import Welcome from "./pages/Welcome";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/companies" element={<Companies />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/machine-details" element={<MachineDetails />} />
        <Route path="/customer/machine-health" element={<MachineHealth />} />
        <Route path="/customer/helpdesk" element={<Helpdesk />} />
        <Route path="/customer/sessions" element={<CustomerSessions />} />
        <Route path="/customer/alerts" element={<CustomerAlerts />} />
        <Route path="/welcome" element={<Welcome />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

