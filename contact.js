console.log("contact.js loaded");

import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

window.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    console.error("Form not found. Make sure the form has id='contactForm'");
    return;
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Form submit triggered");
if (!document.getElementById("email").value.includes("@")) {
  alert("Please enter a valid email.");
  return;
}
    try {
      await addDoc(collection(db, "clientInquiries"), {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        interestedSpecies: document.getElementById("species").value,
        budget: document.getElementById("budget").value,
        desiredYear: document.getElementById("year").value,
        status: "new",
        submittedAt: serverTimestamp()
      });

      alert("Inquiry submitted successfully!");
      contactForm.reset();

    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Error submitting form. Check console.");
    }
  });
});