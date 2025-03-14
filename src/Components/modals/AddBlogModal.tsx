import { FC, FormEvent, useContext } from "react"
import ModalForm from "./ModalForm";
import { CgClose } from "react-icons/cg";
import { blogShape } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { blogContext } from "../../store/blogContext";



interface BlogFormModalShape{
  closeModal: () => void;
}

const BlogFormModal :FC<BlogFormModalShape> = ({closeModal}) => {

  const {addBlog} = useContext(blogContext);

  const submitHandler = (e : FormEvent) => {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries());

    const newBlog : blogShape = {
      id: uuidv4(),
      title: formData.title as string,
      description: formData.description as string,
      imageURL: formData.imageURL as string,
      date: formData.date as string,
    }

    addBlog(newBlog);
    closeModal();
  };

  return (
    <div className="
      w-[300px] absolute p-5 border-[1px] border-gray-300 rounded
      top-[100px] bg-white z-50"
      style={{boxShadow: "0 0 0 1000px rgba(0, 0, 0, 0.7)"}}
    >
      <h4 className="text-xl font-bold mb-5">
        Add a Blog
      </h4>

      <ModalForm
        buttonLabel={"Add"}
        onSubmit={submitHandler}
        onCancel={closeModal}
        blogData={undefined}
      />

      {/* Close Button */}
      <button 
        className="absolute top-[8px] right-[8px] cursor-pointer hover:text-gray-500"
        onClick={closeModal}
      >
        <CgClose />
      </button>

    </div>
  )
}

export default BlogFormModal