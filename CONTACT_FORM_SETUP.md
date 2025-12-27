# Contact Form Setup Instructions

## Get Your Web3Forms Access Key

Your contact form is ready to send emails, but you need to add your Web3Forms access key first.

### Steps:

1. **Visit Web3Forms**
   - Go to https://web3forms.com
   - Click "Create your Form"

2. **Enter Your Email**
   - Enter: `habeebtee83@gmail.com`
   - Submit the form

3. **Verify Your Email**
   - Check your inbox for verification email from Web3Forms
   - Click the verification link

4. **Get Your Access Key**
   - You'll receive your access key (a long string like: `abc123-def456-ghi789`)
   - Copy this key

5. **Add Key to Your Website**
   - Open `index.html`
   - Find line 285 (in the contact form section)
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual access key:
   
   ```html
   <input type="hidden" name="access_key" value="abc123-def456-ghi789">
   ```

6. **Save and Deploy**
   - Save the file
   - Commit and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Add Web3Forms access key"
   git push origin main
   ```

7. **Test Your Form**
   - Visit your live website
   - Fill out the contact form
   - Click "Send Message"
   - You should see a success message
   - Check your email inbox for the message

## What Happens When Someone Submits the Form?

1. User fills out: Name, Email, Message
2. Clicks "Send Message"
3. Button shows "Sending..." (disabled during submission)
4. Form data sent to Web3Forms API
5. Web3Forms forwards email to: `habeebtee83@gmail.com`
6. Success message appears: "✓ Message sent successfully! I'll get back to you soon."
7. Form resets automatically
8. Message disappears after 5 seconds

## Email Format You'll Receive

**Subject:** New Contact from Portfolio Website  
**From:** Portfolio Contact Form  
**Content:**
- Name: [User's name]
- Email: [User's email]
- Message: [User's message]

## Features Included

✅ **Spam Protection** - Honeypot field prevents bot submissions  
✅ **Form Validation** - All fields required, email format validated  
✅ **Loading State** - Button shows "Sending..." during submission  
✅ **Success/Error Messages** - Clear feedback to users  
✅ **Auto-reset** - Form clears after successful submission  
✅ **Mobile-friendly** - Works perfectly on all devices  
✅ **No backend needed** - Works with static GitHub Pages hosting

## Troubleshooting

**Form shows error message:**
- Check that you added the correct access key
- Verify your email is verified with Web3Forms
- Check browser console for errors

**Not receiving emails:**
- Check spam folder
- Verify email address in Web3Forms dashboard
- Test with a simple message first

**Need help?**
- Web3Forms Documentation: https://docs.web3forms.com
- Support: https://web3forms.com/support
