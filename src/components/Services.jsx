import ServicesItem from "./ServicesItem";

function Services() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-1 dark:text-slate-200">Services I offer</h3>
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

      <div className="lg:flex gap-10">
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
      </div>
    </>
  );
}

export default Services;
