import { useState } from "react";
import { Link } from "react-router-dom";

const heroCategories = [
  {
    label: "Automobiles",
    heading: "Automobiles",
    subheading: "Latest trending",
    image: "/images/automobiles.png",
  },
  {
    label: "Clothes and wear",
    heading: "Clothes and wear",
    subheading: "Latest fashion",
    image: "/images/clothes.png",
  },
  {
    label: "Home interiors",
    heading: "Home interiors",
    subheading: "Modern home",
    image: "/images/home-interior.png",
  },
  {
    label: "Computer and tech",
    heading: "Electronic items",
    subheading: "Latest trending",
    image: "/images/hero-electronics.png",
  },
  {
    label: "Tools, equipments",
    heading: "Tools and equipments",
    subheading: "Industrial supplies",
    image: "/images/tools.png",
  },
  {
    label: "Sports and outdoor",
    heading: "Sports and outdoor",
    subheading: "Outdoor essentials",
    image: "/images/sports.png",
  },
  {
    label: "Animal and pets",
    heading: "Animal and pets",
    subheading: "Pet products",
    image: "/images/pets.png",
  },
  {
    label: "Machinery tools",
    heading: "Machinery tools",
    subheading: "Heavy equipment",
    image: "/images/machinery.png",
  },
  {
    label: "More category",
    heading: "More categories",
    subheading: "Explore more",
    image: "/images/backpack.png",
  },
];

const deals = [
  { name: "Smart watches", discount: "-25%", image: "/images/watch.png" },
  { name: "Laptops", discount: "-15%", image: "/images/laptop.png" },
  { name: "GoPro camera", discount: "-40%", image: "/images/gopro.png" },
  { name: "Headphones", discount: "-25%", image: "/images/headset.png" },
  { name: "Canon cameras", discount: "-25%", image: "/images/camera.png" },
];

const homeOutdoor = [
  { name: "Electric Kettle", price: "USD 39", image: "/images/kettle.png" },
  { name: "Soft Chair", price: "USD 19", image: "/images/chair.png" },
  { name: "Kitchen Dishes", price: "USD 39", image: "/images/dishes.png" },
  { name: "Blue Backpack", price: "USD 99", image: "/images/backpack.png" },
  { name: "Leather Wallet", price: "USD 34", image: "/images/wallet.png" },
  { name: "Cotton T-shirt", price: "USD 98", image: "/images/tshirt.png" },
  { name: "Smart Watch", price: "USD 70", image: "/images/watch.png" },
  { name: "Laptop Stand", price: "USD 89", image: "/images/laptop.png" },
];

const electronics = [
  { name: "Canon Camera", price: "USD 998", image: "/images/camera.png" },
  { name: "GoPro HERO6", price: "USD 998", image: "/images/gopro.png" },
  { name: "Smartphone 12", price: "USD 100", image: "/images/phone.png" },
  { name: "Laptop Pro", price: "USD 899", image: "/images/laptop.png" },
  { name: "Smart Watch", price: "USD 70", image: "/images/watch.png" },
  { name: "Headset for gaming", price: "USD 89", image: "/images/headset.png" },
];

const recommended = [
  { name: "Smartphone 12 Pro Max", price: "$99.50", image: "/images/phone.png" },
  { name: "Laptop Pro 15 inch", price: "$899.00", image: "/images/laptop.png" },
  { name: "Smart Watch Silver", price: "$69.50", image: "/images/watch.png" },
  { name: "Headset for Gaming", price: "$88.90", image: "/images/headset.png" },
  { name: "Mens Cotton T-shirt", price: "$98.00", image: "/images/tshirt.png" },
  { name: "Leather Wallet", price: "$34.00", image: "/images/wallet.png" },
  { name: "Blue Backpack", price: "$99.00", image: "/images/backpack.png" },
  { name: "Electric Kettle", price: "$39.00", image: "/images/kettle.png" },
  { name: "Soft Chair", price: "$19.00", image: "/images/chair.png" },
  { name: "Kitchen Dishes Set", price: "$39.00", image: "/images/dishes.png" },
];

const services = [
  {
    title: "Source from Industry Hubs",
    image: "/images/service-industry.png",
    icon: "🔍",
  },
  {
    title: "Customize Your Products",
    image: "/images/service-customize.png",
    icon: "📦",
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    image: "/images/service-shipping.png",
    icon: "✈️",
  },
  {
    title: "Product monitoring and inspection",
    image: "/images/service-inspection.png",
    icon: "🛡️",
  },
];

