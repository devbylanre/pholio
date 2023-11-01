import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

// layout components
import { RootLayout } from './layouts/RootLayout';

// pages component
const LazyHome = lazy(() =>
  import('./pages/index/Index').then((module) => {
    return { default: module.Index };
  })
);
const LazyAbout = lazy(() =>
  import('./pages/about/About').then((module) => {
    return { default: module.About };
  })
);
const LazyResume = lazy(() =>
  import('./pages/resume/Resume').then((module) => {
    return { default: module.Resume };
  })
);
const LazyContact = lazy(() =>
  import('./pages/contact/Contact').then((module) => {
    return { default: module.Contact };
  })
);

const routes = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LazyHome />,
      },
      {
        path: 'about',
        element: <LazyAbout />,
      },
      {
        path: 'resume',
        element: <LazyResume />,
      },
      {
        path: 'contact',
        element: <LazyContact />,
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
