# Email Configuration for Contact Form

To enable the contact form on your portfolio website, you need to configure EmailJS. Here's how to set it up:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Log in to your dashboard

## Step 2: Connect an Email Service

1. In your EmailJS dashboard, click on "Email Services"
2. Choose an email service provider (Gmail is recommended for personal use)
3. Follow the instructions to connect your email account
4. Verify your email address

## Step 3: Create an Email Template

1. Click on "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use the following template structure:

```
Subject: Portfolio Contact - {{subject}}

From: {{user_name}} ({{user_email}})

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save your template and note the template ID

## Step 4: Update Your Portfolio

1. Open `src/components/Contact.js` in your project
2. Replace the placeholder values in the `handleSubmit` function:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key (found in EmailJS dashboard under "Account" > "Public Key")

Example:
```javascript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

## Step 5: Test the Contact Form

1. Make sure your email service is properly connected
2. Submit a test message through the contact form
3. Check your email for the received message

## Alternative: Direct Email

If you prefer not to use EmailJS, you can simply contact me directly at:
- Email: meh67719@gmail.com
- Phone: +880 1747737704