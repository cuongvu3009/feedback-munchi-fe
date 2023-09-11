import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLogin from "./pages/dashboard/DashboardLogin";
import EndFeedBack from "./pages/endFeedBack/EndFeedBack";
import FeedbackOrder from "./pages/feedback/FeedbackOrder";
import FeedbackService from "./pages/feedback/FeedbackService";
import NotFound from "./pages/NotFound";
import React from "react";
import Responses from "./pages/dashboard/Responses";
import SuccessFeedback from "./pages/successFeedback/SuccessFeedback";
import { useAuthContext } from "./context/AuthContext";

function App() {
  // const { user } = useAuthContext();
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        {/* Feedback */}
        <Route path="/" element={<FeedbackService />} />
        <Route path="/order-feedback" element={<FeedbackOrder />} />
        <Route path="/feedbacksent" element={<SuccessFeedback />} />
        <Route path="/endfeedback" element={<EndFeedBack />} />

        {/* Dashboard */}

        <Route
          path="/dashboard/login"
          element={
            !user ? <DashboardLogin /> : <Navigate to="/dashboard" replace />
          }
        />

        <Route
          path="/dashboard"
          element={
            user ? <Dashboard /> : <Navigate to="/dashboard/login" replace />
          }
        />
        <Route
          path="/dashboard/responses"
          element={
            user ? <Responses /> : <Navigate to="/dashboard/login" replace />
          }
        />
        {/* <Route
          path="/dashboard/settings"
          element={
            user ? <DashboardSettings /> : <Navigate to="/dashboard/login" replace />
          }
        /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
