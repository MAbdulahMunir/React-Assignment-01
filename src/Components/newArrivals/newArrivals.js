import React from "react";
import cardImg1 from "../../assets/img/new1-img.png";
import cardImg2 from "../../assets/img/new2-img.png";
import cardImg3 from "../../assets/img/new3-img.png";
import cardImg4 from "../../assets/img/new4-img.png";
import cardImg5 from "../../assets/img/new5-img.png";
import cardImg6 from "../../assets/img/new6-img.png";
import NewArrivalsCard from "../newArrivalsCard/newArrivalsCard";

export default function NewArrivals() {
  return (
    <>
      <section className="section new" id="new">
        <h2 className="section__title">New Arrivals</h2>

        <NewArrivalsCard
          src={cardImg1}
          title="Haunted House"
          newPrice="14.99"
          oldPrice="29.99"
        />
        <NewArrivalsCard
          src={cardImg2}
          title="Halloween Candle"
          newPrice="11.99"
          oldPrice="$21.99"
        />
        <NewArrivalsCard
          src={cardImg3}
          title="Witch Hat"
          newPrice="4.99"
          oldPrice="9.99"
        />
        <NewArrivalsCard
          src={cardImg4}
          title="Rip"
          newPrice="24.99"
          oldPrice="44.99"
        />
        <NewArrivalsCard
          src={cardImg5}
          title="Terrifying Crystal Ball"
          newPrice="5.99"
          oldPrice="12.99"
        />
        <NewArrivalsCard
          src={cardImg6}
          title="Witch Broom"
          newPrice="7.99"
          oldPrice="14.99"
        />
      </section>
    </>
  );
}
