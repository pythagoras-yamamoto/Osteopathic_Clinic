import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { ContainerA } from "../components/ContainerA";
import { Footer } from "../components/Footer";
import { EmbedTwitter } from "../components/EmbedTwiter";
import Image from "../../public/clinic-image.jpeg";

export const ContactPage = () => {
  return (
    <>
      <Navbar />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"お問い合わせ"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <EmbedTwitter />
      <Footer />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const SImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 300px;
`;