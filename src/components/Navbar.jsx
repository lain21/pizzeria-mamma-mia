export default function Navbar() {
  const total = 25000;
  const token = false; // Cambia a true para probar el otro estado

  const totalCLP = total.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex justify-content-between">
      <div className="d-flex gap-2">
        <button className="btn btn-outline-light">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">📝 Register</button>
          </>
        )}
      </div>

      <div>
        <button className="btn btn-success">🛒 Total: ${totalCLP}</button>
      </div>
    </nav>
  );
}
