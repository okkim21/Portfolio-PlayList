import * as React from "react";
import PlayLists from "./PlayLists";
import { act } from "react-dom/test-utils";
import * as playlistApi from "../../api/playlistApi";
import { shallow } from "enzyme";


jest.mock('react-router-dom', () => ({
  __esModule: true,
  useRouteMatch: () => ({ url: '/playlists' }),
}));

describe("rendering PalyList component", () => {
  let data = {
    id: 1,
    name: "Spring_PlayList",
    date: "03/01/2020",
    image: "album.jpg",
    songLists: [],
  };
 
  it("renders PlayList Component without crashing", () => {
    const wrapper = shallow(<PlayLists />);
    expect(wrapper).toMatchSnapshot();
  })

  it("should show palylist once async resolves", async () => {
    await act(async () => {
        const spy_getPlaylists = jest.spyOn(playlistApi, "getPlaylists").mockImplementation(()=> Promise.resolve({
          status: 200,
          data,
          json: () => data
        }))
        const result = await spy_getPlaylists();
        expect(result.data.id).toBe(1);
        spy_getPlaylists.mockRestore();
    
    });
  });

});
