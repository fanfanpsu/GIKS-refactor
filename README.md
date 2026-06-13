# GIKS

**GIKS** (General Inquiry Knowledge System) is a web-based platform for designing experiments, managing participants, building knowledge graphs, and organizing research articles. It provides a structured workflow for researchers and educators to create experiments, collect participant data, and visualize relationships between concepts.

## Features

- **User Authentication** -- Register and log in via Firebase Authentication.
- **Experiment Builder** -- Create and manage experiments with configurable parameters and participant groups.
- **Participant Workspace** -- Allow participants to join experiments and submit their contributions.
- **Knowledge Graph Builder** -- Visualize and edit concept maps and knowledge graphs using Cytoscape.
- **Matrix Builder** -- Build and edit structured data matrices for experiment inputs.
- **Article Builder** -- Compose, preview, and publish research articles with templated formats.
- **Management Dashboard** -- View, filter, and manage all experiments in one place.
- **Demo Mode** -- Explore the platform features through a guided demonstration.

## Tech Stack

| Category          | Technology                                              |
| ----------------- | ------------------------------------------------------- |
| Frontend          | React 16.8, React Router 5, Reactstrap (Bootstrap 4)    |
| State Management  | Redux 4, Redux Thunk                                     |
| Backend / Auth    | Firebase (Firebase v8)                                  |
| Graph             | Cytoscape 3.5                                           |
| Data Tables       | React Table 6                                           |
| Styling           | Bootstrap 4, CSS Modules                                |
| HTTP Client       | Axios                                                    |
| Build Tool        | Webpack 3 (via react-scripts 3.3)                        |
| Testing           | Jest 20                                                 |

## Getting Started

### Prerequisites

- Node.js (v8 or later)
- npm (v5 or later)

### Setup

1. **Install dependencies:**

   ```bash
   cd GIKS-refactor
   npm install
   ```

2. **Configure environment variables.**

   Create a `.env` file in the project root with your Firebase configuration:

   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   ```

   An existing `.env` file is provided for reference.

3. **Start the development server:**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

### Available Scripts

| Command            | Description                                         |
| ------------------ | --------------------------------------------------- |
| `npm start`        | Start the development server on localhost:3000      |
| `npm run build`    | Create an optimized production build in `build/`    |
| `npm test`         | Run the Jest test suite in watch mode               |

## Project Structure

```
src/
  index.js                          # Application entry point, Redux store setup
  App.js                            # Root component with route definitions
  firebase.js                       # Firebase initialization
  axios-address.js                  # Axios instance with Firebase base URL
  registerServiceWorker.js          # Offline service worker registration

  router/
    routers.js                      # Route configuration

  hoc/                              # Higher-Order Components
    Layout/                         # Page layout wrapper (header, content, footer)
    asyncComponent/                 # Lazy-loaded component wrapper
    withErrorHandler/               # Global error boundary HOC

  containers/                       # Page-level / container components
    Auth/                           # Login, Register, Logout pages
    Home/                           # Landing page
    ManagementBuilder/              # Experiment management dashboard
    Experiment/                     # Experiment creation workflow
    ParticipantBuilder/             # Participant-facing experiment workspace
    ArticleBuilder/                 # Article composition and preview
    GraphBuilder/                   # Interactive knowledge graph editor
    MatrixBuilder/                  # Matrix / data table builder
    BurgerBuilder/                  # Experiment configuration builder
    Checkout/                       # Experiment checkout / submission flow
    Orders/                         # Submitted experiment orders
    Node/                           # Graph node editor
    Demo/                           # Guided walkthrough demo

  components/                       # Reusable presentational components
    Article/                        # Article forms, templates, preview
    Auth/                           # Authentication form styles
    Burger/                         # Experiment configuration controls
    Expcard/                        # Experiment summary cards
    Experiment/                     # Experiment creation form
    Graph/                          # Cytoscape graph rendering, controls, nodes
    Logo/                           # App logo
    Matrix/                         # Matrix table, cells, headers
    Navigation/                     # Navbar, toolbar, sidebar, nav items
    Order/                          # Order display and checkout summary
    Participant/                    # Participant auth and workspace components
    UI/                             # Shared UI primitives (Button, Modal, etc.)

  store/                            # Redux store
    actions/                        # Action creators and async dispatchers
    reducers/                       # Reducers for each domain slice

  shared/                           # Shared utilities and algorithms

  assets/                           # Static assets (images, mock data)
    rawdata/                        # Mock data for local development
```

## Architecture Notes

- **State management** uses Redux with Thunk middleware for async operations. Each domain (burger, order, auth, management, matrix, graph, experiment, article) has its own reducer and action dispatcher.
- **Routing** uses React Router v4/v5 with route-based code splitting via the `asyncComponent` HOC.
- **Styling** combines Bootstrap 4 (via `reactstrap`), component-level CSS, and inline styles.
- **Data flow**: The app connects to Firebase Realtime Database for authentication and data persistence. The `axios-address.js` module configures Axios to use the Firebase Database REST API.
- **The graph builder** uses Cytoscape.js for interactive graph visualization and editing, with custom controls for node management.

## Environment Variables

| Variable                                  | Description                          |
| ----------------------------------------- | ------------------------------------ |
| `REACT_APP_FIREBASE_API_KEY`              | Firebase API key                     |
| `REACT_APP_FIREBASE_AUTH_DOMAIN`          | Firebase Auth domain                 |
| `REACT_APP_FIREBASE_DATABASE_URL`         | Firebase Realtime Database URL       |
| `REACT_APP_FIREBASE_PROJECT_ID`           | Firebase project ID                  |
| `REACT_APP_FIREBASE_STORAGE_BUCKET`       | Firebase Storage bucket              |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`  | Firebase Cloud Messaging sender ID   |

## License

This project is private and not yet licensed for redistribution.
