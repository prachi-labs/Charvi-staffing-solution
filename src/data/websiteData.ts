import {
  TimelineItem,
  IndustryItem,
  ExpertiseItem,
  CertificateItem,
  ApproachStep,
  BenefitItem,
  ValueItem,
} from '../types';

export const COMPANY_INFO = {
  name: 'CHARVI STAFFING SOLUTIONS',
  entityName: 'Charvi Enterprises',
  proprietor: 'Deepak Nagar',
  headline: 'Reliable Workforce. Stronger Operations.',
  tagline: '25+ Years of Trusted Manpower & Workforce Solutions',
  description:
    'Delivering skilled, semi-skilled and unskilled manpower, workforce management and operational support to leading businesses across India.',
  highlightStatement: 'Right People. Right Place. Right Support.',
  email: 'Info@charvienterprises.in',
  phones: ['9079881502', '9414346129'],
  location: 'Khasra No. 622, Laxmi Vihar, In Front of Railway Station, Bundi, Rajasthan - 323001',
  shortLocation: 'Bundi, Rajasthan, India',
  gstin: '08CCCPN0557M2ZA',
  udyam: 'UDYAM-RJ-09-0033719',
  epfoCode: 'RJKOT3156373000',
  esicCode: '15001030010001099',
  coverageStates: ['Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Pan India'],
  stats: {
    experienceYears: 25,
    workersDeployed: 1000,
    majorEngagements: 6,
    coreStates: 3,
  },
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'awl-2008',
    year: '2008',
    company: 'AWL Agribusiness Ltd.',
    location: 'Bundi',
    services: [
      'Manpower supply',
      'Packaging of Fortune brand oil',
      'Housekeeping',
    ],
    brands: ['Fortune'],
  },
  {
    id: 'patanjali-2014',
    year: '2014',
    company: 'Patanjali Food Pvt. Ltd.',
    location: 'Baran • Guna • Kota',
    services: [
      'Packaging of Patanjali brand oil',
      'Packaging of Mahakosh brand oil',
      'Loading & unloading',
    ],
    brands: ['Patanjali', 'Mahakosh'],
  },
  {
    id: 'varun-2022',
    year: '2022',
    company: 'Varun Beverages Pvt. Ltd.',
    location: 'Bundi',
    services: [
      'Loading & unloading operations',
      'Pepsi brand product handling',
      'Warehouse dispatch support',
    ],
    brands: ['Pepsi'],
  },
  {
    id: 'soyug-2023',
    year: '2023',
    company: 'Soyug Ltd.',
    unit: 'Unit of Career Point Kota Group',
    location: 'Bundi',
    services: [
      'Packaging of Soyug brand oil',
      'Loading & unloading',
      'Plant operational support',
    ],
    brands: ['Soyug'],
  },
  {
    id: 'ks-oils-2024',
    year: '2024',
    company: 'K.S. Oils Ltd.',
    location: 'Kota • Guna',
    services: [
      'Manpower supply',
      'Packaging operations',
      'Loading & unloading',
      'Kalash, Jalsa and Double Sher oil operations',
      'Plant maintenance',
    ],
    brands: ['Kalash', 'Jalsa', 'Double Sher'],
  },
  {
    id: 'sona-2025',
    year: '2025',
    company: 'Sona Nutrients Pvt. Ltd.',
    unit: 'Unit of Shalimar Group',
    location: 'Multi-Plant Deployment',
    services: [
      'Manpower supply',
      'Off-roll workforce management',
      'Packaging of Total Gold brand oil',
      'Housekeeping & hygiene management',
    ],
    brands: ['Total Gold'],
    isLatest: true,
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'edible-oil',
    number: '01',
    title: 'EDIBLE OIL INDUSTRY',
    description:
      'Manpower supply, packaging, loading & unloading, plant support and workforce management for FMCG and oil refineries.',
    iconName: 'Droplets',
    highlight: 'Packaging & Automated Bottling Lines',
  },
  {
    id: 'beverage',
    number: '02',
    title: 'BEVERAGE INDUSTRY',
    description:
      'Loading, unloading and operational workforce support for beverage distribution and high-velocity plant operations.',
    iconName: 'PackageCheck',
    highlight: 'Dispatch, Logistics & Pallet Handling',
  },
  {
    id: 'manufacturing',
    number: '03',
    title: 'MANUFACTURING INDUSTRY',
    description:
      'Skilled, semi-skilled and unskilled manpower for industrial production lines, assembly, and operational requirements.',
    iconName: 'Factory',
    highlight: 'Plant Operators, Assembly & Shopfloor',
  },
  {
    id: 'agriculture',
    number: '04',
    title: 'AGRICULTURE INDUSTRY',
    description:
      'Reliable workforce solutions supporting agricultural processing, grain handling, and allied business operations.',
    iconName: 'Sprout',
    highlight: 'Grain Handling, Sorting & Storage Support',
  },
];

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'exp-1',
    number: '01',
    title: 'Manpower Supply',
    description:
      'Reliable deployment of skilled, semi-skilled and unskilled workforce based on operational requirements.',
    iconName: 'Users',
    tag: 'Core Workforce',
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'Off-Roll Workforce Management',
    description:
      'Professionally managed workforce solutions for organizations requiring flexible operational staffing and compliance coordination.',
    iconName: 'Briefcase',
    tag: 'Flexible Staffing',
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'Packaging Operations',
    description:
      'Experienced workforce for packaging operations across industrial, FMCG, and edible oil production environments.',
    iconName: 'Boxes',
    tag: 'Production Line',
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'Loading & Unloading',
    description:
      'Dedicated manpower for safe, efficient loading, unloading, dock turnaround, and warehouse material handling.',
    iconName: 'Truck',
    tag: 'Logistics',
  },
  {
    id: 'exp-5',
    number: '05',
    title: 'Plant & Housekeeping Support',
    description:
      'Operational support including plant maintenance assistance, shopfloor cleanliness, and housekeeping workforce.',
    iconName: 'Sparkles',
    tag: 'Plant Hygiene',
  },
];

