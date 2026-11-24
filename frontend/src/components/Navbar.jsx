import { Activity, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-brand-dark h-16 flex items-center justify-between px-6 border-b border-white/10 flex-shrink-0">
      {/* Left — Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
          <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg tracking-tight">RxPulse</span>
            <span className="bg-emerald-500/15 text-emerald-400 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
              AI Ecosystem V2.5
            </span>
          </div>
          <p className="text-gray-500 text-[11px] -mt-0.5">
            Clinical Report Interpretation &amp; Multi-Agent Family Health Hub
          </p>
        </div>
      </div>

      {/* Center — Tabs */}
      <div className="flex items-center gap-1 bg-brand-darker rounded-xl p-1">
        <button className="bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md shadow-emerald-500/25 hover:bg-emerald-400 transition-colors">
          ⚡ Web Admin Hub
        </button>
        <button className="text-gray-400 px-5 py-2 rounded-lg text-sm font-medium hover:text-white hover:bg-white/5 transition-all">
          📱 Mobile App
        </button>
      </div>

      {/* Right — Notifications */}
      <div className="relative">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
        </button>
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-brand-dark flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">3</span>
        </span>
      </div>
    </nav>
  );
}
