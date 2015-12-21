var classes = {
	lord: {
        skills: ['dual_strike_plus', 'charm'],
        promoteTo: ['great_lord'],
        promotedFrom: null,
        gender: ['male', 'female'],
        special: true
	},
    great_lord: {
        skills: ['eather', 'rightful_king'],
        promoteTo: null,
        promotedFrom: ['lord'],
        gender: ['male', 'female'],
        special: true
	},
	tactician: {
        skills: ['veteran', 'solidarity'],
        promoteTo: ['grandmaster'],
        promotedFrom: null,
        gender: ['male', 'female'],
        special: true
	},
    grandmaster: {
        skills: ['ignis', 'rally_spectrum'],
        promoteTo: null,
        promotedFrom: ['tactician'],
        gender: ['male', 'female'],
        special: true
	},
	cavalier: {
        skills: ['discipline', 'outdoor_fighter'],
        promoteTo: ['general', 'great_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	knight: {
        skills: ['defence_2', 'indoor_fighter'],
        promoteTo: ['paladin', 'great_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
    paladin: {
        skills: ['defender', 'aegis'],
        promoteTo: null,
        promotedFrom: ['cavalier'],
        gender: ['male', 'female']
	},
	great_knight: {
        skills: ['lunar', 'dual_guard_plus'],
        promoteTo: null,
        promotedFrom: ['cavalier', 'knight'],
        gender: ['male', 'female']
	},
	general: {
        skills: ['rally_defence', 'pavise'],
        promoteTo: null,
        promotedFrom: ['knight'],
        gender: ['male', 'female']
	},
	myrmidon: {
        skills: ['avoid_10', 'vantage'],
        promoteTo: ['sword_master', 'assassin'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	thief: {
        skills: ['locktouch', 'movement_1'],
        promoteTo: ['assassin', 'trickster'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	sword_master: {
        skills: ['astra', 'swordfaire'],
        promoteTo: null,
        promotedFrom: ['myrmidon'],
        gender: ['male', 'female']
	},
	assassin: {
        skills: ['lethality', 'pass'],
        promoteTo: null,
        promotedFrom: ['myrmidon', 'thief'],
        gender: ['male', 'female']
	},
	trickster: {
        skills: ['lucky_seven', 'acrobat'],
        promoteTo: null,
        promotedFrom: ['thief'],
        gender: ['male', 'female']
	},
	barbarian: {
        skills: ['despoil', 'gamble'],
        promoteTo: ['berserker', 'warrior'],
        promotedFrom: null,
        gender: ['male']
	},
	fighter: {
        skills: ['hp_5', 'zeal'],
        promoteTo: ['hero', 'warrior'],
        promotedFrom: null,
        gender: ['male']
	},
	mercenary: {
        skills: ['armthrift', 'patience'],
        promoteTo: ['hero', 'bowknight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	archer: {
        skills: ['skill_2', 'prescience'],
        promoteTo: ['sniper', 'bowknight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	berserker: {
        skills: ['wrath', 'axefaire'],
        promoteTo: null,
        promotedFrom: ['barbarian'],
        gender: ['male']
	},
	warrior: {
        skills: ['rally_strength', 'counter'],
        promoteTo: null,
        promotedFrom: ['barbarian', 'fighter'],
        gender: ['male']
	},
	hero: {
        skills: ['axebreaker', 'sol'],
        promoteTo: null,
        promotedFrom: ['fighter', 'mercenary'],
        gender: ['male', 'female']
	},
	bow_knight: {
        skills: ['bowbreaker', 'rally_skill'],
        promoteTo: null,
        promotedFrom: ['mercenary', 'archer'],
        gender: ['male', 'female']
	},
	sniper: {
        skills: ['hitrate_20', 'bowfaire'],
        promoteTo: null,
        promotedFrom: ['archer'],
        gender: ['male', 'female']
	},
	pegasus_knight: {
        skills: ['speed_2', 'relief'],
        promoteTo: ['falcon_knight', 'dark_flier'],
        promotedFrom: null,
        gender: ['female']
	},
	falcon_knight: {
        skills: ['rally_speed', 'lancefaire'],
        promoteTo: null,
        promotedFrom: ['pegasus_knight'],
        gender: ['female']
	},
	dark_flier: {
        skills: ['rally_movement', 'galeforce'],
        promoteTo: null,
        promotedFrom: ['pegasus_knight'],
        gender: ['female']
	},
	wyvern_rider: {
        skills: ['strength_2', 'tantivy'],
        promoteTo: ['wyvern_lord', 'griffon_rider'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	wyvern_lord: {
        skills: ['quick_burn', 'swordbreaker'],
        promoteTo: null,
        promotedFrom: ['wyvern_rider'],
        gender: ['male', 'female']
	},
	griffon_rider: {
        skills: ['deliverer', 'lancebreaker'],
        promoteTo: null,
        promotedFrom: ['wyvern_rider'],
        gender: ['male', 'female']
	},
	dark_mage: {
        skills: ['hex', 'anathema'],
        promoteTo: ['sorcerer', 'dark_knight'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	mage: {
        skills: ['magic_2', 'focus'],
        promoteTo: ['dark_knight', 'sage'],
        promotedFrom: null,
        gender: ['male', 'female']
	},
	cleric: {
        skills: ['miracle', 'healtouch'],
        promoteTo: ['sage', 'war_cleric'],
        promotedFrom: null,
        gender: ['female']
	},
	priest: {
        skills: ['miracle', 'healtouch'],
        promoteTo: ['sage', 'war_monk'],
        promotedFrom: null,
        gender: ['male']
	},
	troubadour: {
        skills: ['resistance_2', 'demoiselle'],
        promoteTo: ['war_cleric', 'valkyrie'],
        promotedFrom: null,
        gender: ['female']
	},
	sorcerer: {
        skills: ['vengeance', 'tomebreaker'],
        promoteTo: null,
        promotedFrom: ['dark_mage'],
        gender: ['male', 'female']
	},
	dark_knight: {
        skills: ['slow_burn', 'life_taker'],
        promoteTo: null,
        promotedFrom: ['dark_mage', 'mage'],
        gender: ['male', 'female']
	},
	sage: {
        skills: ['rally_magic', 'tomefaire'],
        promoteTo: null,
        promotedFrom: ['priest', 'cleric', 'mage'],
        gender: ['male', 'female']
	},
	war_monk: {
        skills: ['rally_luck', 'renewal'],
        promoteTo: null,
        promotedFrom: ['priest'],
        gender: ['male']
	},
	war_cleric: {
        skills: ['rally_luck', 'renewal'],
        promoteTo: null,
        promotedFrom: ['cleric', 'troubadour'],
        gender: ['female']
	},
	valkyrie: {
		skills: ['rally_resistance', 'dual_support_plus'],
        promoteTo: null,
        promotedFrom: ['troubadour'],
        gender: ['female']
	},
	villager: {
        skills: ['aptitude', 'underdog'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male'],
        special: true
	},
	taguel: {
        skills: ['even_rhythm', 'beastbane'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        special: true
	},
	manakete: {
        skills: ['odd_rhythm', 'wyrmbane'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        special: true
	},
	dancer: {
        skills: ['luck_4', 'special_dance'],
        promoteTo: null,
        promotedFrom: null,
        gender: ['male', 'female'],
        special: true
	}
};

module.exports = classes;
