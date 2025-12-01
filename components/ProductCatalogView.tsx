
import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const SHARED_IMAGE = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop';

const products = [
  { id: 'HW-001', name: 'Classic Palm Aloha', category: 'Rayon', image: SHARED_IMAGE },
  { id: 'HW-002', name: 'Sunset Hibiscus', category: 'Cotton', image: SHARED_IMAGE },
  { id: 'HW-003', name: 'Vintage Surf', category: 'Silk Blend', image: SHARED_IMAGE },
  { id: 'HW-004', name: 'Midnight Flora', category: 'Rayon', image: SHARED_IMAGE },
  { id: 'HW-005', name: 'Ocean Breeze', category: 'Linen', image: SHARED_IMAGE },
  { id: 'HW-006', name: 'Retro Pineapple', category: 'Cotton', image: SHARED_IMAGE },
  { id: 'HW-007', name: 'Island Hopper', category: 'Rayon', image: SHARED_IMAGE },
  { id: 'HW-008', name: 'Coral Reef', category: 'Silk', image: SHARED_IMAGE },
];

export default function ProductCatalogView() {
  return (
    <div className="w-full p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-black text-white">Product Catalog</h1>
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by pattern, material, or style code"
            className="w-full h-10 bg-dark-800 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button className="h-9 px-4 rounded-lg bg-primary text-dark-900 text-sm font-bold">All Shirts</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Rayon</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Cotton</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Silk</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Linen</button>
        <button className="h-9 px-3 rounded-lg bg-dark-800 text-gray-400 text-sm flex items-center gap-2 border border-white/10 ml-auto">Sort By <Filter size={14}/></button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-dark-800 border border-white/5 group-hover:border-primary/50 transition-all">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="absolute top-3 right-3 bg-dark-900/80 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-medium border border-white/10">
                {product.category}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-base group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-sm font-medium text-gray-500">{product.id}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-dark-900 shadow-lg hover:scale-110 transition-transform z-50">
        <Plus size={32} />
      </button>
    </div>
  );
}
