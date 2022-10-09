import web1 from "../assets/web1.png";

function PortfolioItem() {
  return (
    <div className="basis-1/3 flex-1">
      <img
        src={web1}
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
        alt="portfolio"
      />
    </div>
  );
}

export default PortfolioItem;
