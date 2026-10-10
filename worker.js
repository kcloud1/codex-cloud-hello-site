export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/hello') {
      if (request.method !== 'GET') {
        return new Response('Method not allowed', {
          status: 405,
          headers: { Allow: 'GET', 'Cache-Control': 'no-store' }
        });
      }
      return Response.json({
        ok: true,
        message: 'Hello from Cloudflare Edge',
        serverTime: new Date().toISOString()
      }, {
        headers: { 'Cache-Control': 'no-store' }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
