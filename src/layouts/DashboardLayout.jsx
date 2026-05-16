import { Outlet, Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Wallet,
  BarChart3,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardLayout() {
  const location = useLocation();

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={22} />,
      path: "/dashboard",
    },

    {
      name: "Investments",
      icon: <Wallet size={22} />,
      path: "/dashboard/investments",
    },

    {
      name: "Performance",
      icon: <BarChart3 size={22} />,
      path: "/dashboard/performance",
    },

    {
      name: "Reports",
      icon: <FileText size={22} />,
      path: "/dashboard/reports",
    },

    {
      name: "Settings",
      icon: <Settings size={22} />,
      path: "/dashboard/settings",
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      flex
      "
    >
      {/* SIDEBAR */}

      <aside
        className="
        w-[280px]
        bg-[#081C15]
        border-r
        border-white/10
        hidden
        lg:flex
        flex-col
        justify-between
        p-8
        "
      >
        {/* TOP */}

        <div>
          {/* LOGO */}

          <Link
            to="/"
            className="
            text-3xl
            font-bold
            text-[#D4AF37]
            block
            mb-16
            "
          >
            Colonial Ventures
          </Link>

          {/* NAVIGATION */}

          <nav className="space-y-4">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                transition-all
                ${
                  location.pathname === link.path
                    ? "bg-[#D4AF37] text-black"
                    : "hover:bg-white/5"
                }
                `}
              >
                {link.icon}

                <span className="font-medium">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* BOTTOM */}

        <button
          className="
          flex
          items-center
          gap-4
          px-5
          py-4
          rounded-2xl
          hover:bg-red-500/20
          text-red-400
          transition-all
          "
        >
          <LogOut size={22} />

          <span className="font-medium">
            Logout
          </span>
        </button>
      </aside>

      {/* MAIN CONTENT */}

      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}

        <header
          className="
          h-[90px]
          border-b
          border-white/10
          bg-[#081C15]
          flex
          items-center
          justify-between
          px-6
          lg:px-10
          "
        >
          <div>
            <h1
              className="
              text-2xl
              font-bold
              "
            >
              Investor Dashboard
            </h1>

            <p className="text-gray-400">
              Welcome back to Colonial Ventures
            </p>
          </div>

          {/* USER */}

          <div
            className="
            flex
            items-center
            gap-4
            "
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              bg-[#D4AF37]
              flex
              items-center
              justify-center
              text-black
              font-bold
              "
            >
              R
            </div>

            <div className="hidden md:block">
              <p className="font-semibold">
                Investor Account
              </p>

              <p className="text-sm text-gray-400">
                Premium Member
              </p>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}

        <main
          className="
          flex-1
          p-6
          lg:p-10
          overflow-y-auto
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}