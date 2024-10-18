import ObjectiveCards from "../components/ObjectiveCards.jsx" ;

const Styles = {
  container: `
    w-full h-full 
    p-8 pt-4 sm:pt-12 
    bg-everforest-back-200 
    text-everforest-blue 
    flex flex-col 
    gap-8 items-center
  `,
  cardContainer: `
    w-full 
    flex-grow 
    sm:flex sm:flex-wrap 
    sm:justify-around sm:items-center 
    overflow-y-auto
  `
}

const Objective = () => {
  return (
    <div className={Styles.container}>
      <h1 className="text-8xl font-semibold h-fit">About Me</h1>
      <div className={Styles.cardContainer}>
        <ObjectiveCards />
      </div>
    </div>
  );
};

export default Objective;
