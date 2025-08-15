import "./App.css";
// import Cards from "./Components/Cards";
import Home from "./Components/Home";
import ImgSlide from "./Components/ImgSlide";
import MoneySlide from "./Components/MoneySlide";
import SecondNav from "./Components/SecondNav";
import Thirdnav from "./Components/Thirdnav";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <>
      <TopNav />
      <hr />
      <SecondNav />
      <Home />
      <Thirdnav />
      <ImgSlide img="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" />
      <Thirdnav />
      <MoneySlide />
      <Thirdnav />
      <ImgSlide img="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" />

      {/* <Cards/> */}
    </>
  );
}

export default App;
