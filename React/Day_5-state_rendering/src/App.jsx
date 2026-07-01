import React from 'react'
import ProductCard from './ProductCard';

  let products = [
    {
      id: 1,
      title: "Wireless Noise-Canceling Headphones",
      price: 129.99,
      link: "https://example.com/products/wireless-headphones"
    },
    {
      id: 2,
      title: "Ergonomic Mechanical Keyboard",
      price: 89.50,
      link: "https://example.com/products/mechanical-keyboard"
    },
    {
      id: 3,
      title: "Ultra-Wide Gaming Monitor 34\"",
      price: 349.99,
      link: "https://example.com/products/gaming-monitor"
    },
    {
      id: 4,
      title: "Smart Fitness Watch v2",
      price: 199.00,
      link: "https://example.com/products/smart-watch"
    },
    {
      id: 5,
      title: "4K Ultra HD Webcam",
      price: 64.99,
      link: "https://example.com/products/4k-webcam"
    },
    {
      id: 6,
      title: "Portable SSD 1TB",
      price: 115.00,
      link: "https://example.com/products/portable-ssd-1tb"
    },
    {
      id: 7,
      title: "Dual-Band Wi-Fi 6 Router",
      price: 79.99,
      link: "https://example.com/products/wifi-6-router"
    },
    {
      id: 8,
      title: "Anodized Aluminum Laptop Stand",
      price: 34.95,
      link: "https://example.com/products/laptop-stand"
    },
    {
      id: 9,
      title: "USB-C Multi-Port Hub (8-in-1)",
      price: 45.00,
      link: "https://example.com/products/usb-c-hub"
    },
    {
      id: 10,
      title: "Ergonomic Mesh Office Chair",
      price: 249.99,
      link: "https://example.com/products/office-chair"
    },
    {
      id: 11,
      title: "Studio Condenser Microphone",
      price: 119.99,
      link: "https://example.com/products/studio-microphone"
    },
    {
      id: 12,
      title: "Smart LED Desk Lamp",
      price: 38.50,
      link: "https://example.com/products/smart-desk-lamp"
    },
    {
      id: 13,
      title: "Wireless Vertical Mouse",
      price: 29.99,
      link: "https://example.com/products/vertical-mouse"
    },
    {
      id: 14,
      title: "Bluetooth Pocket Speaker",
      price: 49.99,
      link: "https://example.com/products/pocket-speaker"
    },
    {
      id: 15,
      title: "Electric Standing Desk Frame",
      price: 280.00,
      link: "https://example.com/products/standing-desk"
    },
    {
      id: 16,
      title: "Leather Desk Pad Protector",
      price: 22.95,
      link: "https://example.com/products/desk-pad"
    },
    {
      id: 17,
      title: "HD Graphic Drawing Tablet",
      price: 159.99,
      link: "https://example.com/products/drawing-tablet"
    },
    {
      id: 18,
      title: "Active Noise-Canceling Earbuds",
      price: 89.99,
      link: "https://example.com/products/anc-earbuds"
    },
    {
      id: 19,
      title: "Magnetic Wireless Power Bank",
      price: 39.99,
      link: "https://example.com/products/wireless-power-bank"
    },
    {
      id: 20,
      title: "Adjustable Monitor Arm Mount",
      price: 54.50,
      link: "https://example.com/products/monitor-arm"
    }
  ];

const App = () => {
  return (
    <div>
      {products.map((elem) => {
        return <ProductCard product={elem}></ProductCard>
      })}
    </div>
  )
}

export default App