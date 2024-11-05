 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch ki jagah Routes import karo
 
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/ContactUs'; // Yeh ensure karo ki file ka path sahi hai
import Navigation from './Navigation'; // Yeh navigation component hai jahan links hain

function App() {
    return (
        <Router>
            <Navigation />
            <Routes> {/* Route components ko wrap karne ke liye Routes use karo */}
                <Route path="/" element={<Home />} /> {/* element prop ke saath component ko render karo */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
            </Routes>
        </Router>
    );
}

export default App;
