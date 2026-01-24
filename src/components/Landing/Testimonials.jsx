export default function Testimonials() {
  return (
    <section className="py-12 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {[1,2,3].map((i) => (
          <div key={i} className="card bg-base-100 shadow">
            <div className="card-body">
              <p className="text-sm text-gray-500">
                “Amazing quality and fast delivery. Highly recommended!”
              </p>
              <h4 className="mt-3 font-semibold">Customer Name</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
