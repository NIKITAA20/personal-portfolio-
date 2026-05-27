export const PAGE_ROUTES = [
  { label: 'Resume', path: '/resume', key: 'resume' },
  { label: 'Education', path: '/education-search', key: 'education' },
  { label: 'Experience', path: '/experience-search', key: 'experience' },
  { label: 'Skills', path: '/skills-search', key: 'skills' },
  { label: 'Certifications', path: '/certifications', key: 'certifications' },
  { label: 'Contact', path: '/contact', key: 'contact' },
];

export function getRouteFromSpeech(text) {
  const q = text.toLowerCase().trim();
  if (!q) return null;
  if (q.includes('education') || q.includes('college') || q.includes('degree')) return '/education-search';
  if (q.includes('experience') || q.includes('intern') || q.includes('work')) return '/experience-search';
  if (q.includes('skill') || q.includes('tech stack')) return '/skills-search';
  if (q.includes('resume') || q.includes('cv')) return '/resume';
  if (q.includes('certif')) return '/certifications';
  if (q.includes('contact') || q.includes('hire') || q.includes('email')) return '/contact';
  if (q.includes('home') || q.includes('search')) return '/';
  return null;
}

export function getRouteFromQuery(text) {
  return getRouteFromSpeech(text);
}
