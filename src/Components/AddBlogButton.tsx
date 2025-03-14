import { useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import AddBlogModal from "./modals/AddBlogModal";

const AddBlogButton = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex gap-2 items-center bg-black text-white 
        px-3 py-1.5 text-lg shadow rounded cursor-pointer hover:text-gray-200"
        onClick={() => setShowModal(true)}
      >
        <span>Add New Blog</span>
        <BiPlusCircle size={22} />
      </button>

      {
        showModal &&
        <AddBlogModal 
          closeModal={() => setShowModal(false)}
        />
      }

    </>
  )
}

export default AddBlogButton 