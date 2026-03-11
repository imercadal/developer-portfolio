Hi! I'm Irene Mercadal and this is my Developer Portfolio.

I'm a Junior Full Stack Developer, with experience building performance driven, responsive web apps and websites.



# Webhook signing secret (get it from https://resend.com/webhooks)
RESEND_WEBHOOK_SECRET="whsec_xxxxxxxxx"

# ===========================================
# Email Configuration
# ===========================================

# Your verified sending domain (e.g., notifications@yourdomain.com) ???
EMAIL_FROM="Irene <notifications@irenemercadal.dev>"

# Where contact form submissions should be sent
CONTACT_EMAIL="team@yourdomain.com"

# Audience ID for contacts/segments examples (get from https://resend.com/audiences)
RESEND_AUDIENCE_ID="xxxxxxxxx"

# Template ID for template examples (get from https://resend.com/templates)
RESEND_TEMPLATE_ID="xxxxxxxxx"

# Redirect URL for double opt-in confirmation
CONFIRM_REDIRECT_URL="https://example.com/confirmed"

# ===========================================
# Better Auth Configuration (optional)
# ===========================================

# Your app's base URL
BETTER_AUTH_URL="http://localhost:3000"

# Secret for signing tokens (generate with: openssl rand -base64 32)
BETTER_AUTH_SECRET="your-secret-key-here"

# Database URL (supports PostgreSQL, MySQL, SQLite)
# Examples:
# - SQLite: file:./dev.db
# - PostgreSQL: postgresql://user:password@localhost:5432/mydb
# - MySQL: mysql://user:password@localhost:3306/mydb
DATABASE_URL="file:./dev.db"