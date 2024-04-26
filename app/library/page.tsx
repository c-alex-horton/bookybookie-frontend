import Title from "@/components/Title";
import {books} from "@/lib/bookData";
import BookTable from "./table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-center">
        <Title>My Library</Title>
        <BookTable books={books} />
      </div>
    </main>
  );
}
