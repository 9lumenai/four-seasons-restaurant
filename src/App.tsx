import { useMemo, useState } from "react";
import logoImage from "../4S logo.png";

type IconName =
  | "arrow"
  | "bag"
  | "bell"
  | "calendar"
  | "call"
  | "chart"
  | "chevron"
  | "clock"
  | "close"
  | "dashboard"
  | "delivery"
  | "file"
  | "location"
  | "logout"
  | "menu"
  | "orders"
  | "sales"
  | "settings"
  | "store"
  | "upload"
  | "users"
  | "wallet"
  | "whatsapp";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    bag: <><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    call: <><path d="M6.5 3h3l1.5 5-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 5 1.5v3c0 2-1.5 3.5-3.5 3.5C9.5 21 3 14.5 3 6.5 3 4.5 4.5 3 6.5 3Z" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    chevron: <><path d="m8 10 4 4 4-4" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" /></>,
    delivery: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
    file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    logout: <><path d="M10 4H5v16h5M14 8l4 4-4 4M8 12h10" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    orders: <><path d="M5 4h14v17H5zM9 2h6v4H9zM9 11h6M9 15h6" /></>,
    sales: <><path d="M4 18 9 13l4 3 7-9" /><path d="M15 7h5v5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.5 1a8 8 0 0 0-1.7-1L14.3 3h-4.6L9.3 6a8 8 0 0 0-1.7 1L5 6 3 9.4 5.1 11a7 7 0 0 0 0 2L3 14.6 5 18l2.6-1a8 8 0 0 0 1.7 1l.4 3h4.6l.4-3a8 8 0 0 0 1.7-1l2.6 1 2-3.4-2.1-1.6a7 7 0 0 0 .1-1Z" /></>,
    store: <><path d="M4 10v10h16V10M3 4h18l-2 6H5L3 4Z" /><path d="M9 20v-6h6v6" /></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 15v5h16v-5" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></>,
    wallet: <><path d="M3 6h16v14H3zM3 6l3-3h12v3M15 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" /></>,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8 7.5c.5 4 3 6.5 7 7l1-2-2.2-1-1 1a6 6 0 0 1-3.3-3.3l1-1L9.5 6 8 7.5Z" /></>,
  };
  return <svg aria-hidden="true" className="shrink-0" fill="none" height={size} viewBox="0 0 24 24" width={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">{paths[name]}</svg>;
}

function Logo() {
  return <img alt="Four Season Pizza" className="h-14 w-28 object-contain" src={logoImage} />;
}

function StaffAccess({ onOwner, onBranch, onPublic }: { onOwner: () => void; onBranch: () => void; onPublic: () => void }) {
  return (
    <div className="grid min-h-screen bg-[#f5f6f8] lg:grid-cols-[.9fr_1.1fr]">
      <section className="relative hidden overflow-hidden bg-[#1e1e24] lg:block">
        <img alt="Four Season restaurant food" className="absolute inset-0 h-full w-full object-cover opacity-55" src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=1200&q=85" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,20,24,.98),rgba(20,20,24,.18))]" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Logo />
          <div className="max-w-lg text-white">
            <div className="eyebrow">4S operations portal</div>
            <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[.9]">One team.<br />Three branches.</h1>
            <p className="mt-6 max-w-md leading-7 text-white/60">Track performance, close the day, and keep every Four Season branch moving together.</p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-5 sm:p-10">
        <div className="w-full max-w-xl">
          <div className="mb-12 flex items-center justify-between lg:hidden"><Logo /><button className="text-sm font-bold text-[#777780]" onClick={onPublic}>Back to website</button></div>
          <div className="text-sm font-bold text-[#ff5722]">Staff access</div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Choose your workspace</h2>
          <p className="mt-3 text-[#7d7d85]">Continue to the tools available for your role.</p>
          <div className="mt-9 grid gap-4">
            <button className="group flex items-center gap-5 rounded-2xl border border-[#e0e1e4] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ff9a7b] hover:shadow-lg" onClick={onOwner}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5722]"><Icon name="chart" size={25} /></span>
              <span className="flex-1"><span className="block text-lg font-bold">Owner dashboard</span><span className="mt-1 block text-sm font-normal text-[#85858d]">Sales, branch performance and EOD status</span></span>
              <span className="text-[#a0a0a8] transition group-hover:translate-x-1 group-hover:text-[#ff5722]"><Icon name="arrow" /></span>
            </button>
            <button className="group flex items-center gap-5 rounded-2xl border border-[#e0e1e4] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#ff9a7b] hover:shadow-lg" onClick={onBranch}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eef3ff] text-[#4e72c8]"><Icon name="file" size={25} /></span>
              <span className="flex-1"><span className="block text-lg font-bold">Branch manager</span><span className="mt-1 block text-sm font-normal text-[#85858d]">Enter and upload the daily EOD slip</span></span>
              <span className="text-[#a0a0a8] transition group-hover:translate-x-1 group-hover:text-[#ff5722]"><Icon name="arrow" /></span>
            </button>
          </div>
          <button className="mt-8 hidden items-center gap-2 text-sm font-bold text-[#777780] lg:flex" onClick={onPublic}>← Back to public website</button>
        </div>
      </section>
    </div>
  );
}

