import React from 'react';
import CounterButton from "./container/CounterButton";
import SpecialTextBox from "./container/SpecialTextBox";
import Counter from "./container/Counter";
import SpecialText from "./container/SpecialText";
import UserButtons from "./container/UserButtons";
import Thermostat from "./container/Thermostat";
import Users from "./container/Users";
import ChangeTemperature from "./container/ChangeTemperature";
import VideoPlayer from "./container/VideoPlayer";
import VideoTextBox from "./container/VideoTextBox";
import CurrentCity from "./container/CurrentCity";
import CityDropDown from "./container/CityDropDown";
import SearchTextBox from "./container/SearchTextBox";
import SortUsers from "./container/SortUsers";
import ScaleVideo from "./container/ScaleVideo";
import Modal from "./container/Modal";
import ShowModal from "./container/ShowModal";

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          <ShowModal />
        </div>

        <div className="container">
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <VideoPlayer />
          <br />
        </div>
        <div className="container">
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;