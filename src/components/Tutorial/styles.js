export const styles = {
  Overlay: {
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.48)",
    position: "absolute"
  },
  Content: {
    marginTop: "10%",
    background: "rgba(255, 255, 255, 0.9)",

    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",

    width: "calc(90vw)",
    maxWidth: 600,
    fontFamily: "Montserrat"

    // animation-name: slideIn,
    // animation-duration: 0.5s,
  },
  Oak: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 175
  },
  Dialogue: {
    padding: 30,
    lineHeight: 1.5,
    fontSize: 16,

    position: "relative",
    height: "calc(50vh)",
    maxHeight: 200
  },
  Prompt: {
    marginTop: 20,
    opacity: 0.5,
    fontSize: 14,

    animationName: "blink",
    animationDuration: "1s",
    animationIterationCount: "infinite"
  },
  Exit: {
    top: 30,
    position: "absolute",
    right: 30,
    fontFamily: "Montserrat",
    fontWeight: 700,
    display: "flex",
    zIndex: 100
  }

  //   .exit {
  //     top: 5%;
  //     position: absolute;
  //     right: 3%;
  //     font-family: Montserrat;
  //     font-weight: 700;
  //     display: flex;
  //     z-index: 100000;

  //     span {
  //       position: absolute;
  //       top: 100%;
  //       left: 50%;
  //       transform: translateX(-50%);
  //       font-family: Pokemon;
  //       letter-spacing: -1px;
  //       font-size: 10px;
  //     }

  //     img {
  //       cursor: pointer;
  //       margin-left: 10px;
  //       height: 150px;
  //     }
  //   }
};
