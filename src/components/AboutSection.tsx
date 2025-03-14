import Image from "next/image";

interface AboutCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function AboutCard({ title, description, imageSrc }: AboutCardProps) {
  return (
    <div className="flex flex-col items-center mb-10 md:mb-0">
      <div className="w-[250px] h-[250px] rounded-full overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={250}
          height={250}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
      </div>
      <h3 className="text-xl font-lusitana font-bold text-azvdo-dark mb-4">
        {title}
      </h3>
      <p className="text-azvdo-gray text-center max-w-md">
        {description}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-lusitana font-bold text-azvdo-dark mb-12 pb-2 border-b border-azvdo-lightgray">
          Sobre Mim
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutCard
            title="Quem Sou Eu"
            imageSrc="/images/about-1.jpeg"
            description="Meu nome é Augusto Azevedo e sou um profissional apaixonado por tecnologia, programação e inovação. Com uma sólida experiencia em várias tecnologias, envolvendo desde desenvolvimento web até ciência de dados."
          />

          <AboutCard
            title="Experiência Profissional"
            imageSrc="/images/about-2.jpeg"
            description="Tenho atualmente pouca experiência profissional, mas muitos anos de estudo e um background na área da programação que vai até meus 12 anos de idade, quando programei meu primeiro programa (um jogo de escolhas RPG em visualg), tudo influenciado por familiares também inseridos na área."
          />

          <AboutCard
            title="Habilidades Técnicas"
            imageSrc="/images/about-3.jpeg"
            description="Minhas principais habilidades incluem SQL, Python, Spark, JavaScript, IA e inúmeros frameworks e ferramentas, desenvolvimento de aplicativos responsivos e otimização de SEO. Estou sempre aprendendo novas tecnologias para me manter atualizado no mercado em constante evolução."
          />
        </div>
      </div>
    </section>
  );
}
