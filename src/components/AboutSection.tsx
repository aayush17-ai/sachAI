"use client";

import React from 'react';
import { Info, ShieldCheck, Scale, Award, Database, Lock, ArrowRight } from 'lucide-react';

interface AboutProps {
  onInvestigateClick: () => void;
}

export default function AboutSection({ onInvestigateClick }: AboutProps) {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">
          <Info className="h-3.5 w-3.5" />
          <span>ABOUT SACHAI</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Empowering Truth Through Evidence & AI Transparency
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          SachAI is designed to bridge the critical gap between viral social media rumors and verified empirical evidence.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Scale className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Beyond Binary Real / Fake</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Misinformation is rarely pure fiction; it often mixes real photos with wrong dates or omitted context. SachAI evaluates claims along a 5-tier Veracity Spectrum.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Database className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">IFCN Accredited Sources</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every audit cross-checks International Fact-Checking Network signatories including AltNews, Snopes, BoomLive, PIB Fact Check, Reuters, and government gazettes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Non-Partisan Methodology</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            SachAI enforces strict algorithmic neutrality, evaluating statements against official primary data, peer-reviewed scientific studies, and verifiable archives.
          </p>
        </div>
      </div>

      {/* Tech Stack & Architecture Callout */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center space-x-3">
          <Award className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-bold text-white">SachAI Tech Stack & Architecture</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <div className="text-slate-400 font-bold mb-1">FRONTEND</div>
            <div className="text-blue-300 font-semibold">Next.js 15 & React</div>
            <div className="text-slate-400 text-[10px] mt-1">App Router + Tailwind v4</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <div className="text-slate-400 font-bold mb-1">DATABASE</div>
            <div className="text-indigo-300 font-semibold">Firebase Firestore</div>
            <div className="text-slate-400 text-[10px] mt-1">With LocalStorage fallback</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <div className="text-slate-400 font-bold mb-1">VISUALIZATION</div>
            <div className="text-purple-300 font-semibold">Node Network Flow</div>
            <div className="text-slate-400 text-[10px] mt-1">Interactive virality graph</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
            <div className="text-slate-400 font-bold mb-1">DESIGN SYSTEM</div>
            <div className="text-emerald-300 font-semibold">Lucide React & UI</div>
            <div className="text-slate-400 text-[10px] mt-1">Clean modern dashboard</div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-center">
          <button
            onClick={onInvestigateClick}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Try SachAI Workbench</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
