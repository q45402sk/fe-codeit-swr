import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieComponent from "@/components/MovieComponent"; // 테스트할 컴포넌트

// TODO: The element(s) given to waitForElementToBeRemoved are already removed. 에러 발생 => 코드 추가해서 assert 통과하게 만들기
test("content should be displayed", async () => {
  render(<MovieComponent />);

  // 코드추가
  await waitForElementToBeRemoved(() => {
    return screen.queryByText(/is loading/i);
  });
  expect(screen.queryByText(/content/i)).toBeInTheDocument();
});
