import "./App.css";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const createNewNote = () => {};
  return (
    <>
      <Header />
      <CreateNote createOnSubmit={createNewNote} />
      <Note />
      <Footer />
    </>
  );
}

export default App;
