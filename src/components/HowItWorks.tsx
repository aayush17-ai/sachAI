"use client";

import React from 'react';
import { Cpu, Search, Database, Network, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onInvestigateClick: () => void;
}

export default function HowItWorks({ onInvestigateClick }: HowItWorksProps) {
  const steps = [
    {
      number: "01",
      title: "Claim Ingestion & Semantic Entity Extraction",
      description: "SachAI parses raw claim text or social media post URLs (WhatsApp, X, YouTube, Telegram) to extract core assertions, entities, dates, and figures.",
      icon: Search,
      badge: "NLP Semantic Parser"
    },
    {
      number: "02",
      title: "Multi-Source Database Cross-Matching",
      description: "Queries IFCN accredited fact-checking networks (AltNews, Snopes, BoomLive, Reuters, PIB Fact Check) and official gazette portals for published debunks.",
      icon: Database,
      badge: "12+ Fact-Check Registries"
    },
    {
      number: "03",
      title: "Origin & Propagation Graph Modeling",
      description: "Traces digital footprints across search indexes, archive archives, and social channels to isolate the earliest publication timestamp and viral path.",
      icon: Network,
      badge: "Graph Neural Analysis"
    },
    {
      number: "04",
      title: "AI Multi-Perspective Evidence Report",
      description: "Synthesizes raw evidence into an easy-to-understand report with Veracity Spectrum Ratings (False, Misleading, Context Needed), assertions, and primary sources.",
      icon: ShieldCheck,
      badge: "Veracity Spectrum Index"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-100">
            <Cpu className="h-3.5 w-3.5" />
            <span>TRANSPARENT FORENSIC ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How SachAI Investigates Viral Claims
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Unlike generic chatbots that guess, SachAI uses a structured 4-stage forensic pipeline to trace empirical evidence and primary sources.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-4 group">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold font-mono text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full">
                    {step.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 font-mono">STEP {step.number}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Have a claim you want to test right now?</h3>
            <p className="text-sm text-slate-300">Run a deep forensic scan across 12+ fact-check networks in seconds.</p>
          </div>
          <button
            onClick={onInvestigateClick}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shrink-0"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>Launch Workbench</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
