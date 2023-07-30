import { lunar2solar, solar2lunar } from '../../calendar';

describe('calendar/convertor', () => {
  test('solar2lunar()', () => {
    const dates = {
      '2023-7-29': '二〇二三年六月十二',
      '2023-4-1': '二〇二三年(闰)二月十一',
      '2023-4-20': '二〇二三年三月初一',
      '2023-3-21': '二〇二三年二月三十',
      '2023-1-22': '二〇二三年正月初一',
      '2023-1-21': '二〇二二年腊月三十',
      '1900-03-01': '一九〇〇年二月初一',
      '1921-08-01': '一九二一年六月廿八',
      '2020-01-24': '二〇一九年腊月三十',
      '2020-01-25': '二〇二〇年正月初一',
    };

    Object.entries(dates).map(([key, value]) => {
      expect(solar2lunar(key).toString()).toBe(value);
    });

    try {
      solar2lunar('2023-22-22');
    } catch (err: any) {
      expect(err.message).toBe('日期错误');
    }
  });

  test('lunar2solar()', () => {
    const dates = {
      '2023-7-29': { date: '2023-6-12', isLeap: false },
      '2023-4-1': { date: '2023-2-11', isLeap: true },
      '2023-4-20': { date: '2023-3-1', isLeap: false },
      '2023-3-21': { date: '2023-2-30', isLeap: false },
      '2023-1-22': { date: '2023-1-1', isLeap: false },
      '2023-1-21': { date: '2022-12-30', isLeap: false },
      '1900-3-1': { date: '1900-2-1', isLeap: false },
      '1921-8-1': { date: '1921-6-28', isLeap: false },
      '2020-1-24': { date: '2019-12-30', isLeap: false },
      '2020-1-25': { date: '2020-1-1', isLeap: false },
      '2023-7-30': { date: '2023-6-13', isLeap: false },
    };

    Object.entries(dates).map(([key, value]) => {
      expect(lunar2solar(value.date, value.isLeap).toString()).toBe(key);
    });
  });
});