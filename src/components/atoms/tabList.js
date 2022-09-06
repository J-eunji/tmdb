import { atom } from "recoil";
import { GiFilmStrip, GiTv } from "react-icons/gi";

export const popularTab = atom({
  key: "popularTab",
  default: [
    {
      id: 1,
      text: `영화`,
      active: true,
      category: "movie",
      icon: <GiFilmStrip />,
      popular: true,
    },
    {
      id: 2,
      text: `TV`,
      active: false,
      category: "tv",
      icon: <GiTv />,
      popular: true,
    },
  ],
});

export const trendingTab = atom({
  key: "trendingTab",
  default: [
    {
      id: 1,
      text: `영화`,
      active: true,
      category: "movie",
      icon: <GiFilmStrip />,
      trending: true,
    },
    {
      id: 2,
      text: `TV`,
      active: false,
      category: "tv",
      icon: <GiTv />,
      trending: true,
    },
  ],
});
