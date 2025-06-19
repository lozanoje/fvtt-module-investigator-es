Hooks.once('ready', () => {
  /* if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "sendero") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-sendero-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "esoscriminales") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-esoscriminales-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "guardias") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-guardias-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "cuchillas") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-cuchillas-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "miedo") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-miedo-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "rastro") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-rastro-es.webp";
  } else if (
    game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "caida") {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-caida-es.webp";
  } */
});

Hooks.once("renderCompendiumDirectory", () => {
  game.settings.register("fvtt-module-investigator-es", "sistema-investigator", {
    name: "Sistema a configurar",
    hint: "Sistema Investigator que se desea configurar",
    type: String,
  default:
    "sendero", // The default value for the setting
    scope: "world", // This specifies a client-stored setting
    config: true, // This specifies that the setting appears in the configuration view
    choices: {
      // If choices are defined, the resulting setting will be a select menu
      Ninguno: "Ninguno",
      cuchillas: "Swords of the Serpentine",
      esoscriminales: "Esoterroristas",
      guardias: "Agentes de la noche",
      miedo: "Fear Itself",
      sendero: "El rastro de Cthulhu",
      rastro: "El rastro de Cthulhu 2a",
      caida: "La Caída de Delta Green",
    },
  });

  game.settings.register("fvtt-module-investigator-es", "restablecer-investigator", {
    name: "Restablecer configuración del sistema",
    hint: "Cambia los ajustes del sistema INVESTIGATOR para que se ajuste al sistema seleccionado",
    type: Boolean,
  default:
    true,
    scope: "world",
    config: true,
    onChange: (directory) => {
      window.location.reload();
    },
  });
  if (
    game.user.isGM &&
    game.settings.get("fvtt-module-investigator-es", "restablecer-investigator")) {
    if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "sendero") {
      initsendero();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "esoscriminales") {
      initesoscriminales();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "guardias") {
      initguardias();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "cuchillas") {
      initcuchillas();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "miedo") {
      initmiedo();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "rastro") {
      initrastro();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "caida") {
      initcaida();
    } else {
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }
  }
  function initsendero() {
    setTimeout(() => {
      game.settings.set("investigator", "systemPreset", "customSystem");
      game.settings.set("investigator", "defaultThemeName", "tealTheme");
      game.settings.set("investigator", "occupationLabel", "Profesión");
      game.settings.set("investigator", "personalDetails", [
			{"name": "Motivación","type": "text"},
			{"name": "Beneficios de la Profesión","type": "text"},
			{"name": "Puntos de construcción","type": "text"}
      ]);
      game.settings.set("investigator", "longNotes", ["Contactos","Pilares de cordura","Fuentes de estabilidad","Notas",]);
      game.settings.set("investigator", "genericOccupation", "Investigador");
      game.settings.set("investigator", "investigativeAbilityCategories", ["Académicas","Interpersonales","Técnicas",]);
      game.settings.set("investigator", "generalAbilityCategories", ["Generales",]);
      game.settings.set("investigator", "combatAbilities", ["Armas","Armas de fuego","Atletismo","Escaramuza",]);
      game.settings.set("investigator", "newPCPacks", [
          "fvtt-module-investigator-es.habilidades-pj-sendero",
          "fvtt-module-investigator-es.equipo-pj-sendero",
        ]);
      game.settings.set("investigator", "newNPCPacks", [
          "fvtt-module-investigator-es.habilidades-pnj-sendero",
          "fvtt-module-investigator-es.equipo-pnj-sendero",
        ]);
      game.settings.set("investigator", "npcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
        armor: {
          name: "Protección",
        default:
          0
        },
        alertness: {
          name: "Modificador de alerta",
        default:
          0
        },
        stealth: {
          name: "Modificador de sigilo",
        default:
          0
        },
        stabilityLoss: {
          name: "Pérdida de estabilidad",
        default:
          0
        },
      });
      game.settings.set("investigator", "pcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initesoscriminales() {
    setTimeout(() => {
      game.settings.set("investigator", "systemPreset", "customSystem");
      game.settings.set("investigator", "defaultThemeName", "highContrastTheme");
      game.settings.set("investigator", "occupationLabel", "Profesión ordinaria");
      game.settings.set("investigator", "personalDetails", [{
            "name": "Tapadera actual",
            "type": "text"
          }
        ]);
      game.settings.set("investigator", "longNotes", ["Contactos","Notas",]);
      game.settings.set("investigator", "genericOccupation", "Agente");
      game.settings.set("investigator", "investigativeAbilityCategories", [
          "Académicas",
          "Interpersonales",
          "Técnicas",
        ]);
      game.settings.set("investigator", "generalAbilityCategories", [
          "Generales",
        ]);
      game.settings.set("investigator", "combatAbilities", [
          "Disparar",
          "Atletismo",
          "Escaramuza",
        ]);
      game.settings.set("investigator", "newPCPacks", [
          "fvtt-module-investigator-es.habilidades-pj-esoscriminales",
          "fvtt-module-investigator-es.equipo-pj-esoscriminales",
        ]);
      game.settings.set("investigator", "newNPCPacks", [
          "fvtt-module-investigator-es.habilidades-pnj-esoscriminales",
          "fvtt-module-investigator-es.equipo-pnj-esoscriminales",
        ]);
      game.settings.set("investigator", "npcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
        armor: {
          name: "Protección",
        default:
          0
        },
        alertness: {
          name: "Modificador de atención",
        default:
          0
        },
        stealth: {
          name: "Modificador de sigilo",
        default:
          0
        },
        stabilityLoss: {
          name: "Pérdida de estabilidad",
        default:
          0
        },
      });
      game.settings.set("investigator", "pcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initguardias() {
    setTimeout(() => {
      game.settings.set("investigator", "systemPreset", "customSystem");
      game.settings.set("investigator", "defaultThemeName", "niceTheme");
      game.settings.set("investigator", "occupationLabel", "Trasfondo");
      game.settings.set("investigator", "personalDetails", [{
            "name": "Motivación",
            "type": "text"
          }, {
            "name": "Antiguo patrón",
            "type": "text"
          }
        ]);
      game.settings.set("investigator", "longNotes", ["Fuentes de estabilidad","Entrenamiento con armas especiales","Confianza","Beneficios tácticos del trabajo en equipo","Identidades falsas","Contactos de la red","Notas",]);
      game.settings.set("investigator", "genericOccupation", "Agente");
      game.settings.set("investigator", "investigativeAbilityCategories", [
          "Académicas",
          "Interpersonales",
          "Técnicas",
        ]);
      game.settings.set("investigator", "generalAbilityCategories", [
          "Generales",
        ]);
      game.settings.set("investigator", "combatAbilities", [
          "Cuerpo a cuerpo",
          "Armas",
          "Disparar",
          "Atletismo",
        ]);
      game.settings.set("investigator", "newPCPacks", [
          "fvtt-module-investigator-es.habilidades-pj-guardias",
          "fvtt-module-investigator-es.equipo-pj-guardias",
        ]);
      game.settings.set("investigator", "newNPCPacks", [
          "fvtt-module-investigator-es.habilidades-pnj-guardias",
          "fvtt-module-investigator-es.equipo-pnj-guardias",
        ]);
      game.settings.set("investigator", "npcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
        armor: {
          name: "Protección",
        default:
          0
        },
        alertness: {
          name: "Modificador de alerta",
        default:
          0
        },
        stealth: {
          name: "Modificador de sigilo",
        default:
          0
        },
        stabilityLoss: {
          name: "Pérdida de estabilidad",
        default:
          0
        },
      });
      game.settings.set("investigator", "pcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }
  function initcuchillas() {
    setTimeout(() => {
      game.settings.set("investigator", "systemPreset", "customSystem");
      game.settings.set("investigator", "defaultThemeName", "antiquarianTheme");
      game.settings.set("investigator", "occupationLabel", "Profesión");
      game.settings.set("investigator", "personalDetails", [
			{
            "name": "Nombre real",
            "type": "text"
          }, {
            "name": "Adjetivos",
            "type": "text"
          }, {
            "name": "Motivaciones",
            "type": "text"
          }
        ]);
      game.settings.set("investigator", "longNotes", ["Esferas de hechicería","¿Qué es lo mejor de la vida?","Notas",]);
      game.settings.set("investigator", "genericOccupation", "Héroe");
      game.settings.set("investigator", "investigativeAbilityCategories", [
          "Sociales",
          "Guerrero",
          "Ladrón",
          "Centinela",
          "Hechicero",
        ]);
      game.settings.set("investigator", "generalAbilityCategories", [
          "Generales",
        ]);
      game.settings.set("investigator", "combatAbilities", [
          "Lucha",
          "Influencia",
          "Hechicería",
        ]);
      game.settings.set("investigator", "newPCPacks", [
          "fvtt-module-investigator-es.habilidades-pj-cuchillas",
          "fvtt-module-investigator-es.equipo-pj-cuchillas",
        ]);
      game.settings.set("investigator", "newNPCPacks", [
          "fvtt-module-investigator-es.habilidades-pnj-cuchillas",
          "fvtt-module-investigator-es.equipo-pnj-cuchillas",
        ]);
      game.settings.set("investigator", "npcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          0
        },
        moraleThreshold: {
          name: "Umbral de moral",
        default:
          0
        },
        armor: {
          name: "Protección",
        default:
          0
        },
        grit: {
          name: "Coraje",
        default:
          0
        },
        stealth: {
          name: "Modificador de sigilo",
        default:
          0
        },
        alertness: {
          name: "Modificador de alerta",
        default:
          0
        },
      });
      game.settings.set("investigator", "pcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
        moraleThreshold: {
          name: "Umbral de moral",
        default:
          3
        },
        armor: {
          name: "Protección",
        default:
          1
        },
        grit: {
          name: "Coraje",
        default:
          1
        },
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
      game.settings.set("investigator", "systemPreset", "customSystem");
      game.settings.set("investigator", "defaultThemeName", "fearTheme");
      game.settings.set("investigator", "occupationLabel", "Concepto");
      game.settings.set("investigator", "personalDetails", [{
            "name": "Nombre del jugador",
            "type": "text"
          }]);
      game.settings.set("investigator", "longNotes", ["Trasfondo", "Pilares de estabilidad","Notas",]);
      game.settings.set("investigator", "genericOccupation", "Concepto");
      game.settings.set("investigator", "investigativeAbilityCategories", [
          "Académicas",
          "Interpersonales",
          "Técnicas",
          "Poderes psíquicos",
        ]);
      game.settings.set("investigator", "generalAbilityCategories", [
          "Generales",
        ]);
      game.settings.set("investigator", "combatAbilities", [
          "Escaramuza",
          "Disparar",
          "Atletismo",
        ]);
      game.settings.set("investigator", "newPCPacks", [
          "fvtt-module-investigator-es.habilidades-pj-miedo",
          "fvtt-module-investigator-es.equipo-pj-miedo",
        ]);
      game.settings.set("investigator", "newNPCPacks", [
          "fvtt-module-investigator-es.habilidades-pnj-miedo",
          "fvtt-module-investigator-es.equipo-pnj-miedo",
        ]);
      game.settings.set("investigator", "npcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
        armor: {
          name: "Protección",
        default:
          0
        },
        alertness: {
          name: "Modificador de atención",
        default:
          0
        },
        stealth: {
          name: "Modificador de sigilo",
        default:
          0
        },
        damageMod: {
          name: "Modificador al daño",
        default:
          0
        },
      });
      game.settings.set("investigator", "pcStats", {
        hitThreshold: {
          name: "Umbral de golpe",
        default:
          3
        },
      });
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }, 2000);
  }

function initrastro() {
  setTimeout(() => {
    game.settings.set("investigator", "systemPreset", "customSystem");
    game.settings.set("investigator", "defaultThemeName", "tealTheme");
    game.settings.set("investigator", "occupationLabel", "Profesión");
    game.settings.set("investigator", "personalDetails", [{
          "name": "Motivación",
          "type": "item"
        }
      ]);
    game.settings.set("investigator", "longNotes", [
		"Notas, contactos, etc.", "Beneficios de la Profesión", "Pilares de Cordura", "Fuentes de Estabilidad", "Descripción", "Confidente íntimo", "Trasfondo", ]);
    game.settings.set("investigator", "genericOccupation", "Investigador");
    game.settings.set("investigator", "investigativeAbilityCategories", ["Académicas", "Interpersonales", "Técnicas", ]);
    game.settings.set("investigator", "generalAbilityCategories", ["Generales", ]);
    game.settings.set("investigator", "combatAbilities", ["Escaramuza", "Armas", "Armas de fuego", "Atletismo", ]);
    game.settings.set("investigator", "newPCPacks", ["fvtt-module-investigator-es.habilidades-pj-rastro", "fvtt-module-investigator-es.equipo-pj-rastro", ]);
    game.settings.set("investigator", "newNPCPacks", ["fvtt-module-investigator-es.habilidades-pnj-rastro", "fvtt-module-investigator-es.equipo-pnj-rastro", ]);
    game.settings.set("investigator", "npcStats", {
      hitThreshold: {
        name: "Umbral de golpe",
      default: 3
      },
      armor: {
        name: "Protección",
      default: 0
      },
      alertness: {
        name: "Modificador de atención",
      default: 0,
      min: -10
      },
      stealth: {
        name: "Modificador de sigilo",
      default: 0,
      min: -10
      },
    });
    game.settings.set("investigator", "pcStats", {
      hitThreshold: {
        name: "Umbral de golpe",
      default: 3
      },
			generalPoints: {
        name: "Crédito",
      default: 0
      },
			investigativePoints: {
        name: "Potencial Mitos de Cthulhu",
      default: 0
      },
			confidentPoints: {
        name: "Potencial Mágico",
      default: 0
      },
    });
    game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
  }, 2000);
}

function initcaida() {
  setTimeout(() => {
    game.settings.set("investigator", "systemPreset", "customSystem");
    game.settings.set("investigator", "defaultThemeName", "greenTriangleTheme");
    game.settings.set("investigator", "occupationLabel", "Profesión/rango");
    game.settings.set("investigator", "personalDetails", [{
          "name": "Motivación",
          "type": "item"
        }
      ]);
    game.settings.set("investigator", "longNotes", ["Edad y fecha de nacimiento", "Nacionalidad", "Rama/departamento", "Educación", "Servicio militar", "Entrenamiento especial (habilidad)", "Entrenamiento especial (arma)", "Hipergeometría (potencial)", "Hipergeometría (valor)", "Adaptado a (violencia)", "Adaptado a (impotencia)", "Hoja de servicio/biografía", "Evento incitador", ]);
    game.settings.set("investigator", "genericOccupation", "Agente");
    game.settings.set("investigator", "investigativeAbilityCategories", ["Académicas", "Interpersonales", "Técnicas", ]);
    game.settings.set("investigator", "generalAbilityCategories", ["Generales", ]);
    game.settings.set("investigator", "combatAbilities", ["Combate sin armas", "Armas cuerpo a cuerpo", "Armas de fuego", "Armas pesadas", "Atletismo", ]);
    game.settings.set("investigator", "newPCPacks", ["fvtt-module-investigator-es.habilidades-pj-caida", "fvtt-module-investigator-es.equipo-pj-caida", ]);
    game.settings.set("investigator", "newNPCPacks", ["fvtt-module-investigator-es.habilidades-pnj-caida", "fvtt-module-investigator-es.equipo-pnj-caida", ]);
    game.settings.set("investigator", "npcStats", {
      hitThreshold: {
        name: "Umbral de golpe",
      default: 3
      },
      armor: {
        name: "Protección",
      default: 0
      },
      alertness: {
        name: "Modificador de atención",
      default: 0,
      min: -10
      },
      stealth: {
        name: "Modificador de sigilo",
      default: 0,
      min: -10
      },
    });
    game.settings.set("investigator", "pcStats", {
      hitThreshold: {
        name: "Umbral de golpe",
      default: 3
      },
			generalPoints: {
        name: "Crédito",
      default: 0
      },
			investigativePoints: {
        name: "Potencial Mitos de Cthulhu",
      default: 0
      },
			confidentPoints: {
        name: "Potencial Mágico",
      default: 0
      },
    });
    game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
  }, 2000);
}

});
