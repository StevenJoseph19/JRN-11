import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";
import { debug } from "webpack";

function renderCourseForm(args) {
  let defaultProps = {
    authors: [],
    course: {},
    saving: false,
    OnSave: () => {},
    OnChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseForm();
  getByText("Add Course");
});

it("should label save button as 'Save' when not savng", () => {
  const { getByText } = renderCourseForm();
  getByText("Save");
});

it("should label save button as 'Saving...' when savng", () => {
  //   const { getByText, debug } = renderCourseForm({ saving: true });
  //   debug();
  const { getByText } = renderCourseForm({ saving: true });

  getByText("Saving...");
});
