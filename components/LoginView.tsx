import React, { useState } from 'react';
import { Eye, Hexagon, User, PenTool, Layers, Shield } from 'lucide-react';
import { Role } from '../types';

interface LoginViewProps {
  onLogin: (role: Role) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<Role>(Role.AGENT);

  const roles = [
    { id: Role.AGENT, label: 'Agent', icon: User },
    { id: Role.DESIGNER, label: 'Designer', icon: PenTool },
    { id: Role.GRAPHIC, label: 'Graphic', icon: Layers },
    { id: Role.ADMIN, label: 'Admin', icon: Shield },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-dark-900 p-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="w-full max-w-md bg-dark-800 rounded-2xl shadow-2xl p-8 border border-white/5 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
            <Hexagon size={32} strokeWidth={2.5} />
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Nova Digital Platform</h1>
            <p className="text-gray-400 text-sm">Select your role to sign in.</p>
          </div>

          <div className="w-full space-y-6">
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">I am a...</label>
              <div className="grid grid-cols-2 gap-3">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-200 ${
                      selectedRole === role.id
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-dark-700 border-transparent text-gray-400 hover:bg-dark-600 hover:text-white'
                    }`}
                  >
                    <role.icon size={24} className="mb-2" />
                    <span className="text-sm font-bold">{role.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Username</label>
                <input 
                  type="text" 
                  defaultValue="demo_user"
                  className="w-full h-12 bg-dark-700 border border-dark-600 rounded-lg px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    defaultValue="password"
                    className="w-full h-12 bg-dark-700 border border-dark-600 rounded-lg px-4 pr-12 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-gray-500 transition-all"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onLogin(selectedRole)}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-dark-900 font-bold rounded-lg transition-all transform active:scale-[0.98] mt-2"
            >
              Login as {selectedRole}
            </button>
          </div>

          <div className="flex justify-between w-full text-sm mt-6">
            <button className="text-gray-400 hover:text-primary transition-colors">Forgot Password?</button>
            <button className="text-gray-400 hover:text-primary transition-colors">Contact Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;