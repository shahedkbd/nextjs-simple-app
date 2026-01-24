export default function Newsletter() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold">
        Stay Updated
      </h2>
      <p className="text-gray-500 mt-2">
        Subscribe for exclusive offers and updates.
      </p>

      <div className="flex justify-center mt-4 gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary">
          Subscribe
        </button>
      </div>
    </section>
  );
}
