import PageBreadcrumb from "../components/PageBreadcrumb.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function Dashboard() {
  const handleLogout = async () => {
    try {
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
    } catch (err) {
      alert("Network error ❌");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen px-5 py-7 xl:px-10 xl:py-12">
      {/* Page Metadata */}
      <PageMeta
        title="React.js Dashboard | TailAdmin - React.js Tailwind CSS Admin Dashboard"
        description="This is the React.js Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      {/* Breadcrumb */}
      <PageBreadcrumb pageTitle="Dashboard" />

      {/* Main Content */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mx-auto w-full max-w-[630px] text-center">
          <h3 className="mb-4 font-semibold text-gray-800 dark:text-white/90 sm:text-2xl">
            Welcome to Dashboard
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base mb-6">
            Start putting content on grids or panels, you can also use different
            combinations of grids. Check out the dashboard and other pages.
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
