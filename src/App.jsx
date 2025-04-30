import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Luis Felipe"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
          <Post
            author="Teste"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          />
        </main>
      </div>
    </div>
  )
}