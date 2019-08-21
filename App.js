import React, { Component } from "react";
import { RegisterPage } from "./src/pages";
import Navigator from "./src/navigator/Navigator";
import ImageSlider from "./src/components/sliders/ImageSlider";

class App extends Component {
	render() {
		return (
			<Navigator />
			// <ImageSlider />
		);
	}
}
export default App;
