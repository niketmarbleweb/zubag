import { useState } from 'react';
import { company, whatsappLink } from '../../data/siteData';
import Button from '../ui/Button';

const initial = {
  name: '',
  email: '',
  phone: '',
  space: 'interior',
  message: '',
};

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initial);
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Quote request from ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSpace: ${form.space}\n${form.message}`;
    window.open(whatsappLink(text), '_blank');
    setDone(true);
  };

  if (done) {
    return (
      <p className="border border-gold/40 bg-mist p-6 text-sm dark:bg-white/5">
        Thank you. WhatsApp should open with your enquiry. If it did not, write to {company.email}.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
      <div className="sm:col-span-1">
        <label className="text-[11px] uppercase tracking-[0.18em]" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={onChange}
          className="mt-1 w-full border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
        />
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.18em]" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onChange}
          className="mt-1 w-full border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
        />
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.18em]" htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          required
          value={form.phone}
          onChange={onChange}
          className="mt-1 w-full border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
        />
      </div>
      <div>
        <label className="text-[11px] uppercase tracking-[0.18em]" htmlFor="space">
          Space
        </label>
        <select
          id="space"
          name="space"
          value={form.space}
          onChange={onChange}
          className="mt-1 w-full border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
        >
          <option value="interior">Interior</option>
          <option value="exterior">Exterior</option>
          <option value="both">Both</option>
        </select>
      </div>
      <div className={compact ? '' : 'sm:col-span-2'}>
        <label className="text-[11px] uppercase tracking-[0.18em]" htmlFor="message">
          Project notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={onChange}
          className="mt-1 w-full border border-stone bg-white px-3 py-2 text-sm outline-none focus:border-gold dark:border-white/15 dark:bg-white/5"
        />
      </div>
      <div className={compact ? '' : 'sm:col-span-2'}>
        <Button type="submit">Send via WhatsApp</Button>
      </div>
    </form>
  );
}
