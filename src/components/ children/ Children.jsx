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
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import InstagramIcon from "@mui/icons-material/Instagram";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Илья Кулабухов",
    imgPath:
      "https://tv8.md/resources/2022/12/05/70d17b56-ecc1-4263-a745-0a9b3f7af94b_1634287992lordok1.jpg",
    // description: "Протонная терапия",
  },
  {
    label: "Ильдар Шамсутдинов",
    imgPath:
      "https://kolobok.ua/i/11/69/80/2/1169802/image_main/437dfeac5d8d08e7a4cd7cfee40f36cc-quality_70Xresize_crop_1Xallow_enlarge_0Xw_698Xh_465.jpg",
    // description: "Оперативное лечение",
  },
  {
    label: "Дарья Рыжова",
    imgPath:
      "https://health.fakty.com.ua/wp-content/uploads/sites/2/2022/02/15/onkologyya-e1644911149623-620x349.jpg",
    // description: "Оперативное лечение",
  },
  {
    label: "Виталий Тоболь",
    imgPath:
      "https://exo-ykt.ru/upload/iblock/aa0/aa03f5cf317a16acf68cab55a5f991de.jpg",
    // description: "Восстановительное лечение",
  },
  {
    label: "Жанет Гиреева",
    imgPath:
      "https://n1s1.hsmedia.ru/84/36/54/843654311e79d7f7941355f7a886fe2d/728x485_1_04072f738dc35f11bb22a7878e48debe@2121x1414_0xac120003_3235339081632917713.jpeg",
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

      <div className="div-card">
        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.freepik.com/premium-photo/long-shot-nurse-helping-old-man-getting-up_23-2148239021.jpg?w=2000"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Дом престарелых
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://1prof.by/storage/2022/12/bez-1212.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              бездомные
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card" sx={{ minWidth: 275 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://cabar.asia/wp-content/uploads/2022/07/d792fbb6c2b6feb2455aa3611d17851c.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              бездомные животные
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                className="animals"
                href="https://www.instagram.com/kainar.bishkek/"
              >
                <InstagramIcon />
              </a>
            </Button>
            <Button size="small">Learn More</Button>
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
