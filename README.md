# SVL Dashboard

A modern React-based public marketing website for Street Visibility Limited, showcasing innovative vehicle-based advertising solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, Material-UI v7, and React Router v7
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Code splitting, lazy loading, and efficient animations
- **Docker Ready**: Containerized deployment with Nginx
- **Accessible**: ARIA labels, semantic HTML, and keyboard navigation support

## 📋 Prerequisites

- **Node.js**: v18 or higher (LTS recommended)
- **npm**: v9 or higher (comes with Node.js)
- **Docker** (optional, for containerized deployment)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SVl_Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Development Features

- **Hot Module Replacement (HMR)**: Instant updates on file changes
- **Fast Refresh**: React components update without losing state
- **Source Maps**: Easy debugging in browser DevTools

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t svl-dashboard .
```

### Run Container

```bash
docker run -p 80:80 svl-dashboard
```

The application will be available at `http://localhost`.

### Docker Compose (if using with API)

If deploying alongside the API service, use Docker Compose:

```bash
docker-compose up -d
```

## 📁 Project Structure

```
SVl_Dashboard/
├── src/
│   ├── assets/              # Images and static assets
│   ├── public/              # Public-facing components
│   │   ├── home/           # Home page components
│   │   └── pages/          # Individual page components
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   ├── theme.js            # MUI theme configuration
│   └── index.css           # Global styles
├── nginx/                  # Nginx configuration
├── Dockerfile              # Docker build configuration
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Styling

The project uses Material-UI (MUI) for component styling with a custom theme defined in `src/theme.js`. Brand colors are:

- **Primary Teal**: `#1D6469` (logoTeal)
- **Accent Green**: `#26B060` (logoGreen)
- **Accent Lime**: `#85C341` (logoLime)
- **Mustard Yellow**: `#D4AF37` (navigation & login)

## 🧪 Code Quality

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

### Code Formatting

The project uses ESLint for code quality. Consider adding Prettier for consistent formatting:

```bash
npm install --save-dev prettier
```

## 📦 Dependencies

### Core Dependencies

- **React** (^19.2.0): UI library
- **@mui/material** (^7.3.7): Component library
- **react-router-dom** (^7.13.0): Routing
- **@emotion/react** & **@emotion/styled**: CSS-in-JS styling

### Development Dependencies

- **Vite** (^7.3.1): Build tool and dev server
- **ESLint** (^9.39.1): Code linting
- **@vitejs/plugin-react**: React plugin for Vite

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
VITE_API_URL=http://localhost:3003/api
VITE_APP_NAME=Street Visibility Limited
```

Access in code via `import.meta.env.VITE_API_URL`.

### Vite Configuration

Vite configuration is in `vite.config.js`. Customize build options, plugins, and server settings there.

### Nginx Configuration

Nginx configuration for production is in `nginx/default.conf`. It includes:
- SPA routing support (all routes serve `index.html`)
- API proxy configuration
- Error page handling

## 🚢 Deployment

### Static Hosting (Vercel, Netlify, etc.)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Configure redirects to serve `index.html` for all routes (SPA routing)

### Docker Deployment

1. Build the Docker image
2. Push to container registry (Docker Hub, AWS ECR, etc.)
3. Deploy to your container platform (AWS ECS, Kubernetes, etc.)

### Traditional Server

1. Build: `npm run build`
2. Copy `dist/` contents to your web server (Apache, Nginx, etc.)
3. Configure server to serve `index.html` for all routes

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically use the next available port. Check the terminal output for the actual port.

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version: `node --version` (should be v18+)

### Docker Build Issues

- Ensure Docker is running
- Check Dockerfile syntax
- Verify all files are copied correctly

## 📝 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Test thoroughly
5. Submit a pull request

## 📄 License

[Add your license information here]

## 👥 Team

Street Visibility Limited

## 🔗 Links

- [Production Site](https://streetvisibility.com)
- [API Documentation](https://api.streetvisibility.com/docs)

---

**Built with ❤️ using React and Material-UI**
