"use client";

import React, { useState } from 'react';
import { 
  FileText, Link2, Sparkles, ArrowRight, RefreshCw, AlertCircle, 
  Search, ShieldAlert, CheckCircle2, Sliders, Info, Zap 
} from 'lucide-react';
import { generateInvestigationReport } from '@/lib/mockData';
import { InvestigationReport } from '@/lib/types';
import { saveInvestigation } from '@/lib/firebase';

interface WorkbenchProps {
  onReportGenerated: (report: InvestigationReport) => void;
  initialInput?: string;
  initialType?: 'text' | 'url';
}

const SAMPLE_TEXT_CLAIMS = [
  "Every college student will receive ₹10,000 from the government under PM Yuva Scheme.",
  "NASA announced 3 days of total Earth darkness in December due to solar flare.",
  "RBI added nano GPS microchips inside ₹2000 currency notes to track black money.",
  "WHO approved traditional herbal tea as official medicine to cure viral infections."
];

const SAMPLE_URL_POSTS = [
  "https://x.com/viral_news_daily/status/184029104928104",
  "https://whatsapp.com/channel/0029Va901284/post-82",
  "https://facebook.com/story.php?story_fbid=9482019482&id=1000482",
  "https://youtube.com/shorts/3910482910?feature=share"
];

