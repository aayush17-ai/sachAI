"use client";

import React from 'react';
import { FEATURED_INVESTIGATIONS } from '@/lib/mockData';
import { InvestigationReport } from '@/lib/types';
import { ShieldCheck, ExternalLink, ArrowRight, XCircle, AlertTriangle } from 'lucide-react';

interface FeaturedProps {
  onSelectReport: (report: InvestigationReport) => void;
}

export default function FeaturedInvestigations({ onSelectReport }: FeaturedProps) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Live Investigation Archive
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Trending Viral Claims Debunked by SachAI
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            Explore pre-analyzed investigations showing source tracing, timeline origin, and AI evidence synthesis.
          </p>
        </div>

        {/* Grid of Claim Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_INVESTIGATIONS.map((inv) => (
            <div 
              key={inv.id} 
              onClick={() => onSelectReport(inv)}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {inv.category}
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                    inv.rating === 'FALSE' ? 'bg-red-100 text-red-700' : 'bg-rose-100 text-rose-700'
                  }`}>
                    {inv.rating}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  "{inv.claimTitle}"
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {inv.executiveSummary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>View Full Evidence Report</span>
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
