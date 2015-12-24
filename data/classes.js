var classes = {
	lord: {
        id: 'lord',
        name: 'Lord',
        weapon: [],
        skills: ['dual_strike_plus', 'charm'],
        promoteTo: ['great_lord'],
        promotedFrom: null,
        gender: ['male', 'female'],
        isSpecial: true
	},
    great_lord: {
        id: 'great_lord',
        name: 'Great Lord',
        weapon: [],
        skills: ['eather', 'rightful_king'],
        promoteTo: null,
        promotedFrom: ['lord'],
        gender: ['male', 'female'],
        isSpecial: true
	},
	tactician: {
        id: 'tactician',
        name: 'Tactician',
        weapon: [],
        skills: ['veteran', 'solidarity'],
        promoteTo: ['grandmaster'],
        promotedFrom: null,
        gender: ['male', 'female'],
        isSpecial: true
	},
    grandmaster: {
        id: 'grandmaster',
        name: 'Grandmaster',
        weapon: [],
        skills: ['ignis', 'rally_spectrum'],
        promoteTo: null,
        promotedFrom: ['tactician'],
        gender: ['male', 'female'],
        isSpecial: true
	},
	cavalier: {
        id: 'cavalier',
        name: 'Cavalier',
        weapon: [],
        skills: ['discipline', 'outdoor_fighter'],
        promoteTo: ['general', 'great_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	knight: {
        id: 'knight',
        name: 'Knight',
        weapon: [],
        skills: ['defence_2', 'indoor_fighter'],
        promoteTo: ['paladin', 'great_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
    paladin: {
        id: 'paladin',
        name: 'Paladin',
        weapon: [],
        skills: ['defender', 'aegis'],
        promoteTo: null,
        promotedFrom: ['cavalier'],
        gender: ['male', 'female']
	},
	great_knight: {
        id: 'great_knight',
        name: 'Great Knight',
        weapon: [],
        skills: ['lunar', 'dual_guard_plus'],
        promoteTo: null,
        promotedFrom: ['cavalier', 'knight'],
        gender: ['male', 'female']
	},
	general: {
        id: 'general',
        name: 'General',
        weapon: [],
        skills: ['rally_defence', 'pavise'],
        promoteTo: null,
        promotedFrom: ['knight'],
        gender: ['male', 'female']
	},
	myrmidon: {
        id: 'myrmidon',
        name: 'Myrmidon',
        weapon: [],
        skills: ['avoid_10', 'vantage'],
        promoteTo: ['sword_master', 'assassin'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	thief: {
        id: 'thief',
        name: 'Thief',
        weapon: [],
        skills: ['locktouch', 'movement_1'],
        promoteTo: ['assassin', 'trickster'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	sword_master: {
        id: 'sword_master',
        name: 'Sword Master',
        weapon: [],
        skills: ['astra', 'swordfaire'],
        promoteTo: null,
        promotedFrom: ['myrmidon'],
        gender: ['male', 'female']
	},
	assassin: {
        id: 'assassin',
        name: 'Assassin',
        weapon: [],
        skills: ['lethality', 'pass'],
        promoteTo: null,
        promotedFrom: ['myrmidon', 'thief'],
        gender: ['male', 'female']
	},
	trickster: {
        id: 'trickster',
        name: 'Trickster',
        weapon: [],
        skills: ['lucky_seven', 'acrobat'],
        promoteTo: null,
        promotedFrom: ['thief'],
        gender: ['male', 'female']
	},
	barbarian: {
        id: 'barbarian',
        name: 'Barbarian',
        weapon: [],
        skills: ['despoil', 'gamble'],
        promoteTo: ['berserker', 'warrior'],
        promotedFrom: null,
        gender: ['male']
	},
	fighter: {
        id: 'fighter',
        name: 'Fighter',
        weapon: [],
        skills: ['hp_5', 'zeal'],
        promoteTo: ['hero', 'warrior'],
        promotedFrom: null,
        gender: ['male']
	},
	mercenary: {
        id: 'mercenary',
        name: 'Mercenary',
        weapon: [],
        skills: ['armthrift', 'patience'],
        promoteTo: ['hero', 'bowknight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	archer: {
        id: 'archer',
        name: 'Archer',
        weapon: [],
        skills: ['skill_2', 'prescience'],
        promoteTo: ['sniper', 'bowknight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	berserker: {
        id: 'berserker',
        name: 'Berserker',
        weapon: [],
        skills: ['wrath', 'axefaire'],
        promoteTo: null,
        promotedFrom: ['barbarian'],
        gender: ['male']
	},
	warrior: {
        id: 'warrior',
        name: 'Warrior',
        weapon: [],
        skills: ['rally_strength', 'counter'],
        promoteTo: null,
        promotedFrom: ['barbarian', 'fighter'],
        gender: ['male']
	},
	hero: {
        id: 'hero',
        name: 'Hero',
        weapon: [],
        skills: ['axebreaker', 'sol'],
        promoteTo: null,
        promotedFrom: ['fighter', 'mercenary'],
        gender: ['male', 'female']
	},
	bow_knight: {
        id: 'bow_knight',
        name: 'Bow Knight',
        weapon: [],
        skills: ['bowbreaker', 'rally_skill'],
        promoteTo: null,
        promotedFrom: ['mercenary', 'archer'],
        gender: ['male', 'female']
	},
	sniper: {
        id: 'sniper',
        name: 'Sniper',
        weapon: [],
        skills: ['hitrate_20', 'bowfaire'],
        promoteTo: null,
        promotedFrom: ['archer'],
        gender: ['male', 'female']
	},
	pegasus_knight: {
        id: 'pegasus_knight',
        name: 'Pegasus Knight',
        weapon: [],
        skills: ['speed_2', 'relief'],
        promoteTo: ['falcon_knight', 'dark_flier'],
        promotedFrom: null,
        gender: ['female']
	},
	falcon_knight: {
        id: 'falcon_knight',
        name: 'Falcon Knight',
        weapon: [],
        skills: ['rally_speed', 'lancefaire'],
        promoteTo: null,
        promotedFrom: ['pegasus_knight'],
        gender: ['female']
	},
	dark_flier: {
        id: 'dark_flier',
        name: 'Dark Flier',
        weapon: [],
        skills: ['rally_movement', 'galeforce'],
        promoteTo: null,
        promotedFrom: ['pegasus_knight'],
        gender: ['female']
	},
	wyvern_rider: {
        id: 'wyvern_rider',
        name: 'Wyvern Rider',
        weapon: [],
        skills: ['strength_2', 'tantivy'],
        promoteTo: ['wyvern_lord', 'griffon_rider'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	wyvern_lord: {
        id: 'wyvern_lord',
        name: 'Wyvern Lord',
        weapon: [],
        skills: ['quick_burn', 'swordbreaker'],
        promoteTo: null,
        promotedFrom: ['wyvern_rider'],
        gender: ['male', 'female']
	},
	griffon_rider: {
        id: 'griffon_rider',
        name: 'Griffon Rider',
        weapon: [],
        skills: ['deliverer', 'lancebreaker'],
        promoteTo: null,
        promotedFrom: ['wyvern_rider'],
        gender: ['male', 'female']
	},
	dark_mage: {
        id: 'dark_mage',
        name: 'Dark Mage',
        weapon: [],
        skills: ['hex', 'anathema'],
        promoteTo: ['sorcerer', 'dark_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	mage: {
        id: 'mage',
        name: 'Mage',
        weapon: [],
        skills: ['magic_2', 'focus'],
        promoteTo: ['dark_knight', 'sage'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	cleric: {
        id: 'cleric',
        name: 'Cleric',
        weapon: [],
        skills: ['miracle', 'healtouch'],
        promoteTo: ['sage', 'war_cleric'],
        promotedFrom: null,
        gender: ['female']
	},
	priest: {
        id: 'priest',
        name: 'Priest',
        weapon: [],
        skills: ['miracle', 'healtouch'],
        promoteTo: ['sage', 'war_monk'],
        promotedFrom: null,
        gender: ['male']
	},
	troubadour: {
        id: 'troubadour',
        name: 'Troubadour',
        weapon: [],
        skills: ['resistance_2', 'demoiselle'],
        promoteTo: ['war_cleric', 'valkyrie'],
        promotedFrom: null,
        gender: ['female']
	},
	sorcerer: {
        id: 'sorcerer',
        name: 'Sorcerer',
        weapon: [],
        skills: ['vengeance', 'tomebreaker'],
        promoteTo: null,
        promotedFrom: ['dark_mage'],
        gender: ['male', 'female']
	},
	dark_knight: {
        id: 'dark_knight',
        name: 'Dark Knight',
        weapon: [],
        skills: ['slow_burn', 'life_taker'],
        promoteTo: null,
        promotedFrom: ['dark_mage', 'mage'],
        gender: ['male', 'female']
	},
	sage: {
        id: 'sage',
        name: 'Sage',
        weapon: [],
        skills: ['rally_magic', 'tomefaire'],
        promoteTo: null,
        promotedFrom: ['priest', 'cleric', 'mage'],
        gender: ['male', 'female']
	},
	war_monk: {
        id: 'war_monk',
        name: 'War Monk',
        weapon: [],
        skills: ['rally_luck', 'renewal'],
        promoteTo: null,
        promotedFrom: ['priest'],
        gender: ['male']
	},
	war_cleric: {
        id: 'war_cleric',
        name: 'War Cleric',
        weapon: [],
        skills: ['rally_luck', 'renewal'],
        promoteTo: null,
        promotedFrom: ['cleric', 'troubadour'],
        gender: ['female']
	},
	valkyrie: {
		id: 'valkyrie',
        name: 'Valkyrie',
        weapon: [],
        skills: ['rally_resistance', 'dual_support_plus'],
        promoteTo: null,
        promotedFrom: ['troubadour'],
        gender: ['female']
	},
	villager: {
        id: 'villager',
        name: 'Villager',
        weapon: [],
        skills: ['aptitude', 'underdog'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male'],
        isSpecial: true
	},
	taguel: {
        id: 'taguel',
        name: 'Taguel',
        weapon: [],
        skills: ['even_rhythm', 'beastbane'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        isSpecial: true
	},
	manakete: {
        id: 'manakete',
        name: 'Manakete',
        weapon: [],
        skills: ['odd_rhythm', 'wyrmbane'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        isSpecial: true
	},
	dancer: {
        id: 'dancer',
        name: 'Dancer',
        weapon: [],
        skills: ['luck_4', 'isSpecial_dance'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        isSpecial: true
	}
};

module.exports = classes;
