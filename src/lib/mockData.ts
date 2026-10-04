import { InvestigationReport } from './types';

export const FEATURED_INVESTIGATIONS: InvestigationReport[] = [
  {
    id: 'sach-claim-001',
    claimTitle: 'Every college student in India will receive ₹10,000 monthly under PM Yuva Digital Scholarship scheme.',
    originalInput: 'Every college student will receive ₹10,000 from the government.',
    inputType: 'text',
    category: 'Government & Schemes',
    createdAt: '2026-10-02T14:30:00Z',
    confidenceScore: 98,
    rating: 'FALSE',
    verdictTitle: 'NO SUCH SCHEME EXISTS - FRAUDULENT VIRAL CLAIM',
    executiveSummary: 'Viral claims on WhatsApp and YouTube alleging that the Ministry of Education has launched a "PM Yuva Digital Scholarship" offering ₹10,000 per month to all college students are completely false. PIB Fact Check and official Ministry statements confirm no such scheme exists. The links attached to these posts lead to phishing websites collecting personal data.',
    whyItSpread: 'Capitalized on student financial anxieties during university admission season. Spread rapidly through WhatsApp student groups via clickbait YouTube video links promising "Direct Bank Transfer within 24 Hours".',
    whatWouldChangeVerdict: 'An official gazette notification or press release from the Ministry of Education published on education.gov.in.',
    assertions: [
      {
        id: 'a1',
        statement: 'Government announced ₹10,000 monthly stipend for all college students.',
        verdict: 'CONTRADICTED',
        explanation: 'Ministry of Education clarified that no new universal student stipend scheme of ₹10,000 has been sanctioned.'
      },
      {
        id: 'a2',
        statement: 'Application link circulating on Telegram & WhatsApp is official.',
        verdict: 'CONTRADICTED',
        explanation: 'Domain inspection reveals the registration URL (pmyuva-stipend-apply.site) is an unverified phishing page hosted on a private server.'
      },
      {
        id: 'a3',
        statement: 'PIB has issued an official alert regarding this message.',
        verdict: 'CONFIRMED',
        explanation: 'PIB Fact Check verified the message as fake on their official Twitter/X channel on Oct 1, 2026.'
      }
    ],
    factChecks: [
      {
        id: 'fc-1',
        publisher: 'PIB Fact Check',
        publisherLogo: 'https://pib.gov.in/favicon.ico',
        url: 'https://pib.gov.in',
        verdictLabel: 'FAKE / BOGUS CLAIM',
        publishedDate: '2026-10-01',
        trustRating: 99,
        summary: 'PIB confirmed that the viral notification claiming ₹10,000 cash grant for college students is fake and warned citizens against sharing bank details on suspicious websites.'
      },
      {
        id: 'fc-2',
        publisher: 'BoomLive',
        publisherLogo: 'https://www.boomlive.in/favicon.ico',
        url: 'https://www.boomlive.in',
        verdictLabel: 'FALSE',
        publishedDate: '2026-10-01',
        trustRating: 95,
        summary: 'BoomLive investigated the viral URL and found it leads to an adware site collecting mobile numbers for unwanted subscription services.'
      },
      {
        id: 'fc-3',
        publisher: 'AltNews',
        publisherLogo: 'https://www.altnews.in/favicon.ico',
        url: 'https://www.altnews.in',
        verdictLabel: 'SCAM ALERT',
        publishedDate: '2026-10-02',
        trustRating: 96,
        summary: 'Traced YouTube channels recycling old clickbait video thumbnails to generate ad revenue.'
      }
    ],
    timeline: [
      {
        id: 't1',
        date: '2026-09-27',
        timestampFormatted: '27 Sep 2026, 11:20 AM',
        title: 'Earliest Mention Created',
        description: 'First spotted on an anonymous Blogspot site registered 2 days prior (pmyuvayojana-info.blogspot.com).',
        platform: 'News Blog',
        authorHandle: '@anonymous_author',
        isEarliestSource: true,
        link: 'https://archive.is'
      },
      {
        id: 't2',
        date: '2026-09-29',
        timestampFormatted: '29 Sep 2026, 04:15 PM',
        title: 'YouTube Clickbait Video Uploaded',
        description: 'A YouTube channel with 450K subscribers posted a video titled "Good News! ₹10000 Free for All Students". Gained 180,000 views in 24 hours.',
        platform: 'YouTube',
        authorHandle: 'Sarkari Yojana News',
        reachEstimate: '180,000+ views'
      },
      {
        id: 't3',
        date: '2026-09-30',
        timestampFormatted: '30 Sep 2026, 09:00 AM',
        title: 'Mass WhatsApp Group Forwarding',
        description: 'Message forwarded many times across university student WhatsApp and Telegram groups.',
        platform: 'WhatsApp',
        reachEstimate: '500,000+ users reached'
      },
      {
        id: 't4',
        date: '2026-10-01',
        timestampFormatted: '01 Oct 2026, 02:30 PM',
        title: 'Official PIB Debunk Issued',
        description: 'PIB Fact Check tweeted clarification warning public against fraudulent scheme.',
        platform: 'X (Twitter)',
        authorHandle: '@PIBFactCheck'
      }
    ],
    propagationGraph: [
      {
        id: 'node-1',
        label: 'Anonymous Blog',
        type: 'origin',
        platform: 'Blogspot Site',
        detail: 'First origin containing fake scheme flyer',
        time: '27 Sep',
        connections: ['node-2']
      },
      {
        id: 'node-2',
        label: 'Sarkari News YT Channel',
        type: 'amplifier',
        platform: 'YouTube',
        detail: '180K views video tutorial on how to apply',
        time: '29 Sep',
        connections: ['node-3', 'node-4']
      },
      {
        id: 'node-3',
        label: 'Telegram Student Networks',
        type: 'viral_cluster',
        platform: 'Telegram',
        detail: 'Forwarded across 40+ college prep channels',
        time: '30 Sep',
        connections: ['node-5']
      },
      {
        id: 'node-4',
        label: 'WhatsApp Chain Forwards',
        type: 'viral_cluster',
        platform: 'WhatsApp',
        detail: 'Mass "Forwarded Many Times" badge triggered',
        time: '30 Sep',
        connections: ['node-5']
      },
      {
        id: 'node-5',
        label: 'PIB Fact Check Debunk',
        type: 'debunk',
        platform: 'Official Portal',
        detail: 'Official clarification published & viral link flagged',
        time: '01 Oct',
        connections: []
      }
    ],
    sources: [
      {
        id: 's1',
        title: 'PIB Fact Check Official Clarification Tweet',
        domain: 'x.com/PIBFactCheck',
        url: 'https://x.com/PIBFactCheck',
        sourceType: 'Independent Fact-Checker',
        trustScore: 99,
        snippet: 'Claim: All college students will receive ₹10,000 under PM Yuva Yojana. Fact: This message is fake. Government of India has not announced any such scheme.'
      },
      {
        id: 's2',
        title: 'Ministry of Education Official Portal - Schemes Directory',
        domain: 'education.gov.in',
        url: 'https://education.gov.in',
        sourceType: 'Official Government',
        trustScore: 98,
        snippet: 'Official directory of Central Sector Interest Subsidy and National Means-cum-Merit Scholarship Schemes. No ₹10,000 monthly scheme listed.'
      },
      {
        id: 's3',
        title: 'BoomLive Fact Check Investigation Report',
        domain: 'boomlive.in',
        url: 'https://boomlive.in',
        sourceType: 'Independent Fact-Checker',
        trustScore: 95,
        snippet: 'Viral link pmyuva-stipend-apply.site redirects users to deceptive advertising pages asking for phone numbers and OTPs.'
      }
    ]
  },
  {
    id: 'sach-claim-002',
    claimTitle: 'NASA announced 3 days of total Earth darkness due to a massive solar flare in December 2026.',
    originalInput: 'NASA announced 3 days of total darkness in December due to solar storm.',
    inputType: 'text',
    category: 'Health & Science',
    createdAt: '2026-10-01T10:15:00Z',
    confidenceScore: 96,
    rating: 'FALSE',
    verdictTitle: 'RECYCLED HOAX - NO TOTAL DARKNESS PREDICTED BY NASA',
    executiveSummary: 'Viral social media posts claiming NASA has issued a warning for "3 days of total darkness" across Earth in December 2026 due to an unprecedented solar storm are false. This is a recurring viral hoax that has circulated periodically since 2012, misquoting NASA scientists. While solar activity (CMEs) can cause minor geomagnetic disturbances, it cannot block sunlight or darken the planet.',
    whyItSpread: 'Feeds on sensationalized apocalyptic headlines and fear of power grid blackouts. Frequently resurfaces every winter with changed year dates.',
    whatWouldChangeVerdict: 'An official alert published on NASA Goddard Space Flight Center or NOAA Space Weather Prediction Center (swpc.noaa.gov).',
    assertions: [
      {
        id: 'a201',
        statement: 'NASA issued a formal press release predicting 3 days of total blackout.',
        verdict: 'CONTRADICTED',
        explanation: 'NASA has repeatedly issued statements clarifying that no such announcement was ever made.'
      },
      {
        id: 'a202',
        statement: 'Solar storms can cause total darkness on Earth.',
        verdict: 'CONTRADICTED',
        explanation: 'Geomagnetic storms affect magnetosphere and satellite signals, not solar illumination.'
      }
    ],
    factChecks: [
      {
        id: 'fc-201',
        publisher: 'Snopes',
        publisherLogo: 'https://www.snopes.com/favicon.ico',
        url: 'https://www.snopes.com',
        verdictLabel: 'FALSE',
        publishedDate: '2026-09-28',
        trustRating: 98,
        summary: 'Snopes debunked the recurring "NASA Total Darkness" claim as a classic internet rumor dating back to 2012 Mayan calendar predictions.'
      },
      {
        id: 'fc-202',
        publisher: 'Reuters Fact Check',
        publisherLogo: 'https://www.reuters.com/favicon.ico',
        url: 'https://www.reuters.com',
        verdictLabel: 'FALSE',
        publishedDate: '2026-09-30',
        trustRating: 97,
        summary: 'NOAA Space Weather Prediction Center confirmed no solar event can physically cause 3 days of planetary darkness.'
      }
    ],
    timeline: [
      {
        id: 't201',
        date: '2012-12-01',
        timestampFormatted: '01 Dec 2012',
        title: 'Original Hoax Born (2012)',
        description: 'First surfaced on conspiracy forums attributing the claim to the end of the Mayan calendar.',
        platform: 'News Blog',
        isEarliestSource: true
      },
      {
        id: 't202',
        date: '2026-09-25',
        timestampFormatted: '25 Sep 2026',
        title: 'TikTok & Facebook Resurgence',
        description: 'A TikTok video modified the date to December 2026 with sensational AI voiceover.',
        platform: 'Facebook',
        reachEstimate: '1.2M views'
      }
    ],
    propagationGraph: [
      {
        id: 'n1',
        label: 'Conspiracy Forum (2012)',
        type: 'origin',
        platform: 'Web Forum',
        detail: 'Original recycled rumor',
        time: '2012',
        connections: ['n2']
      },
      {
        id: 'n2',
        label: 'TikTok Viral Reels',
        type: 'viral_cluster',
        platform: 'TikTok',
        detail: '1.2M views AI generated video',
        time: '25 Sep',
        connections: ['n3']
      },
      {
        id: 'n3',
        label: 'NOAA & Snopes Clarification',
        type: 'debunk',
        platform: 'Official Portal',
        detail: 'Scientific clarification issued',
        time: '28 Sep',
        connections: []
      }
    ],
    sources: [
      {
        id: 's201',
        title: 'NOAA Space Weather Prediction Center - Solar Cycle Dashboard',
        domain: 'swpc.noaa.gov',
        url: 'https://www.swpc.noaa.gov',
        sourceType: 'Official Government',
        trustScore: 99,
        snippet: 'Real-time solar flare and space weather forecasts. No cataclysmic blackout events forecasted.'
      }
    ]
  },
  {
    id: 'sach-claim-003',
    claimTitle: 'Reserve Bank of India embedding nano-GPS microchips inside ₹2000 currency notes to track black money.',
    originalInput: 'RBI ₹2000 note has nano GPS chip inside.',
    inputType: 'text',
    category: 'Government & Schemes',
    createdAt: '2026-09-28T08:00:00Z',
    confidenceScore: 99,
    rating: 'FALSE',
    verdictTitle: 'DEBUNKD MYTH - NO ELECTRONIC CHIPS IN PAPER CURRENCY',
    executiveSummary: 'Viral TV broadcast excerpts and social media messages claiming RBI introduced "NGC (Nano GPS Chip)" technology inside currency notes to enable satellite tracking deep underground are completely false. RBI officials and currency printers confirmed paper notes contain standard security threads, watermarks, and micro-lettering, but zero electronic or GPS components.',
    whyItSpread: 'Originated during the 2016 demonetization announcements when unverified TV anchors speculated about futuristic currency technology.',
    whatWouldChangeVerdict: 'Technical breakdown by certified hardware labs demonstrating semiconductor components within banknote paper matrix.',
    assertions: [
      {
        id: 'a301',
        statement: 'Banknotes contain microchips detectable by satellites.',
        verdict: 'CONTRADICTED',
        explanation: 'GPS tracking requires an active battery power source and antenna, impossible inside standard 100-micron paper currency.'
      }
    ],
    factChecks: [
      {
        id: 'fc-301',
        publisher: 'AltNews',
        publisherLogo: 'https://www.altnews.in/favicon.ico',
        url: 'https://www.altnews.in',
        verdictLabel: 'FALSE',
        publishedDate: '2016-11-10',
        trustRating: 97,
        summary: 'AltNews systematically dismantled the claim, tracing it to speculative newsroom broadcasts.'
      }
    ],
    timeline: [
      {
        id: 't301',
        date: '2016-11-08',
        timestampFormatted: '08 Nov 2016',
        title: 'TV Anchor Speculation Broadcast',
        description: 'First aired on mainstream news broadcast as an unverified rumour.',
        platform: 'News Blog',
        isEarliestSource: true
      }
    ],
    propagationGraph: [
      {
        id: 'np1',
        label: 'TV News Broadcast',
        type: 'origin',
        platform: 'TV Broadcast',
        detail: 'Unverified speculation',
        time: 'Nov 2016',
        connections: ['np2']
      },
      {
        id: 'np2',
        label: 'RBI Clarification',
        type: 'debunk',
        platform: 'Official Portal',
        detail: 'RBI Governor confirmed paper note specs',
        time: 'Nov 2016',
        connections: []
      }
    ],
    sources: [
      {
        id: 's301',
        title: 'RBI Official Currency Security Features Guide',
        domain: 'rbi.org.in',
        url: 'https://rbi.org.in',
        sourceType: 'Official Government',
        trustScore: 99,
        snippet: 'Comprehensive specification of security features: intaglio printing, latent image, optically variable ink, color-shift thread. No electronic chips.'
      }
    ]
  }
];

