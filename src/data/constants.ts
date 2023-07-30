// 十天干
export const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const;

// 十二地支
export const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;

// 十二生肖（按地支顺序）
export const ZODIAC = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

// 紫微斗数十二宫名称
export const PALACES = ['命宫', '父母', '福德', '田宅', '官禄', '仆役', '迁移', '疾厄', '财帛', '子女', '夫妻', '兄弟'] as const;

// 紫微斗数四化
export const MUTAGEN = ['禄', '权', '科', '忌'] as const;

// 宫位对应方位，此处是以宫位定位而不是地支
export const PALACE_LOCATION = {
  寅: '东偏北',
  卯: '正东方',
  辰: '东偏南',
  巳: '南偏东',
  午: '正南方',
  未: '南偏西',
  申: '西偏南',
  酉: '正西方',
  戌: '西偏北',
  亥: '北偏西',
  子: '正北方',
  丑: '北偏东',
} as const;

//性别对应阴阳
export const GENDER = {
  男: '阳',
  女: '阴',
} as const;

// 时辰
export const BIRTH_TIME = [
  '早子时', //: '00:00~01:00',
  '丑时', //: '01:00~03:00',
  '寅时', //: '03:00~05:00',
  '卯时', //: '05:00~07:00',
  '辰时', //: '07:00~09:00',
  '巳时', //: '09:00~11:00',
  '午时', //: '11:00~13:00',
  '未时', //: '13:00~15:00',
  '申时', //: '15:00~17:00',
  '酉时', //: '17:00~19:00',
  '戌时', //: '19:00~21:00',
  '亥时', //: '21:00~23:00',
  '晚子时', //: '23:00~00:00',
] as const;

/**
 * 五虎遁 从年干算月干。
 * “五虎遁元”年上起月法，简称“五虎遁”。
 * 因为正月建寅，所以正月的地支为寅，寅属虎，所以叫五虎盾。
 * 甲己之年丙作首
 * 乙庚之岁戊为头
 * 丙辛必定寻庚起
 * 丁壬壬位顺行流
 * 若问戊癸何方发
 * 甲寅之上好追求
 */
export const TIGER_RULE = {
  甲: '丙',
  乙: '戊',
  丙: '庚',
  丁: '壬',
  戊: '甲',
  己: '丙',
  庚: '戊',
  辛: '庚',
  壬: '壬',
  癸: '甲',
} as const;

/**
 * 五鼠遁 以日干算时干。
 * “五鼠遁元”日上起时法，简称“五鼠遁”。
 * 因为日支全部以“子”时打头来排列的，子为鼠，所以叫五鼠遁。
 * 甲己还加甲，乙庚丙作初。
 * 丙辛从戊起，丁壬庚子居。
 * 戊癸起壬子，周而复始求。
 */
export const RAT_RULE = {
  甲: '甲',
  乙: '丙',
  丙: '戊',
  丁: '庚',
  戊: '壬',
  己: '甲',
  庚: '丙',
  辛: '戊',
  壬: '庚',
  癸: '壬',
} as const;