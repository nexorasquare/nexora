export default function LocationPage() {
  return (
    <div className="bg-[#08141e] text-[#d8e4f2] overflow-x-hidden">
      {/*  Header / TopNavBar  */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center w-full px-container-margin py-md mx-auto">
<div className="flex items-center gap-sm">
<span className="font-headline-lg text-headline-lg font-bold tracking-tighter text-primary">NEXORA SQUARE</span>
</div>
<div className="hidden md:flex gap-lg items-center">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Workspaces</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Membership</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Meeting Rooms</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Amenities</a>
</div>
<button className="magnetic-btn bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-lg py-sm rounded transition-all duration-300">Book a Tour</button>
</nav>
{/*  Hero Section / Map Integration  */}
<section className="relative h-screen flex items-center justify-center pt-xl">
<div className="absolute inset-0 z-0">
<div className="w-full h-full grayscale opacity-40 mix-blend-luminosity bg-cover bg-center" data-location="Perinthalmanna, Kerala" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmNIUI9PScww-UW_bKXqiojKKjAMpLII7OMubqkrUgESV91A-Ub_fFTVYfYm2oOHmu-5C7vFM3E7folvEvprvz__En1pvyWSWv83Xjb7UtRAfb0blnqNYJPtnT2PaWW8mwhfBSRF0mtgNTFhYNLl7zPMVh2Nf2pXmYVCbIhdjz8Qx9m-2jQItf8h-O6OXiY0te_zQeo6IGPtBN6bGfgDlbb5GdYLkAj3nt7plC8-RSMLt1K3xPimdb-qr9pbCXjNovKnjlkXElmdhV')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
</div>
<div className="relative z-10 text-center px-container-margin max-w-5xl">
<h1 className="font-display-lg text-display-lg text-primary mb-md leading-none">STRATEGICALLY LOCATED IN THE <span className="text-primary-fixed">HEART OF PERINTHALMANNA</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-2xl mx-auto">Positioned at the pulse of Kerala's fast-growing business corridor. Nexora Square offers the ultimate connectivity for regional enterprises and global visionaries.</p>
<div className="flex gap-md justify-center">
<div className="glass-card p-md flex flex-col items-center gap-xs">
<span className="material-symbols-outlined text-primary-fixed">location_on</span>
<span className="font-label-caps text-label-caps">CENTRAL HUB</span>
</div>
<div className="glass-card p-md flex flex-col items-center gap-xs">
<span className="material-symbols-outlined text-primary-fixed">transit_enterexit</span>
<span className="font-label-caps text-label-caps">RAPID ACCESS</span>
</div>
<div className="glass-card p-md flex flex-col items-center gap-xs">
<span className="material-symbols-outlined text-primary-fixed">apartment</span>
<span className="font-label-caps text-label-caps">PRIME ADDRESS</span>
</div>
</div>
</div>
</section>
{/*  Nearby Places Bento Grid  */}
<section className="py-xl px-container-margin">
<div className="flex justify-between items-end mb-xl">
<div>
<span className="text-primary-fixed font-label-caps text-label-caps">PROXIMITY ECOSYSTEM</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Everything Within Reach</h2>
</div>
<div className="hidden md:block h-px flex-1 bg-outline-variant/30 mx-lg mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/*  Transportation  */}
<div className="glass-card p-lg border-t-2 border-t-primary-fixed">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary-fixed">directions_bus</span>
<h3 className="font-headline-md text-headline-md text-primary">Transit</h3>
</div>
<ul className="space-y-md">
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Angadippuram Railway Station</span>
<span className="font-label-caps text-label-caps text-primary-fixed">2.5 KM</span>
</li>
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">KSRTC Bus Terminal</span>
<span className="font-label-caps text-label-caps text-primary-fixed">0.8 KM</span>
</li>
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">CCJ Airport (Calicut)</span>
<span className="font-label-caps text-label-caps text-primary-fixed">45 KM</span>
</li>
</ul>
</div>
{/*  Health & Safety  */}
<div className="glass-card p-lg">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary-fixed">medical_services</span>
<h3 className="font-headline-md text-headline-md text-primary">Healthcare</h3>
</div>
<ul className="space-y-md">
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Al-Shifa Hospital</span>
<span className="font-label-caps text-label-caps text-primary-fixed">1.2 KM</span>
</li>
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Moulana Hospital</span>
<span className="font-label-caps text-label-caps text-primary-fixed">1.5 KM</span>
</li>
</ul>
</div>
{/*  Shopping  */}
<div className="glass-card p-lg border-b-2 border-b-outline">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary-fixed">shopping_cart</span>
<h3 className="font-headline-md text-headline-md text-primary">Retail</h3>
</div>
<ul className="space-y-md">
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Vavas Mall</span>
<span className="font-label-caps text-label-caps text-primary-fixed">0.5 KM</span>
</li>
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Nesto Hypermarket</span>
<span className="font-label-caps text-label-caps text-primary-fixed">1.0 KM</span>
</li>
</ul>
</div>
{/*  Hospitality  */}
<div className="glass-card p-lg">
<div className="flex items-center gap-sm mb-md">
<span className="material-symbols-outlined text-primary-fixed">hotel</span>
<h3 className="font-headline-md text-headline-md text-primary">Hotels</h3>
</div>
<ul className="space-y-md">
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Hotel Hi-Ton</span>
<span className="font-label-caps text-label-caps text-primary-fixed">0.3 KM</span>
</li>
<li className="flex justify-between items-center group">
<span className="text-on-surface-variant group-hover:text-primary transition-colors">Hill View Hotel</span>
<span className="font-label-caps text-label-caps text-primary-fixed">1.1 KM</span>
</li>
</ul>
</div>
</div>
</section>
{/*  Business Services Section  */}
<section className="py-xl bg-surface-container-low/50">
<div className="px-container-margin">
<div className="mb-xl text-center">
<h2 className="font-headline-lg text-headline-lg text-primary mb-sm">ENTERPRISE-GRADE SOLUTIONS</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Launch and scale your business with Nexora's comprehensive support ecosystem. Beyond just a desk, we provide the backbone for your success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="glass-card p-lg flex flex-col h-full">
<span className="material-symbols-outlined text-primary-fixed text-4xl mb-md">business_center</span>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">Virtual Office</h4>
<p className="text-on-surface-variant text-sm mb-lg flex-1">Premium business address at Nexora Square with mail handling and GST-compliant documentation.</p>
<a className="text-primary-fixed font-label-caps text-label-caps flex items-center gap-xs group" href="#">LEARN MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
<div className="glass-card p-lg flex flex-col h-full">
<span className="material-symbols-outlined text-primary-fixed text-4xl mb-md">how_to_reg</span>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">Registration</h4>
<p className="text-on-surface-variant text-sm mb-lg flex-1">Seamless company formation services including LLP, Private Limited, and Sole Proprietorship setup.</p>
<a className="text-primary-fixed font-label-caps text-label-caps flex items-center gap-xs group" href="#">LEARN MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
<div className="glass-card p-lg flex flex-col h-full">
<span className="material-symbols-outlined text-primary-fixed text-4xl mb-md">gavel</span>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">Legal &amp; GST</h4>
<p className="text-on-surface-variant text-sm mb-lg flex-1">Dedicated support for GST registration, filing, and ongoing legal compliance by expert consultants.</p>
<a className="text-primary-fixed font-label-caps text-label-caps flex items-center gap-xs group" href="#">LEARN MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
<div className="glass-card p-lg flex flex-col h-full">
<span className="material-symbols-outlined text-primary-fixed text-4xl mb-md">campaign</span>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">Digital Growth</h4>
<p className="text-on-surface-variant text-sm mb-lg flex-1">In-house marketing team to elevate your brand presence through targeted digital strategies.</p>
<a className="text-primary-fixed font-label-caps text-label-caps flex items-center gap-xs group" href="#">LEARN MORE <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
</div>
</div>
</section>
{/*  Why Choose Nexora / Scrolling Timeline  */}
<section className="py-xl px-container-margin overflow-hidden relative">

<div className="relative z-10 flex flex-col md:flex-row gap-xl items-start">
<div className="md:w-1/3 sticky top-32">
<span className="text-primary-fixed font-label-caps text-label-caps">BENCHMARK OF EXCELLENCE</span>
<h2 className="font-headline-lg text-headline-lg text-primary mb-md leading-tight">Architecting the<br/>Workspace of Tomorrow</h2>
<div className="w-16 h-1 bg-primary-fixed mb-md"></div>
<p className="text-on-surface-variant">Nexora Square isn't just about office space; it's about providing the technical precision and luxury environment that modern professionals demand.</p>
</div>
<div className="md:w-2/3 space-y-gutter">
<div className="glass-card p-xl border-l-4 border-l-primary-fixed">
<div className="flex items-start gap-lg">
<div className="text-primary-fixed font-display-lg text-headline-lg opacity-30">01</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">PRIME DISTRICT</h4>
<p className="text-on-surface-variant body-lg">Unmatched visibility and accessibility in the core of Perinthalmanna's business zone. Your clients and partners will appreciate the ease of access and prestigious presence.</p>
</div>
</div>
</div>
<div className="glass-card p-xl border-l-4 border-l-outline">
<div className="flex items-start gap-lg">
<div className="text-primary-fixed font-display-lg text-headline-lg opacity-30">02</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary mb-sm">ENTERPRISE READINESS</h4>
<p className="text-on-surface-variant body-lg">High-speed fiber optics, redundant power systems, and biometric security. We provide a resilient infrastructure that scales with your growth without compromise.</p>
</div>
</div>
</div>
<div className="glass-card p-xl border-l-4 border-l-primary-fixed">
<div className="flex items-start gap-lg">
<div className="text-primary-fixed font-display-lg text-headline-lg opacity-30">03</div>
<div>
<h4 className="font-headline-md text-headline-md text-primary -sm">PREMIUM COMMUNITY</h4>
<p className="text-on-surface-variant body-lg">Join a curated network of IT professionals, freelancers, and entrepreneurs. Our environment is designed to spark collaboration and high-level innovation.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-surface-container-lowest border-t border-outline-variant">
<div className="grid grid-cols-2 md:grid-cols-6 gap-gutter px-container-margin py-xl w-full">
<div className="col-span-2">
<span className="font-headline-md text-headline-md font-bold text-primary block mb-md">NEXORA SQUARE</span>
<p className="text-on-secondary-container text-sm max-w-xs mb-lg">Architecting the future of work in Kerala's burgeoning IT hubs. Join the movement of visionaries.</p>
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:scale-110 transition-transform">alternate_email</span>
<span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:scale-110 transition-transform">language</span>
<span className="material-symbols-outlined text-primary-fixed cursor-pointer hover:scale-110 transition-transform">share_location</span>
</div>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-md">COMPANY</h5>
<ul className="space-y-sm">
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">About Us</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Press Kit</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-md">SOLUTIONS</h5>
<ul className="space-y-sm">
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Private Office</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Hot Desks</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Virtual Office</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-md">SUPPORT</h5>
<ul className="space-y-sm">
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Help Center</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Legal Docs</a></li>
<li><a className="text-on-secondary-container hover:text-primary-fixed text-sm transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-md">NEWSLETTER</h5>
<div className="flex flex-col gap-sm">
<input className="bg-surface-container border border-outline-variant text-on-surface px-sm py-xs text-sm focus:border-primary-fixed focus:ring-0 outline-none transition-all" placeholder="Your email" type="email"/>
<button className="bg-primary-fixed text-on-primary-fixed py-xs text-sm font-label-caps transition-all active:scale-95">SUBSCRIBE</button>
</div>
</div>
</div>
<div className="px-container-margin py-lg border-t border-outline-variant/30 text-center">
<span className="font-label-caps text-label-caps text-on-secondary-container opacity-50">© 2024 NEXORA SQUARE. ARCHITECTING THE FUTURE OF WORK.</span>
</div>
</footer>
    </div>
  );
}
