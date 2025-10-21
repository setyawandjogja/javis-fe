function Dashboard() {
  const handleLogout = async () => {
    const res = await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (res.ok) {
      alert("Logout success ✅");
      window.location.href = "/"; // redirect ke login
    } else {
      alert(data.error || "Logout failed ❌");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
