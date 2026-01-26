#!/usr/bin/env tsx

/**
 * Admin script to send newsletters manually
 * Usage: npx tsx scripts/send-newsletter.ts "Subject" "HTML Content"
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function sendNewsletter(subject: string, content: string) {
  try {
    console.log('Sending newsletter...');

    const { data, error } = await supabase.functions.invoke('send-newsletter', {
      body: { subject, content },
    });

    if (error) {
      console.error('Error sending newsletter:', error);
      process.exit(1);
    }

    console.log('Newsletter sent successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    process.exit(1);
  }
}

// Get arguments from command line
const [,, subject, content] = process.argv;

if (!subject || !content) {
  console.error('Usage: npx tsx scripts/send-newsletter.ts "Subject" "HTML Content"');
  console.error('Example: npx tsx scripts/send-newsletter.ts "Hello World" "<h1>Hello</h1><p>This is a test newsletter.</p>"');
  process.exit(1);
}

sendNewsletter(subject, content);