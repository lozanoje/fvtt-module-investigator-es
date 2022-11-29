Hooks.once('ready', () => {
    if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") === "sendero"
    ) {
      document.getElementById("logo").src =
        "/modules/fvtt-module-investigator-es/images/fvtt-sendero-es.webp";
				} else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "esocriminales"
    ) {
	    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-esocriminales-es.webp";
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "guardias"
    ) {
    document.getElementById("logo").src =
      "/modules/fvtt-module-investigator-es/images/fvtt-guardias-es.webp";
    }
});

Hooks.once("renderCompendiumDirectory", () => {
  game.settings.register("fvtt-module-investigator-es", "restablecer-compendios", {
    name: "Restablecer carpetas de compendios",
    hint: "Se restablecerán las carpetas de los compendios a su configuracion inicial",
    type: Boolean,
    default: true,
    scope: "world",
    config: true,
    onChange: (directory) => {
      window.location.reload();
    },
  });
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
      sendero: "El sendero de Cthulhu",
      esocriminales: "Esocriminales",
      guardias: "Guardias de la noche",
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

  document.onkeyup = function (e) {
    if (e.ctrlKey && e.altKey && e.which == 89) {
      initCompendiums();
    }
  };

  if (
    game.user.isGM &&
    game.settings.get("fvtt-module-investigator-es", "restablecer-compendios")
  ) {
    initCompendiums();
  }

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
      "esocriminales"
    ) {
      initesocriminales();
    } else if (
      game.settings.get("fvtt-module-investigator-es", "sistema-investigator") ===
      "guardias"
    ) {
      initguardias();
    } else {
      game.settings.set("fvtt-module-investigator-es", "restablecer-investigator", false);
    }
  }

  function initCompendiums() {
    let compendiumFolderJson = JSON.parse(`{"hidden":{"compendiumList":[],"titleText":"hidden-compendiums","_id":"hidden","compendiums":[],"expanded":false},"default":{"compendiumList":[],"titleText":"Default","_id":"default","colorText":"#000000","compendiums":[],"expanded":false,"fontColorText":"#FFFFFF","type":"CompendiumEntry","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"folderIcon":null,"visible":true,"depth":1},"cfolder_dYgyQCNS6q":{"titleText":"Compendios del sistema","colorText":"#498fa7","fontColorText":"#FFFFFF","type":"CompendiumEntry","_id":"cfolder_dYgyQCNS6q","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"compendiumList":["investigator.pathOfCthulhuAbilities","investigator.niceBlackAgentsAbilities","investigator.nothingToFearAbilities","investigator.pallidStarsAbilities","investigator.missingAbilitiesNote","investigator.opponentAbilities","investigator.srdWeapons","investigator.srdAbilities","investigator.castingTheRunesAbilities"],"folderIcon":null,"expanded":false,"visible":true,"compendiums":[{"code":"investigator.pathOfCthulhuAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.niceBlackAgentsAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.nothingToFearAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.pallidStarsAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.missingAbilitiesNote","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.opponentAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.srdWeapons","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.srdAbilities","folder":"cfolder_dYgyQCNS6q"},{"code":"investigator.castingTheRunesAbilities","folder":"cfolder_dYgyQCNS6q"}],"depth":1},"cfolder_sD04ZTd9GB":{"titleText":"Guardias de la noche","colorText":"#750001","fontColorText":"#FFFFFF","type":"CompendiumEntry","_id":"cfolder_sD04ZTd9GB","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"compendiumList":["fvtt-module-investigator-es.habilidades-pj-guardias","fvtt-module-investigator-es.armas-guardias","fvtt-module-investigator-es.habilidades-pnj-guardias","fvtt-module-investigator-es.equipo-pnj-guardias","fvtt-module-investigator-es.equipo-pj-guardias"],"folderIcon":null,"expanded":false,"visible":true,"compendiums":[{"code":"fvtt-module-investigator-es.habilidades-pj-guardias","folder":"cfolder_sD04ZTd9GB"},{"code":"fvtt-module-investigator-es.armas-guardias","folder":"cfolder_sD04ZTd9GB"},{"code":"fvtt-module-investigator-es.habilidades-pnj-guardias","folder":"cfolder_sD04ZTd9GB"},{"code":"fvtt-module-investigator-es.equipo-pnj-guardias","folder":"cfolder_sD04ZTd9GB"},{"code":"fvtt-module-investigator-es.equipo-pj-guardias","folder":"cfolder_sD04ZTd9GB"}],"depth":1},"cfolder_2URmRxovX2":{"titleText":"El sendero de Cthulhu","colorText":"#7f8d3f","fontColorText":"#FFFFFF","type":"CompendiumEntry","_id":"cfolder_2URmRxovX2","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"compendiumList":["fvtt-module-investigator-es.habilidades-pj-sendero","fvtt-module-investigator-es.armas-sendero","fvtt-module-investigator-es.habilidades-pnj-sendero","fvtt-module-investigator-es.equipo-pnj-sendero","fvtt-module-investigator-es.equipo-pj-sendero"],"folderIcon":null,"expanded":false,"visible":true,"compendiums":[{"code":"fvtt-module-investigator-es.habilidades-pj-sendero","folder":"cfolder_2URmRxovX2"},{"code":"fvtt-module-investigator-es.armas-sendero","folder":"cfolder_2URmRxovX2"},{"code":"fvtt-module-investigator-es.habilidades-pnj-sendero","folder":"cfolder_2URmRxovX2"},{"code":"fvtt-module-investigator-es.equipo-pnj-sendero","folder":"cfolder_2URmRxovX2"},{"code":"fvtt-module-investigator-es.equipo-pj-sendero","folder":"cfolder_2URmRxovX2"}],"depth":1},"cfolder_RG8A6VepM5":{"titleText":"Esocriminales","colorText":"#d6902e","fontColorText":"#FFFFFF","type":"CompendiumEntry","_id":"cfolder_RG8A6VepM5","entity":"CompendiumFolder","sorting":"a","parent":null,"pathToFolder":[],"compendiumList":["fvtt-module-investigator-es.habilidades-pj-esocriminales","fvtt-module-investigator-es.armas-esocriminales","fvtt-module-investigator-es.habilidades-pnj-esocriminales","fvtt-module-investigator-es.equipo-pnj-esocriminales","fvtt-module-investigator-es.equipo-pj-esocriminales"],"folderIcon":null,"expanded":false,"visible":true,"compendiums":[{"code":"fvtt-module-investigator-es.habilidades-pj-esocriminales","folder":"cfolder_RG8A6VepM5"},{"code":"fvtt-module-investigator-es.armas-esocriminales","folder":"cfolder_RG8A6VepM5"},{"code":"fvtt-module-investigator-es.habilidades-pnj-esocriminales","folder":"cfolder_RG8A6VepM5"},{"code":"fvtt-module-investigator-es.equipo-pnj-esocriminales","folder":"cfolder_RG8A6VepM5"},{"code":"fvtt-module-investigator-es.equipo-pj-esocriminales","folder":"cfolder_RG8A6VepM5"}],"depth":1}}`);

    setTimeout(() => {
      game.settings
        .set("compendium-folders", "cfolders", compendiumFolderJson)
        .then(function () {
          ui.notifications.info(
            "Actualizadas carpetas de compendio, refresque la pestaña"
          );
        });
      game.settings.set(
        "fvtt-module-investigator-es",
        "restablecer-compendios",
        false
      );
    }, 2000);
  }

  function initsendero() {
    setTimeout(() => {

      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set("investigator", "defaultThemeName", "tealTheme");

      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set("investigator", "occupationLabel", "Profesión");
      console.log(game.settings.get("investigator", "shortNotes"));
      game.settings.set("investigator", "shortNotes", ["Motivaciones"]);
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

  function initesocriminales() {
    setTimeout(() => {
      console.log(game.settings.get("investigator", "systemPreset"));
      game.settings.set("investigator", "systemPreset", "customSystem");
      console.log(game.settings.get("investigator", "defaultThemeName"));
      game.settings.set(
        "investigator",
        "defaultThemeName",
        "highContrastTheme"
      );
      console.log(game.settings.get("investigator", "occupationLabel"));
      game.settings.set(
        "investigator",
        "occupationLabel",
        "Profesión ordinaria"
      );
      console.log(game.settings.get("investigator", "shortNotes"));
      game.settings.set("investigator", "shortNotes", ["Tapadera actual"]);
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
        "fvtt-module-investigator-es.habilidades-pj-esocriminales",
        "fvtt-module-investigator-es.equipo-pj-esocriminales",
      ]);
      console.log(game.settings.get("investigator", "newNPCPacks"));
      game.settings.set("investigator", "newNPCPacks", [
        "fvtt-module-investigator-es.habilidades-pnj-esocriminales",
        "fvtt-module-investigator-es.equipo-pnj-esocriminales",
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
      console.log(game.settings.get("investigator", "shortNotes"));
      game.settings.set("investigator", "shortNotes", [
        "Motivación",
        "Antiguo patrón",
      ]);
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
});
