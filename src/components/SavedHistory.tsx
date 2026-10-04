"use client";

import React, { useState, useEffect } from 'react';
import { getSavedInvestigations, removeSavedInvestigation } from '@/lib/firebase';
import { InvestigationReport } from '@/lib/types';
import { History, Search, Trash2, ExternalLink, ShieldCheck, ArrowRight, Bookmark } from 'lucide-react';

interface SavedHistoryProps {
  onSelectReport: (report: InvestigationReport) => void;
  onGoToInvestigate: () => void;
}

export default function SavedHistory({ onSelectReport, onGoToInvestigate }: SavedHistoryProps) {
  const [savedReports, setSavedReports] = useState<InvestigationReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<string>('all');

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setLoading(true);
    const reports = await getSavedInvestigations();
    setSavedReports(reports);
    setLoading(false);
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    await removeSavedInvestigation(id);
    setSavedReports(prev => prev.filter(r => r.id !== id));
  };

  const filtered = savedReports.filter(r => {
    const matchesSearch = r.claimTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.originalInput.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = ratingFilter === 'all' || r.rating === ratingFilter;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            <History className="h-4 w-4" />
            <span>WORKBENCH HISTORY</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Saved Investigations ({savedReports.length})
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Access past evidence reports saved locally or synced with Firebase Firestore.
          </p>
        </div>

        <button
          onClick={onGoToInvestigate}
          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-xs"
        >
          <ShieldCheck className="h-4 w-4" />
          <span>New Investigation</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search saved claims..."
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:border-blue-600 focus:outline-none"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-xs font-semibold text-slate-500 shrink-0">Filter Verdict:</span>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none w-full sm:w-auto"
          >
            <option value="all">All Verdicts</option>
            <option value="FALSE">FALSE</option>
            <option value="MISLEADING">MISLEADING</option>
            <option value="UNPROVEN">UNPROVEN</option>
            <option value="CONTEXT_NEEDED">CONTEXT NEEDED</option>
            <option value="SUPPORTED">SUPPORTED</option>
          </select>
        </div>
      </div>

      {/* Content List */}
      {loading ? (
        <div className="text-center py-16 text-slate-500 text-sm">
          Loading saved investigations from database...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
          <Bookmark className="h-12 w-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No Saved Investigations Found</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            {searchQuery ? 'No claims matched your search query.' : 'Run a claim investigation and click "Save Investigation" to pin it to your workbench.'}
          </p>
          <button
            onClick={onGoToInvestigate}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all"
          >
            <span>Start an Investigation</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((report) => (
            <div
              key={report.id}
              onClick={() => onSelectReport(report)}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                    report.rating === 'FALSE' ? 'bg-red-100 text-red-700' :
                    report.rating === 'MISLEADING' ? 'bg-rose-100 text-rose-700' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {report.rating}
                  </span>
                  <span className="text-xs font-mono text-slate-400">ID: {report.id}</span>
                  <span className="text-xs text-slate-400">• {new Date(report.createdAt).toLocaleDateString()}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  "{report.claimTitle}"
                </h3>

                <p className="text-xs text-slate-600 line-clamp-1">
                  {report.executiveSummary}
                </p>
              </div>

              <div className="flex items-center space-x-3 self-end sm:self-center">
                <button
                  onClick={(e) => handleDelete(e, report.id)}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete from history"
                >
                  <Trash2 className="h-4 w-4" />
                </button>

                <div className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span>View Report</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
