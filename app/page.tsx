import AddLink from "./AddLink";
import Links from "./components/Links";

export default function Home() {
  return (
    <div className="h-screen w-screen p-16 flex space-x-20">
      <AddLink/>
      <Links/>
    </div>
  );
}
