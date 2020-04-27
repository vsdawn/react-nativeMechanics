import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  mainView: {
    backgroundColor: '#005DFF',
  },
  ImageBackground: {
    height: "100%",
    width: "100%",
    position: "relative"
  },
  outerLayerContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: "10rem",
    paddingBottom: "15rem",
    borderColor: "#464646",
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: "65rem"
  },
  innerContainer: {
    flexGrow: 1,
    margin: "10rem",
    justifyContent: "center"
  },
  outerContainer: {
    justifyContent: "center",
    // alignItems: 'center',
    flexGrow: 1
  },
  startTrip: {
    // ...Fonts.style.normal,
    color: "white"
  },
  textinputs: {
    marginBottom: "15rem",
    width: "100%",
    aspectRatio: 8,
    backgroundColor: "#fff",
    opacity: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderWidth: 0.5,
    justifyContent: "center",
    textAlign: "left"

    // paddingHorizontal: '10rem',
    // ...Fonts.style.verySmall,
  },
  buttonLogin: {
    borderRadius: 5,
    height: "45rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#005DFF",
    marginVertical: "10rem"
  },
  label: {
    marginBottom: "5rem",
    textAlign: "left",
    fontFamily: "Heebo-Regular",
    fontSize: "12rem",
    fontWeight: "500",
    fontStyle: "normal",
    color: "#999999"
  },
  logo: {
    height: 100,
    alignSelf: "center",
    marginHorizontal: "65rem",
    marginTop: "20%",
    marginBottom:'12%',
    flexGrow: 1,
    color:'#fff',
  },
  forgotPass: {
    textAlign: "center",
    fontSize: 12,
    color: "#2D9BF0"
  },
  loginText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Heebo-Regular",
    marginTop: "10rem",
    marginBottom: "3rem"
  },
  credText: {
    fontSize: 14,
    fontWeight: "300",
    fontFamily: "Heebo-Regular",
    marginTop: "10rem",
    marginBottom:'20rem'
  },
  switchColor: {
    color: '#005DFF',
  },
});
