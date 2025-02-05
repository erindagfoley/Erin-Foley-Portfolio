import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL. Children is an array of objects. Home is set to true in line 22. Any other routes need to be /<route>. Lines 16-19 gives error if there is no path that meets the different ones. These are children of app.jsx. The element to show up in line 18 is App.jsx. We will see other components rendered inside of App, like about, blog, etc
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);
//This renders a router provider functional component. There is a prop called router, and we are passing in line 15. This makes it so that you can have different /routes. This a prop on outlet on App.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
