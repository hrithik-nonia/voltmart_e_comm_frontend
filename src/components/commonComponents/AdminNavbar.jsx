import { useState } from "react";
import { Bell, LoaderCircle } from "lucide-react";
import { useQuery } from "@apollo/client/react";

// custom imports
import UserProfileDropdown from "./UserProfileDropdown";
import ErrorBoundary from "./ErrorBoundary";
import NotificationsDropdown from "./NotificationsDropdown";
import { GET_ME } from "../../graphql/query/getProfile";
import { useMessage } from "../../context/MessageContext";

export default function DashboardTopBar({ hasNotification = true }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const { showError } = useMessage();

  const { data, loading, error } = useQuery(GET_ME);

  if (error) {
    showError(error?.message);
    return;
  }

  return (
    <>
      <div className="w-full bg-[#09101F] text-white border-b border-slate-800/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-4">
        {/* Right Action Controls Stack */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 ml-auto">
          {/* Notification Bell Button */}
          <button
            type="button"
            onClick={() => {
              setShowNotificationDropdown((prev) => !prev);
              setIsDropDownOpen(false);
            }}
            className="relative p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/60 focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 stroke-[2]" />
            {hasNotification && (
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-[#09101F]" />
            )}
          </button>

          {/* User Profile Avatar */}
          <button
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-slate-700 rounded-full"
            onClick={() => {
              setIsDropDownOpen((prev) => !prev);
              setShowNotificationDropdown(false);
            }}
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin" />
              </>
            ) : (
              <img
                src={data?.me?.image}
                alt="User profile"
                className="h-9 w-9 rounded-full object-cover border border-slate-700 hover:border-slate-500 transition-colors"
              />
            )}
          </button>
        </div>
      </div>

      {isDropDownOpen && (
        <ErrorBoundary fallback={<div>Profile Dropdown Component Fatta!</div>}>
          <UserProfileDropdown data={data?.me} />
        </ErrorBoundary>
      )}

      {showNotificationDropdown && (
        <ErrorBoundary
          fallback={<div>Notification Dropdown Component Fatta!</div>}
        >
          <NotificationsDropdown />
        </ErrorBoundary>
      )}
    </>
  );
}
