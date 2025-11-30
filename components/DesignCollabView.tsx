import React from 'react';
import { ZoomIn, ZoomOut, Maximize, Send } from 'lucide-react';

export default function DesignCollabView() {
  return (
    <div className="flex h-full w-full bg-dark-800">
       {/* Left - Version History */}
       <aside className="w-64 border-r border-white/5 bg-[#112214] hidden xl:flex flex-col p-4">
          <div className="flex items-center gap-3 mb-6">
             <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDjS7mlsZQFR49Sk4QCBkztiOT3f2vo79Z2FKGhS44wEEMS0WJYTTRs6Mm7itnVwpHqTMqkdDcKdvA5NOB7F5IeP09yUdIQf-uKa_ms-EMRNP_rxtgBZTCnf6s_cYNdZsAyZqw_ISEq32uIWJBb7JfQuTe96XAjaIrnGeZnTIjP6jwe_U7YdGgcCIwsdhw6eSY_A4jsQ8OgTRjAa2nBbxl_zPyHOwSf4iTVrHSZKTXQhVNrfxM3W2ekXl8iMQR2elynEAY_CnXwLSA")'}}></div>
             <div>
               <h2 className="font-bold text-sm text-white">Project Expedition</h2>
               <p className="text-xs text-gray-400">#NOV-001</p>
             </div>
          </div>
          
          <div className="space-y-2">
             <div className="p-3 bg-primary/20 rounded-lg flex items-center gap-3 border border-primary/30">
               <div className="w-2 h-2 rounded-full bg-primary"></div>
               <span className="text-sm font-bold text-primary">V.3 (Latest)</span>
             </div>
             <div className="p-3 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer text-gray-400">
               <div className="w-2 h-2 rounded-full bg-gray-600"></div>
               <span className="text-sm">V.2</span>
             </div>
             <div className="p-3 hover:bg-white/5 rounded-lg flex items-center gap-3 cursor-pointer text-gray-400">
               <div className="w-2 h-2 rounded-full bg-gray-600"></div>
               <span className="text-sm">V.1</span>
             </div>
          </div>
       </aside>

       {/* Center - Canvas */}
       <main className="flex-1 relative bg-dark-900 flex items-center justify-center p-8 overflow-hidden">
          <div className="absolute top-4 right-4 flex gap-2 bg-dark-800/80 p-1.5 rounded-lg border border-white/10 z-10 backdrop-blur-sm">
             <button className="p-2 hover:bg-white/10 rounded-md text-gray-300"><ZoomIn size={20}/></button>
             <button className="p-2 hover:bg-white/10 rounded-md text-gray-300"><ZoomOut size={20}/></button>
             <button className="p-2 hover:bg-white/10 rounded-md text-gray-300"><Maximize size={20}/></button>
          </div>
          
          <div className="w-full h-full max-h-[80vh] aspect-square rounded-xl shadow-2xl overflow-hidden border border-white/5 relative">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuABx2UfmMaawaPMt6kZEJgdS33NY_kLYNVZP4ofvyHpfjVzDGjLzbRg0ZqqJTiuC4cDuwFjoDAivIMWw6hTEONjArp3KVBF4INUWEoOLjBGim6a-dGNi_UQ5KFOYX2JSXzAjUHDbjOSa5uLwiSyB8ig2TBf9m_4WkfUn4aYoh_VzDSswDpoQPL4FJLwlQLlwRr_1UQ6UdqZIXclcK2RenPpsA295vIo3bAaUigMKpcrNO9otopYXwTOICuStSBnYxeHBYtgjdv_irY" className="w-full h-full object-contain" />
          </div>
       </main>

       {/* Right - Chat */}
       <aside className="w-80 border-l border-white/5 bg-[#112214] flex flex-col">
          <div className="p-4 border-b border-white/5">
            <h2 className="font-bold text-white">Collaboration</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-cover bg-center flex-shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdyFs3HaJ9nMyfRJZoVXKSK3Kw2dR8WEg41_U9QBjAuV5slfRJkFh3VuOeefXDakLcEgUQiwNwxy4A_UceteXZCGTTBnXJ7_HRbT9SGr2d10QQD6LW6fI0Q3QdkpOoZ4aEGi-cFrwPP7IZXQ9Gx8XQWt1ynI6ycOoM3UXBoIqm6FrJaoLglAWbPHlysN98vyjoydPiQyIVT6yVvRkvvYt0hwlp5ZHcgEfHDj2mVlam5bYe_HhdzoI1SQsSF4yH6B5rIZOuhpcw6m4")'}}></div>
               <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-bold text-white">Alex Chen</span>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                  <div className="bg-dark-700 p-3 rounded-lg text-sm text-gray-300 rounded-tl-none border border-white/5">
                    This looks great! The new color palette is much stronger. Could we try increasing the logo size?
                  </div>
               </div>
            </div>

            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-cover bg-center flex-shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBNovdhFPtQ0x0dw6J0eUslJU6Bjs6s3sTBbild5LqVSxmUbZy1CYz8P4qNcCypG-MRqGU1r1aoR3l1TL1wKnpRSodW5XBbfaNSg8D3xDd7p_saGLNIwCsCW6cUQ7xtVoL99WTmoEcs6sm5gDf_QKWx1PbuLt7qFd1T29kLh-iWDEnmNMRNcMtlCDK2dPcuqLwwnBMadfAFpA6RSP4bNK0F7r4VmF6SHTcpHwMr8_jhhv7v_vDCVJjwjd7RuQGXRRL8pg9Q7ErbNJg")'}}></div>
               <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-bold text-white">Samantha Bee</span>
                    <span className="text-xs text-gray-500">1h ago</span>
                  </div>
                  <div className="bg-dark-700 p-3 rounded-lg text-sm text-gray-300 rounded-tl-none border border-white/5">
                    Agreed with Alex. Let's see it bumped up by about 10%. Otherwise ready to go.
                  </div>
               </div>
            </div>
          </div>

          <div className="p-4 bg-dark-900 border-t border-white/5">
             <div className="relative mb-4">
                <input type="text" placeholder="Type feedback here..." className="w-full bg-dark-800 border border-white/10 rounded-lg pl-4 pr-10 py-2 text-sm text-white focus:border-primary/50 focus:outline-none" />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition"><Send size={16}/></button>
             </div>
             <div className="grid grid-cols-2 gap-3">
                <button className="py-2 rounded-lg bg-orange-500/10 text-orange-500 text-sm font-bold border border-orange-500/20 hover:bg-orange-500/20 transition">Revision</button>
                <button className="py-2 rounded-lg bg-primary text-dark-900 text-sm font-bold hover:bg-primary/90 transition">Approve</button>
             </div>
          </div>
       </aside>
    </div>
  );
}