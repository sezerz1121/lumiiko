import { GLSLHills } from "@/components/ui/glsl-hills";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      <GLSLHills />
      <div className="space-y-4 sm:space-y-6 pointer-events-none z-10 text-center absolute px-6 sm:px-10 max-w-4xl mx-auto">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal">
          <span className="italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin block mb-1 sm:mb-2">
            Designs That Speak <br />
          </span>
          Louder Than Words
        </h1>
        <p className="text-sm text-primary/60 px-2 sm:px-0">
          We craft stunning visuals and user-friendly experiences that{" "}
          <br className="hidden sm:block" /> help your brand stand out and
          connect with your audience.
        </p>
      </div>
    </section>
  );
}