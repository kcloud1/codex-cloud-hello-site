export function onRequestGet() {
  return Response.json({
    ok: true,
    message: 'Hello from Cloudflare Edge',
    serverTime: new Date().toISOString()
  }, {
    headers: { 'Cache-Control': 'no-store' }
  });
}
