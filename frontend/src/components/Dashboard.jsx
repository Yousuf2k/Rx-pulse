import { useState } from 'react';
import {
  CheckCircle2, Shield, Droplets, Brain, Heart, Moon,
  Smartphone, Zap, RefreshCw, AlertTriangle, Clock,
  FileText, Sparkles,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Toggle Switch                                                      */
/* ------------------------------------------------------------------ */
function Toggle({ enabled, onChange, size = 'sm' }) {
  const h = size === 'sm' ? 'h-[20px]' : 'h-[22px]';
  const w = size === 'sm' ? 'w-[36px]' : 'w-[40px]';
  const dot = size === 'sm' ? 'h-[14px] w-[14px]' : 'h-[16px] w-[16px]';
  const translate = size === 'sm' ? 'translate-x-[18px]' : 'translate-x-[20px]';

  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex ${h} ${w} items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
        enabled ? 'bg-emerald-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block ${dot} transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
          enabled ? translate : 'translate-x-[3px]'
        }`}
      />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats Cards                                                        */
/* ------------------------------------------------------------------ */
function StatsCards() {
  const stats = [
    {
      icon: CheckCircle2,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50',
      title: 'Family Med Adherence',
      value: '88%',
      change: '+4% wk',
      changeColor: 'text-emerald-500',
      sub: 'Synced from confirmed dose slots',
    },
    {
      icon: Shield,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      title: 'Active AI Agents',
      value: '3 / 3',
      suffix: '24/7 Live',
      suffixColor: 'text-emerald-500',
      sub: 'Health Connect & UsageStats',
    },
    {
      icon: Droplets,
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-50',
      title: 'Hydration Guardrail',
      value: '1,250mL',
      suffix: '/1.5L Cap',
      suffixColor: 'text-gray-400',
      sub: 'Ammu: Renal/Cardiac fluid guard',
    },
    {
      icon: Brain,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50',
      title: 'Digital Wellbeing',
      value: '5h 40m',
      suffix: 'Brother',
      suffixColor: 'text-red-500',
      sub: 'Late-night screen spike flagged',
      alert: true,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.title} className={`stat-card ${s.alert ? 'border-red-200 bg-red-50/30' : ''}`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{s.title}</span>
            <div className={`w-8 h-8 rounded-lg ${s.iconBg} flex items-center justify-center`}>
              <s.icon className={`w-4 h-4 ${s.iconColor}`} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{s.value}</span>
            {s.change && <span className={`text-xs font-semibold ${s.changeColor}`}>{s.change}</span>}
            {s.suffix && <span className={`text-sm font-medium ${s.suffixColor}`}>{s.suffix}</span>}
          </div>
          <p className="text-[11px] text-gray-400 mt-1">{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Agent Card                                                         */
/* ------------------------------------------------------------------ */
function AgentCard({ agent }) {
  const [modules, setModules] = useState(agent.modules);

  const toggleModule = (key) => {
    setModules((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="agent-card flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${agent.avatarBg}`}
        >
          {agent.initial}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-gray-900 text-[15px]">{agent.name}</h4>
            <span className="text-gray-400 text-xs">{agent.age} yrs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${agent.online ? 'bg-emerald-400' : 'bg-gray-300'}`} />
            <p className="text-xs text-gray-500 truncate">{agent.role}</p>
          </div>
        </div>
      </div>

      {/* Vitals */}
      <div className="grid grid-cols-3 gap-2 mb-4 bg-gray-50 rounded-lg p-3">
        <VitalItem icon={Heart} label="Heart Rate" value={agent.heartRate} unit="BPM" color="text-red-400" />
        <VitalItem icon={Moon} label="Sleep" value={agent.sleep} color="text-indigo-400" />
        <VitalItem icon={Smartphone} label="Screen" value={agent.screen} color="text-amber-500" />
      </div>

      {/* Agent Modules */}
      <div>
        <p className="text-[9px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-2 font-mono">
          Agent Modules
        </p>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(modules).map(([key, val]) => (
            <div
              key={key}
              className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                val ? 'bg-emerald-50 text-emerald-700' : 'bg-gray-50 text-gray-500'
              }`}
            >
              <span>{key}</span>
              <Toggle enabled={val} onChange={() => toggleModule(key)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VitalItem({ icon: Icon, label, value, unit, color }) {
  return (
    <div className="text-center">
      <p className="text-[10px] text-gray-400 mb-0.5">{label}</p>
      <div className="flex items-center justify-center gap-1">
        <Icon className={`w-3 h-3 ${color}`} />
        <span className="font-bold text-sm text-gray-800">{value}</span>
        {unit && <span className="text-[10px] text-gray-400">{unit}</span>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  7-Day Medication Chart                                             */
/* ------------------------------------------------------------------ */
function MedicationChart() {
  const data = [
    { day: 'Sat', value: 92, color: 'from-emerald-400 to-emerald-500' },
    { day: 'Sun', value: 85, color: 'from-emerald-400 to-emerald-500' },
    { day: 'Mon', value: 100, color: 'from-emerald-400 to-teal-500' },
    { day: 'Tue', value: 75, color: 'from-amber-400 to-amber-500' },
    { day: 'Wed', value: 90, color: 'from-emerald-400 to-emerald-500' },
    { day: 'Thu', value: 95, color: 'from-emerald-400 to-emerald-500' },
    { day: 'Fri', value: 88, color: 'from-emerald-400 to-emerald-500' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900 text-base">7-Day Family Medication Adherence Trend</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Calculated from verified dose logs across all active schedules
          </p>
        </div>
        <span className="bg-gray-100 text-gray-500 text-[11px] font-mono font-medium px-3 py-1 rounded-lg">
          Asia/Dhaka
        </span>
      </div>

      <div className="flex items-end justify-between gap-3 h-44 px-2">
        {data.map((d) => (
          <div key={d.day} className="flex flex-col items-center flex-1 gap-1.5">
            <span className="text-[11px] font-semibold text-gray-600">{d.value}%</span>
            <div className="w-full flex justify-center">
              <div
                className={`w-10 rounded-t-lg bg-gradient-to-t ${d.color} transition-all duration-500 shadow-sm`}
                style={{ height: `${(d.value / 100) * 130}px` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hydration Card                                                     */
/* ------------------------------------------------------------------ */
function HydrationCard() {
  const current = 1250;
  const cap = 1500;
  const pct = (current / cap) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900 text-base">Condition-Aware Hydration</h3>
        <span className="bg-red-50 text-red-500 text-[10px] font-bold font-mono px-2 py-0.5 rounded-full">
          FR-ID-22
        </span>
      </div>

      {/* Alert */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5">
        <div className="flex items-start gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-1 flex-shrink-0" />
          <div>
            <p className="font-bold text-gray-800 text-sm">Fluid Restriction Guardrail</p>
            <p className="text-xs text-gray-600 mt-0.5">
              Ammu's profile caps fluid intake at <strong>1,500 mL/day</strong> (instead of generic 3,000 mL).
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-cyan-500" />
            <span className="font-bold text-lg text-gray-900">
              {current.toLocaleString()} / {cap.toLocaleString()} mL
            </span>
          </div>
          <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
            {Math.round(pct)}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-gray-400">0 mL</span>
          <span className="text-[10px] text-red-400 font-semibold">Cap: {cap.toLocaleString()} mL</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Dashboard                                                     */
/* ------------------------------------------------------------------ */
export default function Dashboard() {
  const agents = [
    {
      initial: 'A',
      name: 'Ammu',
      age: 62,
      avatarBg: 'bg-emerald-600',
      role: 'Parent • Diabetes, BP & Fluid Guard',
      online: true,
      heartRate: '76',
      sleep: '7h 15m',
      screen: '1h 45m',
      modules: { 'ECG Vitals': true, 'Sleep Ring': true, UsageStats: false, 'Voice TTS': true },
    },
    {
      initial: 'Y',
      name: 'Younger Brother',
      age: 17,
      avatarBg: 'bg-amber-500',
      role: 'Student • Digital Wellbeing Focus',
      online: true,
      heartRate: '74',
      sleep: '5h 48m',
      screen: '5h 40m',
      modules: { 'ECG Vitals': false, 'Sleep Ring': true, UsageStats: true, 'Voice TTS': false },
    },
    {
      initial: 'K',
      name: 'Kashif (Self)',
      age: 22,
      avatarBg: 'bg-slate-700',
      role: 'Family Admin • Full Sensor Sync',
      online: true,
      heartRate: '70',
      sleep: '6h 40m',
      screen: '4h 15m',
      modules: { 'ECG Vitals': true, 'Sleep Ring': true, UsageStats: true, 'Voice TTS': true },
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-8 bg-gray-50/80">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Family Health &amp; Multi-Agent Control Center
          </h1>
          <p className="text-sm text-gray-500 mt-1 max-w-xl">
            Configure individual AI agents, review real-time vitals, and manage safety guardrails remotely.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end flex-shrink-0">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gray-200 text-sm font-semibold text-gray-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors">
            <FileText className="w-4 h-4" />
            Review Pending Rx (HITL)
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-400 shadow-lg shadow-emerald-500/25 transition-all">
            <Sparkles className="w-4 h-4" />
            Generate Weekly AI Doc
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <StatsCards />

      {/* Family Member AI Agents */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">Family Member AI Agents</h2>
            <span className="text-xs text-gray-400">(Remote Config Toggles)</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg">
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold font-mono tracking-wide">Real-Time Sync Ready</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-8 grid grid-cols-5 gap-5">
        <div className="col-span-3">
          <MedicationChart />
        </div>
        <div className="col-span-2">
          <HydrationCard />
        </div>
      </div>
    </main>
  );
}
