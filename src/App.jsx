import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post 
        author="Luis Felipe"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
      <Post
        author="Teste"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
      />
    </div>
  )
}