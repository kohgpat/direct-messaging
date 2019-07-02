import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { DirectProvider } from "../../contexts/Direct";
import DialoguesHeader from "./index";

afterEach(cleanup);

it("set and display filter query for dialogues", () => {
  const { container } = render(
    <DirectProvider>
      <DialoguesHeader />
    </DirectProvider>
  );
  const input = container.querySelector('[type="search"]');

  fireEvent.change(input, { target: { value: "Alice" } });

  expect(input.value).toEqual("Alice");
});
