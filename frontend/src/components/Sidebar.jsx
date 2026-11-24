import {
  Activity, ChevronDown, LayoutDashboard, FileText,
  Pill, FileStack, Shield,
} from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Family Dashboard', active: true },
    { icon: FileText, label: 'PDF & HITL Gate', badge: '1 Draft' },
    { icon: Pill, label: 'Meds & Adherence' },
    { icon: FileStack, label: 'Weekly AI Docs' },
    { icon: Shield, label: 'Privacy Admin' },
  ];

  const provenanceItems = [
    { label: 'CONFIRMED', desc: 'Human verified', color: 'bg-emerald-500', text: 'text-emerald-400' },
    { label: 'AI_DRAFT', desc: 'Staging gate', color: 'bg-amber-500', text: 'text-amber-400' },
    { label: 'SENSOR_LIVE', desc: 'Health Connect', color: 'bg-blue-500', text: 'text-blue-400' },
  ];

  return (
    <aside className="w-[260px] bg-brand-dark flex flex-col flex-shrink-0 min-h-0 overflow-y-auto">
      {/* Active Family Hub */}
      <div className="p-5 pb-4">
        <p className="text-emerald-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 font-mono">
          Active Family Hub
        </p>
        <button className="flex items-center justify-between w-full group">
          <span className="text-white font-semibold text-[15px]">Mollah Household</span>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      <div className="border-t border-white/10 mx-4" />

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`nav-item ${item.active ? 'nav-item-active' : 'nav-item-inactive'}`}
          >
            <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Data Provenance */}
      <div className="p-5 pt-3 border-t border-white/10">
        <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 font-mono">
          Data Provenance
        </p>
        <div className="space-y-2.5">
          {provenanceItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className={`${item.color} ${item.text} text-[9px] font-bold px-2 py-0.5 rounded font-mono bg-opacity-20`}>
                {item.label}
              </span>
              <span className="text-gray-500 text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
