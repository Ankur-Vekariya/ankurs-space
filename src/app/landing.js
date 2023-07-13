"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Landing() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#010114" }}>
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
              display: "flex",
              justifyContent: "end",
              paddingLeft: "100px",
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: "20px" }}>I'm</p>
            <h1
              style={{
                display: "flex",
                justifyContent: "end",
                fontSize: "80px",
                color: "#E7B10A",
                fontFamily: "fantasy",
              }}
            >
              Ankur Vekariya
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              paddingLeft: "100px",
            }}
          >
            <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
          </div>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Box>
  );
}
