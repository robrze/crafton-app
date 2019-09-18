import React from "react";
import "./footer.scss";

interface LinksSectionProps {
  title: string;
  links: string[];
}

const linksSections: LinksSectionProps[] = [
  {
    title: "O nas",
    links: ["Dlaczego CDV", "Kadra naukowa", "Dla mediów", "Kontakt"]
  },
  {
    title: "Dla kandydata",
    links: [
      "Poradnik maturzysty",
      "Rekrutacja",
      "Kredyt studencki",
      "Studia dla cudzoziemców"
    ]
  },
  {
    title: "Dla studenta",
    links: ["Wirtualna Uczelnia", "Stypendia", "Biuro Karier", "Studiuj dalej"]
  },
  {
    title: "Dla biznesu",
    links: [
      "Współpraca z biznesem",
      "EmotionsLAB",
      "Wynajem sal",
      "Znajdź pracownika"
    ]
  },
  {
    title: "Na skróty",
    links: ["Aktualności", "Wydarzenia", "Konferencje", "Blog"]
  }
];

const RenderLinksSection = () => (
  <div className="footer__links">
    {linksSections.map(linksColumn => (
      <div key={linksColumn.title}>
        {linksColumn.title}
        <div className="links-column">
          {linksColumn.links.map(link => (
            <a href="/" className="link">
              <br />
              <br />
              {link}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__address">
        ul. Głogowska 10 <br /><br/>
        61-719 Poznań <br /><br/>
        tel. 61 27 11 000
      </p>
      <RenderLinksSection />
    </div>
  );
};