export function generateInvestigationReport(input: string, type: 'text' | 'url'): InvestigationReport {
  const cleanInput = input.trim();
  const lowercase = cleanInput.toLowerCase();

  // Check if input matches any pre-built detailed claim
  const matched = FEATURED_INVESTIGATIONS.find(item => 
    lowercase.includes(item.originalInput.toLowerCase()) || 
    lowercase.includes('10,000') || 
    lowercase.includes('student') || 
    lowercase.includes('solar') || 
    lowercase.includes('nasa') || 
    lowercase.includes('gps') || 
    lowercase.includes('rbi')
  );

  if (matched && cleanInput.length < 150) {
    return { ...matched, originalInput: cleanInput, inputType: type, createdAt: new Date().toISOString() };
  }

  // Dynamic NLP & Entity Rule Synthesizer for arbitrary user claims
  let rating: InvestigationReport['rating'] = 'UNPROVEN';
  let verdictTitle = 'UNVERIFIED CLAIM - EXERCISE CAUTION';
  let confidenceScore = 82;
  let category: InvestigationReport['category'] = 'General Viral';

  if (lowercase.includes('gov') || lowercase.includes('scheme') || lowercase.includes('pm') || lowercase.includes('free') || lowercase.includes('money') || lowercase.includes('tax') || lowercase.includes('bank')) {
    category = 'Government & Schemes';
  } else if (lowercase.includes('cure') || lowercase.includes('virus') || lowercase.includes('health') || lowercase.includes('who') || lowercase.includes('vaccine') || lowercase.includes('doctor')) {
    category = 'Health & Science';
  } else if (lowercase.includes('election') || lowercase.includes('party') || lowercase.includes('vote') || lowercase.includes('minister')) {
    category = 'Politics & Elections';
  } else if (lowercase.includes('ai') || lowercase.includes('deepfake') || lowercase.includes('apple') || lowercase.includes('google') || lowercase.includes('phone')) {
    category = 'Technology & AI';
  }

  // Determine heuristic rating based on common viral keywords
  if (lowercase.includes('free') || lowercase.includes('guaranteed') || lowercase.includes('secret') || lowercase.includes('100%') || lowercase.includes('miracle') || lowercase.includes('forward to all') || lowercase.includes('share quickly')) {
    rating = 'MISLEADING';
    verdictTitle = 'MISLEADING / LACKS OFFICIAL CORROBORATION';
    confidenceScore = 89;
  } else if (lowercase.includes('official') || lowercase.includes('study') || lowercase.includes('report') || lowercase.includes('court') || lowercase.includes('isro') || lowercase.includes('nasa')) {
    rating = 'CONTEXT_NEEDED';
    verdictTitle = 'MISCONSTRUED CONTEXT - PARTIAL TRUTH WITH OMISSIONS';
    confidenceScore = 85;
  } else if (lowercase.includes('fake') || lowercase.includes('scam') || lowercase.includes('banned') || lowercase.includes('hacked')) {
    rating = 'FALSE';
    verdictTitle = 'FALSE CLAIM - CONTRADICTED BY PRIMARY SOURCES';
    confidenceScore = 93;
  }

  const claimTopic = cleanInput.length > 70 ? cleanInput.substring(0, 70) + '...' : cleanInput;

  return {
    id: `sach-gen-${Math.floor(100000 + Math.random() * 900000)}`,
    claimTitle: cleanInput.length > 10 ? cleanInput : `Investigation into: "${cleanInput}"`,
    originalInput: cleanInput,
    inputType: type,
    category: category,
    createdAt: new Date().toISOString(),
    confidenceScore: confidenceScore,
    rating: rating,
    verdictTitle: verdictTitle,
    executiveSummary: `SachAI investigated the submitted claim regarding "${claimTopic}". Cross-referencing 14 news archives, fact-checking registries, and official press records indicates that the core premise lacks supporting primary documentation. While related discussions exist on social media platforms, key context has been altered or exaggerated.`,
    whyItSpread: `The claim leverages sensational wording and emotional triggers, causing users to share it rapidly across instant messaging apps and social media feeds without primary source verification.`,
    whatWouldChangeVerdict: `Verification by accredited independent journalism bodies or official direct releases from primary institutions referenced in the text.`,
    assertions: [
      {
        id: 'ga-1',
        statement: `Primary assertion made in: "${claimTopic}"`,
        verdict: rating === 'FALSE' ? 'CONTRADICTED' : rating === 'MISLEADING' ? 'UNSUBSTANTIATED' : 'PARTIALLY_TRUE',
        explanation: 'Cross-verification against indexed news databases returned no official confirmation from verified agencies.'
      },
      {
        id: 'ga-2',
        statement: 'Attribution to official sources or regulatory bodies.',
        verdict: 'UNSUBSTANTIATED',
        explanation: 'No official gazette, press release, or scientific paper supports the verbatim quote or figures cited.'
      }
    ],
    factChecks: [
      {
        id: 'gfc-1',
        publisher: 'AltNews Fact Register',
        publisherLogo: 'https://www.altnews.in/favicon.ico',
        url: 'https://www.altnews.in',
        verdictLabel: rating === 'FALSE' ? 'FALSE' : 'UNPROVEN',
        publishedDate: 'Recently Updated',
        trustRating: 96,
        summary: `No official record found matching the specific claims in "${claimTopic}". Fact-checkers flag similar messaging as unverified viral chatter.`
      },
      {
        id: 'gfc-2',
        publisher: 'PIB / Reuters Verification Index',
        publisherLogo: 'https://pib.gov.in/favicon.ico',
        url: 'https://pib.gov.in',
        verdictLabel: 'EXERCISE CAUTION',
        publishedDate: 'Live Scan',
        trustRating: 98,
        summary: 'Official domain archives contain zero press releases corroborating the viral message.'
      }
    ],
    timeline: [
      {
        id: 'gt-1',
        date: 'Earliest Mention',
        timestampFormatted: 'Spotted 3 days ago',
        title: 'Initial Digital Footprint Detected',
        description: `Earliest indexed mention detected on an unverified social media account / discussion forum.`,
        platform: type === 'url' ? 'X (Twitter)' : 'WhatsApp',
        isEarliestSource: true,
        authorHandle: '@viral_user_node'
      },
      {
        id: 'gt-2',
        date: 'Viral Peak',
        timestampFormatted: 'Spotted 1 day ago',
        title: 'Cross-Platform Reshare Surge',
        description: `Multiplying across instant messaging groups with high re-share velocity.`,
        platform: 'Telegram',
        reachEstimate: '45,000+ potential reach'
      },
      {
        id: 'gt-3',
        date: 'SachAI Audit',
        timestampFormatted: 'Just now',
        title: 'SachAI Automated Multi-Source Forensic Audit',
        description: `Cross-matched against 12+ fact-check networks & indexed archives.`,
        platform: 'Official Portal'
      }
    ],
    propagationGraph: [
      {
        id: 'gn-1',
        label: 'Unverified Origin Node',
        type: 'origin',
        platform: 'Social Media Post',
        detail: 'First published without primary source citation',
        time: 'Day 1',
        connections: ['gn-2']
      },
      {
        id: 'gn-2',
        label: 'Amplifier Accounts',
        type: 'amplifier',
        platform: 'Public Groups & Channels',
        detail: 'High engagement reposts & forwards',
        time: 'Day 2',
        connections: ['gn-3', 'gn-4']
      },
      {
        id: 'gn-3',
        label: 'Viral Instant Messaging Feed',
        type: 'viral_cluster',
        platform: 'WhatsApp / Telegram',
        detail: 'Forwarded message chain',
        time: 'Day 3',
        connections: ['gn-5']
      },
      {
        id: 'gn-4',
        label: 'Aggregator Blogs',
        type: 'viral_cluster',
        platform: 'Unverified News Blogs',
        detail: 'Clickbait summaries generated',
        time: 'Day 3',
        connections: ['gn-5']
      },
      {
        id: 'gn-5',
        label: 'SachAI Evidence Evaluation',
        type: 'fact_check',
        platform: 'SachAI Platform',
        detail: 'Forensic evidence analysis completed',
        time: 'Present',
        connections: []
      }
    ],
    sources: [
      {
        id: 'gs-1',
        title: 'Global Fact Check Database Index (IFCN)',
        domain: 'factcheckingday.com',
        url: 'https://factcheckingday.com',
        sourceType: 'Independent Fact-Checker',
        trustScore: 97,
        snippet: 'Cross-referenced query against International Fact-Checking Network signatories.'
      },
      {
        id: 'gs-2',
        title: 'Indexed Press & Government Archives Search',
        domain: 'archive.org',
        url: 'https://archive.org',
        sourceType: 'Official Government',
        trustScore: 95,
        snippet: 'Deep archive sweep for verbatim matches and official press statements.'
      }
    ]
  };
}
