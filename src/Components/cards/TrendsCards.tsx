import { trends } from "../../db/trends"

const TrendsCards = () => {
  return (
    <div className="w-[300px] p-2 shadow rounded">
      <h4 
        className="font-bold text-xl mb-3"
      >
        Today's Top Trends
      </h4>

      <section className="flex flex-col gap-1">
        {
          trends.map((trend) => (
            <div >
              <h5 className="font-bold mb-[-10px] text-sm">{trend.title}</h5>
              <span className="text-gray-500 text-xs">By {trend.author}</span>
            </div>
          ))
        }
      </section>

    </div>
  )
}

export default TrendsCards