const branches = [
  { name: "Gulberg Branch", address: "Main Boulevard, Gulberg III, Lahore", phone: "+92 300 444 0071", hours: "11:00 AM – 1:00 AM" },
  { name: "DHA Branch", address: "Sector Y Commercial, DHA Phase 3", phone: "+92 300 444 0072", hours: "12:00 PM – 2:00 AM" },
  { name: "Johar Town", address: "Near Emporium, Johar Town, Lahore", phone: "+92 300 444 0073", hours: "11:00 AM – 1:00 AM" },
];

const menuItems = [
  { category: "Pizzas", name: "The Four Season", desc: "Four signature quarters, mozzarella, olives & smoked chicken", price: "Rs. 1,890", image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=85" },
  { category: "Pizzas", name: "Pepperoni Fire", desc: "Double pepperoni, jalapeño, mozzarella & hot honey", price: "Rs. 1,590", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=85" },
  { category: "Burgers", name: "Smash Stack", desc: "Double beef patty, caramelized onion & house sauce", price: "Rs. 890", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=85" },
  { category: "Burgers", name: "Firehouse Chicken", desc: "Crispy chicken, spicy slaw, pickles & chipotle mayo", price: "Rs. 790", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=85" },
  { category: "Deals", name: "Squad Feast", desc: "2 large pizzas, 4 drinks & loaded fries", price: "Rs. 3,499", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=85" },
  { category: "Beverages", name: "Chilled Classics", desc: "Pepsi, 7UP, Mirinda or mineral water", price: "From Rs. 120", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=85" },
];

function PublicSite({ openAdmin }: { openAdmin: () => void }) {
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleItems = category === "All" ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <div className="bg-[#faf9f6] text-[#1e1e24]">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#17171b]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <a className="transition hover:text-[#ff6a3c]" href="#menu">Our Menu</a>
            <a className="transition hover:text-[#ff6a3c]" href="#branches">Branches</a>
            <a className="transition hover:text-[#ff6a3c]" href="#story">Our Story</a>
          </nav>
          <a className="hidden items-center gap-2 rounded-full bg-[#ff5722] px-5 py-3 text-sm font-bold shadow-lg shadow-orange-950/30 transition hover:-translate-y-0.5 hover:bg-[#f24b16] md:flex" href="https://wa.me/923004440071" target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> Order Now</a>
          <button aria-label="Toggle menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} size={26} /></button>
        </div>
        {menuOpen && <div className="border-t border-white/10 px-5 py-5 md:hidden"><div className="flex flex-col gap-5 font-semibold"><a href="#menu" onClick={() => setMenuOpen(false)}>Our Menu</a><a href="#branches" onClick={() => setMenuOpen(false)}>Branches</a><a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a></div></div>}
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-end overflow-hidden bg-[#17171b] pt-20 text-white lg:min-h-[820px]">
          <img alt="Freshly baked Four Season pizza" className="absolute inset-0 h-full w-full object-cover object-center opacity-70" src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=1800&q=90" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,21,.96)_0%,rgba(18,18,21,.65)_48%,rgba(18,18,21,.2)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#17171b_0%,transparent_45%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 lg:grid-cols-[1fr_.65fr] lg:px-8 lg:pb-24">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3 text-xs font-black uppercase tracking-[.24em] text-[#ff7950]"><span className="h-px w-10 bg-[#ff5722]" /> Lahore’s neighborhood favorite</div>
              <h1 className="font-display text-[clamp(4.8rem,10vw,9rem)] font-black uppercase italic leading-[.76] tracking-[-.04em]">Big flavor.<br /><span className="text-[#ff5722]">Four</span> seasons.</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/68">Hand-stretched pizzas, flame-grilled burgers, and bold flavors made fresh for every craving.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="flex items-center gap-3 rounded-full bg-[#ff5722] px-7 py-4 font-bold shadow-xl shadow-black/20 transition hover:-translate-y-1" href="#menu">Explore the menu <Icon name="arrow" /></a>
                <a className="flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-bold backdrop-blur transition hover:bg-white/10" href="tel:+923004440071"><Icon name="call" /> Call to order</a>
              </div>
            </div>
            <div className="hidden items-end justify-end lg:flex">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl">
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">Open now</div>
                <div className="mt-2 flex items-center gap-3 text-xl font-bold"><span className="h-2.5 w-2.5 rounded-full bg-[#52c77a] shadow-[0_0_0_5px_rgba(82,199,122,.12)]" /> Serving till 1:00 AM</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8 lg:py-32" id="menu">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="eyebrow">Made for every mood</div>
                <h2 className="section-title mt-3">Our crowd favorites</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", "Pizzas", "Burgers", "Deals", "Beverages"].map((item) => <button className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === item ? "bg-[#1e1e24] text-white" : "border border-[#deddd8] bg-white hover:border-[#aaa]"}`} key={item} onClick={() => setCategory(item)}>{item}</button>)}
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <article className="group overflow-hidden rounded-[28px] bg-white shadow-[0_14px_45px_rgba(27,27,32,.07)]" key={item.name}>
                  <div className="relative h-64 overflow-hidden">
                    <img alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider backdrop-blur">{item.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-extrabold uppercase">{item.name}</h3>
                      <div className="shrink-0 font-bold text-[#ff5722]">{item.price}</div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[#77777f]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#1e1e24] py-24 text-white lg:py-28" id="story">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative">
              <img alt="Signature Four Season burger" className="h-[520px] w-full rounded-[32px] object-cover" src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1100&q=90" />
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-[#ff5722] p-6 shadow-2xl md:right-8">
                <div className="font-display text-4xl font-black">10+</div><div className="text-xs font-bold uppercase tracking-wider">Years of flavor</div>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="eyebrow">The 4S promise</div>
              <h2 className="section-title mt-3 text-white">Real ingredients.<br />Zero shortcuts.</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">We started with one oven and a simple promise: make comfort food worth gathering around. Every dough is rested, every patty is smashed fresh, and every order gets our full attention.</p>
              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div><div className="font-display text-3xl font-black text-[#ff6a3c]">100%</div><div className="mt-1 text-sm text-white/55">Freshly prepared</div></div>
                <div><div className="font-display text-3xl font-black text-[#ff6a3c]">3</div><div className="mt-1 text-sm text-white/55">Lahore locations</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8 lg:py-32" id="branches">
          <div className="mx-auto max-w-7xl">
            <div className="eyebrow">Find your nearest 4S</div>
            <h2 className="section-title mt-3">Three branches. One standard.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {branches.map((branch, index) => (
                <article className="rounded-[28px] border border-[#e8e6e1] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl" key={branch.name}>
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5722]"><Icon name="location" /></div>
                    <span className="text-xs font-bold text-[#a0a0a6]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-extrabold uppercase">{branch.name}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#73737b]">{branch.address}</p>
                  <div className="mt-6 space-y-3 border-t border-[#eeeeea] pt-5 text-sm">
                    <div className="flex items-center gap-3"><Icon name="clock" size={18} /><span>{branch.hours}</span></div>
                    <div className="flex items-center gap-3"><Icon name="call" size={18} /><span>{branch.phone}</span></div>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <a className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1e1e24] py-3 text-sm font-bold text-white" href={`tel:${branch.phone.replace(/\s/g, "")}`}><Icon name="call" size={16} /> Call</a>
                    <a className="grid w-12 place-items-center rounded-xl bg-[#edf9f0] text-[#279d4f]" href={`https://wa.me/${branch.phone.replace(/\D/g, "")}`} aria-label={`WhatsApp ${branch.name}`}><Icon name="whatsapp" size={19} /></a>
                    <a className="grid w-12 place-items-center rounded-xl border border-[#deddd8]" href="https://maps.google.com" target="_blank" rel="noreferrer" aria-label={`Map for ${branch.name}`}><Icon name="location" size={18} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#16161a] px-5 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <Logo />
          <div className="text-sm text-white/40">© 2025 Four Season Restaurant. Fresh every day.</div>
          <button className="flex items-center gap-2 text-sm font-semibold text-white/55 transition hover:text-white" onClick={openAdmin}><Icon name="users" size={17} /> Staff login <Icon name="arrow" size={16} /></button>
        </div>
      </footer>
    </div>
  );
}

const weekly = [
  { day: "Mon", value: 48 }, { day: "Tue", value: 65 }, { day: "Wed", value: 58 },
  { day: "Thu", value: 80 }, { day: "Fri", value: 72 }, { day: "Sat", value: 94 }, { day: "Sun", value: 84 },
];

function StatusBadge({ status }: { status: "Submitted" | "Pending" | "Draft" }) {
  const styles = {
    Submitted: "bg-[#eaf8ef] text-[#289b5e]",
    Pending: "bg-[#fff5df] text-[#bb7911]",
    Draft: "bg-[#f0f0f3] text-[#74747d]",
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold ${styles[status]}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{status}</span>;
}

function Dashboard({ onPublic, onSwitchRole }: { onPublic: () => void; onSwitchRole: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cards = [
    { title: "Total Sales", value: "Rs. 842,650", note: "+12.5% vs last week", icon: "sales" as IconName, tone: "orange" },
    { title: "Deliveries", value: "486", note: "Rs. 428,200 revenue", icon: "delivery" as IconName, tone: "blue" },
    { title: "Takeaway", value: "302", note: "Rs. 267,450 revenue", icon: "bag" as IconName, tone: "purple" },
    { title: "Dine-in", value: "194", note: "Rs. 147,000 revenue", icon: "store" as IconName, tone: "green" },
  ];
  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#202027]">
      {sidebarOpen && <button className="fixed inset-0 z-40 bg-black/40 lg:hidden" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-[#1e1e24] p-5 text-white transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-2 py-3"><Logo /></div>
        <nav className="mt-10 flex-1 space-y-1.5">
          <div className="side-link active"><Icon name="dashboard" size={19} /> Overview</div>
          <div className="side-link"><Icon name="sales" size={19} /> Sales analytics</div>
          <div className="side-link"><Icon name="store" size={19} /> Branches</div>
          <div className="side-link"><Icon name="orders" size={19} /> Orders</div>
          <button className="side-link w-full" onClick={() => document.getElementById("eod-status")?.scrollIntoView({ behavior: "smooth" })}><Icon name="file" size={19} /> EOD reports</button>
          <div className="side-link"><Icon name="users" size={19} /> Team members</div>
          <div className="side-link"><Icon name="settings" size={19} /> Settings</div>
        </nav>
        <div className="border-t border-white/10 pt-3">
          <button className="side-link w-full text-white/50 hover:text-white" onClick={onSwitchRole}><Icon name="users" size={19} /> Switch workspace</button>
          <button className="side-link w-full text-white/50 hover:text-white" onClick={onPublic}><Icon name="logout" size={19} /> Back to website</button>
        </div>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#e9eaed] bg-white/90 px-5 backdrop-blur lg:px-8">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open sidebar"><Icon name="menu" size={25} /></button>
          <div className="hidden items-center gap-2 rounded-xl border border-[#e4e5e8] bg-[#fafafa] px-4 py-2.5 text-sm font-semibold md:flex"><Icon name="calendar" size={17} /> 01 Jun — 07 Jun, 2025 <Icon name="chevron" size={16} /></div>
          <div className="ml-auto flex items-center gap-4">
            <button className="relative grid h-10 w-10 place-items-center rounded-full border border-[#e5e5e7] text-[#55555e]"><Icon name="bell" size={19} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#ff5722] ring-2 ring-white" /></button>
            <div className="hidden h-8 w-px bg-[#e6e6e8] sm:block" />
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#fff0eb] font-bold text-[#ff5722]">AK</div>
              <div className="hidden sm:block"><div className="text-sm font-bold">Ahsan Khan</div><div className="text-xs text-[#8b8b93]">Restaurant Owner</div></div>
              <Icon name="chevron" size={16} />
            </div>
          </div>
        </header>
        <main className="p-5 lg:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><div className="text-sm font-semibold text-[#8b8b93]">Monday, June 07</div><h1 className="mt-1 text-3xl font-bold tracking-tight">Good morning, Ahsan</h1><p className="mt-2 text-sm text-[#7d7d85]">Here’s what’s happening across your branches today.</p></div>
            <div className="flex items-center gap-2 rounded-xl border border-[#e3e4e7] bg-white px-4 py-3 text-sm font-semibold shadow-sm"><span className="h-2 w-2 rounded-full bg-[#53b979]" /> All branches <Icon name="chevron" size={16} /></div>
          </div>
          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => <article className="dash-card p-5" key={card.title}><div className="flex items-start justify-between"><div className={`metric-icon ${card.tone}`}><Icon name={card.icon} size={20} /></div><span className="flex items-center gap-1 text-xs font-bold text-[#29a161]">↗ 12.5%</span></div><div className="mt-5 text-sm font-medium text-[#85858e]">{card.title}</div><div className="mt-1 text-2xl font-bold tracking-tight">{card.value}</div><div className="mt-3 text-xs text-[#9b9ba3]">{card.note}</div></article>)}
          </section>
          <section className="mt-5 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
            <article className="dash-card p-6">
              <div className="flex items-start justify-between"><div><h2 className="text-lg font-bold">Sales overview</h2><p className="mt-1 text-xs text-[#94949c]">Revenue across all branches</p></div><button className="rounded-lg border border-[#e5e5e8] px-3 py-2 text-xs font-bold">This week⌄</button></div>
              <div className="mt-7 flex items-baseline gap-3"><span className="text-3xl font-bold">Rs. 842,650</span><span className="text-xs font-bold text-[#2ca364]">+12.5%</span></div>
              <div className="mt-8 flex h-56 items-end gap-3 border-b border-[#ededf0]">
                {weekly.map((item) => <div className="flex h-full flex-1 flex-col items-center justify-end gap-3" key={item.day}><div className="group relative flex h-full w-full items-end justify-center"><div className="absolute bottom-[70%] hidden rounded-md bg-[#222228] px-2 py-1 text-[10px] text-white group-hover:block">Rs. {item.value}k</div><div className="w-full max-w-9 rounded-t-lg bg-[#ffe2d8] transition hover:bg-[#ff5722]" style={{ height: `${item.value}%` }} /></div><div className="pb-3 text-[11px] font-semibold text-[#9898a0]">{item.day}</div></div>)}
              </div>
            </article>
            <article className="dash-card p-6">
              <div><h2 className="text-lg font-bold">Order channels</h2><p className="mt-1 text-xs text-[#94949c]">982 total orders</p></div>
              <div className="mx-auto mt-8 grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(#ff5722_0_49%,#7868e6_49%_80%,#39b97b_80%)]">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-center"><div><div className="text-xl font-bold">982</div><div className="text-[10px] text-[#92929a]">Orders</div></div></div>
              </div>
              <div className="mt-8 space-y-4">
                {[["Delivery", "49%", "#ff5722"], ["Takeaway", "31%", "#7868e6"], ["Dine-in", "20%", "#39b97b"]].map(([name, value, color]) => <div className="flex items-center justify-between text-sm" key={name}><div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />{name}</div><span className="font-bold">{value}</span></div>)}
              </div>
            </article>
          </section>
          <section className="mt-5 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
            <article className="dash-card overflow-hidden" id="eod-status">
              <div className="flex items-center justify-between border-b border-[#eeeeef] p-6"><div><h2 className="text-lg font-bold">Branch performance</h2><p className="mt-1 text-xs text-[#94949c]">Sales comparison by location</p></div><button className="text-xs font-bold text-[#ff5722]">View report →</button></div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-[#fafafa] text-[10px] uppercase tracking-wider text-[#9999a1]"><tr><th>Branch</th><th>Orders</th><th>Sales</th><th>Avg. order</th><th>Growth</th><th>EOD status</th></tr></thead>
                  <tbody>{[["Gulberg", "384", "Rs. 328,500", "Rs. 855", "+16.2%", "Submitted"], ["DHA Phase 3", "337", "Rs. 289,250", "Rs. 858", "+10.8%", "Pending"], ["Johar Town", "261", "Rs. 224,900", "Rs. 862", "+8.4%", "Draft"]].map((row, i) => <tr key={row[0]}><td><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg bg-[#fff0eb] text-xs font-bold text-[#ff5722]">{i + 1}</span><span className="font-bold">{row[0]}</span></div></td><td>{row[1]}</td><td className="font-bold">{row[2]}</td><td>{row[3]}</td><td className="font-bold text-[#2da565]">{row[4]}</td><td><StatusBadge status={row[5] as "Submitted" | "Pending" | "Draft"} /></td></tr>)}</tbody>
                </table>
              </div>
            </article>
            <article className="dash-card p-6">
              <div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Today’s EOD status</h2><p className="mt-1 text-xs text-[#94949c]">Closing slips from managers</p></div><span className="text-xs font-bold text-[#8c8c94]">1 of 3</span></div>
              <div className="mt-5 space-y-3">
                {branches.map((branch, i) => {
                  const status = (["Submitted", "Pending", "Draft"] as const)[i];
                  const detail = i === 0 ? "Updated today at 1:42 AM" : i === 1 ? "Not submitted yet" : "Last saved at 12:18 AM";
                  return <div className="flex items-center gap-3 rounded-xl border border-[#eeeeef] p-3" key={branch.name}><div className="grid h-9 w-9 place-items-center rounded-lg bg-[#f3f3f5] text-[#6f6f78]"><Icon name="file" size={18} /></div><div className="min-w-0 flex-1"><div className="truncate text-sm font-bold">{branch.name}</div><div className="mt-1 text-[10px] text-[#9999a0]">{detail}</div></div><StatusBadge status={status} /></div>;
                })}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

function EodForm({ onSwitchRole, onPublic }: { onSwitchRole: () => void; onPublic: () => void }) {
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({ delivery: "", takeaway: "", dinein: "", cash: "", card: "", expense: "" });
  const total = useMemo(() => ["delivery", "takeaway", "dinein"].reduce((sum, key) => sum + Number(values[key as keyof typeof values] || 0), 0), [values]);
  const update = (key: keyof typeof values, value: string) => setValues({ ...values, [key]: value });
  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#202027]">
      <header className="border-b border-[#e8e9ec] bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block"><div className="text-sm font-bold">Usman Ali</div><div className="text-xs text-[#8b8b93]">Gulberg Branch Manager</div></div>
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#fff0eb] font-bold text-[#ff5722]">UA</div>
            <button className="flex items-center gap-2 text-sm font-bold text-[#777780]" onClick={onSwitchRole}><Icon name="users" size={18} /> <span className="hidden md:inline">Switch workspace</span></button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-7 flex items-center justify-between">
          <div><div className="text-sm font-bold text-[#ff5722]">Branch admin portal</div><div className="mt-1 text-sm text-[#8a8a92]">Gulberg Branch · Today’s closing</div></div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#777780]" onClick={onPublic}><Icon name="logout" size={17} /> Website</button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section className="rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(26,26,32,.06)] md:p-9">
            {submitted ? (
              <div className="grid min-h-[540px] place-items-center text-center"><div><div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#eaf8ef] text-3xl text-[#2ca364]">✓</div><h1 className="mt-6 text-3xl font-bold">Report submitted</h1><p className="mx-auto mt-3 max-w-md text-[#7e7e87]">Your EOD report for Gulberg Branch has been sent to the owner for review.</p><button className="mt-8 rounded-xl bg-[#1e1e24] px-6 py-3.5 text-sm font-bold text-white" onClick={() => setSubmitted(false)}>Create another report</button></div></div>
            ) : (
              <>
                <div className="flex items-start gap-4"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0eb] text-[#ff5722]"><Icon name="file" /></div><div><h1 className="text-2xl font-bold">End of day report</h1><p className="mt-1 text-sm text-[#85858d]">Enter today’s closing figures and upload the POS slip.</p></div></div>
                <div className="mt-9 grid gap-5 sm:grid-cols-2">
                  <label className="field-label">Report date<div className="field"><Icon name="calendar" size={18} /><input type="date" defaultValue="2025-06-07" /></div></label>
                  <label className="field-label">Branch<div className="field"><Icon name="store" size={18} /><select defaultValue="gulberg"><option value="gulberg">Gulberg Branch</option><option value="dha">DHA Phase 3</option><option value="johar">Johar Town</option></select></div></label>
                </div>
                <div className="form-divider"><span>Sales breakdown</span></div>
                <div className="grid gap-5 sm:grid-cols-3">
                  {([["delivery", "Delivery sales"], ["takeaway", "Takeaway sales"], ["dinein", "Dine-in sales"]] as const).map(([key, label]) => <label className="field-label" key={key}>{label}<div className="field"><span className="text-xs font-bold text-[#999]">Rs.</span><input inputMode="numeric" placeholder="0" value={values[key]} onChange={(e) => update(key, e.target.value)} /></div></label>)}
                </div>
                <div className="form-divider"><span>Settlement details</span></div>
                <div className="grid gap-5 sm:grid-cols-3">
                  {([["cash", "Cash received"], ["card", "Card / online"], ["expense", "Daily expenses"]] as const).map(([key, label]) => <label className="field-label" key={key}>{label}<div className="field"><span className="text-xs font-bold text-[#999]">Rs.</span><input inputMode="numeric" placeholder="0" value={values[key]} onChange={(e) => update(key, e.target.value)} /></div></label>)}
                </div>
                <div className="form-divider"><span>POS closing slip</span></div>
                <label className="group grid cursor-pointer place-items-center rounded-2xl border-2 border-dashed border-[#d9d9df] bg-[#fafafa] px-6 py-9 text-center transition hover:border-[#ff8c68] hover:bg-[#fff8f5]"><input className="hidden" type="file" accept="image/*,.pdf" onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} /><div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#ff5722] shadow-sm"><Icon name="upload" /></div><div className="mt-4 text-sm font-bold">{fileName || "Click to upload your closing slip"}</div><div className="mt-1 text-xs text-[#96969e]">JPG, PNG or PDF · Max 10 MB</div></label>
                <label className="field-label mt-6">Manager notes<textarea className="mt-2 min-h-24 w-full resize-none rounded-xl border border-[#dedee3] p-4 text-sm font-normal outline-none transition focus:border-[#ff7950]" placeholder="Add any variance, refund or operational note..." /></label>
                <div className="mt-8 flex justify-end"><button className="flex items-center gap-2 rounded-xl bg-[#ff5722] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5" onClick={() => setSubmitted(true)}>Submit EOD report <Icon name="arrow" size={18} /></button></div>
              </>
            )}
          </section>
          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#1e1e24] p-6 text-white"><div className="text-xs font-bold uppercase tracking-widest text-white/45">Live summary</div><div className="mt-7 text-sm text-white/55">Total reported sales</div><div className="mt-2 text-3xl font-bold">Rs. {total.toLocaleString()}</div><div className="mt-7 space-y-3 border-t border-white/10 pt-5 text-sm">{[["Delivery", values.delivery || "0"], ["Takeaway", values.takeaway || "0"], ["Dine-in", values.dinein || "0"]].map(([label, value]) => <div className="flex justify-between" key={label}><span className="text-white/55">{label}</span><span className="font-bold">Rs. {Number(value).toLocaleString()}</span></div>)}</div></div>
            <div className="rounded-3xl border border-[#e5e5e8] bg-white p-6"><div className="flex items-center gap-3 font-bold"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#eaf8ef] text-[#27985c]">✓</span> Before submitting</div><ul className="mt-5 space-y-3 text-sm leading-6 text-[#777780]"><li>• Match totals with your POS report</li><li>• Include refunds in manager notes</li><li>• Upload a clear closing slip</li><li>• Submit before 2:30 AM</li></ul></div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<"public" | "access" | "dashboard" | "branch">(() => window.location.pathname.includes("admin") ? "access" : "public");
  if (view === "access") return <StaffAccess onOwner={() => setView("dashboard")} onBranch={() => setView("branch")} onPublic={() => setView("public")} />;
  if (view === "dashboard") return <Dashboard onPublic={() => setView("public")} onSwitchRole={() => setView("access")} />;
  if (view === "branch") return <EodForm onSwitchRole={() => setView("access")} onPublic={() => setView("public")} />;
  return <PublicSite openAdmin={() => setView("access")} />;
}
