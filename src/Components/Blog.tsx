import { FC, useContext, useState } from "react"
import { blogShape } from "../types"
import { IoTrashBin } from "react-icons/io5"
import { MdEdit } from "react-icons/md"
import { FaBookmark } from "react-icons/fa"
import { blogContext } from "../store/blogContext"
import EditBlogModal from "./modals/EditBlogModal"

const Blog : FC<{blog: blogShape}> = ({blog}) => {

  const {deleteBlog} = useContext(blogContext);
  const [showEditBlogModal, setShowEditBlogModal] = useState<boolean>(false);

  return (
    <>
      <article 
        id={blog.id.toString()}
        className="flex w-[850px] gap-2 border-[1px] shadow p-5 rounded border-gray-200 bg-white
                  hover:scale-105 transition duration-300"
      >
        <img 
            src={blog.imageURL}
            alt={blog.title} 
            className="w-[200px]"
        />

        <section 
            className="flex flex-col w-full"
        >
            <h4 className="text-xl font-bold">
              {blog.title}
            </h4>
            <p className="h-full">
              {blog.description}
            </p>
            <span className="mt-1">
              <b>Date:</b> {blog.date}
            </span>
            <section 
              className="flex justify-end gap-2"
            >
              <FaBookmark 
                className="text-gray-500 cursor-pointer hover:text-gray-400"
                size={20}
              />
              <MdEdit 
                className="text-blue-500 cursor-pointer hover:text-blue-400"
                size={20}
                onClick={()=> setShowEditBlogModal(true)}
              />
              <IoTrashBin 
                className="text-red-500 cursor-pointer hover:text-red-400"
                size={20}
                onClick={() => deleteBlog(blog.id)}
              />
            </section>
        </section>
      </article>
      {
        showEditBlogModal &&
        <EditBlogModal 
          closeModal={() => setShowEditBlogModal(false)}
          blogData={blog}
        />
      }

    </>
  )
}

export default Blog