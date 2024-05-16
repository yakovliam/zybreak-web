/// <reference types="vite-plugin-svgr/client" />

import { cn } from "@/lib/utils";

import { Link } from "react-router-dom";
// import UserNav from "./user-nav";
import { ModeToggle } from "../theme/mode-toggle";
import { MobileSidebar } from "@/components/navigation/mobile/mobile-sidebar";
import LogoLight from "@/components/logo/logo-light.svg?react";
import LogoDark from "@/components/logo/logo-dark.svg?react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <nav className="h-14 flex items-center justify-between p-4 border-b">
      <div className="hidden lg:block">
        <Link to="/">
          <LogoLight className="block dark:hidden" width={30} />
          <LogoDark className="hidden dark:block" width={30} />
        </Link>
      </div>
      <div className={cn("block lg:!hidden")}>
        <MobileSidebar />
      </div>

      <div className="flex items-center gap-2">
        {/* {isAuthenticated && <UserNav />} */}
        {/* {!isAuthenticated && ( */}
        <Button
          onClick={() => {
            // login();
          }}
          variant="link"
        >
          Login
        </Button>
        {/* )} */}
        <ModeToggle />
      </div>
    </nav>
  );
}
