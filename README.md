# Authy

**Authy** is a comprehensive authentication solution built with Next.js, Auth.js, Prisma, PostgreSQL, and middleware configuration. It offers robust features like OAuth social logins, two-factor authentication, and email verification to ensure secure and seamless user experiences.

**Live Demo**: [Authy Live](authy-ruddy.vercel.app)

## Technologies Used
| Technology      | Description                                     |
| --------------- | ------------------------------------------------|
| Next.js         | A React framework for building web applications |
| Auth.js         | Authentication for Next.js                      |
| Middleware      | Configuration for routing                       |
| Shad CN UI      | UI toolkit for design                           |
| Resend Framework| Framework for sending emails                    |
| Prisma          | Next-generation ORM for database interactions   |

## Key Features
- 🔐 **Next-auth v5 (Auth.js)**: Integrated authentication.
- 🚀 **Next.js 14 with server actions**: Leverage the latest features of Next.js.
- 🔑 **Credentials Provider**: Custom user authentication.
- 🌐 **OAuth Provider**: Social login with Google & GitHub.
- 🔒 **Forgot Password Functionality**: Users can reset their passwords.
- ✉️ **Email Verification**: Verify user emails upon registration.
- 📱 **Two-Factor Verification (2FA)**: Enhanced security with 2FA.
- 🔓 **Login Component**: Opens in redirect or modal.
- 📝 **Register Component**: User registration form.
- 🤔 **Forgot Password Component**: Reset password form.
- ✅ **Verification Component**: Email verification form.
- ⚠️ **Error Component**: Display error messages.
- 🔍 **Exploring Next.js Middleware**: Implement advanced routing.
- 📈 **Extending & Exploring Next-auth Session**: Manage user sessions.
- 🔄 **Exploring Next-auth Callbacks**: Handle authentication events.
- 🖥️ **Example with Server Component**: Server-side implementation.
- 💻 **Example with Client Component**: Client-side implementation.

## Use Cases
### User Authentication
Users can sign up, log in, and manage their accounts securely using either email/password or social logins (Google & GitHub).

### Password Management
Users can reset their passwords via email verification, enhancing security and user experience.

### Two-Factor Authentication
Users can enable 2FA to add an extra layer of security to their accounts.

## Pros and Cons
### Pros
- **Security**: Robust authentication with 2FA and OAuth providers.
- **Flexibility**: Supports multiple authentication methods.
- **Scalability**: Built with Next.js, suitable for large applications.
- **User Experience**: Comprehensive components for user interactions and SEO optimized

### Cons
- **Complexity**: Initial setup and configuration can be time-consuming.
- **Learning Curve**: Requires knowledge of multiple technologies (Next.js, Auth.js, Middleware).
- **Maintenance**: Keeping up with updates in multiple frameworks can be challenging.

## Getting Started
### Installation
To get a local copy up and running, follow these simple steps:

```bash
git clone https://github.com/viral-siddhapura/authy.git
cd authy
npm install
npm run dev
```

```Configure the environment variables in a .env.local file:
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

