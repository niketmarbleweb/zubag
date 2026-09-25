import { useEffect, useState } from 'react';
import { ArrowUp, FileText, Mail, MessageCircle, Phone } from 'lucide-react';
import { company, whatsappLink } from '../../data/siteData';

const items = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: whatsappLink('Hello Niket Marble & Interior, I would like to discuss a project.'),
    icon: MessageCircle,
  },
  { id: 'call', label: 'Call', href: company.phoneHref, icon: Phone },
  { id: 'email', label: 'Email', href: company.emailHref, icon: Mail },
  { id: 'quote', label: 'Get quote', href: '/contact?quote=1', icon: FileText },
];

export default function FloatingSidebar() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <aside
      className="float-stack fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 sm:right-5"
      aria-label="Quick contact"
    >
      {items.map(({ id, label, href, icon: Icon }) => (
        <a
          key={id}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          className="group flex h-11 w-11 items-center justify-center border border-gold/50 bg-paper text-ink shadow-sm hover:bg-gold dark:bg-[#161412] dark:text-mist"
          aria-label={label}
          title={label}
        >
          <Icon size={16} />
          <span className="sr-only">{label}</span>
        </a>
      ))}
      {showTop && (
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-gold/50 bg-ink text-gold hover:bg-gold hover:text-ink"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={16} />
        </button>
      )}
    </aside>
  );
}
