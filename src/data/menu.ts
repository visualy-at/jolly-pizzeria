import type { Lang } from "@/lib/i18n";

export type Translatable = Record<Lang, string>;

export interface MenuItem {
  id: string;
  name: string;
  desc: Translatable;
  price: string;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  name: Translatable;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: {
      de: "Pizza",
      en: "Pizza",
      tr: "Pizza",
      it: "Pizza",
    },
    items: [
      {
        id: "margherita",
        name: "Margherita",
        desc: {
          de: "Tomatensoße, Mozzarella, Basilikum",
          en: "Tomato sauce, mozzarella, basil",
          tr: "Domates sosu, mozzarella, fesleğen",
          it: "Salsa di pomodoro, mozzarella, basilico",
        },
        price: "9,50",
      },
      {
        id: "diavola",
        name: "Diavola",
        desc: {
          de: "Tomatensoße, Mozzarella, scharfe Salami",
          en: "Tomato sauce, mozzarella, spicy salami",
          tr: "Domates sosu, mozzarella, acılı salam",
          it: "Salsa di pomodoro, mozzarella, salame piccante",
        },
        price: "11,50",
      },
      {
        id: "quattro-formaggi",
        name: "Quattro Formaggi",
        desc: {
          de: "Tomatensoße, 4 Käsesorten",
          en: "Tomato sauce, 4 cheese varieties",
          tr: "Domates sosu, 4 çeşit peynir",
          it: "Salsa di pomodoro, 4 formaggi",
        },
        price: "12,00",
      },
      {
        id: "prosciutto-e-funghi",
        name: "Prosciutto e Funghi",
        desc: {
          de: "Tomatensoße, Mozzarella, Schinken, Champignons",
          en: "Tomato sauce, mozzarella, ham, mushrooms",
          tr: "Domates sosu, mozzarella, jambon, mantar",
          it: "Salsa di pomodoro, mozzarella, prosciutto, funghi",
        },
        price: "11,50",
      },
      {
        id: "tonno",
        name: "Tonno",
        desc: {
          de: "Tomatensoße, Mozzarella, Thunfisch, Zwiebeln",
          en: "Tomato sauce, mozzarella, tuna, onions",
          tr: "Domates sosu, mozzarella, ton balığı, soğan",
          it: "Salsa di pomodoro, mozzarella, tonno, cipolle",
        },
        price: "12,00",
      },
      {
        id: "jolly-spezial",
        name: "Jolly Spezial",
        desc: {
          de: "Tomatensoße, Mozzarella, Rucola, Parmesan, Parmaschinken",
          en: "Tomato sauce, mozzarella, arugula, parmesan, Parma ham",
          tr: "Domates sosu, mozzarella, roka, parmesan, Parma jambonu",
          it: "Salsa di pomodoro, mozzarella, rucola, parmigiano, prosciutto di Parma",
        },
        price: "14,50",
        highlight: true,
      },
    ],
  },
  {
    id: "pasta",
    name: {
      de: "Pasta",
      en: "Pasta",
      tr: "Makarna",
      it: "Pasta",
    },
    items: [
      {
        id: "spaghetti-bolognese",
        name: "Spaghetti Bolognese",
        desc: {
          de: "Klassische Fleischsoße",
          en: "Classic meat sauce",
          tr: "Klasik kıymalı sos",
          it: "Classico ragù di carne",
        },
        price: "11,00",
      },
      {
        id: "penne-arrabiata",
        name: "Penne Arrabiata",
        desc: {
          de: "Scharfe Tomatensoße",
          en: "Spicy tomato sauce",
          tr: "Acılı domates sosu",
          it: "Salsa di pomodoro piccante",
        },
        price: "10,00",
      },
      {
        id: "tagliatelle-al-salmone",
        name: "Tagliatelle al Salmone",
        desc: {
          de: "Lachs, Sahnesoße",
          en: "Salmon, cream sauce",
          tr: "Somon, kremalı sos",
          it: "Salmone, salsa alla panna",
        },
        price: "13,50",
      },
      {
        id: "lasagne",
        name: "Lasagne",
        desc: {
          de: "Hausgemacht, überbacken",
          en: "Homemade, oven-baked",
          tr: "Ev yapımı, fırında",
          it: "Fatta in casa, al forno",
        },
        price: "12,00",
      },
    ],
  },
  {
    id: "tuerkische-spezialitaeten",
    name: {
      de: "Türkische Spezialitäten",
      en: "Turkish Specialties",
      tr: "Türk Mutfağı",
      it: "Specialità Turche",
    },
    items: [
      {
        id: "adana-kebab",
        name: "Adana Kebab",
        desc: {
          de: "Scharfes Lammhackfleisch vom Grill, Reis, Salat",
          en: "Spicy minced lamb from the grill, rice, salad",
          tr: "Izgara acılı kuzu kıyma, pilav, salata",
          it: "Agnello macinato piccante alla griglia, riso, insalata",
        },
        price: "14,50",
      },
      {
        id: "iskender-kebab",
        name: "Iskender Kebab",
        desc: {
          de: "Dönerfleisch auf Fladenbrot, Joghurt, Tomatensoße",
          en: "Döner meat on flatbread, yogurt, tomato sauce",
          tr: "Pide üzerinde döner, yoğurt, domates sosu",
          it: "Carne döner su pane piatto, yogurt, salsa di pomodoro",
        },
        price: "15,00",
        highlight: true,
      },
      {
        id: "lahmacun",
        name: "Lahmacun",
        desc: {
          de: "Türkische Pizza mit Hackfleisch",
          en: "Turkish pizza with minced meat",
          tr: "Kıymalı lahmacun",
          it: "Pizza turca con carne macinata",
        },
        price: "8,50",
      },
      {
        id: "pide-mit-kaese",
        name: "Pide mit Käse",
        desc: {
          de: "Türkisches Fladenbrot, gefüllt mit Käse",
          en: "Turkish flatbread filled with cheese",
          tr: "Peynirli pide",
          it: "Pane turco ripieno di formaggio",
        },
        price: "10,00",
      },
    ],
  },
  {
    id: "fruehstueck",
    name: {
      de: "Frühstück",
      en: "Breakfast",
      tr: "Kahvaltı",
      it: "Colazione",
    },
    items: [
      {
        id: "tuerkisches-fruehstueck",
        name: "Türkisches Frühstück",
        desc: {
          de: "Oliven, Käse, Tomaten, Gurken, Eier, Honig, Butter, Brot, Tee",
          en: "Olives, cheese, tomatoes, cucumbers, eggs, honey, butter, bread, tea",
          tr: "Zeytin, peynir, domates, salatalık, yumurta, bal, tereyağı, ekmek, çay",
          it: "Olive, formaggio, pomodori, cetrioli, uova, miele, burro, pane, tè",
        },
        price: "12,90",
        highlight: true,
      },
      {
        id: "fruehstueck-classic",
        name: "Frühstück Classic",
        desc: {
          de: "Semmeln, Butter, Marmelade, Wurst, Käse, Ei, Kaffee",
          en: "Bread rolls, butter, jam, cold cuts, cheese, egg, coffee",
          tr: "Ekmek, tereyağı, reçel, sosis, peynir, yumurta, kahve",
          it: "Panini, burro, marmellata, salumi, formaggio, uovo, caffè",
        },
        price: "9,90",
      },
      {
        id: "menemen",
        name: "Menemen",
        desc: {
          de: "Türkisches Eiergericht mit Tomaten, Paprika, Gewürzen",
          en: "Turkish egg dish with tomatoes, peppers, spices",
          tr: "Domates, biber ve baharatlarla yapılan yumurta",
          it: "Piatto turco di uova con pomodori, peperoni, spezie",
        },
        price: "10,50",
      },
    ],
  },
  {
    id: "salate",
    name: {
      de: "Salate",
      en: "Salads",
      tr: "Salatalar",
      it: "Insalate",
    },
    items: [
      {
        id: "insalata-mista",
        name: "Insalata Mista",
        desc: {
          de: "Gemischter Salat der Saison",
          en: "Mixed seasonal salad",
          tr: "Mevsim karışık salata",
          it: "Insalata mista di stagione",
        },
        price: "7,50",
      },
      {
        id: "insalata-caprese",
        name: "Insalata Caprese",
        desc: {
          de: "Tomaten, Mozzarella, Basilikum",
          en: "Tomatoes, mozzarella, basil",
          tr: "Domates, mozzarella, fesleğen",
          it: "Pomodori, mozzarella, basilico",
        },
        price: "9,50",
      },
      {
        id: "caesar-salad",
        name: "Caesar Salad",
        desc: {
          de: "Romana, Parmesan, Croutons, Caesar-Dressing",
          en: "Romaine, parmesan, croutons, Caesar dressing",
          tr: "Marul, parmesan, kruton, Caesar sos",
          it: "Romana, parmigiano, crostini, salsa Caesar",
        },
        price: "10,50",
      },
    ],
  },
  {
    id: "desserts",
    name: {
      de: "Desserts",
      en: "Desserts",
      tr: "Tatlılar",
      it: "Dolci",
    },
    items: [
      {
        id: "tiramisu",
        name: "Tiramisu",
        desc: {
          de: "Hausgemacht",
          en: "Homemade",
          tr: "Ev yapımı",
          it: "Fatto in casa",
        },
        price: "6,50",
        highlight: true,
      },
      {
        id: "panna-cotta",
        name: "Panna Cotta",
        desc: {
          de: "Mit Beerensoße",
          en: "With berry sauce",
          tr: "Böğürtlen sosu ile",
          it: "Con salsa ai frutti di bosco",
        },
        price: "6,00",
      },
      {
        id: "baklava",
        name: "Baklava",
        desc: {
          de: "Türkisches Blätterteiggebäck mit Nüssen",
          en: "Turkish pastry with nuts",
          tr: "Geleneksel fıstıklı baklava",
          it: "Pasta sfoglia turca con noci",
        },
        price: "5,50",
      },
      {
        id: "kunefe",
        name: "Kunefe",
        desc: {
          de: "Warmes türkisches Käsedessert mit Sirup",
          en: "Warm Turkish cheese dessert with syrup",
          tr: "Sıcak peynirli künefe",
          it: "Dessert turco caldo al formaggio con sciroppo",
        },
        price: "8,00",
      },
    ],
  },
];

export function getHighlights(): MenuItem[] {
  return menuCategories.flatMap((cat) => cat.items.filter((item) => item.highlight));
}
