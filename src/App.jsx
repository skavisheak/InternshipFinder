import { Cards } from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-100">
      <Navbar />
      <main className="flex-1">
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
