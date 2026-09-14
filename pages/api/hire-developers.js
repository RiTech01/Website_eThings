const fields = ['name', 'email', 'company', 'companySize', 'hiringNeed', 'engineersNeeded'];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed.' });
  const lead = req.body || {};
  const missing = fields.filter((field) => !String(lead[field] || '').trim());
  if (missing.length) return res.status(400).json({ message: 'Please complete all required fields.', fields: missing });
  if (!/^\S+@\S+\.\S+$/.test(lead.email)) return res.status(400).json({ message: 'Enter a valid work email address.', fields: ['email'] });
  const payload = { ...lead, landingPage: '/hire-developers/', timestamp: new Date().toISOString() };
  // Wire this server-only boundary to the existing Ething email/CRM service before launch.
  // Never expose email credentials in browser code.
  if (process.env.LEAD_DELIVERY_WEBHOOK_URL) {
    const result = await fetch(process.env.LEAD_DELIVERY_WEBHOOK_URL, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ to: process.env.LEAD_EMAIL_TO, lead: payload }) });
    if (!result.ok) return res.status(502).json({ message: 'We could not send your request. Please try again.' });
  } else if (process.env.NODE_ENV === 'production') {
    return res.status(503).json({ message: 'Lead delivery is not configured yet.' });
  }
  return res.status(200).json({ ok: true });
}