export const WHY_CHARVI_DATA: BenefitItem[] = [
  {
    number: '01',
    title: '25+ Years of Experience',
    description:
      'A quarter-century track record of dependable service across industrial and plant-level ecosystems.',
  },
  {
    number: '02',
    title: '1,000+ Workforce Strength',
    description:
      'A vast roster of verified, deployable personnel ready to mobilize swiftly for seasonal and permanent shifts.',
  },
  {
    number: '03',
    title: 'Skilled, Semi-Skilled & Unskilled',
    description:
      'Tiered workforce capabilities covering specialized machine operators to frontline line handlers.',
  },
  {
    number: '04',
    title: 'Industrial & Plant-Level Expertise',
    description:
      'Deep domain proficiency in food processing, edible oils, beverage logistics, and high-throughput production.',
  },
  {
    number: '05',
    title: 'Multi-State Workforce Deployment',
    description:
      'Proven operational footprint across Rajasthan, Madhya Pradesh, Uttar Pradesh, and pan-India project sites.',
  },
  {
    number: '06',
    title: 'Reliable & Scalable Support',
    description:
      'Rapid ramp-up or ramp-down capability according to volume fluctuations, maintenance cycles, and peak demands.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      'Understand your manpower requirement, location, operational environment and workforce profile in detail.',
  },
  {
    step: '02',
    title: 'Deploy',
    description:
      'Identify and deploy suitable skilled, semi-skilled and unskilled manpower with required safety onboarding.',
  },
  {
    step: '03',
    title: 'Manage',
    description:
      'Support workforce coordination, day-to-day operational alignment, attendance, and on-site supervisory oversight.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'Scale workforce deployment seamlessly according to changing production shifts and seasonal volume peaks.',
  },
];

export const COMPANY_VALUES: ValueItem[] = [
  {
    title: 'RELIABILITY',
    tagline: 'Unwavering Operational Consistency',
    description:
      'Consistent workforce support that businesses can depend on every single shift without disruption.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'RESPONSIBILITY',
    tagline: 'Accountability At Every Tier',
    description:
      'Professionally managed workforce operations with a resolute focus on workplace safety, compliance, and diligence.',
    iconName: 'Award',
  },
  {
    title: 'LONG-TERM PARTNERSHIPS',
    tagline: 'Collaborative Growth',
    description:
      'Building dependable relationships through consistent service quality, transparent communication, and operational support.',
    iconName: 'Handshake',
  },
];

