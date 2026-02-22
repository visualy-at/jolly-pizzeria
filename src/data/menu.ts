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
  /* ------------------------------------------------------------------ */
  /*  1. SUPPE                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "suppe",
    name: { de: "Suppe", en: "Soup", tr: "Çorba", it: "Zuppa" },
    items: [
      {
        id: "kuttelsuppe",
        name: "Kuttelsuppe (İşkembe)",
        desc: {
          de: "Auf türkischer Art",
          en: "Turkish-style tripe soup",
          tr: "Türk usulü işkembe çorbası",
          it: "Zuppa di trippa alla turca",
        },
        price: "7,50",
      },
      {
        id: "linsensuppe",
        name: "Linsensuppe (Mercimek)",
        desc: {
          de: "Auf türkischer Art",
          en: "Turkish-style lentil soup",
          tr: "Türk usulü mercimek çorbası",
          it: "Zuppa di lenticchie alla turca",
        },
        price: "6,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  2. VORSPEISE                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: "vorspeise",
    name: {
      de: "Vorspeise",
      en: "Starters",
      tr: "Başlangıçlar",
      it: "Antipasti",
    },
    items: [
      {
        id: "ezme",
        name: "Ezme",
        desc: {
          de: "Hausgemachter Gemüsedip",
          en: "Homemade vegetable dip",
          tr: "Ev yapımı ezme",
          it: "Dip di verdure fatto in casa",
        },
        price: "3,90",
      },
      {
        id: "aci-tursu",
        name: "Acı Turşu",
        desc: {
          de: "Eingelegte scharfe Pepperoni",
          en: "Pickled hot peppers",
          tr: "Acı biber turşusu",
          it: "Peperoni piccanti sott'aceto",
        },
        price: "3,50",
      },
      {
        id: "haydari",
        name: "Haydari",
        desc: {
          de: "Joghurt mit Minze, Knoblauch u. Käse",
          en: "Yogurt with mint, garlic & cheese",
          tr: "Nane, sarımsak ve peynirli yoğurt",
          it: "Yogurt con menta, aglio e formaggio",
        },
        price: "4,90",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  3. PIZZA                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "pizza",
    name: { de: "Pizza", en: "Pizza", tr: "Pizza", it: "Pizza" },
    items: [
      {
        id: "margherita",
        name: "Margherita",
        desc: {
          de: "Tomatensauce u. Käse",
          en: "Tomato sauce & cheese",
          tr: "Domates sosu ve peynir",
          it: "Salsa di pomodoro e formaggio",
        },
        price: "9,50",
        highlight: true,
      },
      {
        id: "pizzabrot",
        name: "Pizzabrot",
        desc: {
          de: "Tomatensauce, Knoblauchöl",
          en: "Tomato sauce, garlic oil",
          tr: "Domates sosu, sarımsak yağı",
          it: "Salsa di pomodoro, olio all'aglio",
        },
        price: "7,50",
      },
      {
        id: "funghi",
        name: "Funghi",
        desc: {
          de: "Tomatensauce, Käse, Champignons",
          en: "Tomato sauce, cheese, mushrooms",
          tr: "Domates sosu, peynir, mantar",
          it: "Salsa di pomodoro, formaggio, funghi",
        },
        price: "11,50",
      },
      {
        id: "al-tonno",
        name: "Al Tonno",
        desc: {
          de: "Tomatensauce, Käse, Thunfisch, Zwiebeln",
          en: "Tomato sauce, cheese, tuna, onions",
          tr: "Domates sosu, peynir, ton balığı, soğan",
          it: "Salsa di pomodoro, formaggio, tonno, cipolle",
        },
        price: "12,00",
      },
      {
        id: "delicata",
        name: "Delicata",
        desc: {
          de: "Tomatensauce, Käse, Thunfisch, Zwiebeln, Champignons",
          en: "Tomato sauce, cheese, tuna, onions, mushrooms",
          tr: "Domates sosu, peynir, ton balığı, soğan, mantar",
          it: "Salsa di pomodoro, formaggio, tonno, cipolle, funghi",
        },
        price: "13,00",
      },
      {
        id: "diavola",
        name: "Diavola",
        desc: {
          de: "Tomatensauce, Käse, Salami, Peperoni, Zwiebeln",
          en: "Tomato sauce, cheese, salami, pepperoni, onions",
          tr: "Domates sosu, peynir, salam, biberiye, soğan",
          it: "Salsa di pomodoro, formaggio, salame, peperoni, cipolle",
        },
        price: "13,50",
      },
      {
        id: "gamberetti",
        name: "Gamberetti",
        desc: {
          de: "Tomatensauce, Käse, Shrimps, Oliven, Knoblauch",
          en: "Tomato sauce, cheese, shrimp, olives, garlic",
          tr: "Domates sosu, peynir, karides, zeytin, sarımsak",
          it: "Salsa di pomodoro, formaggio, gamberetti, olive, aglio",
        },
        price: "14,50",
      },
      {
        id: "mexicana",
        name: "Mexicana",
        desc: {
          de: "Tomatensauce, Käse, Mais, Paprika, Zwiebeln, scharf",
          en: "Tomato sauce, cheese, corn, peppers, onions, spicy",
          tr: "Domates sosu, peynir, mısır, biber, soğan, acılı",
          it: "Salsa di pomodoro, formaggio, mais, peperoni, cipolle, piccante",
        },
        price: "12,00",
      },
      {
        id: "mozzarella",
        name: "Mozzarella",
        desc: {
          de: "Tomatensauce, Cherrytomaten, Mozzarella, Mais",
          en: "Tomato sauce, cherry tomatoes, mozzarella, corn",
          tr: "Domates sosu, kiraz domates, mozzarella, mısır",
          it: "Salsa di pomodoro, pomodorini, mozzarella, mais",
        },
        price: "12,00",
      },
      {
        id: "quattro-formaggi",
        name: "Quattro Formaggi",
        desc: {
          de: "Tomatensauce, 4 verschiedene Käsesorten",
          en: "Tomato sauce, 4 cheese varieties",
          tr: "Domates sosu, 4 çeşit peynir",
          it: "Salsa di pomodoro, 4 formaggi",
        },
        price: "12,00",
      },
      {
        id: "frutti-di-mare",
        name: "Frutti di Mare",
        desc: {
          de: "Tomatensauce, Käse, Meeresfrüchte, Knoblauch",
          en: "Tomato sauce, cheese, seafood, garlic",
          tr: "Domates sosu, peynir, deniz ürünleri, sarımsak",
          it: "Salsa di pomodoro, formaggio, frutti di mare, aglio",
        },
        price: "15,50",
      },
      {
        id: "salami",
        name: "Salami",
        desc: {
          de: "Tomatensauce, Käse, Salami",
          en: "Tomato sauce, cheese, salami",
          tr: "Domates sosu, peynir, salam",
          it: "Salsa di pomodoro, formaggio, salame",
        },
        price: "12,00",
      },
      {
        id: "spinaci",
        name: "Spinaci",
        desc: {
          de: "Tomatensauce, Käse, Spinat, Feta",
          en: "Tomato sauce, cheese, spinach, feta",
          tr: "Domates sosu, peynir, ıspanak, beyaz peynir",
          it: "Salsa di pomodoro, formaggio, spinaci, feta",
        },
        price: "12,00",
      },
      {
        id: "sucuk-mix",
        name: "Sucuk Mix",
        desc: {
          de: "Tomatensauce, Käse, Sucuk, Champignons, Zwiebeln, Paprika",
          en: "Tomato sauce, cheese, sucuk sausage, mushrooms, onions, peppers",
          tr: "Domates sosu, peynir, sucuk, mantar, soğan, biber",
          it: "Salsa di pomodoro, formaggio, sucuk, funghi, cipolle, peperoni",
        },
        price: "13,50",
      },
      {
        id: "sucuk",
        name: "Sucuk",
        desc: {
          de: "Tomatensauce, Käse, Sucuk",
          en: "Tomato sauce, cheese, sucuk sausage",
          tr: "Domates sosu, peynir, sucuk",
          it: "Salsa di pomodoro, formaggio, sucuk",
        },
        price: "12,50",
      },
      {
        id: "vegetariana",
        name: "Vegetariana",
        desc: {
          de: "Tomatensauce, Käse, Gemüse",
          en: "Tomato sauce, cheese, vegetables",
          tr: "Domates sosu, peynir, sebze",
          it: "Salsa di pomodoro, formaggio, verdure",
        },
        price: "12,00",
      },
      {
        id: "hawaii",
        name: "Hawaii",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Ananas",
          en: "Tomato sauce, cheese, ham, pineapple",
          tr: "Domates sosu, peynir, jambon, ananas",
          it: "Salsa di pomodoro, formaggio, prosciutto, ananas",
        },
        price: "12,50",
      },
      {
        id: "rucola",
        name: "Rucola",
        desc: {
          de: "Tomatensauce, Käse, Rucola, Cherrytomaten, Parmesan",
          en: "Tomato sauce, cheese, arugula, cherry tomatoes, parmesan",
          tr: "Domates sosu, peynir, roka, kiraz domates, parmesan",
          it: "Salsa di pomodoro, formaggio, rucola, pomodorini, parmigiano",
        },
        price: "12,00",
      },
      {
        id: "kebab-pizza",
        name: "Kebab Pizza",
        desc: {
          de: "Tomatensauce, Käse, Kebabfleisch",
          en: "Tomato sauce, cheese, kebab meat",
          tr: "Domates sosu, peynir, kebap eti",
          it: "Salsa di pomodoro, formaggio, carne kebab",
        },
        price: "13,00",
      },
      {
        id: "popeye",
        name: "Popeye",
        desc: {
          de: "Tomatensauce, Käse, Blattspinat, Zwiebeln, Weißkäse, Ei",
          en: "Tomato sauce, cheese, spinach, onions, white cheese, egg",
          tr: "Domates sosu, peynir, ıspanak, soğan, beyaz peynir, yumurta",
          it: "Salsa di pomodoro, formaggio, spinaci, cipolle, formaggio bianco, uovo",
        },
        price: "12,50",
      },
      {
        id: "rusticana",
        name: "Rusticana",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Champignons, Ei, Zwiebeln",
          en: "Tomato sauce, cheese, ham, mushrooms, egg, onions",
          tr: "Domates sosu, peynir, jambon, mantar, yumurta, soğan",
          it: "Salsa di pomodoro, formaggio, prosciutto, funghi, uovo, cipolle",
        },
        price: "14,00",
      },
      {
        id: "siciliana",
        name: "Siciliana",
        desc: {
          de: "Tomatensauce, Käse, Sardellen, Kapern, Oliven",
          en: "Tomato sauce, cheese, anchovies, capers, olives",
          tr: "Domates sosu, peynir, hamsi, kapari, zeytin",
          it: "Salsa di pomodoro, formaggio, acciughe, capperi, olive",
        },
        price: "12,50",
      },
      {
        id: "prosciutto",
        name: "Prosciutto",
        desc: {
          de: "Tomatensauce, Käse, Schinken",
          en: "Tomato sauce, cheese, ham, mushrooms",
          tr: "Domates sosu, peynir, jambon, mantar",
          it: "Salsa di pomodoro, formaggio, prosciutto, funghi",
        },
        price: "12,00",
      },
      {
        id: "prosciutto-funghi",
        name: "Prosciutto Funghi",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Champignons",
          en: "Tomato sauce, cheese, ham, mushrooms",
          tr: "Domates sosu, peynir, jambon, mantar",
          it: "Salsa di pomodoro, formaggio, prosciutto, funghi",
        },
        price: "13,00",
      },
      {
        id: "capricciosa",
        name: "Capricciosa",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Champignons, Oliven, Artischocken",
          en: "Tomato sauce, cheese, ham, mushrooms, olives, artichokes",
          tr: "Domates sosu, peynir, jambon, mantar, zeytin, enginar",
          it: "Salsa di pomodoro, formaggio, prosciutto, funghi, olive, carciofi",
        },
        price: "14,50",
      },
      {
        id: "salmone-pizza",
        name: "Salmone",
        desc: {
          de: "Tomatensauce, Käse, Lachs, Brokkoli",
          en: "Tomato sauce, cheese, salmon, broccoli",
          tr: "Domates sosu, peynir, somon, brokoli",
          it: "Salsa di pomodoro, formaggio, salmone, broccoli",
        },
        price: "15,50",
      },
      {
        id: "bolognese-pizza",
        name: "Bolognese",
        desc: {
          de: "Tomatensauce, Käse, faschiertes Rinderfleisch",
          en: "Tomato sauce, cheese, minced beef",
          tr: "Domates sosu, peynir, dana kıyma",
          it: "Salsa di pomodoro, formaggio, carne macinata di manzo",
        },
        price: "15,00",
      },
      {
        id: "pollo",
        name: "Pollo",
        desc: {
          de: "Tomatensauce, Käse, Hühnerbruststreifen, Champignons",
          en: "Tomato sauce, cheese, chicken breast strips, mushrooms",
          tr: "Domates sosu, peynir, tavuk göğsü şeritleri, mantar",
          it: "Salsa di pomodoro, formaggio, strisce di petto di pollo, funghi",
        },
        price: "14,50",
      },
      {
        id: "pipino",
        name: "Pipino",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Mais",
          en: "Tomato sauce, cheese, ham, corn",
          tr: "Domates sosu, peynir, jambon, mısır",
          it: "Salsa di pomodoro, formaggio, prosciutto, mais",
        },
        price: "12,50",
      },
      {
        id: "angelo",
        name: "Angelo",
        desc: {
          de: "Tomatensauce, Schinken, Salami, Speck",
          en: "Tomato sauce, ham, salami, bacon",
          tr: "Domates sosu, jambon, salam, pastırma",
          it: "Salsa di pomodoro, prosciutto, salame, pancetta",
        },
        price: "15",
      },
      {
        id: "giganti",
        name: "Giganti",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Salami, Thunfisch, Champignons, Zwiebeln, Mais, Oliven",
          en: "Tomato sauce, cheese, ham, salami, tuna, mushrooms, onions, corn, olives",
          tr: "Domates sosu, peynir, jambon, salam, ton balığı, mantar, soğan, mısır, zeytin",
          it: "Salsa di pomodoro, formaggio, prosciutto, salame, tonno, funghi, cipolle, mais, olive",
        },
        price: "16,00",
      },
      {
        id: "salerno",
        name: "Salerno",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Salami",
          en: "Tomato sauce, cheese, ham, salami",
          tr: "Domates sosu, peynir, jambon, salam",
          it: "Salsa di pomodoro, formaggio, prosciutto, salame",
        },
        price: "14,50",
      },
      {
        id: "calzone",
        name: "Calzone",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Champignons, Zwiebeln",
          en: "Tomato sauce, cheese, ham, mushrooms, onions",
          tr: "Domates sosu, peynir, jambon, mantar, soğan",
          it: "Salsa di pomodoro, formaggio, prosciutto, funghi, cipolle",
        },
        price: "13,50",
      },
      {
        id: "provenzale",
        name: "Provenzale",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Peperoni, Mais",
          en: "Tomato sauce, cheese, ham, pepperoni, corn",
          tr: "Domates sosu, peynir, jambon, biberiye, mısır",
          it: "Salsa di pomodoro, formaggio, prosciutto, peperoni, mais",
        },
        price: "13,50",
      },
      {
        id: "sucukeria",
        name: "Sucukeria",
        desc: {
          de: "Tomatensauce, Käse, Sucuk, Oliven, Weichkäse, Ei",
          en: "Tomato sauce, cheese, sucuk sausage, olives, soft cheese, egg",
          tr: "Domates sosu, peynir, sucuk, zeytin, beyaz peynir, yumurta",
          it: "Salsa di pomodoro, formaggio, sucuk, olive, formaggio morbido, uovo",
        },
        price: "14,50",
      },
      {
        id: "verdure",
        name: "Verdure",
        desc: {
          de: "Tomatensauce, Käse, Melanzani, Zucchini, Paprika, Champignons",
          en: "Tomato sauce, cheese, eggplant, zucchini, peppers, mushrooms",
          tr: "Domates sosu, peynir, patlıcan, kabak, biber, mantar",
          it: "Salsa di pomodoro, formaggio, melanzane, zucchine, peperoni, funghi",
        },
        price: "12,50",
      },
      {
        id: "mafiosi",
        name: "Mafiosi",
        desc: {
          de: "Tomatensauce, Käse, Schinken, Salami, Zwiebeln, scharfe Peperoni",
          en: "Tomato sauce, cheese, ham, salami, onions, hot peppers",
          tr: "Domates sosu, peynir, jambon, salam, soğan, acı biber",
          it: "Salsa di pomodoro, formaggio, prosciutto, salame, cipolle, peperoncino piccante",
        },
        price: "15,00",
      },
      {
        id: "con-cipolla",
        name: "Con Cipolla",
        desc: {
          de: "Tomatensauce, Käse, Zwiebeln",
          en: "Tomato sauce, cheese, onions",
          tr: "Domates sosu, peynir, soğan",
          it: "Salsa di pomodoro, formaggio, cipolle",
        },
        price: "10,80",
      },
      {
        id: "kebab-calzone",
        name: "Kebab Calzone",
        desc: {
          de: "Tomatensauce, Käse, Kebabfleisch, Zwiebeln, Champignons",
          en: "Tomato sauce, cheese, kebab meat, onions, mushrooms",
          tr: "Domates sosu, peynir, kebap eti, soğan, mantar",
          it: "Salsa di pomodoro, formaggio, carne kebab, cipolle, funghi",
        },
        price: "15,00",
      },
      {
        id: "salat-calzone",
        name: "Salat Calzone",
        desc: {
          de: "mit gemischtem Salat und Dressing",
          en: "With mixed salad and dressing",
          tr: "Karışık salata ve sos ile",
          it: "Con insalata mista e condimento",
        },
        price: "13,00",
      },
      {
        id: "granturco",
        name: "Granturco",
        desc: {
          de: "Tomatensauce, Käse, Mais",
          en: "Tomato sauce, cheese, corn",
          tr: "Domates sosu, peynir, mısır",
          it: "Salsa di pomodoro, formaggio, mais",
        },
        price: "10,50",
      },
      {
        id: "da-franco",
        name: "Da Franco",
        desc: {
          de: "Tomatensauce, Käse, Knoblauchwurst, Zwiebeln, Oliven, scharfe Peperoni",
          en: "Tomato sauce, cheese, garlic sausage, onions, olives, hot peppers",
          tr: "Domates sosu, peynir, sarımsaklı sucuk, soğan, zeytin, acı biber",
          it: "Salsa di pomodoro, formaggio, salsiccia all'aglio, cipolle, olive, peperoncino",
        },
        price: "14,50",
      },
      {
        id: "carciofini",
        name: "Carciofini",
        desc: {
          de: "Tomatensauce, Käse, Artischocken, Oliven, Schafskäse",
          en: "Tomato sauce, cheese, artichokes, olives, sheep cheese",
          tr: "Domates sosu, peynir, enginar, zeytin, koyun peyniri",
          it: "Salsa di pomodoro, formaggio, carciofi, olive, pecorino",
        },
        price: "12,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  4. PASTA                                                          */
  /* ------------------------------------------------------------------ */
  {
    id: "pasta",
    name: { de: "Pasta", en: "Pasta", tr: "Makarna", it: "Pasta" },
    items: [
      {
        id: "pasta-salmone",
        name: "Salmone",
        desc: {
          de: "Sahnesauce, Lachsstücke, Brokkoli u. Parmesan",
          en: "Cream sauce, salmon pieces, broccoli & parmesan",
          tr: "Kremalı sos, somon parçaları, brokoli ve parmesan",
          it: "Salsa alla panna, pezzi di salmone, broccoli e parmigiano",
        },
        price: "14,00",
      },
      {
        id: "carbonara",
        name: "Carbonara",
        desc: {
          de: "Sahnesauce, Schinken, Eigelb u. Parmesan",
          en: "Cream sauce, ham, egg yolk & parmesan",
          tr: "Kremalı sos, jambon, yumurta sarısı ve parmesan",
          it: "Salsa alla panna, prosciutto, tuorlo d'uovo e parmigiano",
        },
        price: "12,50",
      },
      {
        id: "formaggio",
        name: "Formaggio",
        desc: {
          de: "Sahnesauce, 4 versch. Käsesorten u. Parmesan",
          en: "Cream sauce, 4 cheese varieties & parmesan",
          tr: "Kremalı sos, 4 çeşit peynir ve parmesan",
          it: "Salsa alla panna, 4 formaggi e parmigiano",
        },
        price: "12,50",
      },
      {
        id: "pesto",
        name: "Pesto",
        desc: {
          de: "Basilikum-Pestosauce, Cherrytomaten u. Parmesan",
          en: "Basil pesto sauce, cherry tomatoes & parmesan",
          tr: "Fesleğen pesto sosu, kiraz domates ve parmesan",
          it: "Salsa al pesto di basilico, pomodorini e parmigiano",
        },
        price: "11,50",
      },
      {
        id: "pasta-bolognese",
        name: "Bolognese",
        desc: {
          de: "Tomatensauce, Hackfleisch u. Parmesan",
          en: "Tomato sauce, minced meat & parmesan",
          tr: "Domates sosu, kıyma ve parmesan",
          it: "Salsa di pomodoro, carne macinata e parmigiano",
        },
        price: "13,50",
      },
      {
        id: "con-pollo",
        name: "Con Pollo",
        desc: {
          de: "Sahnesauce, Hühnerbruststreifen, Champignons u. Parmesan",
          en: "Cream sauce, chicken breast strips, mushrooms & parmesan",
          tr: "Kremalı sos, tavuk göğsü şeritleri, mantar ve parmesan",
          it: "Salsa alla panna, strisce di petto di pollo, funghi e parmigiano",
        },
        price: "13,50",
      },
      {
        id: "aglio-olio",
        name: "Aglio Olio",
        desc: {
          de: "Olivenöl, Knoblauch, Petersilie, Chili u. Parmesan",
          en: "Olive oil, garlic, parsley, chili & parmesan",
          tr: "Zeytinyağı, sarımsak, maydanoz, acı biber ve parmesan",
          it: "Olio d'oliva, aglio, prezzemolo, peperoncino e parmigiano",
        },
        price: "11,00",
      },
      {
        id: "arrabiata",
        name: "Arrabiata",
        desc: {
          de: "Tomatensauce, Kapern, Oliven, Chili u. Parmesan",
          en: "Tomato sauce, capers, olives, chili & parmesan",
          tr: "Domates sosu, kapari, zeytin, acı biber ve parmesan",
          it: "Salsa di pomodoro, capperi, olive, peperoncino e parmigiano",
        },
        price: "11,00",
      },
      {
        id: "napolitaner",
        name: "Napolitaner",
        desc: {
          de: "Tomatensauce u. Parmesan",
          en: "Tomato sauce & parmesan",
          tr: "Domates sosu ve parmesan",
          it: "Salsa di pomodoro e parmigiano",
        },
        price: "9,90",
      },
      {
        id: "pasta-frutti-di-mare",
        name: "Frutti Di Mare",
        desc: {
          de: "Tomatensauce, Meeresfrüchte, Knoblauch, Sahne u. Parmesan",
          en: "Tomato sauce, seafood, garlic, cream & parmesan",
          tr: "Domates sosu, deniz ürünleri, sarımsak, krema ve parmesan",
          it: "Salsa di pomodoro, frutti di mare, aglio, panna e parmigiano",
        },
        price: "14,50",
      },
      {
        id: "pasta-spinaci",
        name: "Spinaci",
        desc: {
          de: "Sahnesauce, Blattspinat u. Parmesan",
          en: "Cream sauce, leaf spinach & parmesan",
          tr: "Kremalı sos, yaprak ıspanak ve parmesan",
          it: "Salsa alla panna, spinaci e parmigiano",
        },
        price: "12,00",
      },
      {
        id: "penne-al-forno",
        name: "Penne Al Forno",
        desc: {
          de: "Sahnesauce, Hühnerbruststreifen, Champignons, mit Käse überbacken",
          en: "Cream sauce, chicken breast strips, mushrooms, baked with cheese",
          tr: "Kremalı sos, tavuk göğsü şeritleri, mantar, peynirle gratine",
          it: "Salsa alla panna, strisce di petto di pollo, funghi, gratinata al formaggio",
        },
        price: "14,50",
      },
      {
        id: "shrimps",
        name: "Shrimps",
        desc: {
          de: "Sahnesauce, Garnelen, Knoblauch u. Parmesan",
          en: "Cream sauce, shrimp, garlic & parmesan",
          tr: "Kremalı sos, karides, sarımsak ve parmesan",
          it: "Salsa alla panna, gamberetti, aglio e parmigiano",
        },
        price: "13,50",
      },
      {
        id: "pasta-verdura",
        name: "Verdura",
        desc: {
          de: "Tomatensauce, Gemüse u. Parmesan",
          en: "Tomato sauce, vegetables & parmesan",
          tr: "Domates sosu, sebze ve parmesan",
          it: "Salsa di pomodoro, verdure e parmigiano",
        },
        price: "12,00",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  5. PIDE                                                           */
  /* ------------------------------------------------------------------ */
  {
    id: "pide",
    name: { de: "Pide", en: "Pide", tr: "Pide", it: "Pide" },
    items: [
      {
        id: "peynirli-pide",
        name: "Peynirli Pide",
        desc: {
          de: "Mit Käse",
          en: "With cheese",
          tr: "Peynirli",
          it: "Con formaggio",
        },
        price: "10,90",
      },
      {
        id: "sucuklu-pide",
        name: "Sucuklu Pide",
        desc: {
          de: "Mit Sucuk u. Käse",
          en: "With sucuk sausage & cheese",
          tr: "Sucuklu ve peynirli",
          it: "Con sucuk e formaggio",
        },
        price: "12,50",
      },
      {
        id: "ispanakli-pide",
        name: "Ispanaklı Pide",
        desc: {
          de: "Mit Spinat u. Spinat",
          en: "With spinach",
          tr: "Ispanaklı",
          it: "Con spinaci",
        },
        price: "11,50",
      },
      {
        id: "kebab-pide",
        name: "Kebab Pide",
        desc: {
          de: "Mit Kebab u. Käse",
          en: "With kebab meat & cheese",
          tr: "Kebaplı ve peynirli",
          it: "Con carne kebab e formaggio",
        },
        price: "13,50",
      },
      {
        id: "pastirmali-pide",
        name: "Pastırmalı Pide",
        desc: {
          de: "Mit Speck u. Käse",
          en: "With bacon & cheese",
          tr: "Baconlu ve peynirli",
          it: "Con pancetta e formaggio",
        },
        price: "12,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  6. BURGER                                                         */
  /* ------------------------------------------------------------------ */
  {
    id: "burger",
    name: { de: "Burger", en: "Burgers", tr: "Burger", it: "Burger" },
    items: [
      {
        id: "burger",
        name: "Burger",
        desc: {
          de: "Salat, Tomaten, Zwiebeln, Essiggurken u. Sauce",
          en: "Salad, tomatoes, onions, pickles & sauce",
          tr: "Salata, domates, soğan, turşu ve sos",
          it: "Insalata, pomodori, cipolle, cetriolini e salsa",
        },
        price: "7,00",
      },
      {
        id: "burger-menue",
        name: "Burger Menü",
        desc: {
          de: "Salat, Tomaten, Zwiebeln, Essiggurken, Pommes, Getränk u. Sauce",
          en: "Salad, tomatoes, onions, pickles, fries, drink & sauce",
          tr: "Salata, domates, soğan, turşu, patates kızartması, içecek ve sos",
          it: "Insalata, pomodori, cipolle, cetriolini, patatine, bibita e salsa",
        },
        price: "13,50",
      },
      {
        id: "cheeseburger",
        name: "Cheeseburger",
        desc: {
          de: "Salat, Tomaten, Zwiebeln, Essiggurken, Cheddar u. Sauce",
          en: "Salad, tomatoes, onions, pickles, cheddar & sauce",
          tr: "Salata, domates, soğan, turşu, cheddar ve sos",
          it: "Insalata, pomodori, cipolle, cetriolini, cheddar e salsa",
        },
        price: "8,00",
      },
      {
        id: "cheeseburger-menue",
        name: "Cheeseburger Menü",
        desc: {
          de: "Salat, Tomaten, Zwiebeln, Essiggurken, Pommes, Getränk, Cheddar u. Sauce",
          en: "Salad, tomatoes, onions, pickles, fries, drink, cheddar & sauce",
          tr: "Salata, domates, soğan, turşu, patates kızartması, içecek, cheddar ve sos",
          it: "Insalata, pomodori, cipolle, cetriolini, patatine, bibita, cheddar e salsa",
        },
        price: "14,50",
      },
      {
        id: "crispy-chickenburger",
        name: "Crispy Chickenburger",
        desc: {
          de: "Knuspriges Hühnerbrustfilet, Salat, Tomaten u. Sauce",
          en: "Crispy chicken breast fillet, salad, tomatoes & sauce",
          tr: "Çıtır tavuk göğsü, salata, domates ve sos",
          it: "Filetto di petto di pollo croccante, insalata, pomodori e salsa",
        },
        price: "6,50",
      },
      {
        id: "crispy-chickenburger-menue",
        name: "Crispy Chickenburger Menü",
        desc: {
          de: "Knuspriges Hühnerbrustfilet, Salat, Tomaten, Pommes, Getränk u. Sauce",
          en: "Crispy chicken breast fillet, salad, tomatoes, fries, drink & sauce",
          tr: "Çıtır tavuk göğsü, salata, domates, patates kızartması, içecek ve sos",
          it: "Filetto di petto di pollo croccante, insalata, pomodori, patatine, bibita e salsa",
        },
        price: "12,50",
      },
      {
        id: "crispy-chicken-cheeseburger",
        name: "Crispy Chicken Cheeseburger",
        desc: {
          de: "Knuspriges Hühnerbrustfilet, Salat, Tomaten, Cheddar u. Sauce",
          en: "Crispy chicken breast fillet, salad, tomatoes, cheddar & sauce",
          tr: "Çıtır tavuk göğsü, salata, domates, cheddar ve sos",
          it: "Filetto di petto di pollo croccante, insalata, pomodori, cheddar e salsa",
        },
        price: "7,50",
      },
      {
        id: "crispy-chicken-cheeseburger-menue",
        name: "Crispy Chicken Cheeseburger Menü",
        desc: {
          de: "Knuspriges Hühnerbrustfilet, Salat, Tomaten, Pommes, Getränk, Cheddar u. Sauce",
          en: "Crispy chicken breast fillet, salad, tomatoes, fries, drink, cheddar & sauce",
          tr: "Çıtır tavuk göğsü, salata, domates, patates kızartması, içecek, cheddar ve sos",
          it: "Filetto di petto di pollo croccante, insalata, pomodori, patatine, bibita, cheddar e salsa",
        },
        price: "13,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  7. SALATE                                                         */
  /* ------------------------------------------------------------------ */
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
        id: "gavurdagi-salatasi",
        name: "Gavurdağı Salatası (Löffelsalat)",
        desc: {
          de: "Fein geschnittener Eisalat, Tomaten, Zwiebeln, Gurken, Spitzpaprika, Walnüsse, Granatapfel-Dressing",
          en: "Finely chopped iceberg lettuce, tomatoes, onions, cucumbers, pointed peppers, walnuts, pomegranate dressing",
          tr: "İnce doğranmış marul, domates, soğan, salatalık, sivri biber, ceviz, nar ekşili sos",
          it: "Lattuga iceberg tagliata fine, pomodori, cipolle, cetrioli, peperoni, noci, condimento al melograno",
        },
        price: "8,50",
      },
      {
        id: "gemischter-salat",
        name: "Gemischter Salat",
        desc: {
          de: "Eisalat, Tomaten, Mais, Paprika, Karotten, Rucola u. Dressing",
          en: "Iceberg lettuce, tomatoes, corn, peppers, carrots, arugula & dressing",
          tr: "Marul, domates, mısır, biber, havuç, roka ve sos",
          it: "Lattuga iceberg, pomodori, mais, peperoni, carote, rucola e condimento",
        },
        price: "6,90",
      },
      {
        id: "gruener-blatt-salat",
        name: "Grüner-Blatt-Salat",
        desc: {
          de: "Gemischte Salatblätter u. Dressing",
          en: "Mixed salad leaves & dressing",
          tr: "Karışık salata yaprakları ve sos",
          it: "Foglie di insalata mista e condimento",
        },
        price: "5,90",
      },
      {
        id: "rucola-salat",
        name: "Rucola Salat",
        desc: {
          de: "Cherrytomaten, Mini Mozzarella, Parmesan u. Dressing",
          en: "Cherry tomatoes, mini mozzarella, parmesan & dressing",
          tr: "Kiraz domates, mini mozzarella, parmesan ve sos",
          it: "Pomodorini, mini mozzarella, parmigiano e condimento",
        },
        price: "6,50",
      },
      {
        id: "thunfisch-salat",
        name: "Thunfisch Salat",
        desc: {
          de: "Eisalat, Tomaten, Mais, Zwiebeln, Paprika, Karotten, Thunfisch u. Dressing",
          en: "Iceberg lettuce, tomatoes, corn, onions, peppers, carrots, tuna & dressing",
          tr: "Marul, domates, mısır, soğan, biber, havuç, ton balığı ve sos",
          it: "Lattuga iceberg, pomodori, mais, cipolle, peperoni, carote, tonno e condimento",
        },
        price: "8,90",
      },
      {
        id: "griechischer-salat",
        name: "Griechischer Salat",
        desc: {
          de: "Eisalat, Tomaten, Mais, Paprika, Zwiebeln, Feta Käse, Oliven u. Dressing",
          en: "Iceberg lettuce, tomatoes, corn, peppers, onions, feta cheese, olives & dressing",
          tr: "Marul, domates, mısır, biber, soğan, beyaz peynir, zeytin ve sos",
          it: "Lattuga iceberg, pomodori, mais, peperoni, cipolle, feta, olive e condimento",
        },
        price: "7,90",
      },
      {
        id: "fitness-salat",
        name: "Fitness Salat",
        desc: {
          de: "Eisalat, Tomaten, Mais, Paprika, Karotten, Rucola, Hühnerbruststreifen u. Dressing",
          en: "Iceberg lettuce, tomatoes, corn, peppers, carrots, arugula, chicken breast strips & dressing",
          tr: "Marul, domates, mısır, biber, havuç, roka, tavuk göğsü şeritleri ve sos",
          it: "Lattuga iceberg, pomodori, mais, peperoni, carote, rucola, strisce di petto di pollo e condimento",
        },
        price: "9,90",
      },
      {
        id: "crispy-chicken-salat",
        name: "Crispy Chicken Salat",
        desc: {
          de: "Eisalat, Tomaten, Mais, Paprika, Zwiebeln, Karotten, Crispy Chicken u. Dressing",
          en: "Iceberg lettuce, tomatoes, corn, peppers, onions, carrots, crispy chicken & dressing",
          tr: "Marul, domates, mısır, biber, soğan, havuç, çıtır tavuk ve sos",
          it: "Lattuga iceberg, pomodori, mais, peperoni, cipolle, carote, pollo croccante e condimento",
        },
        price: "9,90",
      },
      {
        id: "hirtensalat",
        name: "Hirtensalat",
        desc: {
          de: "Feta Käse, Tomaten, Zwiebeln, Oliven u. Dressing",
          en: "Feta cheese, tomatoes, onions, olives & dressing",
          tr: "Beyaz peynir, domates, soğan, zeytin ve sos",
          it: "Feta, pomodori, cipolle, olive e condimento",
        },
        price: "6,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  8. SNACKS                                                         */
  /* ------------------------------------------------------------------ */
  {
    id: "snacks",
    name: { de: "Snacks", en: "Snacks", tr: "Atıştırmalıklar", it: "Snack" },
    items: [
      {
        id: "chicken-nuggets",
        name: "Chicken Nuggets (6 Stück)",
        desc: {
          de: "6 Stück knusprige Chicken Nuggets",
          en: "6 pieces crispy chicken nuggets",
          tr: "6 adet çıtır tavuk nugget",
          it: "6 pezzi di chicken nuggets croccanti",
        },
        price: "6,00",
      },
      {
        id: "pommes",
        name: "Pommes",
        desc: {
          de: "Knusprige Pommes frites",
          en: "Crispy French fries",
          tr: "Çıtır patates kızartması",
          it: "Patatine fritte croccanti",
        },
        price: "5,00",
      },
      {
        id: "mozzarella-sticks",
        name: "Mozzarella Sticks (6 Stück)",
        desc: {
          de: "6 Stück panierte Mozzarella Sticks",
          en: "6 pieces breaded mozzarella sticks",
          tr: "6 adet panelenmiş mozzarella çubukları",
          it: "6 pezzi di mozzarella sticks impanati",
        },
        price: "6,00",
      },
      {
        id: "langos",
        name: "Langos",
        desc: {
          de: "Ungarisches Fladenbrot mit Knoblauch u. Sauce",
          en: "Hungarian fried bread with garlic & sauce",
          tr: "Macar kızartma ekmeği, sarımsak ve sos ile",
          it: "Pane fritto ungherese con aglio e salsa",
        },
        price: "7,50",
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        desc: {
          de: "Mit BBQ Marinade u. Sauce",
          en: "With BBQ marinade & sauce",
          tr: "BBQ marinası ve sos ile",
          it: "Con marinata BBQ e salsa",
        },
        price: "7,50",
      },
      {
        id: "crispy-chicken-fingers",
        name: "Crispy Chicken Fingers",
        desc: {
          de: "Knusprige Hähnchenbrustfilet-Streifen u. Sauce",
          en: "Crispy chicken breast fillet strips & sauce",
          tr: "Çıtır tavuk göğsü şeritleri ve sos",
          it: "Strisce di filetto di petto di pollo croccanti e salsa",
        },
        price: "7,50",
      },
      {
        id: "hot-dog",
        name: "Hot Dog",
        desc: {
          de: "Mit Zwiebeln, Essiggurken, Cocktailsauce u. Curry im Hausbrot",
          en: "With onions, pickles, cocktail sauce & curry in house bread",
          tr: "Soğan, turşu, kokteyl sosu ve köri ile ev ekmeğinde",
          it: "Con cipolle, cetriolini, salsa cocktail e curry nel pane della casa",
        },
        price: "7,00",
      },
      {
        id: "ofenfrisches-brot",
        name: "Ofenfrisches Brot",
        desc: {
          de: "Frisch aus dem Ofen",
          en: "Fresh from the oven",
          tr: "Fırından taze ekmek",
          it: "Pane fresco dal forno",
        },
        price: "3,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  9. SPEZIALS                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "spezials",
    name: {
      de: "Spezials",
      en: "Specials",
      tr: "Özel Yemekler",
      it: "Speciali",
    },
    items: [
      {
        id: "tavuk-fajita",
        name: "Tavuk Fajita",
        desc: {
          de: "Hühnerbrustfleisch, Paprikagemüse, Pommes u. Saucen",
          en: "Chicken breast, bell pepper vegetables, fries & sauces",
          tr: "Tavuk göğsü, biber, patates kızartması ve soslar",
          it: "Petto di pollo, peperoni, patatine e salse",
        },
        price: "18,90",
        highlight: true,
      },
      {
        id: "lachs-somon",
        name: "Lachs (Somon)",
        desc: {
          de: "Gegrilltes Lachsfilet, Wedges u. Salat",
          en: "Grilled salmon fillet, wedges & salad",
          tr: "Izgara somon fileto, elma dilim patates ve salata",
          it: "Filetto di salmone alla griglia, wedges e insalata",
        },
        price: "23,90",
      },
      {
        id: "manti-teigtaschen",
        name: "Manti Teigtaschen",
        desc: {
          de: "Hackfleischfüllung in Knoblauch-Joghurtsauce u. Minze",
          en: "Meat-filled dumplings in garlic-yogurt sauce & mint",
          tr: "Kıymalı mantı, sarımsaklı yoğurt ve nane ile",
          it: "Ravioli di carne in salsa di aglio e yogurt con menta",
        },
        price: "11,50",
      },
      {
        id: "kapsalon",
        name: "Kapsalon",
        desc: {
          de: "Pommes, Kebabfleisch, Sauce u. mit Käse überbacken",
          en: "Fries, kebab meat, sauce & baked with cheese",
          tr: "Patates kızartması, kebap eti, sos ve peynirle gratine",
          it: "Patatine, carne kebab, salsa e gratinato al formaggio",
        },
        price: "12,00",
      },
      {
        id: "schnitzel-teller",
        name: "Schnitzel Teller",
        desc: {
          de: "Knusprig paniertes Hühnerbrustschnitzel mit Pommes u. Sauce",
          en: "Crispy breaded chicken breast schnitzel with fries & sauce",
          tr: "Çıtır panelenmiş tavuk göğsü şnitzel, patates kızartması ve sos",
          it: "Cotoletta di petto di pollo croccante con patatine e salsa",
        },
        price: "14,00",
      },
      {
        id: "kebab-teller",
        name: "Kebab Teller",
        desc: {
          de: "Kebab mit Pommes, Salat u. Sauce",
          en: "Kebab with fries, salad & sauce",
          tr: "Kebap, patates kızartması, salata ve sos ile",
          it: "Kebab con patatine, insalata e salsa",
        },
        price: "14,00",
      },
      {
        id: "kebab-brot",
        name: "Kebab Brot (Hausbrot)",
        desc: {
          de: "Mit Salat, Tomaten, Zwiebeln u. Sauce",
          en: "With salad, tomatoes, onions & sauce",
          tr: "Salata, domates, soğan ve sos ile ekmek arası",
          it: "Con insalata, pomodori, cipolle e salsa",
        },
        price: "7,50",
      },
      {
        id: "kebab-dueruem",
        name: "Kebab Dürüm",
        desc: {
          de: "Mit Salat, Tomaten, Zwiebeln u. Sauce",
          en: "With salad, tomatoes, onions & sauce",
          tr: "Salata, domates, soğan ve sos ile dürüm",
          it: "Con insalata, pomodori, cipolle e salsa",
        },
        price: "8,50",
      },
      {
        id: "kebab-box",
        name: "Kebab Box",
        desc: {
          de: "Mit Pommes u. Sauce",
          en: "With fries & sauce",
          tr: "Patates kızartması ve sos ile",
          it: "Con patatine e salsa",
        },
        price: "8,00",
      },
      {
        id: "iskender-kebab",
        name: "İskender Kebab",
        desc: {
          de: "Kebab auf gewürfeltem Hausbrot mit Joghurt, Tomatensauce, gegrillte Tomate, Paprika u. Kräuterbutter",
          en: "Kebab on diced bread with yogurt, tomato sauce, grilled tomato, peppers & herb butter",
          tr: "Küp ekmek üzerinde kebap, yoğurt, domates sosu, ızgara domates, biber ve tereyağı",
          it: "Kebab su pane a dadini con yogurt, salsa di pomodoro, pomodoro grigliato, peperoni e burro alle erbe",
        },
        price: "17,50",
        highlight: true,
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  10. DESSERT                                                       */
  /* ------------------------------------------------------------------ */
  {
    id: "dessert",
    name: {
      de: "Dessert",
      en: "Desserts",
      tr: "Tatlılar",
      it: "Dolci",
    },
    items: [
      {
        id: "kaiserschmarrn",
        name: "Kaiserschmarrn",
        desc: {
          de: "Mit Apfelmus, Preiselbeere u. Staubzucker",
          en: "With applesauce, cranberry & powdered sugar",
          tr: "Elma püresi, kızılcık ve pudra şekeri ile",
          it: "Con composta di mele, mirtilli rossi e zucchero a velo",
        },
        price: "11,50",
        highlight: true,
      },
      {
        id: "profiterole",
        name: "Profiterole",
        desc: {
          de: "Mit Schokoladensauce u. Pistazien",
          en: "With chocolate sauce & pistachios",
          tr: "Çikolata sosu ve fıstık ile",
          it: "Con salsa al cioccolato e pistacchi",
        },
        price: "6,00",
      },
      {
        id: "souffle",
        name: "Soufflé",
        desc: {
          de: "Mit Schokolade u. Staubzucker",
          en: "With chocolate & powdered sugar",
          tr: "Çikolata ve pudra şekeri ile",
          it: "Con cioccolato e zucchero a velo",
        },
        price: "5,00",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  11. ALKOHOLISCHE GETRÄNKE                                         */
  /* ------------------------------------------------------------------ */
  {
    id: "alkoholische-getraenke",
    name: {
      de: "Alkoholische Getränke",
      en: "Alcoholic Beverages",
      tr: "Alkollü İçecekler",
      it: "Bevande Alcoliche",
    },
    items: [
      {
        id: "hb-helles-03",
        name: "HB Helles Vollbier 0,3",
        desc: {
          de: "Münchner Helles vom Fass, 0,3 l",
          en: "Munich lager on tap, 0.3 l",
          tr: "Münih bira, fıçıdan, 0,3 l",
          it: "Birra chiara di Monaco alla spina, 0,3 l",
        },
        price: "3,90",
      },
      {
        id: "hb-helles-05",
        name: "HB Helles Vollbier 0,5",
        desc: {
          de: "Münchner Helles vom Fass, 0,5 l",
          en: "Munich lager on tap, 0.5 l",
          tr: "Münih bira, fıçıdan, 0,5 l",
          it: "Birra chiara di Monaco alla spina, 0,5 l",
        },
        price: "4,90",
      },
      {
        id: "hb-muenchner-weisse",
        name: "HB Münchner Weisse 0,5",
        desc: {
          de: "Weißbier, 0,5 l",
          en: "Wheat beer, 0.5 l",
          tr: "Buğday birası, 0,5 l",
          it: "Birra di frumento, 0,5 l",
        },
        price: "4,90",
      },
      {
        id: "hb-schwarze-weisse",
        name: "HB Schwarze Weisse 0,5",
        desc: {
          de: "Dunkles Weißbier, 0,5 l",
          en: "Dark wheat beer, 0.5 l",
          tr: "Koyu buğday birası, 0,5 l",
          it: "Birra di frumento scura, 0,5 l",
        },
        price: "4,90",
      },
      {
        id: "hb-natur-radler",
        name: "HB Natur Radler 0,3",
        desc: {
          de: "Radler, 0,3 l",
          en: "Shandy, 0.3 l",
          tr: "Radler (limonlu bira), 0,3 l",
          it: "Radler, 0,3 l",
        },
        price: "4,50",
      },
      {
        id: "hb-hofbraeu-alkfrei",
        name: "HB Hofbräu Alkfrei",
        desc: {
          de: "Alkoholfreies Bier",
          en: "Non-alcoholic beer",
          tr: "Alkolsüz bira",
          it: "Birra analcolica",
        },
        price: "4,90",
      },
      {
        id: "rotwein-zweigelt",
        name: "Rotwein Zweigelt 1/8",
        desc: {
          de: "Österreichischer Rotwein, 1/8 l",
          en: "Austrian red wine, 1/8 l",
          tr: "Avusturya kırmızı şarabı, 1/8 l",
          it: "Vino rosso austriaco, 1/8 l",
        },
        price: "4,30",
      },
      {
        id: "rotwein-primitivo",
        name: "Rotwein Primitivo 1/8",
        desc: {
          de: "Italienischer Rotwein, 1/8 l",
          en: "Italian red wine, 1/8 l",
          tr: "İtalyan kırmızı şarabı, 1/8 l",
          it: "Vino rosso italiano, 1/8 l",
        },
        price: "4,50",
      },
      {
        id: "rotwein-montepulciano",
        name: "Rotwein Valle d'Oro Montepulciano 1/8",
        desc: {
          de: "Italienischer Rotwein, 1/8 l",
          en: "Italian red wine, 1/8 l",
          tr: "İtalyan kırmızı şarabı, 1/8 l",
          it: "Vino rosso italiano, 1/8 l",
        },
        price: "4,50",
      },
      {
        id: "lillet-rose",
        name: "Lillet Rosé 1/8",
        desc: {
          de: "Französischer Aperitif, 1/8 l",
          en: "French aperitif, 1/8 l",
          tr: "Fransız aperitif, 1/8 l",
          it: "Aperitivo francese, 1/8 l",
        },
        price: "7,90",
      },
      {
        id: "weisswein-gruener-veltliner",
        name: "Weißwein Grüner Veltliner 1/8",
        desc: {
          de: "Österreichischer Weißwein, 1/8 l",
          en: "Austrian white wine, 1/8 l",
          tr: "Avusturya beyaz şarabı, 1/8 l",
          it: "Vino bianco austriaco, 1/8 l",
        },
        price: "4,10",
      },
      {
        id: "weisswein-pecorino",
        name: "Weißwein Pecorino Terre die Chieti 1/8",
        desc: {
          de: "Italienischer Weißwein, 1/8 l",
          en: "Italian white wine, 1/8 l",
          tr: "İtalyan beyaz şarabı, 1/8 l",
          it: "Vino bianco italiano, 1/8 l",
        },
        price: "4,30",
      },
      {
        id: "weisswein-chardonnay",
        name: "Weißwein Chardonnay 1/8",
        desc: {
          de: "Chardonnay, 1/8 l",
          en: "Chardonnay, 1/8 l",
          tr: "Chardonnay, 1/8 l",
          it: "Chardonnay, 1/8 l",
        },
        price: "4,50",
      },
      {
        id: "weiss-sauer",
        name: "Weiß Sauer",
        desc: {
          de: "Weißweinschorle sauer",
          en: "White wine spritzer, dry",
          tr: "Beyaz şarap sodası, ekşi",
          it: "Spritz al vino bianco, secco",
        },
        price: "3,50",
      },
      {
        id: "weiss-suess",
        name: "Weiß Süß",
        desc: {
          de: "Weißweinschorle süß",
          en: "White wine spritzer, sweet",
          tr: "Beyaz şarap sodası, tatlı",
          it: "Spritz al vino bianco, dolce",
        },
        price: "3,70",
      },
      {
        id: "hugo",
        name: "Hugo",
        desc: {
          de: "Prosecco, Holunderblütensirup, Minze, Soda",
          en: "Prosecco, elderflower syrup, mint, soda",
          tr: "Prosecco, mürver çiçeği şurubu, nane, soda",
          it: "Prosecco, sciroppo di fiori di sambuco, menta, soda",
        },
        price: "6,90",
      },
      {
        id: "aperol",
        name: "Aperol",
        desc: {
          de: "Aperol Spritz",
          en: "Aperol Spritz",
          tr: "Aperol Spritz",
          it: "Aperol Spritz",
        },
        price: "6,90",
      },
      {
        id: "veneziano",
        name: "Veneziano",
        desc: {
          de: "Aperitif-Cocktail",
          en: "Aperitif cocktail",
          tr: "Aperitif kokteyl",
          it: "Cocktail aperitivo",
        },
        price: "7,90",
      },
      {
        id: "campari-orange",
        name: "Campari Orange",
        desc: {
          de: "Campari mit Orangensaft",
          en: "Campari with orange juice",
          tr: "Campari portakal suyu ile",
          it: "Campari con succo d'arancia",
        },
        price: "5,90",
      },
      {
        id: "campari-soda",
        name: "Campari Soda",
        desc: {
          de: "Campari mit Soda",
          en: "Campari with soda",
          tr: "Campari soda ile",
          it: "Campari con soda",
        },
        price: "5,50",
      },
      {
        id: "prosecco",
        name: "Prosecco 0,1",
        desc: {
          de: "Prosecco, 0,1 l",
          en: "Prosecco, 0.1 l",
          tr: "Prosecco, 0,1 l",
          it: "Prosecco, 0,1 l",
        },
        price: "4,50",
      },
      {
        id: "birnen-schnaps",
        name: "Birnen Schnaps 2cl",
        desc: {
          de: "Birnenschnaps, 2 cl",
          en: "Pear schnapps, 2 cl",
          tr: "Armut likörü, 2 cl",
          it: "Grappa alla pera, 2 cl",
        },
        price: "3,50",
      },
      {
        id: "marillen-schnaps",
        name: "Marillen Schnaps 2cl",
        desc: {
          de: "Marillenschnaps, 2 cl",
          en: "Apricot schnapps, 2 cl",
          tr: "Kayısı likörü, 2 cl",
          it: "Grappa all'albicocca, 2 cl",
        },
        price: "3,50",
      },
      {
        id: "jaegermeister",
        name: "Jägermeister 2cl",
        desc: {
          de: "Kräuterlikör, 2 cl",
          en: "Herbal liqueur, 2 cl",
          tr: "Bitki likörü, 2 cl",
          it: "Liquore alle erbe, 2 cl",
        },
        price: "3,50",
      },
      {
        id: "flying-hirsch",
        name: "Flying Hirsch",
        desc: {
          de: "Jägermeister mit Red Bull",
          en: "Jägermeister with Red Bull",
          tr: "Jägermeister Red Bull ile",
          it: "Jägermeister con Red Bull",
        },
        price: "4,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  12. GETRÄNKE                                                      */
  /* ------------------------------------------------------------------ */
  {
    id: "getraenke",
    name: {
      de: "Getränke",
      en: "Beverages",
      tr: "İçecekler",
      it: "Bevande",
    },
    items: [
      {
        id: "ayran",
        name: "Ayran 0,25",
        desc: {
          de: "Türkisches Joghurtgetränk, 0,25 l",
          en: "Turkish yogurt drink, 0.25 l",
          tr: "Ayran, 0,25 l",
          it: "Bevanda allo yogurt turco, 0,25 l",
        },
        price: "2,50",
      },
      {
        id: "mineralwasser",
        name: "Mineralwasser 0,3",
        desc: {
          de: "Mineralwasser, 0,3 l",
          en: "Mineral water, 0.3 l",
          tr: "Maden suyu, 0,3 l",
          it: "Acqua minerale, 0,3 l",
        },
        price: "2,80",
      },
      {
        id: "redbull",
        name: "Redbull 0,25",
        desc: {
          de: "Energy Drink, 0,25 l",
          en: "Energy drink, 0.25 l",
          tr: "Enerji içeceği, 0,25 l",
          it: "Bevanda energetica, 0,25 l",
        },
        price: "4,30",
      },
      {
        id: "cola",
        name: "Cola 0,3",
        desc: {
          de: "Coca-Cola, 0,3 l",
          en: "Coca-Cola, 0.3 l",
          tr: "Coca-Cola, 0,3 l",
          it: "Coca-Cola, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "cola-zero",
        name: "Cola Zero 0,3",
        desc: {
          de: "Coca-Cola Zero, 0,3 l",
          en: "Coca-Cola Zero, 0.3 l",
          tr: "Coca-Cola Zero, 0,3 l",
          it: "Coca-Cola Zero, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "fanta",
        name: "Fanta 0,3",
        desc: {
          de: "Fanta Orange, 0,3 l",
          en: "Fanta Orange, 0.3 l",
          tr: "Fanta, 0,3 l",
          it: "Fanta, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "mezzo-mix",
        name: "Mezzo Mix 0,3",
        desc: {
          de: "Mezzo Mix, 0,3 l",
          en: "Mezzo Mix (cola-orange), 0.3 l",
          tr: "Mezzo Mix, 0,3 l",
          it: "Mezzo Mix, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "sprite",
        name: "Sprite 0,3",
        desc: {
          de: "Sprite, 0,3 l",
          en: "Sprite, 0.3 l",
          tr: "Sprite, 0,3 l",
          it: "Sprite, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "almdudler",
        name: "Almdudler 0,3",
        desc: {
          de: "Österreichische Kräuterlimonade, 0,3 l",
          en: "Austrian herbal lemonade, 0.3 l",
          tr: "Avusturya bitki limonatası, 0,3 l",
          it: "Limonata alle erbe austriaca, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "eistee-pfirsich",
        name: "Eistee Pfirsich 0,3",
        desc: {
          de: "Pfirsich-Eistee, 0,3 l",
          en: "Peach iced tea, 0.3 l",
          tr: "Şeftali buzlu çay, 0,3 l",
          it: "Tè freddo alla pesca, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "eistee-zitrone",
        name: "Eistee Zitrone 0,3",
        desc: {
          de: "Zitronen-Eistee, 0,3 l",
          en: "Lemon iced tea, 0.3 l",
          tr: "Limon buzlu çay, 0,3 l",
          it: "Tè freddo al limone, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "apfel-gespritzt",
        name: "Apfel Gespritzt 0,3",
        desc: {
          de: "Apfelsaft gespritzt, 0,3 l",
          en: "Apple juice spritzer, 0.3 l",
          tr: "Sodalı elma suyu, 0,3 l",
          it: "Succo di mela con acqua frizzante, 0,3 l",
        },
        price: "3,50",
      },
      {
        id: "johannisbeer-gespritzt",
        name: "Johannisbeer Gespritzt 0,3",
        desc: {
          de: "Johannisbeersaft gespritzt, 0,3 l",
          en: "Blackcurrant juice spritzer, 0.3 l",
          tr: "Sodalı kuş üzümü suyu, 0,3 l",
          it: "Succo di ribes con acqua frizzante, 0,3 l",
        },
        price: "3,50",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  13. WARME GETRÄNKE                                                */
  /* ------------------------------------------------------------------ */
  {
    id: "warme-getraenke",
    name: {
      de: "Warme Getränke",
      en: "Hot Beverages",
      tr: "Sıcak İçecekler",
      it: "Bevande Calde",
    },
    items: [
      {
        id: "hibiskusbluetentee",
        name: "Hibiskusblütentee",
        desc: {
          de: "Hibiskusblüten-Aufguss",
          en: "Hibiscus blossom tea",
          tr: "Hibiskus çiçeği çayı",
          it: "Tè ai fiori di ibisco",
        },
        price: "4,50",
      },
      {
        id: "salbeitee",
        name: "Salbeitee",
        desc: {
          de: "Salbei-Aufguss",
          en: "Sage tea",
          tr: "Adaçayı",
          it: "Tè alla salvia",
        },
        price: "4,50",
      },
      {
        id: "waldfruechtetee",
        name: "Waldfrüchtetee",
        desc: {
          de: "Waldfrüchte-Aufguss",
          en: "Forest fruit tea",
          tr: "Orman meyveli çay",
          it: "Tè ai frutti di bosco",
        },
        price: "4,50",
      },
      {
        id: "kraeutertee",
        name: "Kräutertee",
        desc: {
          de: "Kräuter-Aufguss",
          en: "Herbal tea",
          tr: "Bitki çayı",
          it: "Tè alle erbe",
        },
        price: "4,50",
      },
      {
        id: "heisse-schokolade",
        name: "Heiße Schokolade",
        desc: {
          de: "Heiße Schokolade",
          en: "Hot chocolate",
          tr: "Sıcak çikolata",
          it: "Cioccolata calda",
        },
        price: "3,50",
      },
      {
        id: "cafe-latte",
        name: "Cafe Latte",
        desc: {
          de: "Kaffee mit viel Milch",
          en: "Coffee with steamed milk",
          tr: "Sütlü kahve",
          it: "Caffè latte",
        },
        price: "4,50",
      },
      {
        id: "espresso",
        name: "Espresso",
        desc: {
          de: "Espresso",
          en: "Espresso",
          tr: "Espresso",
          it: "Espresso",
        },
        price: "2,50",
      },
      {
        id: "espresso-macchiato",
        name: "Espresso Macchiato",
        desc: {
          de: "Espresso mit Milchschaum",
          en: "Espresso with milk foam",
          tr: "Sütlü espresso",
          it: "Espresso macchiato",
        },
        price: "2,90",
      },
      {
        id: "verlaengerter",
        name: "Verlängerter",
        desc: {
          de: "Österreichischer Filterkaffee",
          en: "Austrian-style long coffee",
          tr: "Uzun Avusturya kahvesi",
          it: "Caffè lungo austriaco",
        },
        price: "3,90",
      },
      {
        id: "tuerkischer-kaffee",
        name: "Türkischer Kaffee",
        desc: {
          de: "Traditionell zubereiteter türkischer Kaffee",
          en: "Traditionally prepared Turkish coffee",
          tr: "Geleneksel Türk kahvesi",
          it: "Caffè turco preparato tradizionalmente",
        },
        price: "2,90",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        desc: {
          de: "Cappuccino",
          en: "Cappuccino",
          tr: "Kapuçino",
          it: "Cappuccino",
        },
        price: "4,50",
      },
    ],
  },
];

export function getHighlights(): MenuItem[] {
  return menuCategories.flatMap((cat) => cat.items.filter((item) => item.highlight));
}
