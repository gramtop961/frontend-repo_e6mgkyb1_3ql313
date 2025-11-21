function FeaturedRow({ title, items = [] }) {
  return (
    <section className="relative">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 px-6">{title}</h2>
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-4 px-6 pb-2">
          {items.map((item) => (
            <a key={item.id || item.title} className="group relative w-48 sm:w-56 flex-none cursor-pointer">
              <img
                src={item.cover_url || item.thumb_url}
                alt={item.title}
                className="h-64 w-full object-cover rounded-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none"></div>
              <div className="mt-2 text-blue-100 text-sm line-clamp-1">{item.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedRow
