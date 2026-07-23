import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="relative w-48 h-16 md:w-64 md:h-20 mb-8">
        <Image
          src="/images/logo-transparent-v2.webp"
          alt="Nexora Square Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <h1 className="text-6xl md:text-8xl font-black text-[#99D508] mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-8 text-sm md:text-base leading-relaxed">
        The workspace or page you are looking for doesn't exist or has been relocated.
      </p>

      <Link
        href="/"
        className="px-8 py-4 bg-[#99D508] text-[#0C0C0C] font-bold text-sm uppercase tracking-widest rounded-xl hover:opacity-90 transition-all transform active:scale-95 shadow-lg shadow-[#99D508]/20"
      >
        Return to Home
      </Link>
    </div>
  );
}
