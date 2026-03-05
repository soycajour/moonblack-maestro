import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Normalizes URLs:
 * - Removes trailing slashes
 * - Forces lowercase paths
 * - Strips query parameters (utm_, ref, etc.)
 */
const RouteNormalizer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search } = location;
    let normalized = pathname;

    // Force lowercase
    if (normalized !== normalized.toLowerCase()) {
      normalized = normalized.toLowerCase();
    }

    // Remove trailing slash (except root)
    if (normalized.length > 1 && normalized.endsWith("/")) {
      normalized = normalized.replace(/\/+$/, "");
    }

    // Strip query strings
    if (normalized !== pathname || search) {
      navigate(normalized, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default RouteNormalizer;
