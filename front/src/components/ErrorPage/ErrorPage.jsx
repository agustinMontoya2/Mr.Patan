import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>La direccion a la que intentas acceder no esta disponible</h1>
      <img
        src="https://imgs.search.brave.com/GdBOxHsahX9pUVYBaqAqUcUzgZVXAxMn43LEl2eNQGQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmV4ZWxzLmNv/bS9tZWRpYS91c2Vy/cy8zLzE3NzQ0OS9p/c29sYXRlZC9wcmV2/aWV3LzU0MTZjMDk1/ZWM5YTc0ZmMwYjA3/YjJkMDE5OTFkNTk0/LXBlcnJvLWNhYmV6/YS10cmlzdGUtaG9j/aWNvLXBsYW5vLnBu/Zw"
        alt=""
      />
      <div>
        <Link to="/">
          <button>Volvamos a casa</button>
        </Link>
      </div>
    </div>
  );
};
