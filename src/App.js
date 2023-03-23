import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // ->~ Default import
//import {Header} from "./components/Header" ->  Named import
import Body from "./components/Body";
import Footer from "./components/Footer";

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);

//we can only write JS expressions inside '{}' not statements.
/*eg -> a = 20;
      console.leg(a);
      the above code is not allowed inside '{}'.
*/