import "./App.css";
import Banner from "./Components/Banner";
// import Cards from "./Components/Cards";
import Home from "./Components/Home";
import ImgSlide from "./Components/ImgSlide";
import MoneySlide from "./Components/MoneySlide";
import SecondNav from "./Components/SecondNav";
import Tech from "./Components/Tech";
import Thirdnav from "./Components/Thirdnav";
import TopNav from "./Components/TopNav";


function App() {
  return (
    <>
      <TopNav />
      <hr />
      <SecondNav />
      <Home />
      <Banner/>
      <Thirdnav />
      <ImgSlide img="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" />
      <Thirdnav />
      <MoneySlide />
      <Thirdnav />
      <ImgSlide img="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" />
      <Thirdnav/>
      <Tech/>
      <Banner/>

      {/* <Cards/> */}
    </>
  );
}

export default App;
