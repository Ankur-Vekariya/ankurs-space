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
      {/* <Box
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
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  {item.title}
                </Typography>
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
          
        </Box>
      </Modal> */}
      <div className="flex justify-center">
        <div className=" flex md:flex-row flex-col px-4 py-2 my-10 gap-y-7 gap-x-7 max-w-7xl ">
          <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600 rounded-full p-2">
                <ion-icon name="logo-amplify" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Personal</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    £
                  </div>
                  <div className="text-3xl md:text-5xl">9.78</div>
                </div>
                <div classcon name="checkmark-sharp">
                  <div className="">1 website</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">50 GB Storage</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">~100,000 Visits Monthly</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">SSL</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 rounded-full p-2">
                <ion-icon name="logo-octocat" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Shared</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    £
                  </div>
                  <div className="text-3xl md:text-5xl">9.78</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">100 websites</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">500 GB Storage</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">~100,000 Visits Monthly</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">SSL</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="close-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out ">
            <div className="flex flex-col justify-center items-center text-white p-2 ">
              <div className="bg-gradient-to-br from-gray-400 via-gray-900 to-blue-800 rounded-full p-2">
                <ion-icon name="logo-gitlab" className="text-5xl "></ion-icon>
              </div>
              <div className="text-3xl m-2 ">Business</div>
              <div className="text-white text-sm my-2 flex flex-col items-center h-60">
                <div className="flex justify-center my-3 text-white font-medium md:tracking-tighter ">
                  <div className="text-2xl md:text-3xl mt-[3px] md:mt-[1px]">
                    £
                  </div>
                  <div className="text-3xl md:text-5xl">9.78</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">100 websites</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">500 GB Storage</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Unlimited Databases</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">~100,000 Visits Monthly</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">SSL</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Daily Backups</div>
                </div>
                <div className="flex">
                  <ion-icon name="checkmark-sharp"> </ion-icon>
                  <div className="">Free E-mail</div>
                </div>
              </div>
            </div>
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
