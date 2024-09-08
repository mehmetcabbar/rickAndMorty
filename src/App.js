import { Provider } from "react-redux";
import { store } from "./redux/store";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-customBlack w-full h-auto bg-[url('./images/background.png')] bg-contain bg-top bg-no-repeat">
        <Header />
        <Navigation />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
