# MaxMath – Μαθηματικά Πανελληνίων με AI

Η πρώτη AI πλατφόρμα εξάσκησης για τις Πανελλήνιες. Χωρίς θεωρία – μόνο στοχευμένη πράξη με άμεσο feedback.

**URL**: https://maxmath.gr

## Development

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Deployment

This project is deployed on Vercel with automatic deployment from the `main` branch.

## Technologies Used

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **ConvertKit** for email collection

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── lib/              # Utility functions
└── main.tsx          # Application entry point
```

## Features

- 🇬🇷 **Greek Language Support** - Fully localized for Greek students
- 🤖 **AI-Powered Practice** - Intelligent problem generation and feedback
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ✨ **Modern UI** - Clean, animated interface with Framer Motion
- 📧 **Waitlist Integration** - ConvertKit-powered email collection

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

All rights reserved - MaxMath Platform
