import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export function Navigation() {
  const { url } = useRouteMatch();

  function NavigationLink(props: { label: string; to: string }) {
    return (
      <Link
        style={{
          fontSize: 56,
          border: "solid 1px white",
          borderRadius: 20,
          margin: 20,
          padding: 20,
          textAlign: "center",
          backgroundColor: "#0D1424",
          textTransform: "capitalize",
        }}
        to={props.to}
      >
        {props.label.toLowerCase()}
      </Link>
    );
  }

  return (
    <section className="banner">
      <img src="images/banner3.png" alt="" />
      <div className="col-md-12" style={{ position: "absolute", top: 50 }}>
        <div className="container jumboContainer">
          <div
            className="col-md-8 middle"
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <NavigationLink label="View speaker" to={`${url}/speakers`} />
            <NavigationLink label="View Sessions" to={`${url}/sessions`} />
            <NavigationLink label="About Us" to={`${url}/about`}/>

          </div>
        </div>
      </div>
    </section>
  );
}
