import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Folder as FolderIcon, User, LogOut, LogIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFirebase } from './FirebaseProvider';
import { auth, googleProvider, signInWithPopup, signOut } from '../firebase';

interface LayoutProps {
  children: React.ReactNode;
}

const PAGE_SEQUENCE = [
  '/',
  '/how-it-works',
  '/design',
  '/visualizer',
  '/design-detail',
  '/tiers',
  '/samples',
  '/checkout',
  '/wishlist',
  '/dashboard',
  '/tiers'
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, loading } = useFirebase();
  
  const currentIndex = PAGE_SEQUENCE.indexOf(location.pathname);
  const prevPage = currentIndex > 0 ? PAGE_SEQUENCE[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGE_SEQUENCE.length - 1 ? PAGE_SEQUENCE[currentIndex + 1] : null;

  const isAdmin = profile?.role === 'admin' || (user?.email && [
    'opulmkt@gmail.com',
    'aimanaimlengineer@gmail.com',
    'adilabbas812@gmail.com',
    'aimanmaniyar20@gmail.com',
    'adilabbas@gmail.com',
    'aimanmaniyar28@gmail.com',
    'aimanmaniyar789@gmail.com'
  ].includes(user.email));

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Credit Pricing', path: '/tiers' },
    ...(isAdmin ? [
      { name: 'Design', path: '/design' },
      { name: 'Visualize', path: '/visualizer' },
      { name: 'Rug Pricing', path: '/design-detail' },
    ] : []),
    ...(user ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
  ];

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden flex flex-col">
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-b border-black/5 z-40 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#F0F7FF] rounded-xl shadow-lg shadow-blue-100/20">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tighter leading-none uppercase text-black">RUGVISION</h1>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">AI Design Infrastructure</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1 bg-black/5 p-1 rounded-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg ${
                  location.pathname === item.path 
                    ? 'bg-white text-black shadow-sm' 
                    : 'text-black/40 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
           {loading ? (
             <div className="w-8 h-8 rounded-full bg-black/5 animate-pulse" />
           ) : user ? (
             <div className="flex items-center gap-4">
               <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-black/5 rounded-full transition-colors">
                 {user.photoURL ? (
                   <img src={user.photoURL} alt={user.displayName || ''} className="w-6 h-6 rounded-full" />
                 ) : (
                   <User className="w-5 h-5" />
                 )}
                 <div className="hidden md:flex flex-col">
                   <span className="text-[10px] font-bold uppercase tracking-widest leading-none">{user.displayName?.split(' ')[0]}</span>
                   {isAdmin && <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest mt-0.5">Admin Mode</span>}
                 </div>
               </Link>
               <button 
                 onClick={handleLogout}
                 className="p-2 hover:bg-black/5 rounded-full transition-colors"
                 title="Logout"
               >
                 <LogOut className="w-5 h-5" />
               </button>
             </div>
           ) : null}
        </div>
      </nav>

      <main className="pt-20 flex-grow">
        {children}
      </main>

      <footer className="relative border-t border-black/5 py-24 px-6 sm:px-12 pb-40 overflow-hidden bg-[#F0F7FF]">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#F0F7FF] rounded-xl shadow-lg shadow-blue-100/20">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tighter leading-none uppercase text-black">RUGVISION</h2>
              <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">AI Design Infrastructure</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 mb-2">Menu</h3>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-[10px] font-bold text-black/20 uppercase tracking-widest">
              © 2026 RUGVISION
            </div>
            {!user && (
              <button 
                onClick={handleLogin}
                className="text-[8px] font-bold text-black/10 uppercase tracking-[0.3em] hover:text-blue-600 transition-colors"
              >
                Admin Access
              </button>
            )}
          </div>
        </div>
      </footer>

    </div>
  );
};
