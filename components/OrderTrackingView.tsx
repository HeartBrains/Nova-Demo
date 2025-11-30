import React from 'react';
import { Search, Check } from 'lucide-react';

const orders = [
  { 
    id: '#NDP-867530', customer: 'Innovate Corp', delivery: 'Oct 26, 2024', 
    progress: 50, steps: ['Confirmed', 'Material', 'Printing', 'Assembly', 'Shipped'], 
    activeStep: 2
  },
  { 
    id: '#NDP-867531', customer: 'Quantum Solutions', delivery: 'Nov 05, 2024', 
    progress: 100, steps: ['Confirmed', 'Material', 'Printing', 'Assembly', 'Shipped'], 
    activeStep: 4, isComplete: true
  },
  { 
    id: '#NDP-867529', customer: 'Apex Enterprises', delivery: 'Oct 15, 2024', 
    progress: 10, steps: ['Confirmed', 'Material', 'Printing', 'Assembly', 'Shipped'], 
    activeStep: 0
  },
];

export default function OrderTrackingView() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
       <div className="mb-6">
        <h1 className="text-4xl font-black text-white mb-1">Order Tracking</h1>
        <p className="text-[#92c99b]">Monitor the status of all current and past orders.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by Order ID or Customer Name..."
            className="w-full h-12 bg-dark-800 border border-white/10 rounded-lg pl-10 pr-4 text-white focus:outline-none focus:border-primary/50"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          {['All', 'Confirmed', 'Printing', 'Shipped', 'Delivered'].map((filter, i) => (
            <button key={filter} className={`h-12 px-5 rounded-lg whitespace-nowrap font-medium ${i === 0 ? 'bg-primary/20 text-primary border border-primary/20' : 'bg-dark-800 text-gray-300 hover:bg-dark-700'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-dark-700/50 border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{order.id}</h3>
                <p className="text-[#92c99b]">Customer: {order.customer}</p>
              </div>
              <div className="flex items-center gap-6">
                 <div className="text-right">
                    <p className="text-xs text-gray-400">Estimated Delivery</p>
                    <p className="text-white font-medium">{order.delivery}</p>
                 </div>
                 <button className="bg-primary text-dark-900 px-4 py-2 rounded-lg font-bold text-sm">View Details</button>
              </div>
            </div>

            {/* Stepper */}
            <div className="relative w-full px-4">
              {/* Progress Line Background */}
              <div className="absolute top-3 left-0 w-full h-1 bg-dark-600 rounded-full" />
              {/* Progress Line Active */}
              <div 
                className="absolute top-3 left-0 h-1 bg-primary rounded-full transition-all duration-500" 
                style={{ width: `${order.progress}%` }} 
              />
              
              <div className="relative flex justify-between w-full">
                {order.steps.map((step, idx) => {
                  const isCompleted = idx < order.activeStep || order.isComplete;
                  const isActive = idx === order.activeStep && !order.isComplete;

                  return (
                    <div key={idx} className="flex flex-col items-center gap-2">
                       <div className={`w-7 h-7 rounded-full flex items-center justify-center z-10 transition-colors ${
                         isCompleted || isActive ? 'bg-primary' : 'bg-dark-600'
                       } ${isActive ? 'ring-4 ring-primary/30' : ''}`}>
                         {(isCompleted || isActive) && (
                           isActive && !order.isComplete 
                             ? <div className="w-2.5 h-2.5 bg-black rounded-full" /> 
                             : <Check size={14} className="text-black stroke-[4]" />
                         )}
                       </div>
                       <span className={`text-xs font-medium ${isCompleted || isActive ? 'text-white' : 'text-gray-500'}`}>
                         {step}
                       </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}