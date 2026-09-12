// Canonicalise public GET/HEAD requests only. Leave account/auth/API origins intact.
export default function canonical(request, context) {
  const url = new URL(request.url);
  if (!['GET', 'HEAD'].includes(request.method) ||
      !['shinobiseo.com', 'www.shinobiseo.com', 'shinobiseo.netlify.app'].includes(url.hostname) ||
      /^\/(api|auth|__grok|login|studio|work)(\/|$)/.test(url.pathname)) return context.next();
  const path = url.pathname.replace(/\/+$/, '') || '/';
  if (url.origin === 'https://shinobiseo.com' && url.pathname === path) return context.next();
  return new Response(null, { status: 301, headers: { Location: `https://shinobiseo.com${path}${url.search}` } });
}
