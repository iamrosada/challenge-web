import { PostModelx } from "@/app/domain/models";
import React from "react";

type ContextProps = {
  posts: PostModelx[];
  createPost: (posts: PostModelx) => void;
  onRemovePost: (id: string) => void;
  onGetFromToggle: (value: boolean) => void;
  getFromToggle: boolean;
};

const postsContext = React.createContext<ContextProps>({
  createPost: () => {},
  onRemovePost: () => {},
  posts: [],
  onGetFromToggle: () => {},
  getFromToggle: false,
});
export const usePosts = () => {
  const context = React.useContext(postsContext);

  if (!context) throw new Error("usePosts must be used within a PostsProvider");
  return context;
};
const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = React.useState<PostModelx[]>([]);
  const [hydrated, setHydrated] = React.useState(false);

  const [createPosts, setCreatePosts] = React.useState<PostModelx>();
  const [getFromToggle, setGetFromToggle] = React.useState(false);
  const [removePosts, setRemovePosts] = React.useState<PostModelx[]>(posts);

  const createPost = (value: PostModelx) => {
    setPosts([...posts, value]);
  };

  const onRemovePost = (id: string) => {
    const itemRemoved = removePosts.filter((item) => item.id !== id);
    setPosts(itemRemoved);
  };
  const onGetFromToggle = (value: boolean) => {
    setGetFromToggle(value);
  };

  return (
    <postsContext.Provider
      value={{
        posts,
        onRemovePost,
        createPost,
        onGetFromToggle,
        getFromToggle,
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
export default PostsProvider;
// import React from "react";

// export type PostProps = {
//   end: Date;
//   start: Date;
//   title: string;
//   location: string;
//   allDay: boolean;
//   isDeleted: boolean;
//   isConfirmed: boolean;
//   _id: string;
//   __v: number;
//   id: string;
// };

// type ContextProps = {
//   posts: PostProps[];
//   createPosts: PostProps[];
//   onAddPost: (post: PostProps) => void;
//   onRemovePost: (post: {}) => void;
// };
// const contentType = "application/json";
// const postsContext = React.createContext<ContextProps>({
//   onRemovePost: ()=>{}
//   // posts: [],
//   // onAddPost:()=> []
//   // onRemovePost: () => {},
// });

// export const useposts = () => {
//   const context = React.useContext(postsContext);

//   if (!context) throw new Error("useposts must be used within a PostsProvider");
//   return context;
// };

// const postsProvider = ({ children }: { children: React.ReactNode }) => {
//   const [posts, setposts] = React.useState<postProps[]>([]);
//   const [hydrated, setHydrated] = React.useState(false);
//   const [createposts, setCreateposts] = React.useState<postProps[]>([]);
//   const [removePosts, setRemovePosts] = React.useState<postProps[]>([]);

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const data_ = await fetch("/api");
//       const { data } = await data_.json();

//       setposts(
//         data.map((item: postProps) => ({
//           ...item,
//           start: new Date(item.start),
//           end: new Date(item.end),
//         }))
//       );
//     };

//     fetchData().catch(console.error);
//     setHydrated(true);
//   }, []);

//   const onAddpost = React.useCallback(
//     async (post: postProps) => {
//       setposts([...posts, post]);

//       const res = await fetch("/api/", {
//         method: "POST",
//         headers: {
//           Accept: contentType,
//           "Content-Type": contentType,
//         },
//         body: JSON.stringify(post),
//       });

//       if (!res.ok) {
//         throw new Error("Error");
//       }
//     },
//     [posts.length]
//   );

//   const onEditpost = React.useCallback(
//     async (post: postProps) => {
//       setposts(posts.map((e) => (e._id === post._id ? post : e)));

//       const res = await fetch(`/api/schedule/${post._id}`, {
//         method: "PUT",
//         headers: {
//           Accept: contentType,
//           "Content-Type": contentType,
//         },
//         body: JSON.stringify(post),
//       });

//       if (!res.ok) {
//         throw new Error("Error");
//       }
//     },

//     [posts]
//   );

//   const onCreatepost = React.useCallback(
//     (post: postProps) => {
//       setCreateposts([...posts, post]);
//     },
//     [posts]
//   );

//   if (!hydrated) {
//     return null;
//   }
//   return (
//     <postsContext.Provider
//       value={{
//         posts,
//         onEditpost,
//         onCreatepost,
//         createposts,
//       }}
//     >
//       {children}
//     </postsContext.Provider>
//   );
// };
// export default postsProvider;

export type t = {};
