import ancalagon_img from './ancalagon.jpg'
import carcharoth_img from './carcharoth.jpg'
import feanor_img from './feanor.jpg'
import glaurung_img from './glaurung.jpg'
import maeglin_img from './maeglin.jpg'
import thorondor_img from './thorondor.jpg'
import ungoliant_img from './ungoliant.jpg'
import finwe_img from './finwe.jpg'
import durin_img from './durin.jpg'
import finarfin_img from './finarfin.jpg'
import gothmog_img from './gothmog.jpg'
import morgoth_img from './morgoth.jpg'
import thuringwethil_img from './thuringwethil.jpg'
import beleg_img from './beleg.jpg'
import earendil_img from './earendil.jpg'
import fingolfin_img from './fingolfin.jpg'
import ingwe_img from './ingwe.jpg'
import sauron_img from './sauron.jpg'
import turgon_img from './turgon.jpg'
import beren_img from './beren.jpg'
import ecthelion_img from './ecthelion.jpg'
import finrod_img from './finrod.jpg'
import maedhros_img from './maedhros.jpg'
import thingol_img from './thingol.jpg'
import turin_img from './turin.jpg'

export const Data = {
  "ancalagon": {
    "shade": -2,
    "alias": "Ancalagon the Black",
    "description": "The Greatest of All Winged Dragons",
    "img": ancalagon_img
  },
  "carcharoth": {
    "shade": -1,
    "alias": "Carcharoth Anfauglir",
    "description": "The Greatest of All Werewolves",
    "img": carcharoth_img
  },
  "feanor": {
    "shade": 0,
    "alias": "Feanor",
    "description": "The Maker of of the Silmarils, King of Noldor",
    "img": feanor_img
  },
  "glaurung": {
    "shade": -2,
    "alias": "Glaurung the Dragon",
    "description": "the Father of all Dragons",
    "img": glaurung_img
  },
  "maeglin": {
    "shade": -1,
    "alias": "Maeglin Eolson",
    "description": "Traitor of Gondolin",
    "img": maeglin_img
  },
  "thorondor": {
    "shade": 2,
    "alias": "Thorondor",
    "description": "The King of the Great Eagles",
    "img": thorondor_img
  },
  "ungoliant": {
    "shade": -2,
    "alias": "Ungoliant the Deviour",
    "description": "The Oldest Giant Spider of Arda",
    "img": ungoliant_img
  },
  "finwe": {
    "shade": 2,
    "alias": "Finwe",
    "description": "The father of Fëanor, Fingolfin & Finarfin",
    "img": finwe_img
  },
  "durin": {
    "shade": 1,
    "alias": "Durin the Deathless",
    "description": "Oldest of the Seven Dwarf Fathers",
    "img": durin_img
  },
  "finarfin": {
    "shade": 1,
    "alias": "Finarfin Arafinwë",
    "description": "Wisest of Finwë's sons",
    "img": finarfin_img
  },
  "gothmog": {
    "shade": -1,
    "alias": "Gothmog the Lord of Balrogs",
    "description": "High Captain of Angband",
    "img": gothmog_img
  },
  "morgoth": {
    "shade": -2,
    "alias": "Morgoth Bauglir",
    "description": "Melkor, The first Dark Lord",
    "img": morgoth_img
  },
  "thuringwethil": {
    "shade": -1,
    "alias": "Thuringwethil",
    "description": "Sauron's herald Vampire",
    "img": thuringwethil_img
  },
  "beleg": {
    "shade": 1,
    "alias": "Beleg Cúthalion",
    "description": "Son of Elu Thingol, Companion of Túrin Turambar",
    "img": beleg_img
  },
  "earendil": {
    "shade": 2,
    "alias": "Earendil the Mariner",
    "description": "Lord of Arvernien, Father Elros and Elrond",
    "img": earendil_img
  },
  "fingolfin": {
    "shade": 1,
    "alias": "Fingolfin Ñolofinwë",
    "description": "The High King of the Ñoldor",
    "img": fingolfin_img
  },
  "ingwe": {
    "shade": 2,
    "alias": "Ingwe",
    "description": "The King of the Vanyar and High King of the Elves",
    "img": ingwe_img
  },
  "sauron": {
    "shade": -2,
    "alias": "Sauron Aulendil",
    "description": "The Maker of the One Ring",
    "img": sauron_img
  },
  "turgon": {
    "shade": 1,
    "alias": "Turgon the Wise",
    "description": "The King of Gondolin",
    "img": turgon_img
  },
  "beren": {
    "shade": 2,
    "alias": "Beren Erchamion",
    "description": "Lover of Lúthien, Princess of the Sindar",
    "img": beren_img
  },
  "ecthelion": {
    "shade": 1,
    "alias": "Ecthelion of the Fountain",
    "description": "Bane of Gothmog",
    "img": ecthelion_img
  },
  "finrod": {
    "shade": 1,
    "alias": "Finrod Felagund",
    "description": "King of Nargothrond, the Eldest Son of Finarfin",
    "img": finrod_img
  },
  "maedhros": {
    "shade": 0,
    "alias": "Maedhros the Tall",
    "description": "The Eldest of the seven Sons of Fëanor",
    "img": maedhros_img
  },
  "thingol": {
    "shade": 1,
    "alias": "Elu Thingol",
    "description": "The Founder King of Doriath",
    "img": thingol_img
  },
  "turin": {
    "shade": 0,
    "alias": "Túrin Turambar",
    "description": "The Son of Húrin Thalion",
    "img": turin_img
  }
}
export const varDestructer = (id) => {
  let shade = 'secondary';
  let price = 1;
  let type = 'Tragic';
  switch (id) {
       case 1: {
            shade = 'success';
            price = 4;
            type = 'Hero';
            break;
       }
       case 2: {
            shade = 'warning';
            price = 5;
            type = 'Legend';
            break;
       }
       case -1: {
            shade = 'danger';
            price = 3;
            type = 'Villian';
            break;
       }
       case -2: {
            shade = 'dark';
            price = 7;
            type = 'Monster';
            break;
       }

  }
  return {
       shade, price, type
  }
}
  export default Data;