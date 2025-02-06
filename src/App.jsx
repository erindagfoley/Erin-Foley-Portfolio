// Bringing in the required import from 'react-router-dom'. Outlet is a placeholder for each route (/whatever)
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import "./App.css"

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL. The Nav is the same throughout all of our routes
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;