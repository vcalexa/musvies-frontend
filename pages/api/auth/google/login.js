import { google } from 'googleapis';

// Initialize OAuth2 client with your Google credentials
const client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:3000' // Your redirect URI
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { authorizationCode } = req.body;

    if (!authorizationCode) {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    try {
      const { tokens } = await client.getToken(authorizationCode);
      // Optionally: Save tokens and/or user information to your database

      res.status(200).json(tokens);
    } catch (error) {
      console.error('Error exchanging authorization code for tokens:', error);
      res.status(500).json({ error: 'Failed to exchange code for tokens' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
