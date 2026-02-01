interface NewsCardProps {image: string; title: string; date: string; desc: string;}
const NewsCard = ({ image, title, date, desc }: NewsCardProps) => (
  <div className="bg-white group cursor-pointer border border-gray-100 shadow-sm hover:shadow-xl transition-all">
    <div className="overflow-hidden aspect-video relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
        Update
      </div>
    </div>
    <div className="p-8">
      <div className="flex items-center gap-3 text-[10px] font-bold text-[#F7C51E] mb-4 uppercase tracking-[0.2em]">
        <span>{date}</span>
        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
        <span className="text-gray-400">Empowerment News</span>
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#F7C51E] transition-colors leading-snug">{title}</h4>
      <p className="text-sm text-gray-500 mb-8 leading-relaxed line-clamp-2">
        {desc}
      </p>
      <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
        Full Story <span className="text-[#F7C51E]">→</span>
      </button>
    </div>
  </div>
);

export default NewsCard;