import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col text-center items-center h-screen ">
      <div className="m-auto space-y-5">
        <p >Hi, I am applying my application for React Js (Entry level) job. Please check my resume and cover letter for the application.</p>
        <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start font-bold justify-center">
          <Link href="/resume" className="border rounded p-2 bg-black text-white ">Resume</Link>
          <Link href="/cover" className="border rounded p-2 bg-black text-white">Cover Letter</Link>
        </main>
      </div>
    </div>
  );
}
