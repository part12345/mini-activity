import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Hello, my name is John Patrick.
      </h1>

      <p className="mt-4">
        I am an IT student who enjoys learning
        about programming and web development.
        I want to improve my skills by creating
        useful websites and applications.
      </p>

      <Link
        href="/projects"
        className="mt-4 inline-block underline"
      >
        See my projects
      </Link>
    </main>
  );
}
