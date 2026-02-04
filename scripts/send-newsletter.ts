#!/usr/bin/env tsx

/**
 * Admin script to send newsletters manually
 * Usage: ADMIN_KEY=your-key npx tsx scripts/send-newsletter.ts "Subject" "HTML Content"
 */

const API_URL = process.env.VITE_NEWSLETTER_API_URL || "http://localhost:3001";
const ADMIN_KEY = process.env.ADMIN_KEY || "newsletter-secret-key-2024";

// Get arguments from command line
const [, , subject, content] = process.argv;

if (!subject || !content) {
  console.error("Usage: ADMIN_KEY=your-key npx tsx scripts/send-newsletter.ts \"Subject\" \"HTML Content\"");
  console.error("Example: ADMIN_KEY=newsletter-secret npx tsx scripts/send-newsletter.ts \"Hello World\" \"<h1>Hello</h1><p>This is a test.</p>\"");
  process.exit(1);
}

async function sendNewsletter() {
  try {
    console.log("Sending newsletter...");
    console.log(`Subject: ${subject}`);

    const response = await fetch(`${API_URL}/api/newsletter/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, content, adminKey: ADMIN_KEY }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data.error);
      process.exit(1);
    }

    console.log("✓ Newsletter trimis cu succes!");
    console.log(data.message);
  } catch (error) {
    console.error("Unexpected error:", error);
    process.exit(1);
  }
}

sendNewsletter();
