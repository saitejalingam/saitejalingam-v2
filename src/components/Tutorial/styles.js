export const styles = {
  Overlay: {
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.48)",
    position: "absolute"
  },
  Content: {
    width: "calc(90vw)",
    maxWidth: 600,
    fontFamily: "Montserrat"
  },
  Oak: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 150
  },
  Dialogue: {
    padding: 30,
    lineHeight: 1.5,
    fontSize: 16,

    position: "relative",
    height: 175,
    userSelect: "none"
  },
  Prompt: {
    marginTop: 20,
    opacity: 0.5,
    fontSize: 15,

    animationName: "blink",
    animationDuration: "1s",
    animationIterationCount: "infinite"
  },
  Exit: {
    top: 15,
    right: 15,
    position: "absolute",
    zIndex: 100
  }
};
