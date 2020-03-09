import React, { useState } from "react";
import { View, TouchableHighlight, Image, Text } from "react-native";
import styles from "../styles";
import { useHistory } from "react-router-native";

const Navbar = () => {
  const history = useHistory();
  const [opacityQR, setOpacityQR] = useState(styles.NavbarIconGray);
  const [opacityTrofeo, setOpacityTrofeo] = useState(styles.NavbarIconGray);

  return (
    <View style={styles.containerNavbar}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          history.push("/scan-qr");
          setOpacityQR(styles.NavbarIcon);
          setOpacityTrofeo(styles.NavbarIconGray);
        }}
        style={styles.btnNavbar}
      >
        <Image style={opacityQR} source={require("../img/qrcode.png")} />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#8482FF"
        onPress={() => {
          history.push("/");
          setOpacityQR(styles.NavbarIconGray);
          setOpacityTrofeo(styles.NavbarIconGray);
        }}
        style={styles.circleNavbar}
      >
        <Image
          style={styles.NavbarIcon}
          source={require("../img/gamepad.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          history.push("/ranking");
          setOpacityTrofeo(styles.NavbarIcon);
          setOpacityQR(styles.NavbarIconGray);
        }}
        style={styles.btnNavbar}
      >
        <Image style={opacityTrofeo} source={require("../img/trofeo.png")} />
      </TouchableHighlight>
    </View>
  );
};

export default Navbar;
