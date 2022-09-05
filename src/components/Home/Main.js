import { RecoilRoot } from "recoil";
import PopularBox from "./Popular/PopularBox";
import Slider from "./Slider";
import UpcomingBox from "./Upcoming/UpcomingBox";

export default function Main() {
  return (
    <>
      <RecoilRoot>
        <Slider />
        <PopularBox />
        <UpcomingBox />
      </RecoilRoot>
    </>
  );
}