export const INITIAL_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    placeholderId: 'certificate-01',
    title: 'UDYAM REGISTRATION CERTIFICATE',
    subtitle: 'Ministry of Micro, Small and Medium Enterprises (Govt. of India)',
    caption: 'Udyam Reg. No: UDYAM-RJ-09-0033719 • Human Resources Provision & Management (NIC 78300)',
    regNumber: 'UDYAM-RJ-09-0033719',
    authority: 'Ministry of MSME, Government of India',
    date: '05/10/2025',
    docType: 'udyam',
    details: [
      { label: 'Name of Enterprise', value: 'CHARVI ENTERPRISES' },
      { label: 'Proprietor', value: 'DEEPAK NAGAR' },
      { label: 'Enterprise Type', value: 'Micro (Services)' },
      { label: 'NIC Code (5 Digit)', value: '78300 - Human resources provision and management of human resources functions' },
      { label: 'Registered Address', value: 'Khasra No. 622, Laxmi Vihar, In Front of Railway Station, Bundi, Rajasthan - 323001' },
      { label: 'Date of Incorporation', value: '25/04/2022' },
      { label: 'District Industries Centre', value: 'Bundi (Rajasthan)' },
      { label: 'MSME-DFO', value: 'Jaipur (Rajasthan)' },
    ],
  },
  {
    id: 'cert-2',
    placeholderId: 'certificate-02',
    title: 'GST REGISTRATION CERTIFICATE',
    subtitle: 'Government of India • Form GST REG-06 [See Rule 10(1)]',
    caption: 'GSTIN: 08CCCPN0557M2ZA • Goods and Services Tax Identification Number (Regular)',
    regNumber: '08CCCPN0557M2ZA',
    authority: 'Government of India, Central Goods & Services Tax Department',
    date: '25/04/2022',
    docType: 'gst',
    details: [
      { label: 'Legal Name', value: 'DEEPAK NAGAR' },
      { label: 'Trade Name', value: 'CHARVI ENTERPRISES' },
      { label: 'Constitution of Business', value: 'Proprietorship' },
      { label: 'Principal Place of Business', value: 'Khasra No. 622, Laxmi Vihar, In Front of Railway Station, Bundi, Rajasthan - 323001' },
      { label: 'Type of Registration', value: 'Regular' },
      { label: 'Jurisdictional Office', value: 'Superintendent, Centre, Rajasthan' },
      { label: 'Date of Issue', value: '25/04/2022' },
      { label: 'PAN', value: 'CCCPN0557M' },
    ],
  },
  {
    id: 'cert-3',
    placeholderId: 'certificate-03',
    title: 'EMPLOYEES\' PROVIDENT FUND (EPFO)',
    subtitle: 'Ministry of Labour and Employment (A Statutory Body, Govt. of India)',
    caption: 'EPF Code No: RJKOT3156373000 • Sub Regional Office Kota, Rajasthan',
    regNumber: 'RJKOT3156373000',
    authority: 'Employees\' Provident Fund Organisation, Govt. of India',
    date: '18/12/2023',
    docType: 'epfo',
    details: [
      { label: 'Establishment Name', value: 'M/s CHARVI ENTERPRISES' },
      { label: 'Proprietor', value: 'DEEPAK NAGAR' },
      { label: 'Code Number', value: 'RJKOT3156373000' },
      { label: 'Application Number', value: '10001399354' },
      { label: 'Statutory Act', value: 'Employees\' Provident Fund and Miscellaneous Provisions Act, 1952' },
      { label: 'Primary Activity', value: 'Expert Services / Human Resources Management' },
      { label: 'Sub Regional Office', value: 'Kota, Rajasthan' },
      { label: 'Address', value: 'Khasra No 622 Laxmi Vihar, In Front Of Railway Station, Bundi - 323001' },
    ],
  },
  {
    id: 'cert-4',
    placeholderId: 'certificate-04',
    title: 'EMPLOYEES\' STATE INSURANCE (ESIC)',
    subtitle: 'Employees\' State Insurance Corporation • Regional Office Jaipur',
    caption: 'ESIC Code No: 15001030010001099 • Statutory Social Security & Medical Care Coverage',
    regNumber: '15001030010001099',
    authority: 'Employees\' State Insurance Corporation (ESI Corporation, Jaipur)',
    date: '18/12/2023',
    docType: 'esic',
    details: [
      { label: 'Establishment Name', value: 'M/s. CHARVI ENTERPRISES' },
      { label: 'Principal Employer', value: 'DEEPAK NAGAR' },
      { label: 'Allotted Code Number', value: '15001030010001099' },
      { label: 'Statutory Act', value: 'Section 1(5) of the E.S.I. Act, 1948 as amended' },
      { label: 'Branch Office', value: 'BO-Kota' },
      { label: 'Regional Office', value: 'Panchdeep Bhawan, Bhawani Singh Marg, Jaipur' },
      { label: 'Coverage Scope', value: 'Total Social Security, Medical Care & Insurance for all Eligible Workers' },
      { label: 'Address', value: 'Khasra No 622 Laxmi Vihar, In Front Of Railway Station, Bundi - 323001' },
    ],
  },
];
