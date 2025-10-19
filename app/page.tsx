import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loko Ismaël | Full Stack Developer",
  description:
    "Hi, I'm Loko Ismaël — a passionate Full Stack Developer sharing my coding journey, projects, and learning experiences in web development.",
};

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">
        Welcome to <span className="text-[#066cfb]">BitsOfIsmael</span>
      </h1>
    </>
  );
}
