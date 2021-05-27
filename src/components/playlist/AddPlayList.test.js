import * as React from "react";
import AddPlayList from "./AddPlayList";
import { shallow } from "enzyme";

const simulateOnChangeInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });

  return wrapper.find(inputSelector);
};

let wrapper = null;

beforeAll(() => {
  wrapper = shallow(<AddPlayList />);
})

describe("rendering AddPlaylist component", () => {
  it("renders AddPlaylist component without crashing", ()=> {
    shallow(<AddPlayList />);
  })

  it("renders form imputs", ()=> {
    //Assertion
    expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    expect(wrapper.find('input[name="image"]')).toHaveLength(1);
  })

  it("renders submit button without crashing", ()=> {
    expect(wrapper.find('input[type="submit"]')).toHaveLength(1);
  })

})

describe("The event is working", ()=> {
  it("fill the form with values and then reset the form", () => {
    const updatedNameInput = simulateOnChangeInput(
      wrapper,
      "#input-name",
      "Trip"
    );
    const updatedImageInput = simulateOnChangeInput(
      wrapper,
      "#input-image",
      "album22"
    );
  
    expect(updatedNameInput.props().value).toBe("Trip");
    expect(updatedImageInput.props().value).toBe("album22");
  
    wrapper.find("#reset-button").simulate("click");

    expect(wrapper.find("#input-name").props().value).toBe("");
    expect(wrapper.find("#input-image").props().value).toBe("");
  });

  it("The form is submitted when click event is fired", ()=> {
    const onAdd = jest.fn();
    const wrapper = shallow(<AddPlayList onAdd={onAdd()} />)
    wrapper.find('input[type="submit"]').simulate("click")
    expect(onAdd).toHaveBeenCalledTimes(1)
  })

})