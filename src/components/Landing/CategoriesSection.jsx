export default function CategoriesSection() {
  const categories = ["Electronics", "Fashion", "Accessories", "Home"];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((cat, i) => (
          <div key={i} className="card bg-base-100 shadow hover:shadow-lg cursor-pointer">
            <div className="card-body text-center">
              <h3 className="font-semibold">{cat}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
