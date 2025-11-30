import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertCircle, Clock, CheckSquare } from 'lucide-react';

const data = [
  { name: 'Received', value: 56 },
  { name: 'Printing', value: 32 },
  { name: 'Sewing', value: 24 },
  { name: 'Shipped', value: 89 },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-1">Admin Dashboard</h1>
        <p className="text-[#92c99b]">Welcome back, here's an overview of today's operations.</p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Today's Revenue", value: "$15,430", border: "border-white/10", bg: "bg-dark-800", text: "text-white" },
          { label: "Pending Verification", value: "12 Orders", border: "border-red-500/50", bg: "bg-red-900/10", text: "text-red-400" },
          { label: "Pending Design Assign", value: "8 Projects", border: "border-white/10", bg: "bg-dark-800", text: "text-white" },
          { label: "Production Delay", value: "4 Orders", border: "border-amber-500/50", bg: "bg-amber-900/10", text: "text-amber-400" }
        ].map((stat, idx) => (
          <div key={idx} className={`p-6 rounded-lg border ${stat.border} ${stat.bg}`}>
            <p className="text-gray-400 font-medium mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Things To Do */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-white">Things to do</h2>
          <div className="flex flex-col gap-3">
             <div className="p-4 bg-dark-800 border border-white/10 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                    <AlertCircle size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Verify User Account</p>
                    <p className="text-xs text-red-400">High Priority</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-primary/90 text-dark-900 text-xs font-bold rounded">Verify</button>
             </div>

             <div className="p-4 bg-dark-800 border border-white/10 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <CheckSquare size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Assign Designer</p>
                    <p className="text-xs text-amber-400">Medium Priority</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-primary/90 text-dark-900 text-xs font-bold rounded">Assign</button>
             </div>

             <div className="p-4 bg-dark-800 border border-white/10 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Review Delayed Order</p>
                    <p className="text-xs text-amber-400">Medium Priority</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-primary/90 text-dark-900 text-xs font-bold rounded">Review</button>
             </div>
          </div>
        </div>

        {/* Live Monitoring Chart */}
        <div className="lg:col-span-2">
           <h2 className="text-xl font-bold text-white mb-4">Live Monitoring</h2>
           <div className="bg-dark-800 border border-white/10 rounded-lg p-6 h-[400px] flex flex-col">
              <div className="mb-4">
                <p className="text-lg font-bold">Production Pipeline</p>
                <p className="text-sm text-gray-400">Live status of orders in process</p>
              </div>
              <div className="flex-1 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#9ca3af', fontSize: 12 }} 
                      dy={10}
                    />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: '#112214', border: '1px solid #32673b', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#13ec37" opacity={0.6 + (index * 0.1)} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}