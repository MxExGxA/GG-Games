import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Platfroms",
    field: "platforms",
    values: [
      { title: "Windows", id: [6], checked: false },
      { title: "Playstation", id: [48, 9], checked: false },
      { title: "Xbox", id: [49, 12], checked: false },
      { title: "Nintendo", id: [130], checked: false },
      { title: "Mac", id: [14], checked: false },
      { title: "Linux", id: [3], checked: false },
      { title: "Android", id: [34], checked: false },
      { title: "IOS", id: [39], checked: false },
    ],
  },
  {
    title: "Genres",
    field: "genres",
    values: [
      { title: "Arcade", id: [33], checked: false },
      { title: "Puzzle", id: [9], checked: false },
      { title: "Shooter", id: [5], checked: false },
      { title: "Racing", id: [10], checked: false },
      { title: "Adventure", id: [31], checked: false },
      { title: "Strategy", id: [15], checked: false },
      { title: "Sport", id: [14], checked: false },
      { title: "Tactical", id: [24], checked: false },
    ],
  },
  {
    title: "Themes",
    field: "themes",
    values: [
      { title: "Action", id: [1], checked: false },
      { title: "Survival", id: [21], checked: false },
      { title: "Horror", id: [19], checked: false },
      { title: "Fantasy", id: [17], checked: false },
      { title: "Educational", id: [34], checked: false },
      { title: "Historical", id: [22], checked: false },
      { title: "Stealth", id: [23], checked: false },
      { title: "OpenWorld", id: [38], checked: false },
      { title: "Comedy", id: [27], checked: false },
    ],
  },
  {
    title: "Modes",
    field: "game_modes",
    values: [
      { title: "Singleplayer", id: [1], checked: false },
      { title: "Multiplayer", id: [2], checked: false },
      { title: "Coop", id: [3], checked: false },
      { title: "BattleRoyale", id: [6], checked: false },
      { title: "SplitScreen", id: [4], checked: false },
    ],
  },
  {
    title: "Perspective",
    field: "player_perspectives",
    values: [
      { title: "FirstPerson", id: [1], checked: false },
      { title: "ThirdPerson", id: [2], checked: false },
      { title: "Auditory", id: [6], checked: false },
      { title: "SideView", id: [4], checked: false },
      { title: "VirtualReality", id: [7], checked: false },
      { title: "Bird View", id: [3], checked: false },
    ],
  },
];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter(state, action) {
      state
        .find((ele) => ele.title === action.payload.colTitle)
        .values.find(
          (ele) => ele.title === action.payload.fieldData.title
        ).checked = action.payload.toggleCheck;
    },
  },
});

export const { filter } = filterSlice.actions;
export default filterSlice.reducer;
