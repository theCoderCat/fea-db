var skills = {
    dual_strike_plus: {
        name: 'Dual Strike+',
        class: 'lord',
        level: 1,
        activation: null,
        effect: 'Adds 10% to the Dual Strike rate'
    },
    charm: {
        name: 'Charm',
        class: 'lord',
        level: 10,
        activation: null,
        effect: 'Hit rate and Avoid +5 to all allies within a 3 tile radius'
    },
    aether: {
        name: 'Aether',
        class: 'great_lord',
        level: 5,
        activation: 'skill/2%',
        effect: 'Attack twice consecutively, with the first strike having a Sol effect and the second strike having a Luna effect'
    },
    rightful_king: {
        name: 'Rightful King',
        class: 'great_lord',
        level: 15,
        activation: null,
        effect: 'Adds 10% to Skill activation rates'
    },
    veteran: {
        name: 'Veteran',
        class: 'tactician',
        level: 1,
        activation: null,
        effect: 'Experience gain x 1.5 when paired up'
    },
    solidarity: {
        name: 'Solidarity',
        class: 'tactician',
        level: 10,
        activation: null,
        effect: 'Critical and Critical Avoid +10 to adjacent allies'
    },
    ignis: {
        name: 'Ignis',
        class: 'grandmaster',
        level: 5,
        activation: 'Command',
        effect: 'Adds (Magic)/2 to Strength when dealing physical damage and (Strength)/2 to Magic when dealing magical damage'
    },
    rally_spectrum: {
        name: 'Rally Spectrum',
        class: 'grandmaster',
        level: 15,
        activation: 'Command',
        effect: 'All stats +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    discipline: {
        name: 'Discipline',
        class: 'cavalier',
        level: 1,
        activation: null,
        effect: 'Weapon experience x2'
    },
    outdoor_fighter: {
        name: 'Outdoor Fighter',
        class: 'cavalier',
        level: 10,
        activation: null,
        effect: 'Hit rate and Avoid +10 when fighting outdoors'
    },
    defender: {
        name: 'Defender',
        class: 'paladin',
        level: 5,
        activation: null,
        effect: 'All stats +1 when paired up'
    },
    aegis: {
        name: 'Defender',
        class: 'paladin',
        level: 15,
        activation: 'skill%',
        effect: 'Halves damage from bows, tomes and dragonstones'
    },
    luna: {
        name: 'Luna',
        class: 'great_knight',
        level: 5,
        activation: 'skill%',
        effect: 'Ignores half the enemy’s Defence or Resistance'
    },
    dual_guard_plus: {
        name: 'Dual Guard+',
        class: 'great_knight',
        level: 15,
        activation: null,
        effect: 'Adds 10% to the Dual Guard rate'
    },
    defence_2: {
        name: 'Defence +2',
        class: 'knight',
        level: 5,
        activation: null,
        effect: 'Defence +2'
    },
    indoor_fighter: {
        name: 'Indoor Fighter',
        class: 'knight',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +10 when fighting indoors'
    },
    rally_defence: {
        name: 'Rally Defence',
        class: 'general',
        level: 5,
        activation: 'Command',
        effect: 'Defence +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    pavise: {
        name: 'Pavise',
        class: 'general',
        level: 15,
        activation: 'skill%',
        effect: 'Halves damage from swords, lances, axes (includes magical variants) and beaststones'
    },
    avoid_10: {
        name: 'Avoid +10',
        class: 'myrmidon',
        level: 1,
        activation: null,
        effect: 'Avoid +10'
    },
    vantage: {
        name: 'Vantage',
        class: 'myrmidon',
        level: 10,
        activation: null,
        effect: 'When HP under half, always attack first during the enemy’s Turn'
    },
    astra: {
        name: 'Astra',
        class: 'swordmaster',
        level: 5,
        activation: 'skill/2%',
        effect: 'Deals 5 consecutive hits with half damage'
    },
    swordfaire: {
        name: 'Swordfaire',
        class: 'swordmaster',
        level: 15,
        activation: null,
        effect: 'Strength +5 when equipped with a sword (Magic +5 when equipped with the Levin Sword)'
    },
    armthrift: {
        name: 'Armsthrift',
        class: 'mercenary',
        level: 1,
        activation: 'luck*2%',
        effect: 'Attack does not reduce weapon usage'
    },
    patience: {
        name: 'Patience',
        class: 'mercenary',
        level: 10,
        activation: null,
        effect: 'Hit rate and Avoid +10 during the enemy’s Turn'
    },
    sol: {
        name: 'Sol',
        class: 'hero',
        level: 5,
        activation: 'skill%',
        effect: 'Recover HP equal to half the damage dealt to the enemy'
    },
    axebreaker: {
        name: 'Axebreaker',
        class: 'hero',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +50 when the enemy is equipped with an axe'
    },
    hp_5: {
        name: 'HP +5',
        class: 'fighter',
        level: 1,
        activation: null,
        effect: 'Maximum HP +5'
    },
    zeal: {
        name: 'Zeal',
        class: 'fighter',
        level: 10,
        activation: null,
        effect: 'Critical +5'
    },
    rally_strength: {
        name: 'Rally Strength',
        class: 'warrior',
        level: 5,
        activation: 'Command',
        effect: 'Strength +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    counter: {
        name: 'Counter',
        class: 'warrior',
        level: 15,
        activation: null,
        effect: 'Returns damage when attacked by an adjacent enemy (except damage that KOs the user)'
    },
    despoil: {
        name: 'Despoil',
        class: 'barbarian',
        level: 1,
        activation: 'luck%',
        effect: 'Obtain Bullion (S) from the enemy if the user defeats the enemy'
    },
    gamble: {
        name: 'Gamble',
        class: 'barbarian',
        level: 10,
        activation: null,
        effect: 'Hit rate -5, Critical +10'
    },
    wrath: {
        name: 'Wrath',
        class: 'berserker',
        level: 5,
        activation: null,
        effect: 'Critical +20 when under half HP'
    },
    axefaire: {
        name: 'Axefaire',
        class: 'berserker',
        level: 15,
        activation: null,
        effect: 'Strength +5 when equipped with an axe (Magic +5 when equipped with the Bolt Axe)'
    },
    skill_2: {
        name: 'Skill +2',
        class: 'archer',
        level: 1,
        activation: null,
        effect: 'Skill +2'
    },
    prescience: {
        name: 'Prescience',
        class: 'archer',
        level: 10,
        activation: null,
        effect: 'Hit rate and Avoid +15 during the user’s Turn'
    },
    hit_rate_20: {
        name: 'Hit Rate +20',
        class: 'sniper',
        level: 5,
        activation: null,
        effect: 'Hit Rate +20'
    },
    bowfaire: {
        name: 'Bowfaire',
        class: 'sniper',
        level: 15,
        activation: null,
        effect: 'Strength +5 when equipped with a bow'
    },
    rally_skill: {
        name: 'Rally Skill',
        class: 'bow_knight',
        level: 5,
        activation: 'Command',
        effect: 'Skill +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    bowbreaker: {
        name: 'Bowbreaker',
        class: 'bow_knight',
        level: 5,
        activation: null,
        effect: 'Hit rate and Avoid +50 when the enemy is equipped with a bow'
    },
    locktouch: {
        name: 'Locktouch',
        class: 'thief',
        level: 1,
        activation: null,
        effect: 'Open doors and chests without the need of keys'
    },
    movement_1: {
        name: 'Movement +1',
        class: 'thief',
        level: 10,
        activation: null,
        effect: 'Movement +1'
    },
    lethality: {
        name: 'Lethality',
        class: 'assassin',
        level: 5,
        activation: 'skill/4%',
        effect: 'Instantly defeats the enemy'
    },
    pass: {
        name: 'Pass',
        class: 'assassin',
        level: 15,
        activation: null,
        effect: 'User can pass through tiles occupied by enemy units'
    },
    lucky_seven: {
        name: 'Lucky Seven',
        class: 'trickster',
        level: 5,
        activation: null,
        effect: 'Hit rate and Avoid +20 up to the 7th Turn'
    },
    acrobat: {
        name: 'Acrobat',
        class: 'trickster',
        level: 15,
        activation: null,
        effect: 'All traversable terrain costs 1 movement point to cross'
    },
    speed_2: {
        name: 'Speed +2',
        class: 'pegasus_knight',
        level: 1,
        activation: null,
        effect: 'Speed +2'
    },
    relief: {
        name: 'Relief',
        class: 'pegasus_knight',
        level: 10,
        activation: null,
        effect: 'Recover 20% HP at the start of the user’s Turn if no units are within a 3 tile radius'
    },
    rally_speed: {
        name: 'Rally Speed',
        class: 'falcon_knight',
        level: 5,
        activation: 'Command',
        effect: 'Speed +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    lancefaire: {
        name: 'Lancefaire',
        class: 'falcon_knight',
        level: 15,
        activation: null,
        effect: 'Strength +5 when equipped with a lance (Magic +5 when equipped with the Shockstick)'
    },
    rally_movement: {
        name: 'Rally Movement',
        class: 'dark_flier',
        level: 5,
        activation: 'Command',
        effect: 'Movement +1 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    galeforce: {
        name: 'Galeforce',
        class: 'dark_flier',
        level: 15,
        activation: null,
        effect: 'Allows the user another full action after they defeat an enemy during the user’s Turn (only once per Turn)'
    },
    strength_2: {
        name: 'Strength +2',
        class: 'wyvern_rider',
        level: 1,
        activation: null,
        effect: 'Strength +2'
    },
    tantivy: {
        name: 'Tantivy',
        class: 'wyvern_rider',
        level: 10,
        activation: null,
        effect: 'Hit rate and Avoid +10 if no allies within a 3 tile radius'
    },
    quick_burn: {
        name: 'Quick Burn',
        class: 'wyvern_lord',
        level: 5,
        activation: null,
        effect: 'Hit rate and Avoid +15 at the start of the chapter. Effect decreases with each passing Turn'
    },
    swordbreaker: {
        name: 'Swordbreaker',
        class: 'wyvern_lord',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +50 when the enemy is equipped with a sword'
    },
    deliverer: {
        name: 'Deliverer',
        class: 'griffon_rider',
        level: 5,
        activation: null,
        effect: 'Movement +2 when paired up'
    },
    lancebreaker: {
        name: 'Lancebreaker',
        class: 'griffon_rider',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +50 when the enemy is equipped with a lance'
    },
    magic_2: {
        name: 'Magic +2',
        class: 'mage',
        level: 1,
        activation: null,
        effect: 'Magic +2'
    },
    focus: {
        name: 'Focus',
        class: 'mage',
        level: 10,
        activation: null,
        effect: 'Critical +10 when no allies within a 3 tile radius'
    },
    rally_magic: {
        name: 'Rally Magic',
        class: 'sage',
        level: 5,
        activation: 'Command',
        effect: 'Magic +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    tomefaire: {
        name: 'Tomefaire',
        class: 'sage',
        level: 15,
        activation: null,
        effect: 'Magic +5 when equipped with a Tome'
    },
    hex: {
        name: 'Hex',
        class: 'dark_mage',
        level: 1,
        activation: null,
        effect: 'Avoid -15 to all adjacent enemies'
    },
    anathema: {
        name: 'Anathema',
        class: 'dark_mage',
        level: 10,
        activation: null,
        effect: 'Avoid and Critical Avoid -10 to all enemies within a 3 tile radius'
    },
    vengeance: {
        name: 'Vengeance',
        class: 'sorcerer',
        level: 5,
        activation: 'skill*2%',
        effect: 'Deals (user’s Max HP – Current HP)/2 extra damage'
    },
    tomebreaker: {
        name: 'Tomebreaker',
        class: 'sorcerer',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +50 when the enemy is equipped with a tome'
    },
    slow_burn: {
        name: 'Slow Burn',
        class: 'dark_knight',
        level: 5,
        activation: null,
        effect: 'Hit rate and Avoid increases by 1 each Turn, up to the 15th Turn'
    },
    lifetake: {
        name: 'Lifetaker',
        class: 'dark_knight',
        level: 15,
        activation: null,
        effect: 'User recovers 50% HP after they defeat an enemy during the user’s Turn'
    },
    miracle: {
        name: 'Miracle',
        class: ['priest', 'cleric'],
        level: 1,
        activation: 'luck%',
        effect: 'Character survives with 1 HP after receiving an attack that would otherwise KO them (must have over 1 HP)'
    },
    healtouch: {
        name: 'Healtouch',
        class: ['priest', 'cleric'],
        level: 10,
        activation: null,
        effect: 'Restores an extra 5 HP when healing allies'
    },
    rally_luck: {
        name: 'Rally Luck',
        class: ['war_monk', 'war_cleric'],
        level: 5,
        activation: 'Commnand',
        effect: 'Luck +8 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    renewal: {
        name: 'Renewal',
        class: ['war_monk', 'war_cleric'],
        level: 15,
        activation: null,
        effect: 'Recover 30% HP at the start of the user’s Turn'
    },
    resistance_2: {
        name: 'Resistance +2',
        class: 'troubadour',
        level: 1,
        activation: null,
        effect: 'Resistance +2'
    },
    demoiselle: {
        name: 'Demoiselle',
        class: 'troubadour',
        level: 10,
        activation: null,
        effect: 'Avoid and Critical Avoid +10 to all male allies within a 3 tile radius'
    },
    rally_resistance: {
        name: 'Rally Resistance',
        class: 'valkyrie',
        level: 5,
        activation: 'Command',
        effect: 'Resistance +4 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    dual_support_plus: {
        name: 'Dual Support+',
        class: 'valkyrie',
        level: 15,
        activation: null,
        effect: 'Increases the support bonus effect'
    },
    aptitude: {
        name: 'Aptitude',
        class: 'villager',
        level: 1,
        activation: null,
        effect: 'Adds 20% to all growth rates during Level Ups'
    },
    underdog: {
        name: 'Aptitude',
        class: 'villager',
        level: 15,
        activation: null,
        effect: 'Hit rate and Avoid +15 when user’s Level is lower than the enemy (promoted units count as Level +20)'
    },
    luck_4: {
        name: 'Luck +4',
        class: 'dancer',
        level: 1,
        activation: null,
        effect: 'Luck +4'
    },
    special_dance: {
        name: 'Special Dance',
        class: 'dancer',
        level: 15,
        activation: null,
        effect: 'Strength, Magic, Defence and Resistance +2 for one Turn for the unit who receives the user’s Dance'
    },
    even_rhythm: {
        name: 'Even Rhythm',
        class: 'taguel',
        level: 1,
        activation: null,
        effect: 'Hit rate and Avoid +10 during even numbered Turns'
    },
    beastbane: {
        name: 'Beastbane',
        class: 'taguel',
        level: 15,
        activation: null,
        effect: 'Deals effective damage to Beast units when user is a Taguel'
    },
    odd_rhythm: {
        name: 'Odd Rhythm',
        class: 'manakete',
        level: 1,
        activation: null,
        effect: 'Hit rate and Avoid +10 during odd numbered Turns'
    },
    wyrmsbane: {
        name: 'Wyrmsbane',
        class: 'manakete',
        level: 15,
        activation: null,
        effect: 'Deals effective damage to Dragon units when user is a Manakete'
    },
    shadowgift: {
        name: 'Shadowgift',
        class: null,
        level: 0,
        activation: null,
        effect: 'Enables usage of Dark Tomes for Tome wielders (Aversa, Morgan as Aversa’s daughter, DLC Micaiah and DLC Katarina only)'
    },
    conquest: {
        name: 'Conquest',
        class: null,
        level: 0,
        activation: null,
        effect: 'Negates user’s Beast (beast *3) and Armour (armour) type weaknesses (Walhart, Morgan as Walhart’s son, Zephiel and DLC Ephraim only)'
    },
    resistance_10: {
        name: 'Resistance +10',
        class: 'dread_fighter',
        level: 1,
        activation: null,
        effect: 'Resistance +10'
    },
    aggressor: {
        name: 'Aggressor',
        class: 'dread_fighter',
        level: 15,
        activation: null,
        effect: 'Attack +10 during the user’s Turn'
    },
    rally_heart: {
        name: 'Rally Heart',
        class: 'bride',
        level: 1,
        activation: 'Command',
        effect: 'All stats +2 and Movement +1 to all allies within a 3 tile radius for one Turn when the Rally command is used'
    },
    bond: {
        name: 'Bond',
        class: 'bride',
        level: 15,
        activation: null,
        effect: 'Restores 10 HP to all allies within a 3 tile radius at the beginning of the user’s Turn'
    },
    all_stats_2: {
        name: 'All Stats +2',
        class: null,
        level: 0,
        activation: null,
        effect: 'Strength, Magic, Skill, Speed, Luck, Defence and Resistance +2 (Learned by using the All Stats +2 item)'
    },
    paragon: {
        name: 'Paragon',
        class: null,
        level: 0,
        activation: null,
        effect: 'Experience gain x2 (Learned by using the Paragon item)'
    },
    iote_shield: {
        name: 'Iote’s Shield',
        class: null,
        level: 0,
        activation: null,
        effect: 'Negates user’s Flying (flying) type weakness (Learned by using the Iote’s Shield item)'
    },
    limit_breaker: {
        name: 'Limit Breaker',
        class: null,
        level: 0,
        activation: null,
        effect: 'Raises the character’s maximum stats by 10 (Learned by using the Limit Breaker item)'
    },
};

module.exports = skills;