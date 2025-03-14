import { createContext, FC, ReactNode, useState } from "react";
import { blogShape } from "../types";

interface blogContextShape{
    blogs: blogShape[],
    deleteBlog: (id : string) => void,
    addBlog: (newBlog: blogShape) => void,
    updateBlog: (newBlog: blogShape) => void
};

const blogContext = createContext<blogContextShape>(
    {
        blogs: [], 
        deleteBlog: () => {},
        addBlog: () => {},
        updateBlog: () => {}
    }
);

const BlogContextProvider : FC<{children: ReactNode}>  = ({children}) => {

    const [blogs, setBlogs] = useState<blogShape[]>([]);

    const addBlog = (newBlog: blogShape) => {
        setBlogs([...blogs, newBlog]);
    }

    const deleteBlog = (id: string) => {
        setBlogs(blogs.filter((blog: blogShape) => blog.id != id));
    }

    const updateBlog = (newBlog: blogShape) => {
        const index = blogs.findIndex((blog) => blog.id === newBlog.id);
        blogs[index] = newBlog;
        setBlogs([...blogs]);
    }

    return (
        <blogContext.Provider
            value={{
                blogs,
                deleteBlog,
                addBlog,
                updateBlog
            }}
        >
            {children}
        </blogContext.Provider>
    )
}


export {
    blogContext,
    BlogContextProvider
};