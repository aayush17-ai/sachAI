"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, Info, Cpu, History, Menu, X, ArrowRight, LucideIcon } from 'lucide-react';
import { getSavedInvestigations } from '@/lib/firebase';

interface NavbarProps {
  activeTab: 'home' | 'investigate' | 'how-it-works' | 'about' | 'history';
  setActiveTab: (tab: 'home' | 'investigate' | 'how-it-works' | 'about' | 'history') => void;
  onQuickInvestigate?: () => void;
}

interface NavItem {
  id: 'home' | 'investigate' | 'how-it-works' | 'about' | 'history';
  label: string;
  icon: LucideIcon;
  badge?: number;
}

export default function Navbar({ activeTab, setActiveTab, onQuickInvestigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    const updateCount = async () => {
      const reports = await getSavedInvestigations();
      setSavedCount(reports.length);
    };
    updateCount();
    const interval = setInterval(updateCount, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: Search },
    { id: 'investigate', label: 'Investigate', icon: ShieldCheck },
    { id: 'how-it-works', label: 'How It Works', icon: Cpu },
    { id: 'about', label: 'About', icon: Info },
    { 
      id: 'history', 
      label: 'Saved History', 
      icon: History,
      badge: savedCount > 0 ? savedCount : undefined
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                  Sach<span className="text-blue-600">AI</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
                  PROTOTYPE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                From Viral Claim to Verified Evidence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50/80 font-semibold border border-blue-100' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="ml-1 inline-flex items-center justify-center px-1.5 py-0.2 text-[11px] font-bold leading-none text-white bg-blue-600 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => {
                setActiveTab('investigate');
                if (onQuickInvestigate) onQuickInvestigate();
              }}
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-98"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Investigate a Claim</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-70" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive 
                    ? 'text-blue-700 bg-blue-50 font-semibold' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="px-2 py-0.5 text-xs font-bold text-white bg-blue-600 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab('investigate');
                setMobileMenuOpen(false);
                if (onQuickInvestigate) onQuickInvestigate();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-900 text-white font-medium text-sm shadow-sm"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Investigate a Claim</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
