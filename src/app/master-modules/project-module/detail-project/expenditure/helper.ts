import * as moment from 'moment';

export const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getEndingMonthByAnnual(start) {
  if (Math.abs((start - 11)) > 10) {
    return Math.abs((start - 11));
  } else {
    return (start - 11) + 10;
  }
}

export function getEndingMonthBiAnnual(start) {
  if ((start + 5) <= 11) {
    return (start + 5);
  } else {
    return (start + 5) - MONTH.length;
  }
}

export function populateColumns(plan, start) {
  if (plan.startsWith('Annual')) {
    return getColumns(start, getEndingMonthByAnnual(start));
  }
  if (plan.startsWith('Biannual')) {
    return getColumns(start, getEndingMonthBiAnnual(start));
  }
}

export function getColumns(start, end) {
  const column = [' '];
  if (end > start) {
    for (let i = start; i <= end; i++) {
      column.push(MONTH[i]);
    }
    return column;
  } else {
    for (let i = start; i < MONTH.length; i++) {
      column.push(MONTH[i]);
    }
    for (let i = 0; i <= end; i++) {
      column.push(MONTH[i]);
    }
    column.push('Total');
    return column;
  }
}

export function changeName(frequency) {
  if (frequency.startsWith('Annual')) {
    return 'year';
  }
  if (frequency.startsWith('Biannual') ) {
    return 'half year';
  }
  if (frequency.startsWith('Quarterly')) {
    return 'quarter';
  } else {
    return frequency;
  }
}
export function changeNumber(n) {
  if (n === 1) {
    return n + 'st';
  }
  if (n === 2) {
    return n + 'nd';
  }
  if (n === 3) {
    return n + 'rd';
  } else {
    return n + 'th';
  }
}

export function getListOfStaringMonthIndexs(start, years, frequency) {
  const startAr = [];
  for (let i = 0; i < years; i++) {
    if (frequency === 'Annual') {
      if (startAr.length === 0) {
        startAr.push(moment(start).month());
      } else {
        startAr.push(getEndingMonthByAnnual(startAr[i - 1]) + 1);
      }
    }
    if (frequency === 'Biannual') {
      if (startAr.length === 0) {
        startAr.push(moment(start).month());
      } else {
        startAr.push(getEndingMonthBiAnnual(startAr[i - 1]) + 1);
      }
    }
  }
  return startAr;
}
