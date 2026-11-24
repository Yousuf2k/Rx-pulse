import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Body: Sidebar + Main */}
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}
