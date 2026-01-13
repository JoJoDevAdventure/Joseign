// API endpoint for handling demo requests from the pricing component
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, websiteLink, timestamp } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Prepare webhook payload
    const webhookPayload = {
      email,
      websiteLink: websiteLink || null,
      timestamp: timestamp || new Date().toISOString(),
      source: 'joseign.com/pricing',
      type: 'demo_request'
    };

    // Forward to admin.joseign.com webhook endpoint
    const adminWebhookUrl = process.env.NEXT_PUBLIC_ADMIN_WEBHOOK_URL || 'https://admin.joseign.com/api/webhooks/demo-requests';

    const webhookResponse = await fetch(adminWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-webhook-secret': process.env.WEBHOOK_SECRET || ''
      },
      body: JSON.stringify(webhookPayload)
    });

    if (!webhookResponse.ok) {
      console.error('Failed to send to admin webhook:', await webhookResponse.text());
      // Still return success to user to avoid exposing internal errors
    }

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Demo request received successfully'
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process demo request'
    });
  }
}
