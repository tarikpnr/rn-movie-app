import React from "react";
import { MOCK_GENRES } from "~api/mock/genres";
import { MOCK_MOVIES } from "~api/mock/movies";
import { TestUtils } from "~utils";
import MovieCarousel from "./component";

describe("Tests movie carousel component", () => {
  it("renders movie carousel correctly", () => {
    const tree = TestUtils.createWithWrappers(
      <MovieCarousel
        data={MOCK_MOVIES}
        carouselKey="action"
        genre={MOCK_GENRES[0]}
        renderItem={jest.fn()}
        order={1}
      />,
      {
        hasTheme: true,
        hasNavigationContainer: true,
      },
    );

    expect(tree).toMatchSnapshot();
  });
});
