import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout components
import { RootLayout } from './layouts/RootLayout';

// pages component
import { Index } from './pages/index/Index';
import { About } from './pages/about/About';
import { Resume } from './pages/resume/Resume';
import { Contact } from './pages/contact/Contact';

const routes = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className='bg-zinc-50'>
      <div className='font-primary w-full md:w-[768px] m-auto'>
        <RouterProvider router={routes} />
      </div>
    </div>
  );
}
