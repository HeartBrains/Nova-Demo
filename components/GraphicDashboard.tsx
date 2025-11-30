import React from 'react';
import { Layers, Calendar, ChevronDown, CheckSquare, Square } from 'lucide-react';

export default function GraphicDashboard() {
  const tasks = [
    { priority: 'High', id: '#6237', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKGzSA0swgnL87bAN_Wr8o6bXYNpVEiCyn4pWUG468FHzXGUq65MXp82542d2SYNO4U06k5G5SPcxtTyR7_7zS9jk2aje1LHpFv2RExhD_-RoDpfhrxiK6ym3qMSclUyPqWF_2j0s04ixlgqATxxigUwvmP2gIf5T4iZ8ISLQOA_EynVhpTq3RG_BMrgSDrc21u1jgeuBrlg8aaavqnDTqKq_1RnS7mGdJDsrwoPNLQtIoxdVZfT5Op_PV_wmtDIoKgXagtPZQvf4', qty: 12, status: 'Ready', tech: true, machine: 'Printing' },
    { priority: 'Normal', id: '#6236', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOkWcaPmDPnUV834BB7HrD-LEvp7nZ5SD8iL6B9R_wdMVBL5wdFIx1IAKhGbLov8mc5SStAHnHEPtndWHkES9CAEt90Bd9q80wJItEAZy2lotgrIFhTYgxfW--IpG_xPNHO2iGEjOhsAAk-SZ2U8Ubi24b11RaSdiSfdgKWBAw4ki4ggj_mTtM31dem6BasWN3L7E_R-LT4Qkmb_AjeypW0lZ06ouXIhQN3d1balPqh2HSFZE437PMDwR_7QAgLYcC8GQlgq_Vpyo', qty: 8, status: 'Ready', tech: true, machine: 'Queued' },
    { priority: 'High', id: '#6235', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcvhhpHlla-hcLS7yE92DvdbS2jwvsU9PuTUXexqLCJz7qoMpETw50ouPkQUm2eYzYC93_RMzKjlLSNLmxNooaWbWQ4x6d9dJ3ysjFaBPi0kdYu-RXwuyR1AqA9GOR6tHUT3JBeDYDsGqnT3Tt2wLHOweNDuMevhUEyc-L9ig7dDy7uOK-FKynw1fDhLagJROyrJRfmhApjPUoA7jtbZn1LWOWUECdJpbqhQJ7jWWcnxFZQUL_b2rWPZJPblVFHHF4beOkluUvzP4', qty: 25, status: 'Waiting', tech: false, machine: 'Queued' },
    { priority: 'Normal', id: '#6234', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcqa6DaRcXyE6uTwWZHGqdGdjnXBL4TapFbgrvcnatWYl0quzCYeLuvA65BvihtbHNZdWs_2buRuBnMgPEzUYEHuP2Zrb6nFyfGCsz9nEqb89rK8yc58ixChoJ67Py7LJUsLpumqDvXjk_VUMYzK3HIdcyy99QPyFr9CS6Tklp3Y2iuWKp0BJFEr70yBpMZC28Y9tbO_YpNf0nxrccGUTwfApH9JpXscPLBZIo9PY91pz_GkxdL4-Q_XArcIIK5MtfJialTGwIY9A', qty: 50, status: 'Ready', tech: true, machine: 'Done' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto h-full flex flex-col">
       <div className="flex justify-between items-center mb-6">
         <h1 className="text-3xl font-black text-white">Graphic Team Dashboard</h1>
         <div className="flex gap-3">
           <button className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg text-sm text-gray-300 border border-white/10">
             <Layers size={16} /> Fabric Type <ChevronDown size={14}/>
           </button>
           <button className="flex items-center gap-2 px-3 py-2 bg-dark-800 rounded-lg text-sm text-gray-300 border border-white/10">
             <Calendar size={16} /> Delivery Date <ChevronDown size={14}/>
           </button>
         </div>
       </div>

       <div className="flex gap-6 h-full items-start">
         {/* Table */}
         <div className="flex-1 bg-dark-800 rounded-xl border border-white/10 overflow-hidden">
           <table className="w-full text-left">
             <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
               <tr>
                 <th className="px-6 py-4">Priority</th>
                 <th className="px-6 py-4">Order Info</th>
                 <th className="px-6 py-4">File Status</th>
                 <th className="px-6 py-4">Tech Check</th>
                 <th className="px-6 py-4">Machine Status</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-white/5">
               {tasks.map((task, idx) => (
                 <tr key={idx} className="hover:bg-white/5 transition-colors cursor-pointer">
                   <td className="px-6 py-4">
                     <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                       task.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-gray-300'
                     }`}>
                       {task.priority}
                     </span>
                   </td>
                   <td className="px-6 py-4">
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded bg-cover bg-center" style={{backgroundImage: `url(${task.img})`}} />
                       <div>
                         <p className="font-medium text-white">Order {task.id}</p>
                         <p className="text-xs text-gray-400">Qty: {task.qty}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                     <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                       task.status === 'Ready' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                     }`}>
                       {task.status === 'Ready' ? 'Ready' : 'Waiting for File'}
                     </span>
                   </td>
                   <td className="px-6 py-4 text-primary">
                     {task.tech ? <CheckSquare size={18} /> : <Square size={18} className="text-gray-600" />}
                   </td>
                   <td className={`px-6 py-4 text-sm font-medium ${task.machine === 'Done' ? 'text-primary' : 'text-gray-400'}`}>
                     {task.machine}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>

         {/* Side Details Panel (Static for demo) */}
         <div className="w-80 bg-dark-800 rounded-xl border border-white/10 p-6 flex flex-col gap-4 hidden xl:flex">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg">File Details: #6237</h3>
              <button className="text-gray-400 hover:text-white">✕</button>
            </div>
            
            <div className="w-full aspect-square bg-cover bg-center rounded-lg" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7vw4HB-tlIs2l_scIw1FwVNA6hif4R3vINyEAG0tUEIpon4qfjZMq74yGbCfogtTNr73oyJnVdMvVg3TaW6U2X36J1bjki1gmj34z1IqhV8tEJhYyuoRfO-05t7ztKSHr1ZqpLD3R-KDvTDlwc23YAHBPaj37Pi1ffT5qKJ9K49KRFxgGgLAyVO4VWiMPl6LDabwhv7RsYiNVKaFj4RjKt2dzxaTSeTyDj7EWxivYTeOzxWO_HuKVqYrLJwtpWN6uUehGp075o3o")'}}></div>

            <div className="space-y-3 text-sm">
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-gray-400">File Name</span>
                 <span className="text-white">floral_pattern.ai</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-gray-400">Dimensions</span>
                 <span className="text-white">3600x3600 px</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-gray-400">Resolution</span>
                 <span className="text-white">300 DPI</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-gray-400">Color Profile</span>
                 <span className="text-white">CMYK</span>
               </div>
               <div className="flex justify-between border-b border-white/10 pb-2">
                 <span className="text-gray-400">Size</span>
                 <span className="text-white">12.8 MB</span>
               </div>
            </div>

            <div className="flex gap-2 mt-auto">
               <button className="flex-1 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm font-bold border border-red-500/20">Reject</button>
               <button className="flex-1 py-2 rounded-lg bg-primary text-dark-900 text-sm font-bold">Approve</button>
            </div>
         </div>
       </div>
    </div>
  );
}