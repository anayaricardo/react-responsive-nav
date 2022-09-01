import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
          <a
            href="https://blog.logrocket.com/create-responsive-navbar-react-css/"
            target="_blank"
            rel="noreferrer"
          >
            Read the tutorial here
          </a>
        </article>
      </div>
    </div>
  );
}

export default App;