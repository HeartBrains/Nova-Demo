
import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const products = [
  { id: 'XZ-8011', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKiV4KPVszsqNIvFO0WTgF82Shj68tKRynHfxRivAvcTKXEGa_TAC2kXloq_Ks4rPw7959zSbJAMkE3QrAbpJP6RjhA7sRU6aJXdu2Hkk9q_Ywdk6RqYnCbtIioGgMJ3w9DVhXT3TLzjXL5qG-CA60aYR2SimJRIat2URfVVBJjmIs3IGH08z0nFqcTEVIjtFPrvvE7umlJf4RW_4JDL-mPdhugdDk-7TB1tBrUMWD031xRtKWfmFTOjQZOZhEdYmZ3vHunaENV1Y', tag: 'Legal issues' },
  { id: 'AY-4592', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxR8NK-ddCd_gXKNvtHymWcHyIM6Dv7oapqNVr--TEHn1-3EHNollBlGdqt2S4t_cR2nmdkeJSyP0T3I856pIOF6Je-AqS9hz5CNfss-MApcSzmlIl5uiZVWxUN85SInIQEQQIBCK8O8R6kGEBb9a8pLi-Xk9e5AZaas6RmqNsYUfg5IBXTurCt9b4rncn0sawtE8TujoBju8Y2UBLLT11B_u7NwoFD9dudvJJKJi6u367r_eAUlNJ5mWcfWj0rUiOWcgT5MQdK60' },
  { id: 'BZ-1123', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5z7jfK-Ug63UpfmAhh6NvNnyez0x9bgebkEbwz8UNArJHWPXB7gZ18dUrN2syhuEVP0lG-XviqzimXezh4Cow0VT5SrkCQSA6X9CTwZQQXotRFZBfbSuLjzaPd9RadWb0xQSmYmf9Wevw6DftF13vpjZ5DUDLBkiJ8AjlhMtW61lj-PjQ6I7hExqWZaqmr5jI0yjyJOc-dGovs_ibnN3FrJv7RCkXeNlBH5DYq0Rt2POERov9O9GaHjKiquFhefBdvUTqMYItZ0k', tag: 'Legal issues' },
  { id: 'CW-7701', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu5mqQgKvkDWTCMxOeinCQR9zpNSvOFuTQaJwAXAIhQ14HAcWY_T8vSCfM41VXsYNiJxDqEe_lHDuMqWtoVlHH918Kv0v8vLuCGFltfhvH9f4Yn4d-l6CTAOrxa1q1DgRyM8vbDmUyD9EJb4kEgN5VuA7k44y-WKovbZ60Oh75U7wcMY5Yu4hED_tTDePLU7-TElec8bEaCHVk0OGPq0Fb4DE9G2mwefRmRDkB1i_JHiQmeqcnKCoXpVImvtF3N01fY7OrGtPnyEs' },
  { id: 'DV-3034', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIoDtjJTu4YniljB3sjJLp6KUSq1zv0lopKrL53YAI48sLgraX6WANDEAVANxEeSsShCaMbWMsE6ca_Rz8F8nO_-W5S7izztfL0UIZ7wVhodxiBEGtIUSAjH6nYHFaf4N10wKUxss9lsclD_IFr_CiGDaWCHFyQIYuRdnTs6_wGToLt5MiZuqNqvaSkjovPs2WrSkWn9Pe5jzK8By0DK_eFKq_soJXefC9pKsQcRU3PNKdD06BXD149WzI1E97dSA2J1riD9iiB90', tag: 'Legal issues' },
  { id: 'EU-9588', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw0zBHymLEqmnj4cYDxIyiBIxnasJux9go8HsNrogQWOJR0xMS5z5jdcCvaS47BipiswnlfzZ7csVBc8JlNH8NsRN2OcJR26efUBifGuzvrua3zpCOEMq_5miKWDhzTTmmPP9OQo3RAJKoQeCWCrYipw33OiVzFhF_4iaX1DCP7Zjxzok3eePS0LqHm3edwXRmBYCjSP1MMZPY-BeAcH5DHrco8nQCs6-NLgLKIOGhoXCwNBXJqDyPxPR0eSE-Xe1nlzsCnWicX10' },
  { id: 'FR-2109', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe5XvcukNZgC43mgps99Bo5wjrQRmqwmdkEs5Z0k4-9X6I5gFgVsAavJvgLuJoKEIY3NGfxoZboIL3P91ks_cla_VtMvGzrs-cBK7JD7RXoTx9PMgFDa1aOfDvim7bcDNPlqDOhDkWZpdNJTWEI1YvDeKdx0mKpDMlqGhHozHsEy1nTOvOZ2jUAzgPQLlcny0oBykYzbwmG6JBfYv8McW-Q6b0wwwfRFyzfwmj1JETENj5I8k5-kqXhJViiKmhnmiyKRzw-cO79i8' },
  { id: 'GO-6645', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT2vrKkuzZbYcU1QIPLSAg3r-1ndTQQG4iTqi9EA7GrGHHv6Xy0Wdlb6YeEsGiHAYRby-vhtP9wVH-3kR7zI6zwkLPlUk5TwXYXyd4zqiA8JuOGmp3HU-9JJVIyPO8l1dzt8pAHbgsi8HpmFUNRFnllELP3pJUIZOLhX7hNhmywnXReVfr9IePTrkqMDjmwZVzB2c7uLtFPA7PxvEkHQ1anC3IB1Io-UMpvapZjizK9kF6c39ud17fVCjzdTo_EAkqcWHjBZHGLSc' },
];

export default function CatalogView() {
  return (
    <div className="w-full p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-black text-white">Material Library</h1>
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by material name, code, or tag"
            className="w-full h-10 bg-dark-800 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button className="h-9 px-4 rounded-lg bg-primary text-dark-900 text-sm font-bold">My Exclusive</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Public</button>
        <button className="h-9 px-4 rounded-lg bg-dark-800 text-gray-300 text-sm hover:bg-white/10 transition">Client Ref</button>
        <button className="h-9 px-3 rounded-lg bg-dark-800 text-gray-400 text-sm flex items-center gap-2 border border-white/10">Material Type <Filter size={14}/></button>
        <button className="h-9 px-3 rounded-lg bg-dark-800 text-gray-400 text-sm flex items-center gap-2 border border-white/10">Status <Filter size={14}/></button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group flex flex-col gap-3 cursor-pointer">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-dark-800 border border-white/5 group-hover:border-primary/50 transition-all">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              {product.tag && (
                <div className="absolute bottom-3 left-3 bg-red-900/90 text-red-200 text-xs px-2 py-1 rounded flex items-center gap-1">
                  <span>⚠️</span> {product.tag}
                </div>
              )}
            </div>
            <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">SKU: {product.id}</p>
          </div>
        ))}
      </div>

      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-dark-900 shadow-lg hover:scale-110 transition-transform z-50">
        <Plus size={32} />
      </button>
    </div>
  );
}
