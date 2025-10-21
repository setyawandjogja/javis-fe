import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(null); // awalnya null

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
      } catch (err) {
        navigate("/", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  // sementara loading biar gak blank
  if (authorized === null) {
    return (
      <div className="text-center mt-20 text-gray-500">Checking access...</div>
    );
  }

  return children;
}
