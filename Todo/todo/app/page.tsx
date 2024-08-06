import Appbar from "@/components/appbar";
import CreateTodo from "@/components/createTodo";
import Alltodos from "@/components/alltodos";
export default async function Home() {
  
  return (
    <div>
        <Appbar></Appbar>
        <CreateTodo></CreateTodo>
        <Alltodos></Alltodos>
    </div>
  );
}
