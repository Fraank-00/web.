
import { Header } from "./components/header"
import { MainArticle } from "./components/MainArticle"
import ArticleContainer from "./components/ArticleContainer"
import NewContainer from "./components/NewContainer"



function App() {


  return (
    <>
      <main className="px-4 pt-6">
      <Header/>
      <div className="lg:flex lg:gap-8">
       <MainArticle/>
       <NewContainer/>
      </div>
      <ArticleContainer/>
      </main>
    </>
  )
}

export default App
