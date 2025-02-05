// Bringing in the required import from 'react-router-dom'. Outlet is a placeholder for each route (/whatever)
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL. The Nav is the same throughout all of our routes
  return (
    <>
      <Nav />
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;