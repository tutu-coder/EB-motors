type CarProps = {
  name: string;
  price: string;
  image: string;
};

export default function CarCard({ name, price, image }: CarProps) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-gray-400 mt-2">{price}</p>

        <button className="mt-6 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
          Explore Vehicle
        </button>
      </div>

    </div>
  );
}