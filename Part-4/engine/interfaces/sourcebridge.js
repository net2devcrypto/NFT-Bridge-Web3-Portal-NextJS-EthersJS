import React from "react";
import { bscChain, polyChain, ethChain, hardChain, hardChainb, bscTest, ethTest, polyTest } from '../chainchange';
import { useEffect, useState } from "react";
import { Dropdown, Row, Text } from '@nextui-org/react';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { goeNFT, goeCustody, goerpc } from '../configuration';
import { bsctNFT, bsctCustody, bsctrpc } from '../configuration';
import { mumNFT, mumCustody, mumrpc } from '../configuration';

const droptheme = createTheme({
  type: "dark",
  theme: {
    fontFamily:'SF Pro Display',
    colors: {
      primaryLight: '#00000020',
      primaryLightHover: '#00000020',
      primaryLightActive: '#00000020',
      primaryLightContrast: '#00000020',
      primary: '#1F51FF40',
      primaryBorder: '#00000020',
      primaryBorderHover: '#00000020',
      primarySolidHover: '#00000010',
      primarySolidContrast: '$white',
      primaryShadow: '$white500',
      transparent: '#00000000',
      dropdownItemHoverTextColor:'#00000000',
      link: '#5E1DAD',

      myColor: '#00000000'

    },
    space: {},
    fonts: {}
  }
})

export default function sourcebridge(){
  const [sourceNft, getSourceNft] = useState([]);
  const [sourceCustody, getSourceCustody] = useState([]);
  const [selected, setSelected] = React.useState(new Set(["Set Network"]));
  const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "),[selected])

  const blockImage = React.useMemo((resolve, reject) => {
    var eth = "Ethereum";
    var bsc = "Binance Smart Chain";
    var pol = "Polygon";
    if (selectedValue == eth) {
      return(
        <img src='ethereumlogo.png' width={"160px"}/>
      )
    }
    else if (selectedValue == bsc) {
      return(
        <img src='bsc.png' width={"160px"}/>
      )
    }
    else if (selectedValue == pol) {
      return(
        <img src='polygonwhite.png' width={"160px"}/>
      )
    }
  })

async function sourceChain() {
    var bsc = "Binance Smart Chain";
    var poly = "Polygon";
    var eth = "Ethereum";
    var mum = "Mumbai";
    var bsct = "Bsctest";
    var goe = "Goerli";
    var hard = "Hardhat";
    if (bsc == selectedValue) {
      bscTest();
    }
    else if (poly == selectedValue) {
      polyTest();
    }
    else if (eth == selectedValue) {
      ethTest();
      var sNft = goeNFT
      var sCustody = goeCustody
    }
    else if (hard == selectedValue) {
      hardChain();
    }
    else if (bsct == selectedValue) {
      bscTest();
    }
    else if (goe == selectedValue) {
      ethTest();
      var sNft = goeNFT
      var sCustody = goeCustody
    }
    else if (mum == selectedValue) {
      polyTest();
    }
    getSourceNft(sNft);
    getSourceCustody(sCustody);
    return {sourceNft}
  }

  useEffect(() => {
    sourceChain();
  }, [selected])
return (
  <NextUIProvider theme={droptheme}>

            <Text css={{mb:'$2'}} h4>Source</Text>

  <Dropdown >
    <Dropdown.Button
      bordered
      flat
      css={{
        borderColor: "#ffffff50",
        borderWidth: "0.8px",
        color: "White",
        width:'100%',
          minHeight:'45px',
        borderRadius: "5px",
      }} 
    >
      {blockImage}
    </Dropdown.Button>
    <Dropdown.Menu
      css={{ 
      opacity:'100%', 
      alignContent:'center',
      width:'600px',
      display:'grid',
      backgroundColor:'#00000010'
    }}
      aria-label="Single selection actions"
      disallowEmptySelection
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      <Dropdown.Item icon={<img src='ethereumlogo.png' width={"130px"}/>} key="Ethereum">
      </Dropdown.Item>
      <Dropdown.Item key="Binance Smart Chain">
        <img src="bsc.png" width={"130px"} />
      </Dropdown.Item>
      <Dropdown.Item key="Polygon">
        <img src="polygonwhite.png" width={"130px"} />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  </NextUIProvider>
);
 
}