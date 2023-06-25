import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn } from "./pages/auth";
import useAuthCheck from "./hooks/useAuthCheck";
import PrivateRoute from "./layouts/privateRoute";
import loaderGif from "../src/assets/icons/loader.gif"

function App() {
  const authCheck = useAuthCheck()

  return !authCheck? (
    <div className="h-screen">
        <p>Loading..</p>
    </div>
    )
    :
    (
    <Routes>
      <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
    )
  
}

export default App;
