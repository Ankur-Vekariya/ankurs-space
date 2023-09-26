"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Landing() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={16}>
        <Grid
          item
          xs={8}
          style={{
            minHeight: "650px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              paddingLeft: "100px",
            }}
          >
            <h1
              style={{
                display: "flex",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Hi,
            </h1>
            <h1
              style={{
                display: "flex",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              I'am
            </h1>
            <h1
              style={{
                display: "flex",
                fontSize: "60px",
                color: "#39829B",
                fontFamily: "fantasy",
              }}
            >
              Ankur Vekariya
            </h1>
            <h1
              style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Full Stack Developer
            </h1>
            <Button>Contact</Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              paddingLeft: "100px",
            }}
          >
            <p style={{ fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            // display: "flex",
            // justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <Image
            src="/portfolio.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
