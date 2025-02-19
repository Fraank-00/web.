export default function NewArticle({title, text}) {
    return (
      <article className="text-neutral-50 h-[140px] border-b-2 border-gray-400
       py-7 last:border-none lg:h-[160px] lg:pt-4">

        <h2 className="cursor-pointer hover:text-orange-400 text-[20px]
        mb-3 font-bold lg:text[16px] xl:text-[20px]">{title}</h2>

        <p className="text-[15px]">{text}</p>
      </article>
    );
  }
  