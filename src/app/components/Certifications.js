"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Modal } from "@mui/material";
import Image from "next/image";

const certificates = [
  {
    title: "certificate",
    image: require("../../../public/download.jpeg"),
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

export default function Certifications() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            fontSize: "60px",
            color: "#39829B",
            fontFamily: "fantasy",
          }}
        >
          Certifications
        </h1>
      </Box>
      {certificates.map((item, index) => {
        return (
          <Card sx={{ maxWidth: 250 }} key={index}>
            <CardActionArea onClick={handleOpen} onTouchMove={handleOpen}>
              {/* <Image
                src={require("../../../public/images.png")}
                width={200}
                height={150}
                alt="Picture of the author"
              /> */}
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  {item.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image
            src={require("../../../public/images.png")}
            width={400}
            height={450}
            alt="Picture of the author"
          />
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </Container>
  );
}
