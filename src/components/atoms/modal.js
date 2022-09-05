import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const videoUrlState = atom({
  key: "videoUrlState",
  default: "",
});
