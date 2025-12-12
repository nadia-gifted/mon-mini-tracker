# 🎓 Mon Tracker de Révisions
Une application web interactive conçu pour organiser, planifier et suivre la progression de mes révisions d'examens de manière visuelle.

Ce projet a été réaliser dans le cadre de mon Master pour démontrer la manipulation du DOM et la gestion d'états en JavaScript Vanilla (sans framework), appliquée à un cas d'usage réel.

## 📸 Aperçu

![Mon Tracker de Révisions](demo-tracker.png)

## 💫 Fonctionnalités

* **Gestion des révisions (CRUD): ** Ajout de nouvelles matières ou chapitres et possibilité de les supprimer une fois l'examen passé.
* **Workflow de progression :** Déplacement des sujets à travers trois étapes clés :
    1. 📝**Matières à réviser** (À faire)
    2. 🧠**En cours d'apprentissage** (En cours)
    3. ✅**Matières finies** (Terminé)
* **Indicateurs visuels :** Code couleur automatique selon l'état d'avancement pour visualiser rapidement la charge de travail restante.
* **Persistance des données :** Utilisation du `localStorage` du navigateur pour sauvegarder ma progression même si je ferme la page.
* **Design Responsive :** Interface fluide adaptée aux écrans d'ordinateur et tablettes pour réviser partout.

## 🛠️ Technologie utilisées

* **HTML5** : Structure sémantique de la page.
* **CSS3** : Utilisation de Flexbox pour la mise en page en colonnes type "Kanban".
* **JavaScript (ES6+)** : Logique de déplacement des éléments, manipulation du DOM de gestion de la sauvegarde locale.

##  🔒 Sécurité et Performance

Ce Projet a été conçu avec une approche "Client-Side" sécurisée :
* **Protection XXS :** L'affichage des données (nom des matières) utilise strictement `textContent` pour prévenir l'injection de code malveillant.
* **Confidentialité :** Aucune base de données externe. Toutes les données de révision restent stockées localement sur l'ordinateur.

## 🧑‍💻 Comment l'utiliser ?

1. Clonez ce dépot ou télécharger les fichiers.
2. Ouvrer simplement le fichier `index.html` dans votre navigateur web
3. Ajouter votre premier chapitre à réviser et commencer le suivi !

---
* Fait avec 🧠 et ❤️ par Matinnin Soumahoro*