export default function InvestigationWorkbench({ onReportGenerated, initialInput = '', initialType = 'text' }: WorkbenchProps) {
  const [activeTab, setActiveTab] = useState<'text' | 'url'>(initialType);
  const [textInput, setTextInput] = useState(initialInput || '');
  const [urlInput, setUrlInput] = useState(initialInput && initialType === 'url' ? initialInput : '');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);
  const [analysisLogs, setAnalysisLogs] = useState<string[]>([]);
  const [regionFilter, setRegionFilter] = useState<'all' | 'india' | 'global'>('all');
  const [searchDepth, setSearchDepth] = useState<'standard' | 'deep'>('deep');

  const steps = [
    "Parsing semantic claim entities & key assertions...",
    "Cross-referencing 12+ fact-check databases (AltNews, PIB, Snopes, Reuters)...",
    "Sweeping news archives & Google Index for earliest publication origin...",
    "Modeling social media propagation network & amplification nodes...",
    "Synthesizing multi-source AI evidence report & confidence score..."
  ];

  const handleRunInvestigation = async () => {
    const rawInput = activeTab === 'text' ? textInput : urlInput;
    if (!rawInput.trim()) return;

    setIsAnalyzing(true);
    setAnalysisStep(0);
    setAnalysisLogs([`Initializing SachAI forensic engine for: "${rawInput.trim().substring(0, 40)}..."`]);

    // Simulated multi-stage AI analysis pipeline for prototype
    for (let i = 0; i < steps.length; i++) {
      setAnalysisStep(i);
      setAnalysisLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${steps[i]}`]);
      await new Promise(r => setTimeout(r, 650));
    }

    // Generate report
    const report = generateInvestigationReport(rawInput, activeTab);
    
    // Save to Firebase / LocalStorage
    await saveInvestigation(report);

    setIsAnalyzing(false);
    onReportGenerated(report);
  };

  return (
    <div id="investigate-section" className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Page Title & Subtitle */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-100">
          <ShieldAlert className="h-3.5 w-3.5" />
          <span>INVESTIGATION WORKBENCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Investigate a Claim
        </h2>
        <p className="text-slate-600 mt-2 text-base max-w-xl mx-auto">
          Enter a suspicious claim or social-media post and let SachAI investigate the available evidence.
        </p>
      </div>

      {/* Main Input Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 transition-all">
        
        {/* Input Tabs (Paste Claim vs Post URL) */}
        <div className="flex border-b border-slate-200 mb-6">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center space-x-2 py-3 px-5 border-b-2 font-semibold text-sm transition-all ${
              activeTab === 'text'
                ? 'border-blue-600 text-blue-600 bg-blue-50/40 rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileText className="h-4 w-4" />
            <span>Tab 1: Paste Claim</span>
          </button>

          <button
            onClick={() => setActiveTab('url')}
            className={`flex items-center space-x-2 py-3 px-5 border-b-2 font-semibold text-sm transition-all ${
              activeTab === 'url'
                ? 'border-blue-600 text-blue-600 bg-blue-50/40 rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Link2 className="h-4 w-4" />
            <span>Tab 2: Post URL</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'text' ? (
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Suspicious Text Claim
            </label>
            <div className="relative">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Example: Every college student will receive ₹10,000 from the government."
                rows={4}
                disabled={isAnalyzing}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 text-base placeholder-slate-400 resize-none transition-all disabled:bg-slate-50"
              />
              {textInput && (
                <button 
                  onClick={() => setTextInput('')}
                  className="absolute top-3 right-3 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">Or select a trending claim to test:</p>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_TEXT_CLAIMS.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTextInput(sample)}
                    disabled={isAnalyzing}
                    className="text-xs text-left px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 border border-slate-200/80 transition-colors"
                  >
                    "{sample.substring(0, 50)}..."
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Social Media Post URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Link2 className="h-5 w-5" />
              </div>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Paste social media post URL (X/Twitter, WhatsApp forwarded link, Facebook, Instagram, YouTube)..."
                disabled={isAnalyzing}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900 text-base placeholder-slate-400 transition-all disabled:bg-slate-50"
              />
            </div>

            {/* Sample URLs */}
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">Or select a sample post link:</p>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_URL_POSTS.map((sampleUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setUrlInput(sampleUrl)}
                    disabled={isAnalyzing}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 border border-slate-200/80 font-mono transition-colors"
                  >
                    {sampleUrl.replace('https://', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Options Accordion / Controls */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <Sliders className="h-3.5 w-3.5 text-slate-400" />
              <span>Region:</span>
              <select 
                value={regionFilter} 
                onChange={(e) => setRegionFilter(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 font-medium focus:outline-none"
              >
                <option value="all">Global + India</option>
                <option value="india">India (AltNews/PIB/Boom)</option>
                <option value="global">Global (Snopes/Reuters/AP)</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>Audit Depth:</span>
              <select 
                value={searchDepth} 
                onChange={(e) => setSearchDepth(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 font-medium focus:outline-none"
              >
                <option value="deep">Deep Forensic Audit</option>
                <option value="standard">Quick Scan</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-slate-400">
            <Info className="h-3.5 w-3.5" />
            <span>Multi-source verification</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="mt-6">
          <button
            onClick={handleRunInvestigation}
            disabled={isAnalyzing || !(activeTab === 'text' ? textInput.trim() : urlInput.trim())}
            className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-xl font-bold text-base transition-all duration-200 shadow-md ${
              isAnalyzing || !(activeTab === 'text' ? textInput.trim() : urlInput.trim())
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
            }`}
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin text-white" />
                <span>Running SachAI Evidence Audit...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5 text-blue-200" />
                <span>Investigate Claim</span>
                <ArrowRight className="h-5 w-5 opacity-80" />
              </>
            )}
          </button>
        </div>

        {/* Live Progress Visualizer (Shown during analysis) */}
        {isAnalyzing && (
          <div className="mt-8 p-5 bg-slate-900 rounded-xl text-white space-y-4 animate-fade-in shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Live Forensic Analysis Log
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {Math.round(((analysisStep + 1) / steps.length) * 100)}% Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((analysisStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            {/* Current Step Description */}
            <div className="flex items-center space-x-3 text-sm font-medium text-slate-200 py-1">
              <RefreshCw className="h-4 w-4 animate-spin text-blue-400 shrink-0" />
              <span>{steps[analysisStep]}</span>
            </div>

            {/* Console Log Stream */}
            <div className="bg-slate-950 p-3 rounded-lg font-mono text-xs text-slate-400 space-y-1 max-h-28 overflow-y-auto border border-slate-800">
              {analysisLogs.map((log, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-blue-500 select-none">❯</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
