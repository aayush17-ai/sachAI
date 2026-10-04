"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InvestigationWorkbench from '@/components/InvestigationWorkbench';
import InvestigationReportView from '@/components/InvestigationReport';
import HowItWorks from '@/components/HowItWorks';
import FeaturedInvestigations from '@/components/FeaturedInvestigations';
import SavedHistory from '@/components/SavedHistory';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { InvestigationReport } from '@/lib/types';
import { FEATURED_INVESTIGATIONS } from '@/lib/mockData';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'investigate' | 'how-it-works' | 'about' | 'history'>('home');
  const [currentReport, setCurrentReport] = useState<InvestigationReport | null>(null);

  const handleSelectReport = (report: InvestigationReport) => {
    setCurrentReport(report);
    setActiveTab('investigate');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleInvestigateClick = () => {
    setCurrentReport(null);
    setActiveTab('investigate');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'investigate') {
            // Keep current report if viewing, or clear if clicking fresh
          }
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onQuickInvestigate={handleInvestigateClick}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* LANDING PAGE (HOME TAB) */}
        {activeTab === 'home' && (
          <>
            <HeroSection 
              onInvestigateClick={handleInvestigateClick}
              onSelectDemoReport={handleSelectReport}
            />
            <FeaturedInvestigations onSelectReport={handleSelectReport} />
            <HowItWorks onInvestigateClick={handleInvestigateClick} />
            <AboutSection onInvestigateClick={handleInvestigateClick} />
          </>
        )}

        {/* INVESTIGATION PAGE (WORKBENCH OR REPORT VIEW) */}
        {activeTab === 'investigate' && (
          <div className="py-6">
            {currentReport ? (
              <InvestigationReportView 
                report={currentReport} 
                onBackToWorkbench={() => setCurrentReport(null)}
              />
            ) : (
              <InvestigationWorkbench 
                onReportGenerated={(report) => {
                  setCurrentReport(report);
                  if (typeof window !== 'undefined') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              />
            )}
          </div>
        )}

        {/* HOW IT WORKS PAGE */}
        {activeTab === 'how-it-works' && (
          <div className="py-8">
            <HowItWorks onInvestigateClick={handleInvestigateClick} />
          </div>
        )}

        {/* SAVED HISTORY PAGE */}
        {activeTab === 'history' && (
          <SavedHistory 
            onSelectReport={handleSelectReport}
            onGoToInvestigate={handleInvestigateClick}
          />
        )}

        {/* ABOUT PAGE */}
        {activeTab === 'about' && (
          <AboutSection onInvestigateClick={handleInvestigateClick} />
        )}
      </main>

      {/* Modern Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
