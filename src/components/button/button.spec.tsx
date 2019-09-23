import * as React from "react";
import { Button } from "./button";
import { shallow } from "enzyme";

describe("ButtonComponent", () => {
  let handleSubmit = jest.fn();
  let wrapper: any;

  describe("Button with onClick and transparent type props and text", () => {
    wrapper = shallow(
      <Button type="transparent" onClick={handleSubmit}>
        Sample text
      </Button>
    );

    it("should display given text", () => {
      expect(wrapper.children().text()).toEqual("Sample text");
    });

    it("should handle given function when clicked", () => {
      wrapper.simulate("click");

      expect(handleSubmit).toHaveBeenCalled();
    });

    it("should have button--transparent class", () => {
      expect(wrapper.find(".button--transparent")).toHaveLength(1);
    });
  });
});
