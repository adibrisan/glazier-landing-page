import React from "react";

const BusinessInfo = () => {
  return (
    <div
      style={{ display: "none" }}
      itemscope
      itemtype="http://schema.org/LocalBusiness"
    >
      <h1 itemprop="name">geamgiu resita</h1>
      <p itemprop="description">
        Magazinul nostru oferă o gamă variată de rame și geamuri de înaltă
        calitate.
      </p>
      <div
        itemprop="address"
        itemscope
        itemtype="http://schema.org/PostalAddress"
      >
        <span itemprop="streetAddress">Bulevardul republicii 2</span>,
        <span itemprop="addressLocality">Reșița</span>,
        <span itemprop="addressRegion">Caraș-Severin</span>,
        <span itemprop="postalCode">320158</span>,
        <span itemprop="addressCountry">România</span>
      </div>
      <span itemprop="telephone">+40 771 718 931</span>
    </div>
  );
};

export default BusinessInfo;
