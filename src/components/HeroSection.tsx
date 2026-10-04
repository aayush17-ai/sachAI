"use client";

import React from 'react';
import { ShieldCheck, Play, ArrowRight, FileText, Database, Globe, Clock, CheckCircle2, AlertTriangle, ExternalLink, Sparkles } from 'lucide-react';
import { FEATURED_INVESTIGATIONS } from '@/lib/mockData';
import { InvestigationReport } from '@/lib/types';

interface HeroSectionProps {
  onInvestigateClick: () => void;
  onSelectDemoReport: (report: InvestigationReport) => void;
}

export default function HeroSection({ onInvestigateClick, onSelectDemoReport }: HeroSectionProps) {
  const demoReport = FEATURED_INVESTIGATIONS[0]; // Student stipend claim

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60 py-16 sm:py-24">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/40 to-purple-200/40 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold tracking-wide shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
            <span>AI-POWERED MISINFORMATION INVESTIGATION PLATFORM</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-sans">
            Don't just read the claim.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
              Investigate it.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Paste a viral claim and SachAI traces its evidence, sources, origin, and spread to help you understand what the available evidence actually shows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onInvestigateClick}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShieldCheck className="h-5 w-5 text-blue-400" />
              <span>Investigate a Claim</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onSelectDemoReport(demoReport)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-base transition-all duration-200 shadow-xs hover:border-slate-400"
            >
              <Play className="h-4 w-4 text-blue-600 fill-blue-600" />
              <span>See Demo Investigation</span>
            </button>
          </div>
        </div>

        {/* Visual Workflow Diagram (Required by Section 3) */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              SachAI Investigation Pipeline
            </span>
          </div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative">
            
            {/* Step 1: Claim */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 1</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Claim</h3>
              <p className="text-[11px] text-slate-500 mt-1">Paste URL or Text</p>
            </div>

            {/* Step 2: Evidence */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Database className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 2</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Evidence</h3>
              <p className="text-[11px] text-slate-500 mt-1">Fact-check crossmatch</p>
            </div>

            {/* Step 3: Sources */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group">
              <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Globe className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 3</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Sources</h3>
              <p className="text-[11px] text-slate-500 mt-1">Trust rating & archives</p>
            </div>

            {/* Step 4: Timeline */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all text-center flex flex-col items-center group">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Step 4</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1">Timeline</h3>
              <p className="text-[11px] text-slate-500 mt-1">Earliest source & spread</p>
            </div>

            {/* Step 5: Assessment */}
            <div className="col-span-2 md:col-span-1 bg-gradient-to-b from-slate-900 to-slate-800 p-4 rounded-2xl text-white text-center flex flex-col items-center group shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Step 5</span>
              <h3 className="text-sm font-bold text-white mt-1">Assessment</h3>
              <p className="text-[11px] text-slate-300 mt-1">AI Evidence Report</p>
            </div>
          </div>
        </div>

        {/* Quick Sample Claim Chips */}
        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-center text-xs font-semibold text-slate-500 mb-3">
            TRY AN EXAMPLE INVESTIGATION:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {FEATURED_INVESTIGATIONS.map((inv) => (
              <button
                key={inv.id}
                onClick={() => onSelectDemoReport(inv)}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700 transition-colors shadow-2xs group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:bg-blue-600 transition-colors" />
                <span className="truncate max-w-[260px] sm:max-w-[340px] text-left">{inv.originalInput}</span>
                <ExternalLink className="h-3 w-3 text-slate-400 opacity-60 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
