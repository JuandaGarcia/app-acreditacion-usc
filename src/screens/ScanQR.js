import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Informacion from "../models/informacion/Informacion";
import Navbar from "../components/Navbar";

const ScanQR = () => {
  const [setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const informacion = new Informacion();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data.split("-")[0] === "usc") {
      alert(informacion.buscarPorId(data.split("-")[1]).titulo);
      setScanned(true);
    }
  };

  const { width } = Dimensions.get("screen");
  const leftTop = {
    borderLeftWidth: 8,
    borderTopWidth: 8,
    borderColor: "#8482FF"
  };
  const leftBottom = {
    borderLeftWidth: 8,
    borderBottomWidth: 8,
    borderColor: "#8482FF"
  };
  const rightTop = {
    borderRightWidth: 8,
    borderTopWidth: 8,
    borderColor: "#8482FF"
  };
  const rightBottom = {
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderColor: "#8482FF"
  };

  const opacity = "rgba(0, 0, 0, .6)";
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    layerTop: {
      flex: 1,
      backgroundColor: opacity,
      paddingTop: 147
    },
    layerCenter: {
      flex: 1,
      flexDirection: "row"
    },
    layerLeft: {
      flex: 1,
      backgroundColor: opacity
    },
    focused: {
      flex: 2
    },
    layerRight: {
      flex: 1,
      backgroundColor: opacity
    },
    layerBottom: {
      flex: 1,
      backgroundColor: opacity,
      paddingBottom: 87
    }
  });

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column"
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          ...StyleSheet.absoluteFillObject,
          marginTop: 15
        }}
      />

      <View style={styles.layerTop} />
      <View style={styles.layerCenter}>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
      </View>
      <View style={styles.layerBottom} />

      <View
        style={{
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View
          style={{
            width: width / 2,
            height: width / 2
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, ...leftTop }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...rightTop }} />
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, ...leftBottom }} />
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, ...rightBottom }} />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 60 }}>
        {scanned && (
          <Button
            title={"Volver a escanear"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
      <Navbar />
    </View>
  );
};

export default ScanQR;
