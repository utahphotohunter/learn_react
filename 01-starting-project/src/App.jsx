import stateImg from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

// function CoreConcept({image, title, description}) {
//   /* ******************************************
//    * This function is the same as the above
//    * function.
//    *
//    * Using object destructuring in the
//    * arguments of the function, you can also
//    * replace the props object with its
//    * destructured version, allowing you
//    * to call the properties directly, without
//    * having to call them with props.your_item
//    * **************************************** */
//   return (
//     <li>
//       <img src={image} alt={description} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }

function App() {
  const handleClick = () => {
    console.log("Hello World!");
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              /* ******************************************
               * This long hand way works, using image,
               * title, and description as keys to
               * the values found in the data.js file.
               * **************************************** */
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              /* ******************************************
               * This also works, using the spread
               * operator to access all the key value
               * pairs in the object located at index 1
               * of the data.js file. However, this only
               * works when the keys in the data are
               * the same as the arguments taken in
               * the function definition.
               * **************************************** */
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              /* ******************************************
               * Lastly, this is also an option, though it
               * isn't very clean and doesn't utilize the
               * dynamic nature of react nearly to the
               * extent that it can be useful. However,
               * notice how the image is still being
               * imported.
               * **************************************** */
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
              image={stateImg}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton onSelect={handleClick}>JSX</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
