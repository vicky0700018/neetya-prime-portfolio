import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { SiteProvider, useSite } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
const links = [{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }, { to: '/projects', label: 'Projects' }, { to: '/services', label: 'Services' }, { to: '/gallery', label: 'Gallery' }, { to: '/contact', label: 'Contact' }] as const;
export function AppProvider({ children }: { children: ReactNode }) { return <SiteProvider><SiteFrame>{children}</SiteFrame></SiteProvider>; }
function SiteFrame({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: s => s.location.pathname });
  const admin = path.startsWith('/admin');
  return admin ? <>{children}</> : <><Header /><main>{children}</main><Footer /></>;
}
function Brand({ light = false }: { light?: boolean }) { const { data } = useSite(); return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="NEETYA DEVELOPERS LLP home"><span>{data.websiteSettings.logoText}</span><small>DEVELOPERS LLP</small></Link>; }
function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); fn(); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  useEffect(() => setOpen(false), [path]);
  const overHero = (path === '/' || path.startsWith('/projects/')) && !scrolled && !open;
  return <header className={`site-header ${scrolled || open || !overHero ? 'site-header-solid' : 'site-header-transparent'} ${scrolled ? 'site-header-compact' : ''}`}><div className="header-inner"><Brand light={overHero} /><nav className="desktop-nav" aria-label="Main navigation">{links.map(l => <Link key={l.to} to={l.to} activeProps={{ className: 'nav-active' }} activeOptions={{ exact: true }}>{l.label}</Link>)}</nav><Button asChild variant="gold" className="header-enquire"><Link to="/contact">Enquire Now <span aria-hidden>↗</span></Link></Button><Button variant="icon" className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span className="menu-glyph">{open ? '×' : '☰'}</span></Button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(l => <Link key={l.to} to={l.to}>{l.label}<span>↗</span></Link>)}<Link to="/contact">Enquire Now <span>↗</span></Link></nav>}</header>;
}
function Footer() { const { data } = useSite(); const s = data.websiteSettings; return <footer className="footer"><div className="wrap footer-grid"><div><Brand light /><p>{s.footerDescription}</p></div><div><h4>Explore</h4>{links.slice(0, 5).map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}</div><div><h4>Contact</h4><p>Bhukum, Mulshi<br />Pune, Maharashtra</p><p>{s.phone || 'Phone available on request'}<br />{s.email || 'Email available on request'}</p></div><div><h4>Connect</h4>{(['instagram', 'facebook', 'linkedin'] as const).map(k => s[k] ? <a key={k} href={s[k]} target="_blank" rel="noopener noreferrer">{k[0].toUpperCase()+k.slice(1)} ↗</a> : <span key={k} className="footer-unavailable">{k[0].toUpperCase()+k.slice(1)}</span>)}</div></div><div className="wrap footer-bottom"><span>© 2026 NEETYA DEVELOPERS LLP. All Rights Reserved.</span><Link to="/admin/login">Admin Login</Link></div><div className="footer-credit">Designed and Development by <a href="https://sosynch.com" target="_blank" rel="noopener noreferrer">SOSynch Ai Tech</a></div></footer>; }
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="page-intro"><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1 className="display-title preserve-lines">{title}</h1>{description && <p>{description}</p>}</div></div>; }
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2 className="section-title preserve-lines">{title}</h2>{description && <p>{description}</p>}</div>; }
export function ArrowLink({ to, children }: { to: string; children: ReactNode }) { return <Link to={to} className="arrow-link">{children}<span aria-hidden>↗</span></Link>; }
