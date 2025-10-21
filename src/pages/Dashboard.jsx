import PageBreadcrumb from "../components/PageBreadcrumb.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Dashboard() {
  const handleLogout = async () => {
    const res = await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    if (res.ok) {
      alert("Logout success ✅");
      window.location.href = "/";
    } else {
      alert(data.error || "Logout failed ❌");
    }
  };

  return (
    <div>
      <PageMeta title="React.js Dashboard | TailAdmin" description="Dashboard page" />
      <PageBreadcrumb pageTitle="Dashboard" />

      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
            Welcome to Dashboard
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base mb-6">
            Your dashboard is ready. You can start putting content here.
          </p>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
