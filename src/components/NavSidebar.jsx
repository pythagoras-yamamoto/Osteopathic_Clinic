import React from "react";

import {
  NavSidebarContainer,
  Icon,
  CloseIcon,
  SidebarLinks,
  SidebarWrapper,
  SidebarMenu
} from "./NavSidebarElements";

export const NavSidebar = () => {
  return (
    <NavSidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="#">ホーム</SidebarLinks>
          <SidebarLinks to="#">当院について</SidebarLinks>
          <SidebarLinks to="#">料金・メニュー</SidebarLinks>
          <SidebarLinks to="#">予約状況</SidebarLinks>
          <SidebarLinks to="#">お問い合わせ</SidebarLinks>
        </SidebarMenu>
      </SidebarWrapper>
    </NavSidebarContainer>
  );
};
