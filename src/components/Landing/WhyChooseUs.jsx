import { FaTruck, FaLock, FaUndo } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    { icon: <FaTruck />, text: "Fast Delivery" },
    { icon: <FaLock />, text: "Secure Payment" },
    { icon: <FaUndo />, text: "Easy Return" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {features.map((f, i) => (
          <div key={i} className="card bg-base-100 shadow text-center">
            <div className="card-body">
              <div className="text-4xl text-primary mx-auto">
                {f.icon}
              </div>
              <h3 className="mt-3 font-semibold">{f.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
