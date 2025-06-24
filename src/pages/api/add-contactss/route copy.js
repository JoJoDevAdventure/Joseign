// src/api/add-contact/route.js
// Adds or updates a contact in Mailchimp and (optionally) triggers a Journey e‑mail.
// POST body → { "email": "user@example.com", "website": "https://site.com" }
//
// Required env vars
// ────────────────────────────────────────────────────────────────────────────
// MAILCHIMP_API_KEY         – full key (e.g. "abcd1234-us21")
// MAILCHIMP_SERVER_PREFIX   – the "us21" bit (or extract it yourself)
// MAILCHIMP_LIST_ID         – Audience ID
//
// This route uses the Node runtime so Buffer is available.

export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

function authHeader(apiKey) {
  // Mailchimp uses HTTP Basic auth: any username, API key as password
  const token = Buffer.from(`anystring:${apiKey}`).toString('base64');
  return `Basic ${token}`;
}

export async function POST(request) {
  try {
    const { email, website } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'email is required' }, { status: 400 });
    }

    const {
      MAILCHIMP_API_KEY,
      MAILCHIMP_SERVER_PREFIX,
      MAILCHIMP_LIST_ID,
    } = process.env;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
      return NextResponse.json(
        { error: 'Mailchimp environment variables missing.' },
        { status: 500 }
      );
    }

    /* -------------------------------------------------------------------- */
    /* Add (or update) the contact                                          */
    /* -------------------------------------------------------------------- */
    const membersURL = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const memberPayload = {
      email_address: email,
      status: 'subscribed', // use "pending" if you rely on double‑opt‑in
      merge_fields: { WEBSITE: website ?? '' },
      tags: ['Website‑Audit‑Signup'],
    };

    const addRes = await fetch(membersURL, {
      method: 'POST',
      headers: {
        Authorization: authHeader(MAILCHIMP_API_KEY),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberPayload),
    });

    // Ignore “Member Exists” (400) so the route is idempotent
    if (!addRes.ok && addRes.status !== 400) {
      const details = await addRes.text();
      return NextResponse.json(
        { error: 'Failed to add contact', details },
        { status: addRes.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('add-contact route error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}