import { connect } from "@Themes/OsmiProvider";

export default connect({
  container: "px-2 py-2 z-50",
  btnContainer: "bg-white shadow rounded-md",
  imageError: "flex h/12 rounded-md bg-gray-800 items-center justify-center",
  image: "flex h/12 rounded-md",
  textError: "text-white text-center font-bold",
  bottomContainer:
    "absolute bottom-0 bg-black bg-opacity-30 px-2 py-2 rounded-b-md full",
  textName: 'text-white',
});
