import Design from "../assets/design.png";

function ServicesItem() {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-200">
      <img
        alt="services"
        src={Design}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
      <p className="py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Necessitatibus, excepturi.
      </p>
      <h4 className="py-4 text-teal-600">Design tools I use</h4>
      <p className="text-gray-800 py-1">photoshop</p>
      <p className="text-gray-800 py-1">Figma</p>
    </div>
  );
}

export default ServicesItem;
