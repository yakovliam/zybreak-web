// import Redirect from "@/pages/redirect";
// import { Navigate } from "react-router-dom";

interface AuthRedirectProps {
  children: React.ReactNode;
}

function AuthRedirect({ children }: AuthRedirectProps) {
  // if (isLoading) {
  //   return <Redirect />;
  // }

  // if (isAuthenticated) {
  //   return <Navigate to="/dashboard" />;
  // }

  return <>{children}</>;
}

export default AuthRedirect;
