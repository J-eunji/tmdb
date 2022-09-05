import { AiOutlineClose } from "react-icons/ai";
import YouTube from "react-youtube";
import styled from "styled-components";
import { modalState } from "../../atoms/modal";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function UpcomingVedio({ videoUrl }) {
  const [modal, setModal] = useRecoilState(modalState);
  const onClose = () => setModal(false);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <VideoModal modal={modal}>
      <YouTube className="youtube" videoId={videoUrl} opts={opts} />
      <AiOutlineClose className="btn" size={30} onClick={() => onClose()} />
    </VideoModal>
  );
}

const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  .youtube {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .btn {
    position: fixed;
    top: 25%;
    right: 33%;
    cursor: pointer;
    color: #fff;
    user-select: none;
  }
`;
