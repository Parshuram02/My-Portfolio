import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto z-10 text-center">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow text-foreground">
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">{" "}Hello, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Prashant</span>
                </h1>
                <p className="text-xl md:text-xl text-foreground/80 opacity-0 animate-fade-in-delay-3">
A Passionate Full-Stack Developer and Competitive Programmer crafting secure, scalable, and intelligent web experiences. I love solving complex problems — from algorithms to architecture — and turning ideas into impactful digital products.                </p>
                <div className="mt-6 opacity-0 animate-fade-in-delay-4">
                    <a
                        href="#projects"
                        className="cosmic-button">
                        View My Work
                    </a>
                </div>
                
                
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate w-full  justify-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-6 text-primary"/>

        </div>
    </section>
    );
};