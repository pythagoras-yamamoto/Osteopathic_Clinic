import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Footer } from "../components/footer/Footer";
import Image from "../public/clinic-image.jpeg";
import { ScrollReveal } from "../components/container/ScrollReveal";

export const AboutUs = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ScrollReveal move="top">
        <ContainerA
          title={"ご挨拶"}
          text={
            "数あるサイトの中から当サイトを見つけて下さりありがとうございます。\nサロン【めめ】のセラピスト【hisa】と申します。\n\n\n\nストレス社会において女性の身体はとくに影響を受けやすくなっていると感じています。歯を食いしばりながら毎日頑張りすぎていませんか？肩の力を抜くことが出来ていますか？毎日頑張っている自分を褒めてあげられていますか?\n\n\n\n疲れた心身をリフレッシュしたり、自分自身と向き合い、知ることが癒しにつながると思うから…めめはそのお手伝いができる存在になりたいと思っています。私たちの身体や心、肌の状態は日々変化しています。一人一人の方と向き合い、その日の体調に合わせたケアを継続的に行っていけるようにサポート致します。"
          }
          image={Image}
          shadowColor={"#de8787"}
        />
        <ContainerA
          title={"施術実績"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"
          }
          image={Image}
          widthRatio={50}
        />
      </ScrollReveal>
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
