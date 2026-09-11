import { Link } from '@tanstack/react-router';

const variants = {
  gold:
    'bg-gradient-to-r from-gold-deep via-gold to-gold-light text-ink hover:brightness-110',
  outline:
    'border border-gold/70 text-ink dark:text-mist hover:bg-gold/10',
  ghost: 'text-ink dark:text-mist hover:text-gold-deep',
};

export default function Button({
  to,
  href,
  type = 'button',
  variant = 'gold',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.22em] transition ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
