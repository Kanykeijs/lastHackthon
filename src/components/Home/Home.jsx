import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Corus from "./Corus";
import HomeCards from "./HomeCards";

const Home = () => {
  return (
    <Box>
      <Box id="mnhm">
        <Box id="mnhm2">
          <Box>
            <Box id="htxt">
              <h5 id="txttt" style={{ color: "white" }}>
                #фондлинияжизни
              </h5>
              <h1 id="txtt1">Благотворительный</h1>
              <h1 id="txtt2">фонд "Линия жизни"</h1>
            </Box>
          </Box>

          <Box id="bgbox">
            <Box id="mbbox">
              <Box id="mmbgbox">
                <Box id="pyp">
                  <span id="dsfdsf">250P</span>

                  <span id="dsfdsf">500P</span>

                  <span id="dsfdsf"> 750P</span>
                  <span id="dsfdsf"> 1000P</span>
                  <span id="drsm"> Другая сумма</span>
                  <span id="fghfgh"> Я хочу помочь</span>
                </Box>
                <Box id="vvvl">
                  <Box id="lsls">
                    <h5 id="qwer" style={{ fontSize: "18px", marginTop: "5%" }}>
                      Оплата через
                    </h5>
                    <img
                      style={{ marginLeft: "20px", marginRight: "20px" }}
                      src="https://www.life-line.ru/local/templates/general/redesign_v2/img/cloud-payment.svg"
                      alt=""
                    />
                    <img
                      src="https://www.life-line.ru/local/templates/general/redesign_v2/img/sbp.svg"
                      alt=""
                    />
                  </Box>
                  <a id="loio" href="">
                    <h4>Другие виды оплаты</h4>
                  </a>
                  <Box id="bbbb">
                    <h5 id="poiu" style={{ fontSize: "16px", marginTop: "6%" }}>
                      Соглашаюсь с
                    </h5>
                    <a id="lioi" href="">
                      <h4>условиями оферты</h4>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box id="pppd">
            {" "}
            <Box id="mcorus">
              <Box id="mmcor">
                <Box>
                  <h1 id="ewew">О фонде</h1>
                  <p id="pfpf">
                    Благотворительный фонд «Линия Жизни» создан для оказания
                    помощи детям с заболеваниями, которые способна победить
                    современная медицина.
                  </p>
                  <p id="pfpf">
                    Мы хотим побудить людей принять участие в судьбе каждого
                    ребенка, на долю которого выпало серьезное испытание.
                  </p>
                </Box>
              </Box>

              <Box>
                {" "}
                <Corus />{" "}
              </Box>
            </Box>
            <Box>
              <Box id="dltl"></Box>
              <img
                style={{ height: "70px", marginLeft: "60px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/1.svg "
                alt=""
              />
              <img
                style={{ width: "55px", marginRight: "30px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/2.svg"
                alt=""
              />
              <img
                style={{ width: "55px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/9.svg"
                alt=""
              />
              <img
                style={{ width: "55px", height: "70px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/1.svg"
                alt=""
              />
              <img
                style={{ width: "55px", marginRight: "50px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/6.svg"
                alt=""
              />
              <img
                style={{ width: "55px", height: "70px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/1.svg"
                alt=""
              />
              <img
                style={{ width: "55px" }}
                src="https://www.life-line.ru/local/templates/general/redesign_v2/img/new-design/number/8.svg"
                alt=""
              />
            </Box>
            <Box
              sx={{ display: "flex", marginLeft: "60px", marginTop: "10px" }}
            >
              <Typography id="grp">
                детей получили помощь благодаря вам
              </Typography>
              <Typography id="grh">лет спасаем детей вместе</Typography>
            </Box>
            <Box>
              <h1
                style={{
                  fontSize: "50px",
                  marginLeft: "80px",
                  marginTop: "120px",
                }}
              >
                Медицинские программы
              </h1>
              <HomeCards />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
