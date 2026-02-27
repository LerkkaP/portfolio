import Image from "next/image";

export default function Home() {
  return (
    <main>
    <div className="grid"></div>
    <section className="hero-content">
      <div className="info">
        <h1>Erik Peteri</h1>
        <p>
          I am currently pursuing a Master’s degree in Data Science at the University of Helsinki, with a strong interest in both the
          theoretical foundations and practical applications of data science. I am also fascinated by human cognition in all its dimensions, from cognitive processes
          to the neural mechanisms underlying them.
        </p>
        <p>
          I work as a teaching assistant at the Department of Computer Science in the <a href="https://linkki.cs.helsinki.fi/en/">Linkki Science Lab</a>
          , a unit focused on early education in computer science and programming. I have also been a long-time instructor
          in the course <a href="https://hy-tikawe.github.io/materiaali/">Databases and Web Programming</a>.
        </p>
        <div className="icons">
          <a href="https://github.com/LerkkaP">
            <Image 
              src="/github.svg"
              width="40"
              height="40"
              alt="Github icon"
            />
          </a>
          <a href="https://linkedin.com/in/erikpeteri">
            <Image 
              src="/linkedin.svg"
              width="40"
              height="40"
              alt="Linkedin icon"
            />        
          </a>
        </div>
      </div>    
      <Image 
        src="/picture.png"
        width="240"
        height="240"
        alt="Picture of Erik"
      />
    </section>
    </main>
  );
}
