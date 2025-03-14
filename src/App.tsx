import AddBlogButton from "./Components/AddBlogButton";
import BlogList from "./Components/BlogList";
import PeopleCard from "./Components/cards/PeopleCard/PeopleCard";
import TopicsCard from "./Components/cards/TopicsCard";
import TrendsCard from "./Components/cards/TrendsCards";
import Header from "./Components/Header";
import { BlogContextProvider } from "./store/blogContext";

function App() {

  return (
    <div className="h-[100vh]">
        <Header />
        <main className="flex">

          {/* Section for Blogs */}
          <section className="w-full flex flex-col items-center p-5">
            <BlogContextProvider>
              <AddBlogButton />
              <BlogList />
            </BlogContextProvider>
          </section>

          <aside className="px-5 py-2 flex flex-col gap-3">
            <PeopleCard />
            <TrendsCard />
            <TopicsCard />
          </aside>
          

        </main>
    </div>
  )
}

export default App;