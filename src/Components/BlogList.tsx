import { useContext } from "react"
import { blogContext } from "../store/blogContext"
import Blog from "./Blog";

const BlogList = () => {
  const {blogs} = useContext(blogContext);

  return (
    <div className="bg-red mt-5 flex flex-col gap-3">
      {
        blogs.map((blog, index) => (
          <Blog
            key={index}
            blog={blog} 
          />
        ))
      }
    </div>
  )
}

export default BlogList