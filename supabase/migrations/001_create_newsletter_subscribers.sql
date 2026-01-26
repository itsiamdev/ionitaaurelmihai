-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT FALSE,
  confirm_token TEXT,
  unsubscribe_token TEXT UNIQUE
);

-- Create index on email for faster lookups
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Create index on confirmed for filtering
CREATE INDEX idx_newsletter_subscribers_confirmed ON newsletter_subscribers(confirmed);