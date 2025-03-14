import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] w-full flex items-center justify-center text-center px-4 py-20">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/hero-background.jpeg')",
          filter: "brightness(0.7)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-lusitana font-bold text-white mb-4">
          Currículo Online Augusto Azevedo
        </h1>
        <p className="text-xl md:text-2xl text-white font-lato mb-8">
          Profissional qualificado em Data Science e inovação digital
        </p>
        <Button asChild className="bg-white text-azvdo-dark hover:bg-azvdo-lightgray text-base px-8 py-6 rounded">
          <Link href="tel:+5548988189431">Contate-me</Link>
        </Button>
      </div>
    </section>
  );
}
