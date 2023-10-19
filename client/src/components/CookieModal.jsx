import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieModal = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Annehmen"
      declineButtonText="Einstellungen"
      cookieName="printgoCookies"
      style={{
        background: "#fff",
        color: "black",
        fontSize: "0.8rem",
        display: "block",
      }}
      buttonStyle={{
        color: "#fff",
        backgroundColor: "black",
        fontSize: "1em",
        borderRadius: "0.5em",
        padding: "0.7em 1.25em",
        width: "45%",
      }}
      expires={150}
      onAccept={(acceptedByScrolling) => {
        if (acceptedByScrolling) {
          // triggered if user scrolls past threshold
          alert("Accept was triggered by user scrolling");
        } else {
          alert("Accept was triggered by clicking the Accept button");
        }
      }}
      enableDeclineButton
      onDecline={() => {
        alert("nay!");
      }}
      declineButtonStyle={{
        color: "#000",
        backgroundColor: "#fff",
        fontSize: "1em",
        borderRadius: "0.5em",
        padding: "0.7em 1.25em",
        width: "45%",
      }}
    >
      <h1 style={{ fontSize: "1.5em", margin: 0 }}>COOKIES-RICHTLINIE</h1>
      <p>
        Wir nutzen Cookies, Pixel und vergleichbare Technologien, um lhnen die
        bestmögliche Nutzung unserer Website zu ermöglichen. Mehr erfahren Sie
        in unseen Webseiten-Einstellungen. Mit Klick auf ,,Annehmen" willigen
        Sie in die Verwendung dieser Technologien ein. Dies schlieBt ggf. eine
        Datenverarbeitung auBerhalb des EWR. Unter Einstellungen können Sie eine
        Auswahl der Dienste vornehmen oder diese ablehnen. Die Einwilligung
        können Sie jederzeit weiderrufen oder ändern.{" "}
        <span style={{ textDecoration: "underline" }}>Mehr erfahren</span>
      </p>
    </CookieConsent>
  );
};

export default CookieModal;
