export interface TimelineItem {
  id: string;
  year: string;
  company: string;
  unit?: string;
  location: string;
  services: string[];
  brands?: string[];
  isLatest?: boolean;
}

export interface IndustryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface CertificateItem {
  id: string;
  placeholderId: string;
  title: string;
  subtitle: string;
  caption: string;
  regNumber: string;
  authority: string;
  date: string;
  docType: 'udyam' | 'gst' | 'epfo' | 'esic';
  details: {
    label: string;
    value: string;
  }[];
  imageUrl?: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}
