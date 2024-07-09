"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function Technology() {
  let techs1 = [
    {
      title: "HTML",
      image: "https://logodix.com/logo/470322.png",
    },
    {
      title: "CSS",
      image:
        "https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png",
    },
    {
      title: "Java Script",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.zJolqY5gcB9coeVnBqQr-QHaIZ&pid=Api&P=0&h=180",
    },
    {
      title: "React JS",
      image: "https://images.tutorialedge.net/images/react.svg",
    },
    {
      title: "React Native",
      image:
        "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/06/react-native-1024x631-1024x631.png?resize=680%2C419&ssl=1",
    },

    {
      title: "Expo",
      image:
        "https://expo-discourse-uploads.s3.dualstack.us-west-1.amazonaws.com/original/2X/c/c03f2b40ddcb0ad90ed4464516401c7729f2da29.png",
    },
    {
      title: "Docker",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.9WF0OC9phVbU1j3k2McOSAHaGN&pid=Api&P=0&h=180",
    },
    {
      title: "Tailwind CSS",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.S-SYtYzIhgPRnmRd8yWH4gHaEH&pid=Api&P=0&h=180",
    },
    {
      title: "MUI",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.IBei9dp44_toC7LdCHTEEgHaGa&pid=Api&P=0&h=180",
    },
    {
      title: "ANTD",
      image:
        "https://pic1.zhimg.com/v2-c924155285cdba2f57cbd751674c1bb0_ipico.jpg",
    },
    {
      title: "SASS",
      image:
        "https://1000marcas.net/wp-content/uploads/2021/06/Sass-Logo-1280x800.png",
    },
    {
      title: "LESS",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.J3V0M6BdULy6T_ehkE1ChwAAAA&pid=Api&P=0&h=180",
    },
  ];
  let techs2 = [
    {
      title: "Docker",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.9WF0OC9phVbU1j3k2McOSAHaGN&pid=Api&P=0&h=180",
    },
    {
      title: "Tailwind CSS",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.S-SYtYzIhgPRnmRd8yWH4gHaEH&pid=Api&P=0&h=180",
    },
    {
      title: "MUI",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.IBei9dp44_toC7LdCHTEEgHaGa&pid=Api&P=0&h=180",
    },
    {
      title: "ANTD",
      image:
        "https://pic1.zhimg.com/v2-c924155285cdba2f57cbd751674c1bb0_ipico.jpg",
    },
    {
      title: "SASS",
      image:
        "https://1000marcas.net/wp-content/uploads/2021/06/Sass-Logo-1280x800.png",
    },

    {
      title: "LESS",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.J3V0M6BdULy6T_ehkE1ChwAAAA&pid=Api&P=0&h=180",
    },
  ];
  return (
    <Container maxWidth="xl">
      <div className="flex items-center justify-center text-center">
        <div className="flex flex-col p-2 m-2  max-w-7xl">
          <div className="text-3xl font-medium">Technology</div>
          <div className="text-sm mx-2 md:text-xl text-stone-500">
            Technologi's, That i have learned and use for various projects so
            far.
          </div>
          <div className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-2  p-2">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {techs1.map((item, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                  <div className="flex-col px-6 w-auto md:w-40 py-2 ml-3 md:ml-0 rounded-2xl backdrop-blur-sm bg-white/30">
                    <div className="h-28 w-28  ">
                      <img src={item.image} alt="" className="" />
                    </div>

                    <div className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400">
                      {item.title}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </Container>
  );
}
