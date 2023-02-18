import React, { useEffect, useState, useRef } from "react";
import { Text, Image, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import ReactNativeZoomableView from "@openspacelabs/react-native-zoomable-view/src/ReactNativeZoomableView";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;
const bannerAdUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-8647279125417942/1456374675";
const MapScreen = () => {
  const W = (px) => {
    const d = WindowWidth / px;
    return WindowWidth / d;
  };
  const H = (px) => {
    const d = WindowHeight / px;
    return WindowHeight / d;
  };
  return (
    <WindowContainer>
      <ImageBox>
        <ReactNativeZoomableView
          maxZoom={2.5}
          minZoom={1}
          initialZoom={1}
          bindToBorders={true}
        >
          <TitleText>{"서울 구지도"}</TitleText>
          <Image
            style={{
              height: "100%",
              width: "100%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../Assets/Images/Map.png")}
          />
          <>
            <WardText style={{ right: W(125), bottom: H(490) }}>
              {"도봉구"}
            </WardText>
            <WardText style={{ right: W(80), bottom: H(450) }}>
              {"노원구"}
            </WardText>
            <WardText style={{ right: W(140), bottom: H(455) }}>
              {"강북구"}
            </WardText>
            <WardText style={{ right: W(130), bottom: H(407) }}>
              {"성북구"}
            </WardText>
            <WardText style={{ right: W(170), bottom: H(380) }}>
              {"종로구"}
            </WardText>
            <WardText style={{ right: W(170), bottom: H(355) }}>
              {"중구"}
            </WardText>
            <WardText style={{ right: W(175), bottom: H(320) }}>
              {"용산구"}
            </WardText>
            <WardText style={{ right: W(120), bottom: H(340) }}>
              {"성동구"}
            </WardText>
            <WardText style={{ right: W(75), bottom: H(335) }}>
              {"광진구"}
            </WardText>
            <WardText style={{ right: W(220), bottom: H(430) }}>
              {"은평구"}
            </WardText>
            <WardText style={{ right: W(215), bottom: H(380) }}>
              {"서대문구"}
            </WardText>
            <WardText style={{ right: W(245), bottom: H(355) }}>
              {"마포구"}
            </WardText>
            <WardText style={{ right: W(68), bottom: H(400) }}>
              {"중랑구"}
            </WardText>
            <WardText style={{ right: W(102), bottom: H(378) }}>
              {"동대문구"}
            </WardText>
          </>
          <>
            <WardText style={{ right: W(325), bottom: H(365) }}>
              {"강서구"}
            </WardText>
            <WardText style={{ right: W(300), bottom: H(307) }}>
              {"양천구"}
            </WardText>
            <WardText style={{ right: W(300), bottom: H(275) }}>
              {"구로구"}
            </WardText>
            <WardText style={{ right: W(247), bottom: H(300) }}>
              {"영등포구"}
            </WardText>
            <WardText style={{ right: W(208), bottom: H(280) }}>
              {"동작구"}
            </WardText>
            <WardText style={{ right: W(260), bottom: H(240) }}>
              {"금천구"}
            </WardText>
            <WardText style={{ right: W(210), bottom: H(230) }}>
              {"관악구"}
            </WardText>
            <WardText style={{ right: W(150), bottom: H(250) }}>
              {"서초구"}
            </WardText>
            <WardText style={{ right: W(100), bottom: H(260) }}>
              {"강남구"}
            </WardText>
            <WardText style={{ right: W(55), bottom: H(280) }}>
              {"송파구"}
            </WardText>
            <WardText style={{ right: W(15), bottom: H(340) }}>
              {"강동구"}
            </WardText>
          </>
        </ReactNativeZoomableView>
      </ImageBox>
      <AdsBox>
        <BannerAd
          unitId={bannerAdUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </AdsBox>
    </WindowContainer>
  );
};
export default MapScreen;

const WindowContainer = styled.View`
  flex: 1;
`;
const TitleText = styled.Text`
  position: absolute;
  font-size: ${WindowWidth / 10.28}px;
  font-family: Humanbumsuk;
  align-self: center;
  top: ${WindowHeight / 8.16}px;
`;
const ImageBox = styled.View`
  flex: 0.9;
  background-color: #f5e9cf;
  padding-horizontal: ${WindowHeight / 81.6}px;
`;

const AdsBox = styled.View`
  flex: 0.1;
  background-color: #f5e9cf;
  justify-content: flex-end;
`;

const WardText = styled.Text`
  position: absolute;
  font-size: ${WindowWidth / 34.28}px;
  font-family: Humanbumsuk;
`;
