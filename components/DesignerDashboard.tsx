import React from 'react';
import { Clock } from 'lucide-react';

export default function DesignerDashboard() {
  const columns = [
    { title: 'New Request', count: 2, tasks: [
        { client: 'Client XYZ', title: 'Logo for Innovate Inc.', desc: 'Modern and sleek logo.', due: 'Tomorrow', bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIL3qeXPUcJybA16rAo8ZqOmX6JXvDcitfZy5KS7a65EoxnwfDGLFBkdeh_wQWTMShmDDLr5JMAnfqUyIu4YWqOEA1V-TOc9ZxI3VoLxrAe52jBASv14uL0l-oQPd8gdhWpy9xczDPQR79CqJ-sECEdftCtX6qPABRALyKJBBSLMvXMGALgoD0NjChvmbKABknMxolIrcmONtaj6BZlLEAW_JcE40m913tQ88w3hFZLNmw_OEi_iQxRVyR-yMKJVg9JhkrQryQP2M' },
        { client: 'Apex Solutions', title: 'UI Kit for Mobile App', desc: 'Full component library.', due: '3 days', bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALOPX0wKTe9fXTvx7A1iWOwyMfoIaJDt5zqnY5z-r8Rhe3bVvqwCDCa0XylFjgS7hH-fe1WzDfhBPaw9_EI1WBD3kIdeH9RwwfI1RqVN4_BsteSmgQQB8HSxlC_Q8LerAEmFprocQvjNmpFJqr9CHPRLnunePEkGrtKYktdeDEMnVccnQT1QbfTPCEXN1qQYUjg5QNsZccfJI5n660nd8s5Xo7uY9MKnjKtkiWH-MfxoV-lfrAhWxKCMtdweDgvaNkQnOYNIhlYqU' }
      ] 
    },
    { title: 'In Progress', count: 1, tasks: [
        { client: 'QuantumLeap', title: 'Branding Guide', desc: 'Color palette & typography.', due: 'Today', bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtEMglCpgKHO_37ZbiCxgf9LIQTIK-N6eTOnG7mt68yGcsdH8AEmyg6rlPwUN988Edt3f4-3mADbwDscdnJcoufACc_7uVPbee3qumrYywKuX1ti-TeW5uTRXCJeb18XHjD2G5q0NF1aZKEKL9CtlP1Za_qMdiolLZkR9pTEJk0fYfYcSb6NGmtDKfGlFRDjF95wqB1I7nqlHmow3IQskdO9uVfZZSM8RYqJ9oWz4fPjMbWUT_ObEBXbOpkehnpNl-4SXFlrxKceo' }
      ] 
    },
    { title: 'Waiting for Review', count: 1, tasks: [
        { client: 'Stellar Corp', title: 'Pitch Deck Design', desc: 'Submitted V1.', due: null, bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1eKAs7MnAg1xmfgYUqaUwUbc0zZPeIX7rw0sxPYgFlOxyXyYMnWuXPO2TUWP5ZZ0H1NV7s12ngamx8d_hlyRQLeRrX8xpZ20cJaanif0whH3fFjwVuuc3eGM-T4HxmWO2n5-UnL76mmZrepzabuuRYvZelIfYWto4pBzlqCR8wFoRU3JcWz4x0zpfW4RbGfPcx80YnctWCNeSr1lXFHA5mPkl7EFI-HpFcVjv3r-GcZKrvhVYbYk26IRUBgNZskE_qwUNXKo_A3Q' }
      ] 
    },
    { title: 'Approved', count: 1, tasks: [
        { client: 'Nova Digital', title: 'Social Media Templates', desc: 'Final assets sent.', due: 'Completed', bg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7VMNu6kavAHwWVul23FEljCgiCxzCLPZkoA_ldeDkjaTgt4TJI5qq5cCE_UfS1vWw6x_71niwCXEBDRCcDk1_0ZZjp9z6wHiCrFK5gRksD_R9GB9O7qeMaeIO_pSUn8myw1imIYNnSYqIOFR8SazhXN1Ac__tpknlL9VALIsQ0lsnenUVbE3SHPYmmjXrZfOuK7289jjyVKm6fRyxc7bC6-Q874gCbPvisJj3ycWJzyq6De9n5gCTtKgXzYHEzTST4fp12WALKIk' }
      ] 
    }
  ];

  return (
    <div className="p-6 md:p-8 max-w-full mx-auto overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-white">Designer Dashboard</h1>
        <p className="text-[#92c99b]">Welcome back, Elena! Here's a look at your current workload.</p>
      </div>

      <div className="flex gap-6 min-w-max pb-4">
        {columns.map((col, idx) => (
          <div key={idx} className="w-80 flex flex-col gap-4">
            <div className="flex justify-between items-center px-2">
              <h3 className="font-bold text-lg text-white">{col.title}</h3>
              <span className="px-2 py-0.5 rounded-full bg-dark-700 text-gray-400 text-sm">{col.count}</span>
            </div>

            <div className="flex flex-col gap-4">
              {col.tasks.map((task, tIdx) => (
                <div key={tIdx} className={`bg-dark-700 rounded-xl overflow-hidden border border-white/10 shadow-sm ${col.title === 'Approved' ? 'opacity-70' : ''}`}>
                  <div className="h-32 bg-cover bg-center" style={{backgroundImage: `url(${task.bg})`}}></div>
                  <div className="p-4 flex flex-col gap-2">
                     <p className="text-xs text-[#92c99b]">{task.client}</p>
                     <h4 className="font-bold text-white text-lg leading-tight">{task.title}</h4>
                     <p className="text-gray-400 text-sm mb-2">{task.desc}</p>
                     
                     <div className="flex justify-between items-center mt-auto pt-2 border-t border-white/5">
                        {task.due && col.title !== 'Approved' && (
                          <span className={`text-xs font-bold ${task.due === 'Today' ? 'text-yellow-400' : 'text-red-400'}`}>Due: {task.due}</span>
                        )}
                        {col.title === 'Approved' && (
                          <span className="text-xs font-bold text-primary flex items-center gap-1">Completed</span>
                        )}
                        
                        <button className={`text-xs px-3 py-1.5 rounded-lg font-bold ${
                           col.title === 'New Request' ? 'bg-primary text-dark-900' : 'bg-dark-600 text-white'
                        }`}>
                          {col.title === 'New Request' ? 'Accept' : 'View'}
                        </button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}