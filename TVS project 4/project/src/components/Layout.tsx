import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Users, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Settings, 
  Menu,
  X,
  Home,
  Bot
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Call Management', href: '/calls', icon: Phone },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Payments', href: '/payments', icon: CreditCard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Compliance', href: '/compliance', icon: Shield },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">TVS VoiceBot</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8">
          <div className="px-6 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">System Active</span>
              </div>
              <div className="text-sm text-gray-500">
                Last Updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};