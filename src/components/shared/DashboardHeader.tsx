"use client";

import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Bell, Settings, User } from "lucide-react";
import { useState } from "react";

export const DashboardHeader = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-surface/80 backdrop-blur-2xl">
      <div className="px-8 h-20 flex justify-between items-center">
        {/* Left: Quick Stats */}
        <div className="flex items-center gap-6">
          <div className="space-y-1">
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">
              Daily Conversions
            </p>
            <p className="text-2xl font-bold text-white">24</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="space-y-1">
            <p className="text-xs text-on-surface-variant uppercase tracking-wider">
              Storage Used
            </p>
            <p className="text-2xl font-bold text-white">2.4 GB</p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full animate-pulse" />
            </Button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-surface-container border border-white/10 rounded-xl backdrop-blur-xl shadow-premium animate-slide-down">
                <div className="p-4 border-b border-white/5">
                  <h3 className="font-semibold text-white">Notifications</h3>
                </div>
                <div className="divide-y divide-white/5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 hover:bg-white/5 transition-colors cursor-pointer">
                      <p className="text-sm font-medium text-white">
                        Conversion Complete
                      </p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        Your image.jpg has been converted to PNG
                      </p>
                      <p className="text-xs text-on-surface-variant/50 mt-2">
                        2 hours ago
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};