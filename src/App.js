import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";

//Import data from TravelData.js containing array of objects
import TravelData from "./TravelData";

//Aggregation component for all of our custom components
function App() {
  //Custom function that will call the TravelBlog itself
  //"item" is the iterator that will visit each data member of the object array
  const city = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        heading={item.placeHeading}
        img1={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        description={item.placeDescription}
      />
    ); //end of the map function
  });

  return (
    <div className="App">
      <Hero />
      {/* Call to the city const which creates the JSX for each city object and puts them into their own sections */}
      <section className="city-parent-container">{city}</section>
    </div>
  );
}

export default App;
