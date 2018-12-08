import * as React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <div
      style={{
        background: "teal",
        marginBottom: "1.45rem"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem"
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none"
            }}
          >
            Static Site Seed
          </Link>
        </h1>
      </div>
    </div>
  );
}
