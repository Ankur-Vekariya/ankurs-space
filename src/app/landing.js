"use client";
import * as React from "react";
import "./landing.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Before they sold out
          <br className="hidden lg:inline-block" />
          readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            Button
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <div className="lines">
    //     <div className="line"></div>
    //     <div className="line"></div>
    //     <div className="line"></div>
    //   </div>
    //   <Box sx={{ flexGrow: 1 }}>
    //     <Grid container columns={16}>
    //       <Grid
    //         item
    //         xs={8}
    //         style={{
    //           minHeight: "650px",
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //         }}
    //       >
    //         <div
    //           style={{
    //             paddingLeft: "100px",
    //           }}
    //         >
    //           <h1
    //             style={{
    //               display: "flex",
    //               fontSize: "30px",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             Hi,
    //           </h1>
    //           <h1
    //             style={{
    //               display: "flex",
    //               fontSize: "30px",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             I'am
    //           </h1>
    //           <h1
    //             style={{
    //               display: "flex",
    //               fontSize: "60px",
    //               color: "#39829B",
    //               fontFamily: "fantasy",
    //             }}
    //           >
    //             Ankur Vekariya
    //           </h1>
    //           <h1
    //             style={{
    //               display: "flex",
    //               justifyContent: "end",
    //               fontSize: "30px",
    //               fontWeight: "bold",
    //             }}
    //           >
    //             Full Stack Developer
    //           </h1>
    //           <Button>Contact</Button>
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "end",
    //             paddingLeft: "100px",
    //           }}
    //         >
    //           <p style={{ fontSize: "20px" }}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud
    //           </p>
    //         </div>
    //       </Grid>
    //       <Grid
    //         item
    //         xs={8}
    //         style={{
    //           // display: "flex",
    //           // justifyContent: "center",
    //           alignSelf: "center",
    //         }}
    //       >
    //         <Image
    //           src="/portfolio.png"
    //           width={500}
    //           height={500}
    //           alt="Picture of the author"
    //         />
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Box>
  );
}
