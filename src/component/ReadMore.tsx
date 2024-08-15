import { useState } from "react";

const ReadMore = ({ limit, text }: { limit: number, text: string }) => {
  const [isReadMore, setReadMore] = useState(false);

  const toggleBtn = () => {
    setReadMore(!isReadMore);
  };

  return (
    <div>
      <p className="mb-2 text-l tracking-tight text-white">
        {isReadMore ? text : text.substr(0, limit)}
      </p>
      <button className="text-[#4CAFFB] font-semibold" onClick={toggleBtn}>
        {isReadMore ? "showless" : "...read more"}
      </button>
    </div>
  );
};

export default ReadMore;
