import React from "react";
import { render, cleanup } from "@testing-library/react";
import { DirectProvider } from "../../contexts/Direct";
import Dialogues from "./index";

afterEach(cleanup);

it("renders initial data", () => {
  const { container } = render(
    <DirectProvider>
      <Dialogues />
    </DirectProvider>
  );

  const dialogues = container.querySelectorAll("li");

  expect(dialogues.length).toEqual(5);
});
