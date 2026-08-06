export const RESUME_DRIVE_URL =
  'https://drive.google.com/file/d/1Q7XbYl_jkwlArcu7NJLV8CyDy6j5bBxD/view';

export const PAGE_ROUTES = [
  { label: 'Resume', path: RESUME_DRIVE_URL, key: 'resume', external: true },
  { label: 'Education', path: '/education-search', key: 'education' },
  { label: 'Experience', path: '/experience-search', key: 'experience' },
  { label: 'Projects', path: '/projects-search', key: 'projects' },
  { label: 'Skills', path: '/skills-search', key: 'skills' },
  { label: 'Certifications', path: '/certifications', key: 'certifications' },
  { label: 'Contact', path: '/contact', key: 'contact' },
];

export function openResume() {
  window.open(RESUME_DRIVE_URL, '_blank', 'noopener,noreferrer');
}

/** Navigate in-app, or open external URLs (e.g. Resume Drive link). */
export function goToRoute(path, navigate) {
  if (!path) return;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    window.open(path, '_blank', 'noopener,noreferrer');
    return;
  }
  navigate(path);
}

export function getRouteFromSpeech(text) {
  const q = text.toLowerCase().trim();
  if (!q) return null;
  if (q.includes('education') || q.includes('college') || q.includes('degree')) return '/education-search';
  if (q.includes('experience') || q.includes('intern') || q.includes('work')) return '/experience-search';
  if (q.includes('project')) return '/projects-search';
  if (q.includes('skill') || q.includes('tech stack')) return '/skills-search';
  if (q.includes('resume') || q.includes('cv')) return RESUME_DRIVE_URL;
  if (q.includes('certif')) return '/certifications';
  if (q.includes('contact') || q.includes('hire') || q.includes('email')) return '/contact';
  if (q.includes('home') || q.includes('search')) return '/';
  return null;
}

export function getRouteFromQuery(text) {
  return getRouteFromSpeech(text);
}
