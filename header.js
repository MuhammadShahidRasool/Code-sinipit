import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">🛍️ ShopEase</div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart</a>
        <a href="/profile">Profile</a>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
    </header>
  );
}

export default Header;
