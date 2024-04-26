import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const list = links.map((items, index) => {
    console.log(items);
    return (
      <a key={index} href={`#${items}`}>
        {items}
      </a>
    );
  });
  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {list}
    </nav>
  );
}

export default NavBar;
