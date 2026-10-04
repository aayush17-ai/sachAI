"use client";

import React from 'react';
import { ShieldCheck, Globe, ExternalLink } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: 'home' | 'investigate' | 'how-it-works' | 'about' | 'history') => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Sach<span className="text-blue-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              From Viral Claim to Verified Evidence. An AI-powered misinformation investigation platform built for empirical truth.
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setActiveTab('investigate')} className="hover:text-white transition-colors">Investigate a Claim</button></li>
              <li><button onClick={() => setActiveTab('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => setActiveTab('history')} className="hover:text-white transition-colors">Saved Workbench</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About & Methodology</button></li>
            </ul>
          </div>

          {/* External Partners */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Integrated Sources</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-mono">
              <li className="flex items-center space-x-1.5"><ExternalLink className="h-3 w-3 text-blue-400" /><span>AltNews.in</span></li>
              <li className="flex items-center space-x-1.5"><ExternalLink className="h-3 w-3 text-blue-400" /><span>PIB Fact Check (GoI)</span></li>
              <li className="flex items-center space-x-1.5"><ExternalLink className="h-3 w-3 text-blue-400" /><span>Snopes & Reuters</span></li>
              <li className="flex items-center space-x-1.5"><ExternalLink className="h-3 w-3 text-blue-400" /><span>BoomLive & AP</span></li>
            </ul>
          </div>

          {/* Legal / Disclaimer */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Transparency Notice</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              SachAI provides AI-assisted evidence synthesis based on indexed databases. Users should always inspect linked primary sources for decision-making.
            </p>
            <div className="pt-2 text-[11px] text-slate-500">
              © {new Date().getFullYear()} SachAI Prototype. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
