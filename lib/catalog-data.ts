export type Service = {
  code: string
  title: string
  description?: string
  deliverables?: string[]
  duration: string
  model: string
  price: string
  recurring?: string
}

export type Category = {
  id: string
  letter: string
  title: string
  shortTitle: string
  tagline: string
  services: Service[]
}

export const categories: Category[] = [
  {
    id: "conseil",
    letter: "A",
    title: "Conseil et stratégie IA",
    shortTitle: "Conseil",
    tagline:
      "Point d'entrée de la relation client. Ces services sont courts, à forte valeur perçue et préparent les projets de réalisation.",
    services: [
      {
        code: "A1",
        title: "Audit de maturité IA et données",
        description:
          "État des lieux des processus, des outils et des données de l'entreprise pour identifier où l'IA peut réellement faire gagner du temps ou de l'argent, et où elle n'a pas d'intérêt.",
        deliverables: [
          "Cartographie des processus et des sources de données",
          "Matrice « effort / gain » des cas d'usage",
          "Rapport de 10 à 15 pages avec recommandations priorisées",
          "Restitution à la direction (1 h)",
        ],
        duration: "1 à 3 jours",
        model: "Forfait",
        price: "120 – 360 €",
      },
      {
        code: "A2",
        title: "Atelier de découverte des cas d'usage",
        description:
          "Atelier collectif avec la direction et les chefs de service pour faire émerger les cas d'usage concrets : réponses clients, devis, reporting, saisie, relances.",
        deliverables: [
          "Atelier animé (demi-journée ou journée)",
          "Liste de 10 à 20 cas d'usage classés",
          "Plan d'action à 90 jours",
        ],
        duration: "0,5 à 1 jour",
        model: "Forfait",
        price: "80 – 200 €",
      },
      {
        code: "A3",
        title: "Feuille de route IA sur 12 mois",
        description:
          "Plan de transformation chiffré : chantiers, ordre, budget, ressources, indicateurs de réussite. Convient aux PME de 20 à 200 personnes, banques, cliniques, groupes.",
        deliverables: [
          "Roadmap trimestrielle",
          "Budget et retour sur investissement estimé",
          "Indicateurs de suivi (KPI)",
          "Analyse des risques",
        ],
        duration: "1 à 2 semaines",
        model: "Forfait",
        price: "300 – 800 €",
      },
      {
        code: "A4",
        title: "Charte d'usage de l'IA et gouvernance des données",
        description:
          "Règles claires pour les employés : quels outils autorisés, quelles données ne jamais envoyer à un modèle externe, comment vérifier les résultats. Réduit le risque de fuite et d'erreurs.",
        deliverables: [
          "Charte d'usage (français)",
          "Classification des données (publiques, internes, sensibles)",
          "Liste des outils autorisés",
          "Procédure de validation humaine",
        ],
        duration: "3 à 5 jours",
        model: "Forfait",
        price: "160 – 400 €",
      },
      {
        code: "A5",
        title: "Étude de faisabilité et preuve de concept (POC)",
        description:
          "Prototype fonctionnel sur un seul cas d'usage, avec les vraies données du client, pour valider le gain avant d'investir dans une solution complète.",
        deliverables: [
          "Prototype fonctionnel",
          "Mesure de la qualité (taux de bonnes réponses)",
          "Estimation du coût d'exploitation mensuel",
          "Recommandation : poursuivre, corriger ou arrêter",
        ],
        duration: "2 à 4 semaines",
        model: "Forfait",
        price: "300 – 1 000 €",
      },
      {
        code: "A6",
        title: "Directeur IA externalisé (temps partiel)",
        description:
          "Nous jouons le rôle de responsable IA de l'entreprise quelques jours par mois : arbitrage des projets, sélection des outils, suivi des fournisseurs, pilotage des équipes.",
        deliverables: [
          "Réunion mensuelle de pilotage",
          "Tableau de bord des chantiers IA",
          "Disponibilité pour questions (WhatsApp ou e-mail)",
        ],
        duration: "Mensuel",
        model: "Abonnement",
        price: "300 – 1 000 €",
        recurring: "/ mois",
      },
    ],
  },
  {
    id: "automatisation",
    letter: "B",
    title: "Automatisation intelligente des processus",
    shortTitle: "Automatisation",
    tagline:
      "Relier les outils déjà utilisés par le client et y ajouter une couche d'intelligence pour traiter les e-mails, documents, messages et données sans saisie manuelle.",
    services: [
      {
        code: "B1",
        title: "Workflow d'automatisation sur mesure (n8n)",
        description:
          "Conception d'un scénario automatisé reliant plusieurs outils (formulaire, tableur, CRM, messagerie, base de données) avec étapes de décision et notification.",
        deliverables: [
          "Workflow documenté et testé",
          "Gestion des erreurs et alertes",
          "Mode d'emploi d'une page",
          "1 mois de garantie",
        ],
        duration: "2 à 7 jours",
        model: "Forfait par workflow",
        price: "80 – 300 €",
      },
      {
        code: "B2",
        title: "Automatisation de la facturation et des relances de paiement",
        description:
          "Génération des devis et factures, envoi, rappel automatique des impayés par e-mail ou WhatsApp, rapprochement avec les paiements (mobile money, carte, virement).",
        deliverables: [
          "Modèles de devis et factures",
          "Scénario de relance en 3 étapes",
          "Tableau de suivi des encaissements",
          "Alerte pour les retards importants",
        ],
        duration: "1 à 3 semaines",
        model: "Forfait",
        price: "200 – 700 €",
      },
      {
        code: "B3",
        title: "Traitement intelligent de documents (OCR et LLM)",
        description:
          "Lecture automatique de factures, bons de livraison, CV, contrats, formulaires scannés : extraction des champs, vérification, enregistrement dans la base de données ou le logiciel de gestion.",
        deliverables: [
          "Pipeline d'extraction",
          "Validation humaine des cas douteux",
          "Export vers base de données ou tableur",
          "Rapport de précision mesuré",
        ],
        duration: "2 à 5 semaines",
        model: "Forfait",
        price: "400 – 1 400 €",
      },
      {
        code: "B4",
        title: "Tri et réponse assistée des e-mails",
        description:
          "Classement automatique de la boîte de réception, priorisation, brouillons de réponse proposés à l'employé, transfert au bon service, résumé quotidien.",
        deliverables: [
          "Règles de classement",
          "Modèles de réponses par type de demande",
          "Résumé quotidien",
          "Humain toujours en validation",
        ],
        duration: "1 à 3 semaines",
        model: "Forfait",
        price: "200 – 700 €",
      },
      {
        code: "B5",
        title: "Reporting automatique et alertes",
        description:
          "Rapports hebdomadaires ou mensuels générés tout seuls à partir des données (ventes, stocks, présence, production) avec commentaire rédigé par IA et envoi à la direction.",
        deliverables: [
          "Rapport PDF ou tableau de bord",
          "Commentaire automatique des écarts",
          "Alertes sur seuils (WhatsApp, e-mail)",
        ],
        duration: "1 à 3 semaines",
        model: "Forfait",
        price: "160 – 600 €",
      },
      {
        code: "B6",
        title: "Connecteurs et intégrations d'outils",
        description:
          "Connexion entre les logiciels du client : site web, CRM, compta, Google Workspace, Microsoft 365, WhatsApp Business, Odoo, logiciel de paie, base de données interne.",
        deliverables: [
          "Connecteur développé et testé",
          "Journal des échanges",
          "Documentation technique",
        ],
        duration: "2 à 10 jours",
        model: "Forfait par connecteur",
        price: "120 – 500 €",
      },
      {
        code: "B7",
        title: "Veille et collecte automatisée d'informations",
        description:
          "Surveillance automatique de sources (appels d'offres, prix des concurrents, actualités, réglementation) avec synthèse et alerte par IA.",
        deliverables: [
          "Sources paramétrées",
          "Synthèse hebdomadaire",
          "Alerte sur mots-clés importants",
        ],
        duration: "1 à 2 semaines",
        model: "Forfait",
        price: "160 – 600 €",
      },
      {
        code: "B8",
        title: "Automatisation des ressources humaines",
        description:
          "Pré-tri des candidatures, planning, validation des congés, rappels de pointage, génération de documents RH.",
        deliverables: [
          "Workflow candidature et congés",
          "Génération automatique de documents",
          "Tableau de bord RH",
        ],
        duration: "2 à 6 semaines",
        model: "Forfait",
        price: "300 – 1 200 €",
      },
    ],
  },
  {
    id: "agents",
    letter: "C",
    title: "Agents IA, chatbots et assistants",
    shortTitle: "Agents & chatbots",
    tagline:
      "Des assistants qui répondent, rédigent, cherchent et agissent à la place d'un employé sur des tâches répétitives.",
    services: [
      {
        code: "C1",
        title: "Chatbot WhatsApp, Messenger et site web",
        description:
          "Assistant qui répond aux questions fréquentes, prend des rendez-vous, collecte les demandes de devis et transmet à un humain.",
        deliverables: [
          "Bot configuré sur 1 à 3 canaux",
          "Base de connaissances de l'entreprise",
          "Passage de relais à un humain",
          "Statistiques de conversations",
        ],
        duration: "2 à 4 semaines",
        model: "Forfait + abonnement",
        price: "400 – 1 400 €",
        recurring: "+ 30 – 120 € / mois",
      },
      {
        code: "C2",
        title: "Assistant interne sur les documents de l'entreprise",
        description:
          "Les employés posent leurs questions en français (procédures, contrats, fiches produits) et obtiennent une réponse sourcée (technique RAG).",
        deliverables: [
          "Indexation des documents",
          "Interface de chat web",
          "Gestion des droits d'accès",
          "Citation des sources",
        ],
        duration: "3 à 6 semaines",
        model: "Forfait + abonnement",
        price: "600 – 2 000 €",
      },
      {
        code: "C3",
        title: "Agent commercial : qualification et devis automatique",
        description:
          "Qualifie les demandes entrantes, prépare un devis à partir du catalogue et des règles de prix, et soumet au commercial.",
        deliverables: [
          "Catalogue et règles de prix intégrés",
          "Brouillon de devis en PDF",
          "Suivi des relances",
          "Intégration CRM ou tableur",
        ],
        duration: "3 à 6 semaines",
        model: "Forfait",
        price: "500 – 1 600 €",
      },
      {
        code: "C4",
        title: "Agent de support client multicanal",
        description:
          "Traite les demandes de support, classe par urgence, propose la réponse et escalade les cas complexes.",
        deliverables: [
          "Triage automatique",
          "Réponses suggérées",
          "Tableau de bord du support",
          "Rapports de qualité",
        ],
        duration: "4 à 8 semaines",
        model: "Forfait + abonnement",
        price: "600 – 1 800 €",
      },
      {
        code: "C5",
        title: "Agents autonomes multi-étapes",
        description:
          "Agents qui enchaînent plusieurs actions avec garde-fous et approbation humaine pour les actions sensibles.",
        deliverables: [
          "Agent avec outils définis",
          "Garde-fous et seuils d'approbation",
          "Journal complet des actions",
          "Tests de scénarios",
        ],
        duration: "4 à 10 semaines",
        model: "Forfait",
        price: "1 000 – 3 000 €",
      },
      {
        code: "C6",
        title: "Transcription et compte rendu de réunions, appels et dictées",
        description:
          "Transcription des réunions et appels, résumé, liste des décisions et des tâches, envoi aux participants.",
        deliverables: [
          "Pipeline de transcription",
          "Modèle de compte rendu",
          "Envoi automatique",
          "Archivage consultable",
        ],
        duration: "2 à 4 semaines",
        model: "Forfait",
        price: "400 – 1 200 €",
      },
      {
        code: "C7",
        title: "Assistant IA pour centre d'appels et BPO",
        description:
          "Aide à l'agent en temps réel, résumé d'appel, notation de la qualité.",
        deliverables: [
          "Résumé automatique des appels",
          "Grille de qualité automatique",
          "Suggestions pendant l'appel",
          "Tableau de bord superviseur",
        ],
        duration: "6 à 12 semaines",
        model: "Forfait + abonnement",
        price: "1 200 – 5 000 €",
      },
    ],
  },
  {
    id: "donnees",
    letter: "D",
    title: "Bases de données et données vers l'IA",
    shortTitle: "Données",
    tagline:
      "Vos bases de données (PostgreSQL, MySQL, SQL Server, ETL) deviennent le socle des projets IA.",
    services: [
      { code: "D1", title: "Audit de qualité et nettoyage des données", duration: "1 à 4 semaines", model: "Forfait", price: "200 – 800 €" },
      { code: "D2", title: "Modernisation de base de données vers PostgreSQL + pgvector", duration: "3 à 8 semaines", model: "Forfait", price: "600 – 2 400 €" },
      { code: "D3", title: "Base de connaissances pour l'IA (RAG)", duration: "2 à 6 semaines", model: "Forfait", price: "500 – 1 800 €" },
      { code: "D4", title: "Interrogation des données en langage naturel (text-to-SQL)", duration: "3 à 6 semaines", model: "Forfait", price: "600 – 2 000 €" },
      { code: "D5", title: "Pipelines ETL enrichis par IA", duration: "3 à 8 semaines", model: "Forfait", price: "500 – 1 800 €" },
      { code: "D6", title: "Entrepôt de données léger et tableaux de bord", duration: "4 à 8 semaines", model: "Forfait", price: "600 – 2 000 €" },
      { code: "D7", title: "Sécurité, anonymisation et conformité des données", duration: "1 à 3 semaines", model: "Forfait", price: "200 – 800 €" },
      { code: "D8", title: "Prédiction et détection d'anomalies (apprentissage automatique)", duration: "4 à 10 semaines", model: "Forfait", price: "600 – 2 400 €" },
      { code: "D9", title: "Migration et fusion de bases hétérogènes", duration: "3 à 10 semaines", model: "Forfait", price: "500 – 2 000 €" },
      { code: "D10", title: "Hébergement de modèles IA en local (souveraineté)", duration: "3 à 6 semaines", model: "Forfait", price: "800 – 4 000 €", recurring: "+ matériel" },
    ],
  },
  {
    id: "developpement",
    letter: "E",
    title: "Développement logiciel augmenté par l'IA",
    shortTitle: "Développement",
    tagline:
      "Notre métier historique transformé pour livrer plus vite grâce à l'assistance de l'IA.",
    services: [
      { code: "E1", title: "Ajout de fonctions IA dans une application existante", duration: "2 à 6 semaines", model: "Forfait", price: "400 – 1 600 €" },
      { code: "E2", title: "Application métier avec IA intégrée (sur mesure)", duration: "2 à 6 mois", model: "Forfait par phases", price: "1 600 – 8 000 €" },
      { code: "E3", title: "API IA privée pour partenaires et applications", duration: "3 à 8 semaines", model: "Forfait + usage", price: "600 – 2 000 €" },
      { code: "E4", title: "Modernisation de code legacy assistée par IA", duration: "1 à 4 mois", model: "Forfait par lot", price: "600 – 3 000 €" },
      { code: "E5", title: "Tests, documentation et revue de code assistés par IA", duration: "1 à 3 semaines", model: "Forfait", price: "200 – 800 €" },
      { code: "E6", title: "MVP en 4 semaines", duration: "4 semaines", model: "Forfait", price: "1 200 – 3 000 €" },
      { code: "E7", title: "Équipe développeur externalisée (régie)", duration: "Mensuel", model: "Régie au jour", price: "50 – 120 €", recurring: "/ jour" },
      { code: "E8", title: "Sites et plateformes pilotés par données et IA", duration: "6 à 14 semaines", model: "Forfait", price: "1 000 – 5 000 €" },
    ],
  },
  {
    id: "contenu",
    letter: "F",
    title: "Contenu, communication et documents par IA",
    shortTitle: "Contenu",
    tagline:
      "Production de contenus, traductions et documents professionnels accélérée par l'IA, toujours relue par un humain.",
    services: [
      { code: "F1", title: "Studio de contenu assisté par IA", duration: "Mensuel", model: "Abonnement", price: "100 – 360 €", recurring: "/ mois" },
      { code: "F2", title: "Traduction et localisation multilingue", duration: "Selon volume", model: "Forfait ou au mot", price: "Sur devis" },
      { code: "F3", title: "Génération de documents professionnels", duration: "1 à 3 semaines", model: "Forfait", price: "200 – 800 €" },
      { code: "F4", title: "Catalogue produit enrichi et référencement", duration: "1 à 4 semaines", model: "Forfait au volume", price: "Sur devis" },
    ],
  },
  {
    id: "formation",
    letter: "G",
    title: "Formation et accompagnement",
    shortTitle: "Formation",
    tagline:
      "Faire monter vos équipes en compétence, des dirigeants aux développeurs.",
    services: [
      { code: "G1", title: "Initiation à l'IA pour dirigeants (demi-journée)", duration: "0,5 jour", model: "Forfait par session", price: "100 – 300 €" },
      { code: "G2", title: "Formation des équipes aux outils IA", duration: "1 jour", model: "Forfait par groupe", price: "200 – 600 €" },
      { code: "G3", title: "Formation à l'automatisation avec n8n", duration: "2 jours", model: "Forfait par groupe", price: "360 – 1 000 €" },
      { code: "G4", title: "Formation des développeurs : APIs de LLMs, RAG et agents", duration: "3 jours", model: "Forfait par groupe", price: "600 – 1 600 €" },
      { code: "G5", title: "Formation SQL et données pour l'ère de l'IA", duration: "2 à 3 jours", model: "Forfait par groupe", price: "400 – 1 200 €" },
      { code: "G6", title: "Partenariats avec écoles et centres de formation", duration: "Selon accord", model: "Vacation", price: "Sur accord" },
    ],
  },
  {
    id: "exploitation",
    letter: "H",
    title: "Exploitation, maintenance et suivi des solutions IA",
    shortTitle: "Exploitation",
    tagline:
      "Garder vos solutions IA fiables, sûres et maîtrisées en coûts dans la durée.",
    services: [
      { code: "H1", title: "Maintenance et évolution des solutions IA", duration: "Mensuel", model: "Abonnement", price: "40 – 300 €", recurring: "/ mois" },
      { code: "H2", title: "Surveillance des coûts, de la qualité et des risques (LLMOps)", duration: "Mensuel", model: "Abonnement", price: "60 – 240 €", recurring: "/ mois" },
      { code: "H3", title: "Évaluation, tests et sécurité des assistants", duration: "1 à 3 semaines", model: "Forfait", price: "200 – 700 €" },
      { code: "H4", title: "Hébergement et déploiement géré", duration: "Mensuel", model: "Abonnement", price: "20 – 120 €", recurring: "/ mois" },
    ],
  },
]

export const totalServices = categories.reduce(
  (sum, category) => sum + category.services.length,
  0,
)
