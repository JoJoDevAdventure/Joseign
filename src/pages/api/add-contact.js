// src/pages/api/add-contact.js
// Adds or updates a contact in Mailchimp (Newsletter tag)
// Accepts a POST JSON body: { email: "user@example.com" }


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body || {};
  if (!email) {
    return res.status(400).json({ error: 'email is required' });
  }

  const {
    MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_LIST_ID,
  } = process.env;


  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
    return res
      .status(500)
      .json({ error: 'Mailchimp environment variables missing.' });
  }

  const authHeader = `Basic ${Buffer.from(
    `anystring:${MAILCHIMP_API_KEY}`
  ).toString('base64')}`;

  const membersURL = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

  const memberPayload = {
    email_address: email,
    status: 'subscribed',
    tags: ['Newsletter'],
  };


  try {
    const mcRes = await fetch(membersURL, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberPayload),
    });


    // Ignore “Member Exists” (400) so the route is idempotent
    if (!mcRes.ok && mcRes.status !== 400) {
      const details = await mcRes.text();
      return res.status(mcRes.status).json({ error: 'Failed to add contact', details });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('add-contact route error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}