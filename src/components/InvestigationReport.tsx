"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, XCircle, CheckCircle2, HelpCircle, Info, 
  Clock, Share2, Download, ExternalLink, Calendar, Users, GitCommit, 
  ArrowLeft, Check, Copy, Bookmark, Globe, Building2, ChevronRight, Sparkles, Network
} from 'lucide-react';
import { InvestigationReport, VeracityRating } from '@/lib/types';
import { saveInvestigation, removeSavedInvestigation } from '@/lib/firebase';

interface ReportProps {
  report: InvestigationReport;
  onBackToWorkbench?: () => void;
}

export default function InvestigationReportView({ report, onBackToWorkbench }: ReportProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'graph' | 'timeline' | 'sources'>('overview');
  const [selectedNode, setSelectedNode] = useState<any | null>(null);

  const ratingColors: Record<VeracityRating, { bg: string; text: string; border: string; badge: string; icon: any }> = {
    FALSE: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-200',
      badge: 'bg-red-600 text-white',
      icon: XCircle
    },
    MISLEADING: {
      bg: 'bg-rose-50',
      text: 'text-rose-800',
      border: 'border-rose-200',
      badge: 'bg-rose-600 text-white',
      icon: AlertTriangle
    },
    UNPROVEN: {
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      border: 'border-amber-200',
      badge: 'bg-amber-600 text-white',
      icon: HelpCircle
    },
    CONTEXT_NEEDED: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-200',
      badge: 'bg-blue-600 text-white',
      icon: Info
    },
    SUPPORTED: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
      badge: 'bg-emerald-600 text-white',
      icon: CheckCircle2
    }
  };

  const currentRatingConfig = ratingColors[report.rating];
  const RatingIcon = currentRatingConfig.icon;

  const handleCopyShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleToggleBookmark = async () => {
    if (isSaved) {
      await removeSavedInvestigation(report.id);
      setIsSaved(false);
    } else {
      await saveInvestigation(report);
      setIsSaved(true);
    }
  };

  const handleExportPDF = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const earliestTimeline = report.timeline.find(t => t.isEarliestSource) || report.timeline[0];

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-8 animate-fade-in print:p-0">
      
      {/* Top Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 print:hidden">
        <button
          onClick={onBackToWorkbench}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Investigate Another Claim</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isSaved
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? 'fill-blue-600 text-blue-600' : ''}`} />
            <span>{isSaved ? 'Saved to Workbench' : 'Save Investigation'}</span>
          </button>

          <button
            onClick={handleCopyShare}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all"
          >
            {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
            <span>{copiedLink ? 'Link Copied!' : 'Share Report'}</span>
          </button>

          <button
            onClick={handleExportPDF}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-2xs"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Main Report Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
        
        {/* Report Top Meta Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <ShieldCheck className="h-48 w-48 text-white" />
          </div>

          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="bg-slate-800 text-blue-300 px-2.5 py-0.5 rounded font-bold">
                REPORT ID: {report.id.toUpperCase()}
              </span>
              <span>•</span>
              <span className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded">
                Category: {report.category}
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(report.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              "{report.claimTitle}"
            </h1>

            <p className="text-xs text-slate-400 font-mono">
              Submitted Input ({report.inputType}): <span className="text-slate-300 italic">"{report.originalInput}"</span>
            </p>
          </div>
        </div>

        {/* 1. Evidence Veracity Rating Scale (Spectrum Bar) */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center space-x-1.5">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>Evidence Veracity Assessment Scale</span>
            </h3>
            <span className="text-xs font-semibold font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200">
              Confidence Index: <strong className="text-blue-600 font-bold">{report.confidenceScore}%</strong>
            </span>
          </div>

          {/* Spectrum Visual Indicator Bar */}
          <div className="space-y-2">
            <div className="grid grid-cols-5 gap-1 text-[11px] font-bold text-center">
              <div className={`py-2 rounded-l-lg transition-all ${report.rating === 'FALSE' ? 'bg-red-600 text-white ring-2 ring-red-400 font-extrabold scale-105 shadow' : 'bg-red-100 text-red-700'}`}>
                FALSE
              </div>
              <div className={`py-2 transition-all ${report.rating === 'MISLEADING' ? 'bg-rose-600 text-white ring-2 ring-rose-400 font-extrabold scale-105 shadow' : 'bg-rose-100 text-rose-700'}`}>
                MISLEADING
              </div>
              <div className={`py-2 transition-all ${report.rating === 'UNPROVEN' ? 'bg-amber-500 text-white ring-2 ring-amber-400 font-extrabold scale-105 shadow' : 'bg-amber-100 text-amber-800'}`}>
                UNPROVEN
              </div>
              <div className={`py-2 transition-all ${report.rating === 'CONTEXT_NEEDED' ? 'bg-blue-600 text-white ring-2 ring-blue-400 font-extrabold scale-105 shadow' : 'bg-blue-100 text-blue-800'}`}>
                CONTEXT NEEDED
              </div>
              <div className={`py-2 rounded-r-lg transition-all ${report.rating === 'SUPPORTED' ? 'bg-emerald-600 text-white ring-2 ring-emerald-400 font-extrabold scale-105 shadow' : 'bg-emerald-100 text-emerald-800'}`}>
                SUPPORTED
              </div>
            </div>
          </div>

          {/* Large Verdict Summary Box */}
          <div className={`p-5 rounded-xl border ${currentRatingConfig.border} ${currentRatingConfig.bg} space-y-3`}>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-md font-extrabold text-xs tracking-wider uppercase ${currentRatingConfig.badge}`}>
                {report.rating.replace('_', ' ')}
              </span>
              <h4 className={`text-base font-bold ${currentRatingConfig.text}`}>
                {report.verdictTitle}
              </h4>
            </div>

            <p className="text-sm text-slate-800 leading-relaxed font-normal">
              {report.executiveSummary}
            </p>
          </div>
        </div>

        {/* Navigation Tabs for Deep Dive Sections */}
        <div className="px-6 border-b border-slate-200 bg-white flex space-x-6 text-sm font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 border-b-2 transition-all ${
              activeTab === 'overview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Claims & Assertions
          </button>

          <button
            onClick={() => setActiveTab('graph')}
            className={`py-4 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'graph' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Network className="h-4 w-4" />
            <span>Propagation Graph</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-4 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'timeline' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>Timeline & Origin</span>
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`py-4 border-b-2 transition-all flex items-center space-x-1.5 ${
              activeTab === 'sources' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Globe className="h-4 w-4" />
            <span>Fact-Checks & Sources</span>
          </button>
        </div>

        {/* Tab Content Section */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* TAB 1: OVERVIEW (Assertions + AI Virality Analysis) */}
          {(activeTab === 'overview' || activeTab === undefined) && (
            <div className="space-y-8">
              
              {/* Core Assertions Breakdown */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  <span>Claim Breakdown & Core Assertions</span>
                </h3>

                <div className="space-y-3">
                  {report.assertions.map((assertion) => (
                    <div key={assertion.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-bold text-slate-900">
                          "{assertion.statement}"
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase shrink-0 ${
                          assertion.verdict === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-800' :
                          assertion.verdict === 'CONTRADICTED' ? 'bg-red-100 text-red-800' :
                          assertion.verdict === 'PARTIALLY_TRUE' ? 'bg-blue-100 text-blue-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {assertion.verdict.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {assertion.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fact Checks Quick Register */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-indigo-600" />
                    <span>Existing Fact-Checks Register ({report.factChecks.length})</span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {report.factChecks.map((fc) => (
                    <div key={fc.id} className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-sm text-slate-900">{fc.publisher}</span>
                          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            {fc.trustRating}% Trust Rating
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{fc.publishedDate}</span>
                      </div>

                      <div className="text-xs font-bold text-slate-800">
                        Verdict: <span className="text-red-600 uppercase font-extrabold">{fc.verdictLabel}</span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2">
                        {fc.summary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Explanation & Virality Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center space-x-1.5">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>Why People Fall For This Claim</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {report.whyItSpread}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center space-x-1.5">
                    <GitCommit className="h-4 w-4 text-purple-600" />
                    <span>Scientific Counter-Evidence Criteria</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {report.whatWouldChangeVerdict}
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PROPAGATION NODE GRAPH */}
          {activeTab === 'graph' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Social Propagation & Virality Graph
                  </h3>
                  <p className="text-xs text-slate-500">
                    Visual network showing how the claim originated, spread across platforms, and was ultimately flagged.
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {report.propagationGraph.length} Nodes Modeled
                </span>
              </div>

              {/* Flow Graph Nodes */}
              <div className="p-6 bg-slate-900 rounded-2xl text-white space-y-6 overflow-x-auto">
                <div className="flex items-center justify-between min-w-[650px] relative py-8">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 -translate-y-1/2 z-0" />

                  {report.propagationGraph.map((node, i) => (
                    <div 
                      key={node.id} 
                      onClick={() => setSelectedNode(node)}
                      className={`relative z-10 flex flex-col items-center cursor-pointer group`}
                    >
                      <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-bold text-sm shadow-lg border-2 transition-all group-hover:scale-110 ${
                        node.type === 'origin' ? 'bg-red-600 border-red-400 text-white' :
                        node.type === 'amplifier' ? 'bg-purple-600 border-purple-400 text-white' :
                        node.type === 'viral_cluster' ? 'bg-amber-600 border-amber-400 text-white' :
                        'bg-emerald-600 border-emerald-400 text-white'
                      }`}>
                        {node.type === 'origin' ? 'ORIGIN' :
                         node.type === 'amplifier' ? 'AMP' :
                         node.type === 'viral_cluster' ? 'VIRAL' : 'DEBUNK'}
                      </div>
                      
                      <span className="text-xs font-bold mt-2 text-slate-200 max-w-[110px] text-center truncate">
                        {node.label}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {node.platform}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Node Detail Popover */}
                {selectedNode && (
                  <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-xs space-y-1.5 animate-fade-in">
                    <div className="flex items-center justify-between text-blue-400 font-bold">
                      <span>Node Details: {selectedNode.label}</span>
                      <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-white">✕</button>
                    </div>
                    <p className="text-slate-300">{selectedNode.detail}</p>
                    <div className="text-slate-400 font-mono">Platform: {selectedNode.platform} | Time: {selectedNode.time}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: TIMELINE & ORIGIN */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Earliest Source Found & Timeline Tracing
                </h3>
                <p className="text-xs text-slate-500">
                  Chronological progression from the earliest digital appearance to current fact-checks.
                </p>
              </div>

              <div className="relative border-l-2 border-blue-500 pl-6 ml-4 space-y-8">
                {report.timeline.map((event) => (
                  <div key={event.id} className="relative group">
                    {/* Node Dot */}
                    <div className={`absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white ${
                      event.isEarliestSource ? 'bg-red-600 ring-4 ring-red-100' : 'bg-blue-600'
                    }`} />

                    <div className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            {event.timestampFormatted}
                          </span>
                          {event.isEarliestSource && (
                            <span className="text-[10px] font-extrabold uppercase bg-red-600 text-white px-2 py-0.5 rounded">
                              EARLIEST SOURCE FOUND
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-slate-500">{event.platform}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900">{event.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{event.description}</p>

                      {event.reachEstimate && (
                        <div className="text-[11px] font-mono text-slate-500 pt-1">
                          Estimated Reach: <strong className="text-slate-800">{event.reachEstimate}</strong>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SOURCES & EVIDENCE */}
          {activeTab === 'sources' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Verified Sources & Documentation
                </h3>
                <p className="text-xs text-slate-500">
                  Primary gazettes, peer-reviewed journals, and fact-checking publications used in this audit.
                </p>
              </div>

              <div className="space-y-4">
                {report.sources.map((source) => (
                  <div key={source.id} className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-sm transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 font-mono bg-slate-100 px-2 py-0.5 rounded">
                        {source.sourceType}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {source.trustScore}% Trust Score
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">{source.title}</h4>
                    <p className="text-xs text-slate-600 italic border-l-2 border-slate-300 pl-3">
                      "{source.snippet}"
                    </p>

                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">{source.domain}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 text-blue-600 font-semibold hover:underline"
                      >
                        <span>View Verified Document</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
