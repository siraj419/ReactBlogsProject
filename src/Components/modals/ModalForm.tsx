import { FC, FormEvent, useState } from "react"
import { blogShape } from "../../types"

interface ModalFormShape {
    buttonLabel: string,
    onSubmit: (e : FormEvent<HTMLFormElement>) => void
    onCancel: () => void,
    blogData: blogShape | undefined
}

const ModalForm : FC<ModalFormShape> = ({buttonLabel, onSubmit, onCancel, blogData}) => {

  const [title, setTitle] = useState<string | undefined>(blogData?.title);
  const [description, setDescription] = useState<string | undefined>(blogData?.description);
  const [imageURL, setImageURL] = useState<string | undefined>(blogData?.imageURL);
  const [date, setDate] = useState<string | undefined>(blogData?.date);

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Title"
          className="p-2 border-[1px] border-gray-200 rounded-lg"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea 
          placeholder="Description"
          className="p-2 border-[1px] border-gray-200 rounded-lg"
          rows={4}
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        ></textarea>
        <input 
          type="text"
          placeholder="Image URL"
          className="p-2 border-[1px] border-gray-200 rounded-lg"
          name="imageURL"
          value={imageURL}
          onChange={e => setImageURL(e.target.value)}
          required
        />
        <input 
          type="date"
          placeholder="DD/MM/YYYY"
          className="p-2 border-[1px] border-gray-200 rounded-lg"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <div className="flex gap-3 justify-end">
            <button
                className="text-white bg-blue-500 px-5 py-1 w-fit rounded hover:text-gray-300 cursor-pointer"
                type="submit"
            >
                {buttonLabel}
            </button>
            <button
                className="text-white bg-gray-500 px-4 py-1 w-fit rounded hover:text-gray-300 cursor-pointer"
                type="button"
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
      </form>
  )
}

export default ModalForm