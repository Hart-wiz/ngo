interface HelpIconItemProps {Icon: any; title: string; desc: string; color: string;}

const HelpIconItem = ({ Icon, title, desc, color }:HelpIconItemProps) => (
  <div className="flex gap-8 group">
    <div className={`${color} w-20 h-20 flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform`}>
      <Icon className="text-white" size={36} />
    </div>
    <div className="flex flex-col justify-center">
      <h4 className="text-xl font-bold mb-2 tracking-tight">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
        {desc}
      </p>
    </div>
  </div>
);

export default HelpIconItem;