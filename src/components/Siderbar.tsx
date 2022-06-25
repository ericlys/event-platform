import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  closeModal: () => void;
}

export function Sidebar(props: SidebarProps){
  const { data } = useGetLessonsQuery();

  return (
    <aside className=" w-full md:w-[348px] bg-gray-700 p-6 border-1 border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        { data?.lessons.map(lesson => {
          return (
            <Lesson 
            closeSideba = {props.closeModal}
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
          )
        })}
      </div>
    </aside>
  )
}