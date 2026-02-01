
interface CauseCardProps {
    image: string;
    title: string;
    progress: number;
    raised: string;
    goal: string;
    desc: string;
  }


const CauseCard = ({ image, title, progress, raised, goal, desc }:CauseCardProps) => (
    <div className="bg-white shadow-xl hover:-translate-y-2 transition-all duration-300 group rounded-sm overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute bottom-4 right-4 bg-[#F7C51E] text-black text-xs font-bold px-3 py-1 shadow-lg">
          {progress}% Funded
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <div className="h-full bg-[#F7C51E]" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center justify-center">{title}</h3>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed min-h-[4rem]">
          {desc}
        </p>
        <div className="text-xs mb-8 text-gray-600 font-bold uppercase tracking-widest border-y border-gray-50 py-3">
          Raised : <span className="text-[#F7C51E] text-lg">{raised}</span> <span className="mx-2 opacity-20">/</span> {goal}
        </div>
        <button className="w-full border-2 border-gray-200 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F7C51E] hover:border-[#F7C51E] hover:text-black transition-all">
          Support This Cause
        </button>
      </div>
    </div>
  );

  export default CauseCard;