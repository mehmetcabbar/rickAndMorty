import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <>
      <div className="bg-customBlack w-full h-auto bg-[url('./images/background.png')] bg-cover text-center bg-no-repeat bg-left-top">
        <Header />
        <Navigation />
      </div>
      <Footer />
    </>
  );
}

export default App;
