import React from 'react';
import { Menu, BookOpen, Upload, Truck, Bell, Receipt, DollarSign, CheckCircle } from 'lucide-react';
import { View } from '../types';

export default function AgentDashboard({ onViewChange }: { onViewChange: (view: View) => void }) {
  const stats = [
    { label: 'Total Sales (THB)', value: '152,450.00', change: '+5.2% vs last month', color: 'text-accent-green', bg: 'bg-[#112214] border-[#32673b]' },
    { label: 'Commission Earned', value: 'THB 15,245.00', change: '+8.1% vs last month', color: 'text-primary', bg: 'bg-primary/20 border-primary/50' },
    { label: 'Active Orders', value: '12', change: '-1.5% vs last month', color: 'text-red-400', bg: 'bg-[#112214] border-[#32673b]' },
  ];

  const quickActions = [
    { label: 'Browse Catalog', sub: 'View all available products and services', icon: BookOpen, view: View.CATALOG },
    { label: 'Upload New Design', sub: 'Submit a new project for a client', icon: Upload, view: null },
    { label: 'Track Orders', sub: 'Check the status of your active orders', icon: Truck, view: View.ORDER_TRACKING },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Welcome, Agent Name</h1>
          <p className="text-[#92c99b]">Here is your performance summary for today.</p>
        </div>
        <button className="relative p-2 bg-dark-600 rounded-lg hover:bg-dark-500 transition">
          <Bell className="text-white" size={24} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full"></span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`rounded-xl p-6 border ${stat.bg} flex flex-col justify-between`}>
             <div>
               <p className="text-white font-medium mb-1">{stat.label}</p>
               <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
             </div>
             <p className={`text-sm ${stat.color}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {quickActions.map((action, idx) => (
          <div 
            key={idx} 
            onClick={() => action.view && onViewChange(action.view)}
            className="group cursor-pointer rounded-xl border border-[#32673b] bg-dark-700 p-6 hover:border-primary/70 transition-all"
          >
            <action.icon className="text-primary mb-4" size={32} />
            <h3 className="text-lg font-bold text-white mb-1">{action.label}</h3>
            <p className="text-[#92c99b] text-sm">{action.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
      <div className="bg-[#112214] border border-[#32673b] rounded-xl p-4 space-y-3">
        {[
          { icon: Receipt, text: 'New order #11267 placed by "TechCorp"', sub: 'Amount: THB 25,500.00', time: '2 minutes ago' },
          { icon: Truck, text: 'Order #11265 has been shipped', sub: 'Client: "Innovate Inc."', time: '1 hour ago' },
          { icon: DollarSign, text: 'Commission of THB 1,230.00 paid out', sub: 'From order #11262', time: '3 hours ago' },
          { icon: CheckCircle, text: 'Order #11262 marked as completed', sub: 'Client: "Global Solutions"', time: 'Yesterday' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition">
            <div className="w-10 h-10 rounded-full bg-dark-600 flex items-center justify-center text-primary shrink-0">
              <item.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{item.text}</p>
              <p className="text-[#92c99b] text-sm truncate">{item.sub}</p>
            </div>
            <p className="text-xs text-[#92c99b] whitespace-nowrap">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}