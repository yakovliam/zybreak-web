import { ThemeProvider } from "./components/theme/theme-provider";
import Layout from "@/components/layout/layout";
import RequireAuth from "@/components/auth/require-auth";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { AuthProvider } from "./components/auth/auth-provider";
import Dashboard from "./pages/dashboard";
import AuthRedirect from "./components/auth/auth-redirect";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <AuthRedirect>
                    <HomePage />
                  </AuthRedirect>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
