# AI Assistant Instructions

This is a React + TypeScript project using Vite as the build tool. Here's what you need to know to be productive:

## Project Architecture

### Core Technologies
- React 19 with TypeScript
- Vite 7 for build tooling
- React Router 7 for client-side routing
- ESLint for code quality

### Key Components
- `src/components/Routes.tsx`: Central routing configuration using hash-based routing
- `src/components/{Home,About}.tsx`: Page components
- `src/App.tsx`: Root application component

## Development Workflow

### Common Commands
```bash
# Start dev server with HMR (accessible externally)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Code Conventions

1. **Routing**
   - Hash-based routing using `createHashRouter` from react-router
   - Route components defined in `src/components/Routes.tsx`
   - Each page component is in its own file under `src/components/`

2. **TypeScript**
   - Strict mode enabled
   - Return types explicitly defined on components, e.g.:
     ```tsx
     function MyComponent(): React.JSX.Element {
       return <div>...</div>;
     }
     ```

3. **Project Structure**
   - Components live in `src/components/`
   - Assets in `src/assets/`
   - Styles co-located with components
   - Global styles in `src/index.css` and `src/App.css`

## Common Tasks

- **Adding a New Route**: Add route configuration in `src/components/Routes.tsx`
- **Building for Production**: Run `npm run build`, outputs to `dist/`
- **Styling**: Use CSS modules or component-scoped CSS files

## Type Checking and Linting

- Two TSConfig files:
  - `tsconfig.json`: Base configuration
  - `tsconfig.node.json`: Node.js specific settings
  - `tsconfig.app.json`: Application specific settings

ESLint is configured with TypeScript-aware rules. When adding new rules, update `eslint.config.js`.