const regions = [
  { flag: "🇦🇪", country: "Arabic Emirates", site: "shopname.ae" },
  { flag: "🇦🇺", country: "Australia", site: "shopname.com" },
  { flag: "🇺🇸", country: "United States", site: "shopname.ae" },
  { flag: "🇷🇺", country: "Russia", site: "shopname.ru" },
  { flag: "🇮🇹", country: "Italy", site: "shopname.it" },
  { flag: "🇩🇰", country: "Denmark", site: "denmark.com.dk" },
  { flag: "🇫🇷", country: "France", site: "shopname.com.fr" },
  { flag: "🇨🇳", country: "China", site: "shopname.ae" },
  { flag: "🇬🇧", country: "Great Britain", site: "shopname.co.uk" },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState(heroCategories[3]);

  return (
    <main className="figma-home-page">
      <div className="container">
        <section className="home-hero-card">
          <aside className="hero-category-menu">
            {heroCategories.map((category) => (
              <button
                key={category.label}
                type="button"
                className={
                  activeCategory.label === category.label ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category.label}
              </button>
            ))}
          </aside>

          <div className="hero-banner">
            <img
              src={activeCategory.image}
              alt={activeCategory.heading}
              className="hero-bg"
            />

            <div className="hero-content">
              <p>{activeCategory.subheading}</p>
              <h1>{activeCategory.heading}</h1>
              <Link to="/products">Learn more</Link>
            </div>
          </div>

          <aside className="hero-user-panel">
            <div className="user-welcome">
              <div className="user-avatar">U</div>
              <p>
                Hi, user <br />
                let's get stated
              </p>
              <Link to="/signup" className="join-btn">
                Join now
              </Link>
              <Link to="/login" className="login-btn">
                Log in
              </Link>
            </div>

            <div className="orange-box">
              Get US $10 off with a new supplier
            </div>

            <div className="cyan-box">
              Send quotes with supplier preferences
            </div>
          </aside>
        </section>

        <section className="deals-section">
          <div className="deals-info">
            <h2>Deals and offers</h2>
            <p>Hygiene equipments</p>

            <div className="timer-row">
              <span>
                04 <small>Days</small>
              </span>
              <span>
                13 <small>Hour</small>
              </span>
              <span>
                34 <small>Min</small>
              </span>
              <span>
                56 <small>Sec</small>
              </span>
            </div>
          </div>

          <div className="deal-items">
            {deals.map((item) => (
              <Link to="/products" className="deal-item" key={item.name}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.discount}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="showcase-promo home-promo">
            <h2>Home and outdoor</h2>
            <Link to="/products">Source now</Link>
          </div>

          <div className="showcase-grid">
            {homeOutdoor.map((item) => (
              <Link to="/products" className="showcase-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    From <br /> {item.price}
                  </p>
                </div>
                <img src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <div className="showcase-promo electronics-promo">
            <h2>Consumer electronics and gadgets</h2>
            <Link to="/products">Source now</Link>
          </div>

          <div className="showcase-grid electronics-grid">
            {electronics.map((item) => (
              <Link to="/products" className="showcase-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    From <br /> {item.price}
                  </p>
                </div>
                <img src={item.image} alt={item.name} />
              </Link>
            ))}
          </div>
        </section>

        <section className="supplier-section">
          <img src="/images/supplier-banner.png" alt="Supplier" />

          <div className="supplier-text">
            <h2>An easy way to send requests to all suppliers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <form className="supplier-form">
            <h3>Send quote to suppliers</h3>
            <input placeholder="What item you need?" />
            <textarea placeholder="Type more details" />
            <div>
              <input placeholder="Quantity" />
              <select>
                <option>Pcs</option>
                <option>Kg</option>
              </select>
            </div>
            <button type="button">Send inquiry</button>
          </form>
        </section>

        <section className="recommended-section">
          <h2>Recommended items</h2>

          <div className="recommended-grid">
            {recommended.map((item) => (
              <Link to="/products" className="recommended-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <strong>{item.price}</strong>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="services-section">
          <h2>Our extra services</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <img src={service.image} alt={service.title} />
                <span>{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="regions-section">
          <h2>Suppliers by region</h2>

          <div className="regions-grid">
            {regions.map((region) => (
              <div className="region-item" key={region.country}>
                <span>{region.flag}</span>
                <div>
                  <h3>{region.country}</h3>
                  <p>{region.site}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="newsletter-section">
        <h2>Subscribe on our newsletter</h2>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>

        <form>
          <input type="email" placeholder="Email" />
          <button type="button">Subscribe</button>
        </form>
      </section>
    </main>
  );
}

export default Home;