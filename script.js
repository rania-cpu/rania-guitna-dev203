function analyserTexte() {
  let texte = document.getElementById("texteSaisi").value;
  let exclureEspaces = document.getElementById("exclureEspaces").checked;

  // Compter les caractères
  let nbCaracteres = exclureEspaces ? texte.replace(/\s/g, "").length : texte.length;
  document.getElementById("nbCaracteres").textContent = nbCaracteres;

  // Compter les mots
  let mots = texte.trim().split(" ");
  let nbMots = 0;
  for (let i = 0; i < mots.length; i++) {
    if (mots[i] !== "") {
      nbMots++;
    }
  }
  document.getElementById("nbMots").textContent = nbMots;

  // Compter les phrases
  let phrases = texte.split(".");
  let nbPhrases = 0;
  for (let i = 0; i < phrases.length; i++) {
    if (phrases[i].trim() !== "") {
      nbPhrases++;
    }
  }
  document.getElementById("nbPhrases").textContent = nbPhrases;

  // Fréquence des lettres
  let freq = {};
  let texteMaj = texte.toUpperCase();
  for (let i = 0; i < texteMaj.length; i++) {
    let ch = texteMaj[i];
    if (ch >= "A" && ch <= "Z") {
      freq[ch] = (freq[ch] || 0) + 1;
    }
  }

  // Afficher la liste des lettres
  let liste = "";
  for (let lettre in freq) {
    liste += `<li>${lettre}: ${freq[lettre]}</li>`;
  }
  document.getElementById("listeLettres").innerHTML = liste;
}

// Événements
document.getElementById("texteSaisi").addEventListener("input", analyserTexte);
document.getElementById("exclureEspaces").addEventListener("change", analyserTexte);
