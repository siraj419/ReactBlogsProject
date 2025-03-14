import { topics } from "../../db/topics"

const TopicsCard = () => {
  return (
    <div className="w-[300px] p-2 shadow rounded">
      <h3 
        className="text-xl mb-3"
      >
        Topics for you
      </h3>

      <section className="flex flex-wrap gap-1">
        {
          topics.map((topic) => (
            <span className="px-2 py-1 rounded-4xl bg-gray-200 text-xs">
              {topic}
            </span>
          ))
        }
      </section>
    </div>
  )
}

export default TopicsCard