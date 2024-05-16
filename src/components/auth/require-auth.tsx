// import Redirect from "@/pages/redirect";
import { ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  // const Component = withAuthenticationRequired(() => children, {
  //   onRedirecting: () => <Redirect />,
  // });

  // return <Component />;
  return <>{children}</>;
}

export default RequireAuth;
