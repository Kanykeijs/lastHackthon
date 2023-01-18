import "./Footer.css";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="text-us">Напишите нам</button>
            <br />
            <br />
            <ul className="list-address">
              <li>ул. Малая Дмитровка, д. 16, стр. 6</li>
              <br />
              <li>+996 (456) 567-98-89,</li>
              <li>info@life-line.kg</li>
            </ul>
            <div className="icons">
              <ul>
                <li>
                  <TelegramIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
                <li>
                  <WhatsAppIcon />
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="inp">
              <div className="search">
                <input type="text" placeholder="Поиск по сайту" />
              </div>
              <ul>
                <li>по медицинской части</li>
                <li>+996 (657) 678-88-90, medicial@life-line.kg</li>
                <br />
                <li>о программе фонда и условиях участия в ней</li>
                <li>+996 (456) 567-98-34,info@life-line.kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;