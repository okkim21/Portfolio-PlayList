import React from "react";
import App from "./App";

import { shallow } from "enzyme";

describe("rendering component", () => {

  it("renders App Component without crashing", () => {
    shallow(<App />);
  })

});
