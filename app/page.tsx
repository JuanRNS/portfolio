import Description from "@/components/description/description";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Description />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
