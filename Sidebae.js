
import './Sidebar.css'; // Optional styling

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'Orders', path: '/orders' },
    { name: 'Users', path: '/users' }
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🧭 Navigation</h2>
      <ul className="sidebar-list">
        {links.map(link => (
          <li key={link.name}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
