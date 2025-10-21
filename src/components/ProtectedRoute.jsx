import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          setAuthorized(false);
          navigate("/", { replace: true });
          return;
        }

        setAuthorized(true);
      } catch {
        setAuthorized(false);
        navigate("/", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  if (authorized === null) {
    return <div className="text-center mt-20 text-gray-500">Checking access...</div>;
  }

  if (!authorized) return <Navigate to="/" replace />;

  return children;
}