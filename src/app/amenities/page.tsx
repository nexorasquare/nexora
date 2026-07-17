export default function AmenitiesPage() {
  return (
    <div className="bg-[#08141e] text-[#d8e4f2] overflow-x-hidden">
      {/*  Navigation Shell  */}
<header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-xl border-b border-outline-variant/30 px-container-margin py-md flex justify-between items-center mx-auto">
<div className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">NEXORA SQUARE</div>
<nav className="hidden md:flex items-center gap-lg">
<a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" href="#">Workspaces</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" href="#">Membership</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps" href="#">Meeting Rooms</a>
<a className="active-nav font-label-caps text-label-caps" href="#">Amenities</a>
</nav>
<button className="bloom-button bg-primary-fixed text-black font-label-caps text-label-caps px-lg py-sm font-bold">Book a Tour</button>
</header>
<main>
{/*  Hero Section  */}
<section className="relative h-[921px] flex items-center px-container-margin overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-cover bg-center brightness-[0.4] scale-105 transition-transform duration-[10s] ease-linear hover:scale-100" data-alt="A cinematic, high-angle shot of a futuristic luxury coworking atrium at dusk. The architecture features sleek obsidian surfaces, sharp geometric glass partitions, and glowing neon-green light accents that trace the edges of the structure. Elegant executive professionals move through an airy, minimalist space filled with high-tech workstations and lush, integrated greenery. The lighting is low-key and dramatic, emphasizing a high-end, technologically advanced operating environment for visionaries." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCak6Pt7JE1TKVN9w5pv54JDxLBFdoBV6W2-2QmRtA06KXlOoBLKwuqOC3pyrW8cPS17qd77XkhvVPUkwPJMsKH5JF6IskHhPSeK8dSu98ilHXescXMNzPtqoAUVtYYY-56iCSxk7LsaaLhjUDOgM_ETPNeF84teMSVW9wjDF_D-i4S1OiV4TrJ_VA8zc8jdQytsadrOaZHvZq4jIb8M-2S-BjSd9amSGtOrOfVapn84MiYZ09uDrt1ri_nWq8uMlok09SHJ8k7Xrie')" }}></div>
</div>
<div className="relative z-10 max-w-3xl">
<h1 className="font-display-lg text-display-lg text-primary uppercase leading-none mb-md">Luxury Beyond <br/><span className="text-primary-fixed">The Desk.</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-xl">Experience an ecosystem designed for peak performance. From high-tech business suites to biophilic relaxation zones, Nexora Square redefines the physical workspace as an extension of your ambition.</p>
<div className="flex gap-md">
<button className="bloom-button bg-primary-fixed text-black font-label-caps text-label-caps px-xl py-md font-bold uppercase">Explore Suites</button>
<button className="border border-outline-variant text-primary font-label-caps text-label-caps px-xl py-md font-bold uppercase hover:border-primary-fixed transition-colors">Virtual Tour</button>
</div>
</div>
{/*  Scroll Indicator  */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm">
<span className="font-label-caps text-label-caps tracking-[0.3em] text-on-surface-variant opacity-50">SCROLL</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-primary-fixed to-transparent animate-pulse"></div>
</div>
</section>
{/*  Business Amenities Grid  */}
<section className="py-32 px-container-margin">
<div className="mb-xl">
<span className="text-primary-fixed font-label-caps text-label-caps tracking-widest block mb-sm">ELITE UTILITIES</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">Business Infrastructure</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
{/*  Wi-Fi Card  */}
<div className="glass-card p-xl flex flex-col gap-md">
<span className="material-symbols-outlined text-primary-fixed text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>wifi</span>
<h3 className="font-headline-md text-headline-md text-primary">Ultra-Speed Connectivity</h3>
<p className="text-on-surface-variant text-sm">Low-latency fiber optic dedicated networks for seamless global operations.</p>
</div>
{/*  Printing Card  */}
<div className="glass-card p-xl flex flex-col gap-md">
<span className="material-symbols-outlined text-primary-fixed text-4xl">print</span>
<h3 className="font-headline-md text-headline-md text-primary">Precision Printing</h3>
<p className="text-on-surface-variant text-sm">Enterprise-grade scanning and printing stations available 24/7 via mobile app.</p>
</div>
{/*  Reception Card  */}
<div className="glass-card p-xl flex flex-col gap-md">
<span className="material-symbols-outlined text-primary-fixed text-4xl">concierge</span>
<h3 className="font-headline-md text-headline-md text-primary">Executive Concierge</h3>
<p className="text-on-surface-variant text-sm">A professional front-of-house team to manage guest arrival and logistics.</p>
</div>
{/*  Business Address Card  */}
<div className="glass-card p-xl flex flex-col gap-md">
<span className="material-symbols-outlined text-primary-fixed text-4xl">location_on</span>
<h3 className="font-headline-md text-headline-md text-primary">Prestige Address</h3>
<p className="text-on-surface-variant text-sm">Register your global enterprise at the city's most iconic architectural hub.</p>
</div>
{/*  Mail Handling  */}
<div className="glass-card p-xl flex flex-col gap-md">
<span className="material-symbols-outlined text-primary-fixed text-4xl">mail</span>
<h3 className="font-headline-md text-headline-md text-primary">Secure Logistics</h3>
<p className="text-on-surface-variant text-sm">Encrypted digital notification system for physical mail and parcel reception.</p>
</div>
</div>
</section>
{/*  Comfort & Productivity  */}
<section className="bg-surface-container-lowest py-32 px-container-margin overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
<div className="space-y-xl">
<div className="scroll-reveal">
<span className="text-primary-fixed font-label-caps text-label-caps tracking-widest block mb-sm">HUMAN-CENTRIC</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-md leading-tight">Flow &amp; Focus <br/>Atmospheres</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">We curate environments that speak to both the creator and the strategist. Transition seamlessly between high-energy collaboration and deep-focus solitude.</p>
</div>
<div className="grid grid-cols-1 gap-lg">
<div className="flex gap-lg items-center group p-lg border-l-2 border-outline-variant hover:border-primary-fixed transition-all cursor-pointer">
<div className="text-headline-md font-bold text-outline group-hover:text-primary-fixed">01</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary">Elite Café &amp; Bistro</h4>
<p className="text-on-surface-variant">Artisanal chemistry meeting high-performance nutrition.</p>
</div>
</div>
<div className="flex gap-lg items-center group p-lg border-l-2 border-outline-variant hover:border-primary-fixed transition-all cursor-pointer">
<div className="text-headline-md font-bold text-outline group-hover:text-primary-fixed">02</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary">Biophilic Lounge</h4>
<p className="text-on-surface-variant">Integrated vertical gardens providing pure O2 and visual tranquility.</p>
</div>
</div>
<div className="flex gap-lg items-center group p-lg border-l-2 border-outline-variant hover:border-primary-fixed transition-all cursor-pointer">
<div className="text-headline-md font-bold text-outline group-hover:text-primary-fixed">03</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary">Networking Zone</h4>
<p className="text-on-surface-variant">Asymmetric social tiers designed for spontaneous innovation sparks.</p>
</div>
</div>
</div>
</div>
<div className="relative grid grid-cols-2 gap-md h-[700px]">
<div className="mt-12 h-full overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Close-up detail of a luxury biophilic lounge within Nexora Square. Lush tropical plants in custom dark-gray matte planters are illuminated by soft, focused neon-green accent lights from above. The background shows a blurry, warm-lit café with premium espresso machines and minimalist seating. The overall aesthetic is dark, moody, and ultra-premium with a focus on high-end textures like velvet and polished stone." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXDNBdBqqQYohpkn7OXWDVjoxX86JXAALchi-fn8vDWPeHUMSkkXCcNo4o2Xb9wlg7xB_o4WflH_2K3WSD9oKbMpBFDhZ4XFx4086EHItK6m0H8OgBbooiird2sGTzM9RXM3GZ-iiAKaUGJ7knwEa6n9wNWRFUIBfotv5MjQHcqRFNEmiPdB61S3tQv07gt1cw0S3R8skVY2mhI-nCWJqWbNaYQeX6nmO5J94MWzDLXpdZ60dRA1OkvkAWNOuOcfFJe1QYBBAPb7Cc"/>
</div>
<div className="h-full overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="A wide-angle shot of a high-end networking zone in a corporate skyscraper. The interior features floor-to-ceiling windows overlooking a futuristic city skyline at night. Minimalist glass furniture is arranged on thick, dark carpets. The room is punctuated by glowing geometric light installations on the walls and ceiling in a striking neon green. The atmosphere is sophisticated, exclusive, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgTzfUNVBnTpOGt5FnhXqGc9npjUpVi1pMu9rZVnus8ZxDdWPWunjuZc3mNcruD50kGbGP_E52KMkzaT4GWCDqTxlwpUSUStK8oCcjMlrRdpR3m2WlBCAPcRpXDBIc43rPZ7aTnbgf1jpUGPT52WpnwCP1lROBcwEWgURcHXOotwb_bPPbVVgvf8p2f2m4WZApw7tlaEuc-lbsWWeOOmBOCHDSDyM5v-O3RLI6OjY9mRl8-_QltxPjEaX5uZV8A5fN_0NVsu_95lmu"/>
</div>
</div>
</div>
</section>
{/*  Technology Showcase  */}
<section className="relative py-32 px-container-margin circuit-bg border-y border-outline-variant/20">
<div className="text-center mb-xl">
<span className="text-primary-fixed font-label-caps text-label-caps tracking-widest block mb-sm">THE FUTURE IS HARDWARE</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase">The Nexora Tech Stack</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
{/*  Card 1  */}
<div className="glass-card p-xl border-t-2 border-t-primary-fixed/30">
<div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-primary-fixed">monitor</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Smart Casting</h3>
<p className="text-on-surface-variant text-sm">8K Smart Displays in every room with encrypted wireless casting and integrated AI note-taking.</p>
</div>
{/*  Card 2  */}
<div className="glass-card p-xl border-t-2 border-t-primary-fixed/30">
<div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-primary-fixed">video_chat</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">HD Conferencing</h3>
<p className="text-on-surface-variant text-sm">Crystal-clear spatial audio and 4K cameras with automated speaker tracking for global calls.</p>
</div>
{/*  Card 3  */}
<div className="glass-card p-xl border-t-2 border-t-primary-fixed/30">
<div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-primary-fixed">qr_code_2</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">RFID/QR Access</h3>
<p className="text-on-surface-variant text-sm">Frictionless entry via biometric, RFID, or QR-based mobile credentials for all members.</p>
</div>
{/*  Card 4  */}
<div className="glass-card p-xl border-t-2 border-t-primary-fixed/30">
<div className="w-12 h-12 rounded-full bg-primary-fixed/10 flex items-center justify-center mb-lg">
<span className="material-symbols-outlined text-primary-fixed">visibility</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Predictive AI Security</h3>
<p className="text-on-surface-variant text-sm">24/7 multi-spectrum CCTV monitoring with behavioral analytics for ultimate workspace safety.</p>
</div>
</div>
{/*  Tech Background Decorative  */}
<div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center">
<div className="w-[800px] h-[800px] border border-primary-fixed/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
<div className="absolute w-[600px] h-[600px] border border-primary-fixed/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
</div>
</section>
{/*  Wellness & Calm  */}
<section className="py-32 px-container-margin">
<div className="flex flex-col lg:flex-row gap-xl items-end mb-xl">
<div className="lg:w-1/2">
<span className="text-primary-fixed font-label-caps text-label-caps tracking-widest block mb-sm">MENTAL CLARITY</span>
<h2 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight">Wellness &amp; The Quiet Mind</h2>
</div>
<div className="lg:w-1/2">
<p className="font-body-lg text-body-lg text-on-surface-variant italic">"Precision work requires profound silence. We engineered the void so you can fill it with brilliance."</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-[500px]">
<div className="relative group overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-75" data-alt="A minimalist meditation room inside a corporate headquarters. The walls are a deep charcoal gray with vertical slatted wood textures. A single, glowing orb light hangs from the ceiling, casting soft shadows. The floor is covered in a plush, dark-toned rug with a single meditation cushion. The lighting is extremely soft and warm, creating a sanctuary of silence and calm amid a high-tech environment." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-z6VLWxwDFqb9Km3zo-fOaKgvFJ20IxxS-pjTqEEqdq9aHe9AOlkVDCiaVyVV0zxiB1-KbflmgbRrFKUUCNqevoBc6u_84BXsCNFXOcchJAkAqIUJrLVPPx5e0XxlNWQrNIDct3uTJnWRyUsuztKtmv3CVUJwSF9jeBq5VAvM05qpotEci43hl_4VTJvTlsrTJROGGEru4jFBNoi7pIAgzOIx-TCDP8r-j6zXUIi6MhTnAkq-q730677mlbcAGxUmvezvSJ0DDoQJ')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-xl">
<h4 className="font-headline-md text-headline-md text-primary">Quiet Zone</h4>
<p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">Sonic-dampened spaces for zero-distraction focus.</p>
</div>
</div>
<div className="relative group overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-75" data-alt="A modern, high-end prayer and meditation room with elegant architectural lines. Soft, indirect lighting glows from hidden coves in the ceiling and walls. The atmosphere is serene and neutral, using a palette of slate grays and muted dark tones. High-quality acoustic panels are seamlessly integrated into the design. The space feels private, sacred, and deeply peaceful." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsXaEOWx8DbA1Ur750kWjWbx3ULyaYPHKwAwvbvypllAD90jBn_YVUkPhQcUOUgDAKKiSVrWSCU4eiSYgnXoTH3plZQBgFgtGyIDkWC6oNyiGV3xXUSZz_9Iye6EyixbaQ8Tev8CF2jpi5nh6GMRkgUG1E_8lFNCMq1muBjLaYcfCrpw724WMO5jvP3f5-cacElK3LZ1PpcE4xLUkaxVY9zW2aKxPX2arWlGYHS26Lc_70WbfSHQSfkBY3OeDnMqocjHhpTLBBGA5l')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-xl">
<h4 className="font-headline-md text-headline-md text-primary">Prayer Rooms</h4>
<p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">Inclusive sanctuaries designed for spiritual reflection.</p>
</div>
</div>
<div className="relative group overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-75" data-alt="An indoor zen garden within a futuristic office building. A mix of dark basalt stones and vibrant green moss create a textured, natural landscape. Hidden misting systems create a light atmosphere. The surrounding walls are dark obsidian with subtle green light accents. The scene is illuminated by simulated moonlight from a high-tech skylight, blending nature with high-end architecture." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4kqfNOb-ezeFtv-ZWkSeVF1Xde3L75gRSC-JLlgUjl28VYxYiSfhqkYq38ufdPBtnPgo3LpMZIqGDJwqhiOwbo0-GkuqOoXU7G7ejsKLp47w06mOJdBVF5tWzNjq8-f0KExUZ0aeK3985IE5hjcPq4jpkDoBhOIdJMFHyVNtdIyec25QQaNTPg5i671soJLxQmZcXn3uDOZbMVxY0D4vzqYnjY6uzp48IlwIZo0VZY7QSV4lXWN1ry8t1MuxM3wc_5mGESi4h2IVg')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-xl">
<h4 className="font-headline-md text-headline-md text-primary">Zen Gardens</h4>
<p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">A curated slice of nature to ground your workday.</p>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-32 px-container-margin bg-primary-fixed flex flex-col items-center text-center">
<h2 className="font-display-lg text-display-lg text-black uppercase mb-md">Ready to Elevate?</h2>
<p className="font-body-lg text-body-lg text-black/80 max-w-2xl mb-xl">Join the city's most exclusive network of innovators. Secure your workspace in the architectural landmark of the next decade.</p>
<button className="bg-black text-primary-fixed font-headline-md text-headline-md px-xl py-lg font-bold uppercase transition-transform hover:scale-110">Claim Your Space</button>
</section>
</main>
{/*  Footer Shell  */}
<footer className="bg-surface-container-lowest border-t border-outline-variant px-container-margin py-xl w-full grid grid-cols-2 md:grid-cols-6 gap-gutter">
<div className="col-span-2">
<div className="font-headline-md text-headline-md font-bold text-primary mb-md">NEXORA SQUARE</div>
<p className="text-on-secondary-container text-sm max-w-xs mb-lg">Architecting the future of human enterprise through spatial excellence and technological precision.</p>
</div>
<div className="flex flex-col gap-sm">
<span className="font-label-caps text-label-caps text-primary-fixed mb-sm">Navigate</span>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Workspaces</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Membership</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors text-primary-fixed font-bold" href="#">Amenities</a>
</div>
<div className="flex flex-col gap-sm">
<span className="font-label-caps text-label-caps text-primary-fixed mb-sm">Company</span>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Events</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">News</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-sm">
<span className="font-label-caps text-label-caps text-primary-fixed mb-sm">Support</span>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Help Center</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Privacy</a>
<a className="text-on-secondary-container hover:text-primary-fixed transition-colors" href="#">Terms</a>
</div>
<div className="col-span-2 md:col-span-6 border-t border-outline-variant/30 pt-xl mt-md text-center">
<p className="font-label-caps text-label-caps text-on-secondary-container">© 2024 NEXORA SQUARE. ARCHITECTING THE FUTURE OF WORK.</p>
</div>
</footer>
    </div>
  );
}
