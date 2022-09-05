import { atom } from "recoil";
import { GiFilmStrip, GiTv } from "react-icons/gi";

export const tabState = atom({
  key: "tabState",
  default: [
    {
      id: 1,
      text: `영화`,
      active: true,
      category: "movie",
      icon: <GiFilmStrip />,
    },
    { id: 2, text: `TV`, active: false, category: "tv", icon: <GiTv /> },
  ],
});
