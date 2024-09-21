import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import DashboardPage from './pages/DashboardPage';
import ChatPage from './pages/ChatPage';
import RootLayout from './layouts/rootLayout';
import DashBoardLayout from './layouts/DashBoardLayout';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './pages/NotFound';
import { ClerkProvider } from '@clerk/clerk-react';
import { dark } from '@clerk/themes'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />,
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />,
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider
    appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
      variables: {
        spacingUnit: '0.56rem'
      },
      baseTheme: dark,
      elements: {
        card: {
          maxHeight: '23rem',
        },
      },
    }}
    publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ClerkProvider>
);
