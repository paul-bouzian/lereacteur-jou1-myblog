import Item from "./Content/Item";
import Footer from "./Footer";
import "./Content.css";

const Content = () => {
  return (
    <main>
      <div className="mainContent">
        <Item
          item={{
            title: "TITLE HEADING",
            description: "Title description",
            content:
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          }}
        />

        <Item
          item={{
            title: "TITLE HEADING",
            description: "Title description",
            content:
              "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
          }}
        />
      </div>
      <div className="sideContent">
        <Item
          item={{
            title: "ABOUT ME",
            description: "",
            content: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
          }}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Content;
