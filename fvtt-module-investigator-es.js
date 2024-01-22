Hooks.once('ready', () => {
  if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "sendero"
  ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-sendero-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
    "esoscriminales"
  ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-esoscriminales-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
    "guardias"
  ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-guardias-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
    "cuchillas"
  ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-cuchillas-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
    "miedo"
  ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-miedo-es.webp";
  }
});

Hooks.once("renderCompendiumDirectory", () => {
  game.settings.register("fvtt-module-investigator-es", "sistema-investigator", {
    name: "Sistema a configurar",
    hint: "Sistema Investigator que se desea configurar",
    type: String,
    default: "sendero", // The default value for the setting
    scope: "world", // This specifies a client-stored setting
    config: true, // This specifies that the setting appears in the configuration view
    choices: {
      // If choices are defined, the resulting setting will be a select menu
      Ninguno: "Ninguno",
      cuchillas: "Cuchillas Viperinas",
      esoscriminales: "Esoscriminales",
      guardias: "Guardias nocturnos",
      miedo: "Miedo ensimismado",
      sendero: "El sendero de Cthulhu",
    },
  });

  game.settings.register("fvtt-module-investigator-es", "restablecer-investigator", {
    name: "Restablecer configuración del sistema",
    hint: "Cambia los ajustes del sistema INVESTIGATOR para que se ajuste al sistema seleccionado",
    type: Boolean,
    default: true,
    scope: "world",
    config: true,
    onChange: (directory) => {
      window.location.reload();
    },
  });
  if (
    game.user.isGM &&
    game.settings.get("fvtt-module-investigator-es", "restablecer-investigator")
  ) {
    console.log(game.settings.get("fvtt-module-investigator-es", "sistema-investigator"));
    if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "sendero"
    ) {
      initsendero();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "esoscriminales"
    ) {
      initesoscriminales();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "guardias"
    ) {
      initguardias();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "cuchillas"
    ) {
      initcuchillas();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "miedo"
    ) {
      initmiedo();
    } else {
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }
  }
  function initsendero() {
    setTimeout(() => {

      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "tealTheme");

      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Profesión");
      			console.log(game.settings.get("investigator", "personalDetails"));
      game.settings.set("investigator", "personalDetails", [
    {"name": "Motivaciones","type": "text"}]);
      console.log(game.settings.get("investigator", "longNotes"));
      game.settings.set("investigator", "longNotes", [
        "Contactos y notas",
        "Beneficios profesionales",
        "Pilares de cordura",
        "Fuentes de estabilidad",
      ]);
      console.log(game.settings.get("investigator", "genericOccupation"));
      game.settings.set("investigator", "genericOccupation", "Investigador");
      console.log(
        game.settings.get("investigator", "investigativeAbilityCategories")
      );
      game.settings.set("investigator", "investigativeAbilityCategories", [
        "Académicas",
        "Interpersonales",
        "Técnicas",
      ]);
      console.log(
        game.settings.get("investigator", "generalAbilityCategories")
      );
      game.settings.set("investigator", "generalAbilityCategories", [
        "Generales",
      ]);
      console.log(game.settings.get("investigator", "combatAbilities"));
      game.settings.set("investigator", "combatAbilities", [
        "Armas",
        "Armas de fuego",
        "Atletismo",
        "Escaramuza",
      ]);
      console.log(game.settings.get("investigator", "newPCPacks"));
      game.settings.set("investigator", "newPCPacks", [
        "fvtt-module-investigator-es.habilidades-pj-sendero",
        "fvtt-module-investigator-es.equipo-pj-sendero",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-sendero",
        "fvtt-module-investigator-es.equipo-pnj-sendero",
      ]);
      console.log(game.settings.get("investigator", "npcStats"));
      game.settings.set("investigator", "npcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
        armor: { name: "Protección", default: 0 },
        alertness: { name: "Modificador de alerta", default: 0 },
        stealth: { name: "Modificador de sigilo", default: 0 },
        stabilityLoss: { name: "Pérdida de estabilidad", default: 0 },
      });
      console.log(game.settings.get("investigator", "pcStats"));
      game.settings.set("investigator", "pcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initesoscriminales() {
    setTimeout(() => {
      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "highContrastTheme");
      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Profesión ordinaria");
      console.log(game.settings.get("investigator", "personalDetails"));
      game.settings.set("investigator", "personalDetails", [
    {"name": "Tapadera actual","type": "text"}]);
      console.log(game.settings.get("investigator", "longNotes"));
      game.settings.set("investigator", "longNotes", [
        "Contactos",
        "Fuentes de estabilidad",
        "Notas",
      ]);
      console.log(game.settings.get("investigator", "genericOccupation"));
      game.settings.set("investigator", "genericOccupation", "Agente");
      console.log(
        game.settings.get("investigator", "investigativeAbilityCategories")
      );
      game.settings.set("investigator", "investigativeAbilityCategories", [
        "Académicas",
        "Interpersonales",
        "Técnicas",
      ]);
      console.log(
        game.settings.get("investigator", "generalAbilityCategories")
      );
      game.settings.set("investigator", "generalAbilityCategories", [
        "Generales",
      ]);
      console.log(game.settings.get("investigator", "combatAbilities"));
      game.settings.set("investigator", "combatAbilities", [
        "Disparar",
        "Atletismo",
        "Escaramuza",
      ]);
      console.log(game.settings.get("investigator", "newPCPacks"));
      game.settings.set("investigator", "newPCPacks", [
        "fvtt-module-investigator-es.habilidades-pj-esoscriminales",
        "fvtt-module-investigator-es.equipo-pj-esoscriminales",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-esoscriminales",
        "fvtt-module-investigator-es.equipo-pnj-esoscriminales",
      ]);
      console.log(game.settings.get("investigator", "npcStats"));
      game.settings.set("investigator", "npcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
        armor: { name: "Protección", default: 0 },
        alertness: { name: "Modificador de atención", default: 0 },
        stealth: { name: "Modificador de sigilo", default: 0 },
        stabilityLoss: { name: "Pérdida de estabilidad", default: 0 },
      });
      console.log(game.settings.get("investigator", "pcStats"));
      game.settings.set("investigator", "pcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initguardias() {
    setTimeout(() => {
      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "niceTheme");
      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Trasfondo");
      console.log(game.settings.get("investigator", "personalDetails"));
      game.settings.set("investigator", "personalDetails", [
    {"name": "Motivación","type": "text"},
    {"name": "Antiguo patrón","type": "text"}]);
      console.log(game.settings.get("investigator", "longNotes"));
      game.settings.set("investigator", "longNotes", [
        "Contactos de la red",
        "Identidades falsas",
        "Fuentes de estabilidad",
        "Beneficios tácticos del trabajo en equipo",
        "Entrenamiento con armas especiales",
        "Confianza",
      ]);
      console.log(game.settings.get("investigator", "genericOccupation"));
      game.settings.set("investigator", "genericOccupation", "Agente");
      console.log(
        game.settings.get("investigator", "investigativeAbilityCategories")
      );
      game.settings.set("investigator", "investigativeAbilityCategories", [
        "Académicas",
        "Interpersonales",
        "Técnicas",
      ]);
      console.log(
        game.settings.get("investigator", "generalAbilityCategories")
      );
      game.settings.set("investigator", "generalAbilityCategories", [
        "Generales",
      ]);
      console.log(game.settings.get("investigator", "combatAbilities"));
      game.settings.set("investigator", "combatAbilities", [
        "Cuerpo a cuerpo",
        "Armas",
        "Disparar",
        "Atletismo",
      ]);
      console.log(game.settings.get("investigator", "newPCPacks"));
      game.settings.set("investigator", "newPCPacks", [
        "fvtt-module-investigator-es.habilidades-pj-guardias",
        "fvtt-module-investigator-es.equipo-pj-guardias",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-guardias",
        "fvtt-module-investigator-es.equipo-pnj-guardias",
      ]);
      console.log(game.settings.get("investigator", "npcStats"));
      game.settings.set("investigator", "npcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
        armor: { name: "Protección", default: 0 },
        alertness: { name: "Modificador de alerta", default: 0 },
        stealth: { name: "Modificador de sigilo", default: 0 },
        stabilityLoss: { name: "Pérdida de estabilidad", default: 0 },
      });
      console.log(game.settings.get("investigator", "pcStats"));
      game.settings.set("investigator", "pcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initcuchillas() {
    setTimeout(() => {
      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "antiquarianTheme");
      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Profesión");
      console.log(game.settings.get("investigator", "personalDetails"));
      game.settings.set("investigator", "personalDetails", [
    {"name": "Motivaciones","type": "text"},
    {"name": "Esferas de hechicería","type": "item"}]);
      console.log(game.settings.get("investigator", "longNotes"));
      game.settings.set("investigator", "longNotes", [
        "Amigos y enemigos",
        "Favores y cuentas pendientes",
        "Cinco posesiones",
        "Marcas de corrupción",
      ]);
      console.log(game.settings.get("investigator", "genericOccupation"));
      game.settings.set("investigator", "genericOccupation", "Héroe");
      console.log(
        game.settings.get("investigator", "investigativeAbilityCategories")
      );
      game.settings.set("investigator", "investigativeAbilityCategories", [
        "Sociales",
        "Guerrero",
        "Ladrón",
        "Centinela",
        "Hechicero",
      ]);
      console.log(
        game.settings.get("investigator", "generalAbilityCategories")
      );
      game.settings.set("investigator", "generalAbilityCategories", [
        "Generales",
      ]);
      console.log(game.settings.get("investigator", "combatAbilities"));
      game.settings.set("investigator", "combatAbilities", [
        "Lucha",
        "Influencia",
        "Hechicería",
      ]);
      console.log(game.settings.get("investigator", "newPCPacks"));
      game.settings.set("investigator", "newPCPacks", [
        "fvtt-module-investigator-es.habilidades-pj-cuchillas",
        "fvtt-module-investigator-es.equipo-pj-cuchillas",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-cuchillas",
        "fvtt-module-investigator-es.equipo-pnj-cuchillas",
      ]);
      console.log(game.settings.get("investigator", "npcStats"));
      game.settings.set("investigator", "npcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 0 },
        moraleThreshold: { name: "Umbral de moral", default: 0 },
        armor: { name: "Protección", default: 0 },
        grit: { name: "Coraje", default: 0 },
        stealth: { name: "Modificador de sigilo", default: 0 },
        alertness: { name: "Modificador de alerta", default: 0 },
      });
      console.log(game.settings.get("investigator", "pcStats"));
      game.settings.set("investigator", "pcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
        moraleThreshold: { name: "Umbral de moral", default: 3 },
        armor: { name: "Protección", default: 1 },
        grit: { name: "Coraje", default: 1 },
      });

      game.settings.set("investigator", "useBoost", false);
      game.settings.set("investigator", "showEmptyInvestigativeCategories", false);
      game.settings.set("investigator", "useNpcCombatBonuses", true);

      game.settings.set("investigator", "useTurnPassingInitiative", false);
      game.settings.set("investigator", "useMwStyleAbilities", false);
      game.settings.set("investigator", "mwUseAlternativeItemTypes", false);
      game.settings.set("investigator", "mwHiddenShortNotes", []);
      game.settings.set("investigator", "useMwInjuryStatus", false);

      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
	
function initmiedo() {
    setTimeout(() => {
      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "fearTheme");
      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Concepto");
			console.log(game.settings.get("investigator", "personalDetails"));
      game.settings.set("investigator", "personalDetails", [
    {"name": "Pilares de estabilidad","type": "text"}]);
      console.log(game.settings.get("investigator", "longNotes"));
      game.settings.set("investigator", "longNotes", [
        "Trasfondo",
      ]);
      console.log(game.settings.get("investigator", "genericOccupation"));
      game.settings.set("investigator", "genericOccupation", "Concepto");
      console.log(
        game.settings.get("investigator", "investigativeAbilityCategories")
      );
      game.settings.set("investigator", "investigativeAbilityCategories", [
        "Académicas",
        "Interpersonales",
        "Técnicas",
				"Poderes psíquicos",
      ]);
      console.log(
        game.settings.get("investigator", "generalAbilityCategories")
      );
      game.settings.set("investigator", "generalAbilityCategories", [
        "Generales",
      ]);
      console.log(game.settings.get("investigator", "combatAbilities"));
      game.settings.set("investigator", "combatAbilities", [
        "Escaramuza",
        "Disparar",
        "Atletismo",
      ]);
      console.log(game.settings.get("investigator", "newPCPacks"));
      game.settings.set("investigator", "newPCPacks", [
        "fvtt-module-investigator-es.habilidades-pj-miedo",
        "fvtt-module-investigator-es.equipo-pj-miedo",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-miedo",
        "fvtt-module-investigator-es.equipo-pnj-miedo",
      ]);
      console.log(game.settings.get("investigator", "npcStats"));
      game.settings.set("investigator", "npcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
        armor: { name: "Protección", default: 0 },
        alertness: { name: "Modificador de atención", default: 0 },
        stealth: { name: "Modificador de sigilo", default: 0 },
        damageMod: { name: "Modificador al daño", default: 0 },
      });
      console.log(game.settings.get("investigator", "pcStats"));
      game.settings.set("investigator", "pcStats", {
        hitThreshold: { name: "Umbral de golpe", default: 3 },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
});
