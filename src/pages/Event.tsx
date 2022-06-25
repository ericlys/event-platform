import classNames from "classnames"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Siderbar"
import { Video } from "../components/Video"

export function Event() {
  const { slug } = useParams<{slug: string}>()
  const [modalState, setModalState] = useState(false);

  console.log(slug)

  function handleOpenModal() {
    setModalState(true);
    console.log(modalState)

  }

  function handleCloseModal() {
    setModalState(false);
    console.log(modalState)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header modalState={modalState} openModal={handleOpenModal} closeModal={handleCloseModal}/>
      <main className="flex flex-1">
        { slug && !modalState ? 
          <Video lessonSlug={slug}/> 
           : 
          <div className="flex-1"
        />}
        <div className={classNames("md:flex", {
          "absolute z-10 flex h-full w-full": modalState,
          "hidden": !modalState,
        })}>
          <Sidebar  closeModal={handleCloseModal}/> 
        </div>
      </main>
    </div>
  )

}
