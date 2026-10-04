import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc } from 'firebase/firestore';
import { InvestigationReport } from './types';

// Optional Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDummyKeyForSachAIPrototypeHackathon2026",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "sach-ai-prototype.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sach-ai-prototype",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "sach-ai-prototype.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:abcdef123456"
};

// Initialize Firebase App safely
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

const LOCAL_STORAGE_KEY = 'sach_ai_saved_investigations_v1';

/**
 * Save an investigation report to Firestore (with LocalStorage fallback)
 */
export async function saveInvestigation(report: InvestigationReport): Promise<boolean> {
  try {
    // 1. Always sync to LocalStorage first for instant latency-free prototype behavior
    if (typeof window !== 'undefined') {
      const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing: InvestigationReport[] = existingStr ? JSON.parse(existingStr) : [];
      
      // Filter out duplicate if saving same ID
      const updated = [report, ...existing.filter(r => r.id !== report.id)];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }

    // 2. Try Firestore if online/configured
    try {
      const colRef = collection(db, 'investigations');
      await addDoc(colRef, {
        ...report,
        savedAt: new Date().toISOString()
      });
    } catch (firebaseErr) {
      console.log('Firebase sync skipped, saved to local cache:', firebaseErr);
    }

    return true;
  } catch (err) {
    console.error('Error saving investigation:', err);
    return false;
  }
}

/**
 * Get all saved investigations
 */
export async function getSavedInvestigations(): Promise<InvestigationReport[]> {
  try {
    let localReports: InvestigationReport[] = [];
    if (typeof window !== 'undefined') {
      const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (existingStr) {
        localReports = JSON.parse(existingStr);
      }
    }

    // Try fetching from Firestore
    try {
      const colRef = collection(db, 'investigations');
      const q = query(colRef, orderBy('createdAt', 'desc'), limit(20));
      const snapshot = await getDocs(q);
      
      const firestoreReports: InvestigationReport[] = [];
      snapshot.forEach(docSnap => {
        firestoreReports.push(docSnap.data() as InvestigationReport);
      });

      if (firestoreReports.length > 0) {
        // Merge & deduplicate
        const mergedMap = new Map<string, InvestigationReport>();
        [...firestoreReports, ...localReports].forEach(r => mergedMap.set(r.id, r));
        return Array.from(mergedMap.values());
      }
    } catch (fbErr) {
      // Return local reports if Firestore offline/unconfigured
    }

    return localReports;
  } catch (err) {
    console.error('Error fetching saved investigations:', err);
    return [];
  }
}

/**
 * Remove a saved investigation
 */
export async function removeSavedInvestigation(reportId: string): Promise<boolean> {
  try {
    if (typeof window !== 'undefined') {
      const existingStr = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (existingStr) {
        const existing: InvestigationReport[] = JSON.parse(existingStr);
        const updated = existing.filter(r => r.id !== reportId);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
      }
    }
    return true;
  } catch (err) {
    console.error('Error deleting investigation:', err);
    return false;
  }
}
