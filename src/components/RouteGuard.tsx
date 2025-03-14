"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "@/app/resources"; // Remove `protectedRoutes` import
import { Flex, Spinner } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const [isRouteEnabled, setIsRouteEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkRouteEnabled = () => {
      if (!pathname) return false;

      // Check if the route exists in the `routes` object
      if (pathname in routes) {
        return routes[pathname as keyof typeof routes];
      }

      // Handle dynamic routes (e.g., `/blog`, `/work`)
      const dynamicRoutes = ["/blog", "/work"] as const;
      for (const route of dynamicRoutes) {
        if (pathname?.startsWith(route) && routes[route]) {
          return true;
        }
      }

      return false;
    };

    // Perform the route check
    const routeEnabled = checkRouteEnabled();
    setIsRouteEnabled(routeEnabled);
    setLoading(false);
  }, [pathname]);

  if (loading) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  // If the route is not enabled, show the `NotFound` page
  if (!isRouteEnabled) {
    return <NotFound />;
  }

  // If the route is enabled, render the children
  return <>{children}</>;
};

export { RouteGuard };