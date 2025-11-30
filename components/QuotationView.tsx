
import React, { useState } from 'react';
import { FileText, ChevronRight } from 'lucide-react';

export default function QuotationView() {
  const [quantity, setQuantity] = useState(400);
  const [markup, setMarkup] = useState(50);
  const baseCost = 80000;
  
  const commission = (baseCost * (markup / 100));
  const finalPrice = baseCost + commission;

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">Quotation Builder</h1>
        <p className="text-gray-400">Finalize pricing and generate the quotation for your client.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Product Details */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold mb-6">Final Design & Specifications</h2>
          
          <div className="w-full aspect-video bg-dark-800 rounded-lg mb-6 overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop")'}}>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-4 border-t border-white/10">
              <span className="text-gray-400">Fabric Type</span>
              <span className="font-medium">100% Cotton</span>
            </div>
            <div className="flex justify-between py-4 border-t border-white/10">
              <span className="text-gray-400">Pattern</span>
              <span className="font-medium">Custom Graphic</span>
            </div>
            <div className="flex justify-between py-4 border-t border-white/10">
              <span className="text-gray-400">Print Method</span>
              <span className="font-medium">Direct to Garment</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-4">Size Selection</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
             {[
               { s: 'Small (S)', c: 50 },
               { s: 'Medium (M)', c: 150 },
               { s: 'Large (L)', c: 150 },
               { s: 'X-Large (XL)', c: 50 }
             ].map((size, idx) => (
               <div key={idx} className="bg-dark-800 p-3 rounded-lg">
                 <p className="text-xs text-gray-400 mb-1">{size.s}</p>
                 <p className="text-lg font-bold">{size.c} units</p>
               </div>
             ))}
          </div>
        </div>

        {/* Right Column - Pricing */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col gap-6">
          <h2 className="text-xl font-bold">Pricing & Quotation</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Total Quantity</label>
            <input 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
            />
          </div>

          <div className="bg-dark-900 rounded-xl p-6 space-y-6">
            <div>
               <label className="block text-sm font-medium text-gray-400 mb-2">Base Cost</label>
               <input 
                 type="text" 
                 value={`THB ${baseCost.toLocaleString()}`}
                 disabled
                 className="w-full bg-dark-800 border border-white/5 rounded-lg p-3 text-gray-500"
               />
            </div>
            
            <div>
               <div className="flex justify-between mb-2">
                 <label className="text-sm font-medium text-gray-400">Markup</label>
                 <span className="font-bold">{markup}%</span>
               </div>
               <input 
                 type="range" 
                 min="0" 
                 max="100" 
                 value={markup} 
                 onChange={(e) => setMarkup(Number(e.target.value))}
                 className="w-full h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer"
               />
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
             <div className="flex justify-between items-center mb-2">
               <p className="text-lg font-bold text-white">Final Price</p>
               <span className="text-sm text-green-400">Your Commission: + THB {commission.toLocaleString()}</span>
             </div>
             <p className="text-4xl md:text-5xl font-black text-white">THB {finalPrice.toLocaleString()}</p>
          </div>

          <div className="mt-auto">
             <button className="w-full bg-primary hover:bg-primary/90 text-dark-900 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all">
               <FileText size={20} />
               Generate Quotation (PDF)
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
