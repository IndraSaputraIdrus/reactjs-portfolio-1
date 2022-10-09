import PortfolioItem from "./Portfolioitem";

function Portfolio() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-slate-200">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet{" "}
          <span className="text-teal-500">consectetur</span> adipisicing elit.{" "}
          <span className="text-teal-500">Repudiandae</span> eligendi tenetur
          nostrum qui iste voluptates?
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nesciunt
          et delectus eius.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </>
  );
}

export default Portfolio;
