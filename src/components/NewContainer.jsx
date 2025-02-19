import NewArticle from './NewArticle'; 

export default function NewContainer() {
  return (
    <aside className='bg-gray-900 '>
      <h1 className="text-orange-400 text-4xl font-bold py[28px] px-[20px]">New</h1>
      <NewArticle 
        title ="Hydrogen VS Electric Cars"
        text ="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <NewArticle
        title ="The Downsides of AI Artistry"
        text ="What are the possible adverse effects of on-demand AI image generation??"
      />
      
      <NewArticle 
        title= "Is VC Funding Drying Up?"
        text ="Private funding by VC firms is down 50% YOY. We take a look at what that means."
      />
    </aside>
  );
}







