import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { lanen, lanko } from "../redux/language";
import styles from "./Header.module.css";
import { color, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

function Header(props) {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();
  // //laguage 선택
  const [language, setLanguage] = useState("ko");

  const [isKorean, setIsKorean] = useState(true);

  const handleEn = () => {
    dispatch(lanen());
    //setLanguage(newAlignment);
    setIsKorean(false);
    //언어변경
    i18n.changeLanguage("en");
  };
  const handleKo = () => {
    dispatch(lanko());
    setIsKorean(true);
    i18n.changeLanguage("ko");
  };

  // 뒤로가기 클릭 시 (나가기)
  const backBtn = () => {
    props.globeRef.current.resumeAnimation();
    props.setClickD(null);
    props.setPoint({
      altitude: 2.5,
    });
    props.setLeft(0);
    props.setSidebarD(-500);
  };
  return (
    <div className={styles.flex}>
      <div style={{ width: "25%" }}>
        {/* <span>
          <img className={styles.img} src="/assets/earth.png" alt="배너1" /> KO
          |{" "}
        </span>
        <span>EN</span> */}

        {/* <ToggleButtonGroup
          color="primary"
          exclusive
          aria-label="text alignment"
          value={language}
          onChange={changeLanguage}
        >
          <ToggleButton value="ko" aria-label="centered" onClick={handleKo}>
            <img src="/assets/logo/ko.png" />
          </ToggleButton>
          <ToggleButton value="en" aria-label="centered" onClick={handleEn}>
            <img src="/assets/logo/en.png" />
          </ToggleButton>
        </ToggleButtonGroup> */}

        <div className={styles.language}>
          <img className={styles.globe} src="/assets/logo/globe.png" />
          <div onClick={handleKo} className={styles.landiv}>
            <motion.div
              className="box"
              initial={{ x: 0 }}
              animate={{
                x: isKorean ? 0 : 75,
              }}
            >
              <p
                className={styles.lan}
                style={{ color: isKorean ? "" : "#7b7b7b" }}
              >
                Korean
              </p>
            </motion.div>
          </div>
          <div className={styles.line}>|</div>
          <div onClick={handleEn} className={styles.landiv}>
            <motion.div
              className="box"
              initial={{ x: 0 }}
              animate={{
                x: isKorean ? 0 : -75,
              }}
            >
              <p
                className={styles.lan}
                style={{ color: isKorean ? "#7b7b7b" : "" }}
              >
                English
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div style={{ width: "50%" }}>
        {props.clickD ? (
          <div></div>
        ) : (
          /* &#128204; {t("header.Topic")} */
          <div className={styles.ticker}>
            <div className={styles.newstitle}>{t("header.Topic")} </div>
            <ul className={styles.ul}>
              <li>Hello News!</li>
              <li>Hello News!</li>
              <li>Hello News!</li>
              <li>Hello News!</li>
              <li>Hello News!</li>
            </ul>
          </div>
        )}
      </div>
      <div style={{ width: "25%" }}>
        {props.clickD ? (
          // <Button variant="outlined" className={styles.button} onClick={backBtn}>
          //   뒤로가기
          // </Button>
          <CloseIcon onClick={backBtn} style={{ float: "right" }} />
        ) : (
          <div></div>
          // <img className={styles.icon} src="/assets/3d/airplane.png"></img>
        )}
      </div>
    </div>
  );
}

export default withTranslation()(Header);
