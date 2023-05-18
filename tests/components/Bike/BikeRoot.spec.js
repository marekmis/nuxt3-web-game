import { mount } from "@vue/test-utils";
import BikeRoot from "./components/Bike/BikeRoot.vue";
import { describe, it, expect } from "vitest";

describe("BikeRoot.vue", () => {
  it("should render a bike", async () => {
    expect(BikeRoot).toBeTruthy();
  });

  it("should render a bike with 2 wheels", async () => {
    const wrapper = mount(BikeRoot);
    expect(wrapper.findAll("bikewheel").length).toEqual(2);
  });
});
