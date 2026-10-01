import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import heroImage from '@/assets/hero-residence.jpg';
import residencesImage from '@/assets/project-residences.jpg';
import urbanImage from '@/assets/project-urban.jpg';
import interiorImage from '@/assets/interior.jpg';

export const images = { heroImage, residencesImage, urbanImage, interiorImage };
export type Project = { id: string; name: string; location: string; category: string; status: string; description: string; overview: string; image: string; images: string[]; amenities: string; configurations: string; highlights: string; advantages: string; featured: boolean };
export type Service = { id: string; title: string; description: string };
export type GalleryItem = { id: string; title: string; category: string; image: string; featured: boolean };
export type Testimonial = { id: string; name: string; location: string; project: string; feedback: string; published: boolean };
export type Enquiry = { id: string; name: string; phone: string; email: string; interest: string; message: string; date: string; status: string };
export type SiteData = {
  heroSettings: { eyebrow: string; title: string; subtitle: string; cta: string; secondCta: string; location: string; image: string; overlay: number };
  aboutSettings: { approachHeading: string; approachText: string; heading: string; story: string; image: string; principles: string[]; stats: { label: string; value: string }[] };
  projects: Project[]; services: Service[]; gallery: GalleryItem[]; testimonials: Testimonial[]; enquiries: Enquiry[];
  philosophy: { heading: string; descriptions: string[]; image: string };
  whyUs: { heading: string; items: string[]; image: string };
  websiteSettings: { websiteName: string; logoText: string; accent: string; footerDescription: string; pageTitle: string; businessName: string; address: string; phone: string; email: string; hours: string; instagram: string; facebook: string; linkedin: string };
};
export const defaults: SiteData = {
  heroSettings: { eyebrow: 'REAL ESTATE • DEVELOPMENT • PUNE', title: 'Creating Spaces\nThat Feel Like Home.', subtitle: 'Thoughtfully planned developments where architecture, functionality and modern living come together.', cta: 'Explore Projects', secondCta: 'Start a Conversation', location: 'Bhukum • Mulshi • Pune', image: heroImage, overlay: 48 },
  aboutSettings: { approachHeading: 'Building with purpose.\nDeveloping with perspective.', approachText: 'At NEETYA, we see development as more than construction. It is a considered process of finding the right place, understanding how people live and shaping spaces with lasting relevance.', heading: 'More Than Buildings.\nWe Create Possibilities.', story: 'NEETYA DEVELOPERS LLP is a Pune-based real estate development business focused on thoughtfully planned spaces. From location and design to the finer details of everyday use, we approach each opportunity with care, clarity and a long-term perspective.', image: residencesImage, principles: ['Thoughtful Planning', 'Quality & Detail', 'Contemporary Design', 'Strategic Locations'], stats: [{ label: 'Projects', value: '10+' }, { label: 'Locations', value: '05+' }, { label: 'Years of Vision', value: '05+' }, { label: 'Commitment', value: '100%' }] },
  projects: [
    { id: 'neetya-residences', name: 'NEETYA RESIDENCES', location: 'Bhukum, Pune', category: 'Residential', status: 'Upcoming', description: 'A quieter perspective on contemporary living, surrounded by nature.', overview: 'A concept development exploring the balance between contemporary architecture and the calm of its surroundings. This is illustrative portfolio content, not an announced development.', image: residencesImage, images: [residencesImage, interiorImage, heroImage], amenities: 'Landscaped spaces, Natural light, Thoughtful circulation', configurations: 'Configuration details to be announced', highlights: 'Nature-led setting, Contemporary architecture, Considered planning', advantages: 'Situated in the broader Bhukum and Mulshi area of Pune.', featured: true },
    { id: 'neetya-urban', name: 'NEETYA URBAN', location: 'Mulshi, Pune', category: 'Commercial', status: 'Ongoing', description: 'A design-led mixed-use concept for a changing urban landscape.', overview: 'An illustrative mixed-use development concept that considers adaptable spaces, street presence and everyday convenience. This is demo content, not an announced development.', image: urbanImage, images: [urbanImage, heroImage, interiorImage], amenities: 'Flexible spaces, Street-facing frontage, Landscaped edges', configurations: 'Configuration details to be announced', highlights: 'Flexible planning, Strong visual identity, Connected setting', advantages: 'Conceptually located in the greater Mulshi region of Pune.', featured: true },
    { id: 'neetya-heights', name: 'NEETYA HEIGHTS', location: 'Pune, Maharashtra', category: 'Residential', status: 'Completed', description: 'An editorial study in elevated urban living and considered detail.', overview: 'An illustrative portfolio concept representing an approach to residential planning. The name, status and imagery are placeholders and do not describe a verified completed project.', image: heroImage, images: [heroImage, interiorImage, residencesImage], amenities: 'Open spaces, Natural ventilation, Contemporary interiors', configurations: 'Configuration details to be announced', highlights: 'Urban outlook, Refined materiality, Functional layouts', advantages: 'Conceptually set within Pune, Maharashtra.', featured: false },
  ],
  services: [
    { id: 's1', title: 'Residential Development', description: 'Spaces shaped around daily life, with a considered balance of comfort, function and enduring design.' },
    { id: 's2', title: 'Commercial Development', description: 'Purposeful environments designed to support business, connection and future adaptability.' },
    { id: 's3', title: 'Property Development', description: 'A holistic approach to identifying potential and translating a vision into built space.' },
    { id: 's4', title: 'Project Planning', description: 'Careful early-stage thinking that brings location, utility and design into alignment.' },
    { id: 's5', title: 'Construction Coordination', description: 'A detail-minded approach to bringing the many parts of a development together.' },
    { id: 's6', title: 'Real Estate Consultation', description: 'A considered perspective on property opportunities and development possibilities.' },
  ],
  gallery: [
    { id: 'g1', title: 'A sense of arrival', category: 'Architecture', image: heroImage, featured: true },
    { id: 'g2', title: 'Living with the landscape', category: 'Projects', image: residencesImage, featured: true },
    { id: 'g3', title: 'Contemporary living', category: 'Interiors', image: interiorImage, featured: false },
    { id: 'g4', title: 'A new urban language', category: 'Architecture', image: urbanImage, featured: false },
    { id: 'g5', title: 'Material and form', category: 'Construction', image: heroImage, featured: false },
    { id: 'g6', title: 'Room to live', category: 'Lifestyle', image: interiorImage, featured: false },
  ],
  testimonials: [{ id: 't1', name: 'Sample Client', location: 'Pune', project: 'Demo project', feedback: 'A thoughtful approach to spaces and the way people experience them.', published: true }],
  enquiries: [],
  philosophy: { heading: 'Built Around\nBetter Living', descriptions: ['Choosing places with a sense of possibility and connection.', 'Creating spaces where form and everyday function feel naturally aligned.', 'Paying attention to the decisions that give a place lasting value.'], image: urbanImage },
  whyUs: { heading: 'Why Thoughtful\nDevelopment Matters', items: ['Strategic Location Selection', 'Design-Led Planning', 'Quality-Focused Execution', 'Functional Spaces', 'Contemporary Architecture', 'Customer-Centric Approach'], image: interiorImage },
  websiteSettings: { websiteName: 'NEETYA DEVELOPERS LLP', logoText: 'NEETYA', accent: '#A8895B', footerDescription: 'Thoughtfully planned spaces for the way we live, work and grow.', pageTitle: 'NEETYA DEVELOPERS LLP', businessName: 'NEETYA DEVELOPERS LLP', address: 'Flat No. 202, 2nd Floor, Gat No. 200, Utpal Classic, Bhukum, Mulshi, Pune, Maharashtra - 412115, India', phone: '', email: '', hours: '', instagram: '', facebook: '', linkedin: '' },
};
const SiteContext = createContext<{ data: SiteData; update: <K extends keyof SiteData>(key: K, value: SiteData[K]) => void; reset: () => void } | null>(null);
export function SiteProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(defaults);
  useEffect(() => { try { const saved = localStorage.getItem('neetya-demo-data'); if (saved) { const parsed = JSON.parse(saved); setData({ ...defaults, ...parsed }); } } catch { /* ignore invalid demo data */ } }, []);
  const update = <K extends keyof SiteData>(key: K, value: SiteData[K]) => { setData(current => { const next = { ...current, [key]: value }; localStorage.setItem('neetya-demo-data', JSON.stringify(next)); return next; }); };
  const reset = () => { localStorage.removeItem('neetya-demo-data'); setData(defaults); };
  return <SiteContext.Provider value={{ data, update, reset }}>{children}</SiteContext.Provider>;
}
export function useSite() { const context = useContext(SiteContext); if (!context) throw new Error('SiteProvider missing'); return context; }
export const demoLabel = 'Illustrative content — editable demo';
