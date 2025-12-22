"use client";

import { colors } from "@/lib/theme";

const NotificationsDropdown = (): React.ReactElement => {
  // For now, showing empty state - can be populated with actual notifications later
  const hasNotifications = false;

  return (
    <div
      className="absolute right-0 top-12 z-50 w-80 rounded-[20px] bg-white shadow-2xl"
      style={{
        boxShadow: "0px 20px 50px rgba(102, 30, 255, 0.15)",
      }}
    >
      {/* Header */}
      <div className="border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <h3
            className="text-base font-semibold text-gray-900"
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            Notifications
          </h3>
          {hasNotifications && (
            <button
              className="text-xs font-medium transition-colors"
              style={{
                color: colors.primary.blue,
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary.blueDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.primary.blue;
              }}
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-96 overflow-y-auto">
        {hasNotifications ? (
          <div className="p-4">
            {/* Notification items would go here */}
            <div className="text-center py-8">
              <p className="text-sm text-gray-500">No notifications yet</p>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="py-8">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <p
                className="mt-4 text-sm font-medium text-gray-500"
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                No notifications
              </p>
              <p
                className="mt-1 text-xs text-gray-400"
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                You're all caught up!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsDropdown;

