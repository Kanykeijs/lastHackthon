import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Children.css";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Илья Кулабухов",
    imgPath: "https://blizkofond.ru/wp-content/uploads/2020/10/favicon.png",
    // description: "Протонная терапия",
  },
  {
    label: "Ильдар Шамсутдинов",
    imgPath:
      "https://nablagoe1.xyz/wp-content/uploads/logo-ot-serdca-k-serdcu-a.png",
    // description: "Оперативное лечение",
  },
  {
    label: "Дарья Рыжова",
    imgPath:
      "https://png.pngtree.com/element_our/png_detail/20181114/charity-icon-png_239790.jpg",
    // description: "Оперативное лечение",
  },
  {
    label: "Виталий Тоболь",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZFdHVqXTsXWN1rfC6Y5AoPJL317C_ki47dJlgNMk2poNzVfC4s-EGie7G26JabQnYqE&usqp=CAU",
    // description: "Восстановительное лечение",
  },
  {
    label: "Жанет Гиреева",
    imgPath:
      "https://nablagoe1.xyz/wp-content/uploads/logo-ot-serdca-k-serdcu-a.png",
    // description: "Протонная терапия",
  },
];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Children() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        className="maincorus"
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          borderRadius: "20px",
          backgroundColor: "white",
        }}
      >
        <Box
          square
          elevation={0}
          sx={{
            padding: "0",
            // display: "flex",
            // alignItems: "center",
            marginTop: "5%",
            marginLeft: "2%",
            height: 50,
            pl: 2,
            fontSize: "50px",
            //bgcolor: "background.default",
            color: "rgb(0, 195, 255)",
          }}
        >
          {images[activeStep].label}
        </Box>

        <Box
          sx={{
            height: 255,
            maxWidth: 400,
            width: "100%",
            p: 2,
            fontSize: "30px",
            color: "black",
            marginTop: "15%",
            marginLeft: "2%",
          }}
        >
          {images[activeStep].description}
        </Box>

        <AutoPlaySwipeableViews
          className="corusimg"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "400px",
                    display: "block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    width: "100%",
                    float: "right",
                    marginRight: "5%",
                    marginTop: "10%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <MobileStepper
        id="crs"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            sx={{ color: "red", width: "20px", height: "20px" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            sx={{ color: "red" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <div>
        <h1 className="h1">Нужна помощь</h1>
      </div>
      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              0 лет
            </Typography>
            <Typography variant="h5" component="div">
              Варвара Мигунова
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 231 345 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Несовершенный остеогенез
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              14 лет
            </Typography>
            <Typography variant="h5" component="div">
              Ульяна О.
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 131 290 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Восстановительное лечение
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Несовершенный остеогенез
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              7 лет
            </Typography>
            <Typography variant="h5" component="div">
              Оксана Каррехт
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <p className="nujno">Нужно 1 000 000 сом</p>
            </Typography>
            <Button>
              <LocalHospitalIcon />
              Вид помощи
            </Button>
            <Typography variant="body2">
              Аферез
              <br />
              <Button>
                <VaccinesIcon />
                Диагноз
              </Button>
              <br />
              Эмбриональная рабдомиосаркома среднего уха слева
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>
      <div className="long-div">
        <Card className="vse-deti_card" sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography className="vse-deti" variant="h5" component="div">
              Все дети, кому нужна помощь
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2">
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small"></Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Children;
