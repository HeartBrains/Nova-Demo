
import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  FileText, 
  Package, 
  Palette, 
  Users, 
  ShieldCheck, 
  Layers, 
  LogOut,
  Menu,
  X,
  ShoppingBag
} from 'lucide-react';
import { View, NavGroup, Role } from './types';

// Importing Views
import LoginView from './components/LoginView';
import CatalogView from './components/CatalogView'; // Acts as Material Library
import ProductCatalogView from './components/ProductCatalogView';
import QuotationView from './components/QuotationView';
import OrderTrackingView from './components/OrderTrackingView';
import AgentDashboard from './components/AgentDashboard';
import AdminDashboard from './components/AdminDashboard';
import GraphicDashboard from './components/GraphicDashboard';
import DesignerDashboard from './components/DesignerDashboard';
import DesignCollabView from './components/DesignCollabView';

const navStructure: NavGroup[] = [
  {
    name: "Client Tools",
    items: [
      { label: "Product Catalog", view: View.PRODUCT_CATALOG, icon: ShoppingBag },
      { label: "Material Library", view: View.CATALOG, icon: Layers },
      { label: "Quotation Builder", view: View.QUOTATION, icon: FileText },
      { label: "Order Tracking", view: View.ORDER_TRACKING, icon: Package },
    ]
  },
  {
    name: "Dashboards",
    items: [
      { label: "Agent Overview", view: View.DASHBOARD_AGENT, icon: LayoutDashboard },
      { label: "Designer Tasks", view: View.DASHBOARD_DESIGNER, icon: Palette },
      { label: "Graphic Queue", view: View.DASHBOARD_GRAPHIC, icon: Layers },
      { label: "Admin Control", view: View.DASHBOARD_ADMIN, icon: ShieldCheck },
    ]
  },
  {
    name: "Workflow",
    items: [
      { label: "Design Collab", view: View.DESIGN_COLLAB, icon: Users },
    ]
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);
  const [userRole, setUserRole] = useState<Role | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogin = (role: Role) => {
    setUserRole(role);
    switch (role) {
      case Role.AGENT:
        setCurrentView(View.DASHBOARD_AGENT);
        break;
      case Role.DESIGNER:
        setCurrentView(View.DASHBOARD_DESIGNER);
        break;
      case Role.GRAPHIC:
        setCurrentView(View.DASHBOARD_GRAPHIC);
        break;
      case Role.ADMIN:
        setCurrentView(View.DASHBOARD_ADMIN);
        break;
      default:
        setCurrentView(View.DASHBOARD_AGENT);
    }
  };

  const filteredNavStructure = useMemo(() => {
    if (!userRole) return [];
    if (userRole === Role.ADMIN) return navStructure;

    return navStructure.map(group => {
      const items = group.items.filter(item => {
        if (userRole === Role.AGENT) {
          return [View.PRODUCT_CATALOG, View.CATALOG, View.QUOTATION, View.ORDER_TRACKING, View.DASHBOARD_AGENT].includes(item.view);
        }
        if (userRole === Role.DESIGNER) {
          return [View.DASHBOARD_DESIGNER, View.DESIGN_COLLAB].includes(item.view);
        }
        if (userRole === Role.GRAPHIC) {
          return [View.DASHBOARD_GRAPHIC, View.DESIGN_COLLAB].includes(item.view);
        }
        return false;
      });
      return { ...group, items };
    }).filter(group => group.items.length > 0);
  }, [userRole]);

  if (currentView === View.LOGIN) {
    return <LoginView onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case View.CATALOG: return <CatalogView />;
      case View.PRODUCT_CATALOG: return <ProductCatalogView />;
      case View.QUOTATION: return <QuotationView />;
      case View.ORDER_TRACKING: return <OrderTrackingView />;
      case View.DASHBOARD_AGENT: return <AgentDashboard onViewChange={setCurrentView} />;
      case View.DASHBOARD_ADMIN: return <AdminDashboard />;
      case View.DASHBOARD_GRAPHIC: return <GraphicDashboard />;
      case View.DASHBOARD_DESIGNER: return <DesignerDashboard />;
      case View.DESIGN_COLLAB: return <DesignCollabView />;
      default: return <AgentDashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen bg-dark-900 text-gray-100 overflow-hidden font-sans">
      {/* Mobile Overlay */}
      {!isSidebarOpen && (
        <div className="md:hidden fixed z-50 top-4 left-4">
           <button onClick={() => setIsSidebarOpen(true)} className="p-2 bg-dark-800 rounded-lg text-primary">
             <Menu size={24} />
           </button>
        </div>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-dark-800 border-r border-white/5 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">Nova Digital</h1>
                <p className="text-xs text-gray-400">{userRole} View</p>
              </div>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
            {filteredNavStructure.map((group, idx) => (
              <div key={idx}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                  {group.name}
                </h3>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <button
                      key={item.view}
                      onClick={() => {
                        setCurrentView(item.view);
                        if (window.innerWidth < 768) setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        currentView === item.view 
                          ? 'bg-primary text-dark-900' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <item.icon size={18} />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/5">
            <button 
              onClick={() => {
                setUserRole(null);
                setCurrentView(View.LOGIN);
              }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-dark-900 scroll-smooth relative">
        {renderView()}
      </main>
    </div>
  );
}
