import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
          navigate("/", { replace: true });
          return;
        }

        setAuthorized(true);
      } catch {
        navigate("/", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  if (authorized === null) {
    return <div className="text-center mt-20 text-gray-500">Checking access...</div>;
  }

  return children;
}
