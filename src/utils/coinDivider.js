export const divideCoin = (totalCoin) => {
  totalCoin = Number(totalCoin);
  const result = { 500: 0, 100: 0, 10: 0, 1: 0 };
  for (const coin of [500, 100, 10, 1]) {
    const count = Math.floor(totalCoin / coin);
    totalCoin -= coin * count;
    result[coin] = count;
  }
  return result;
};

export const concatCoin = (coinList) => {
  return [500, 100, 10, 1].reduce((acc, cur) => acc + cur * coinList[cur], 0);
};

export const settlement = (base, target) => {
  let result = { 500: 0, 100: 0, 10: 0, 1: 0 };

  for (const coin of [500, 100, 10, 1]) {
    let diff = 0;
    if (base[coin] >= target[coin]) {
      // 잔돈을 내줄 수 있는 경우
      diff = target[coin];
      base[coin] -= diff;
      target[coin] = 0;
    } else {
      // 잔돈이 더 많은 경우
      diff = base[coin];
      target[coin] -= diff;
      base[coin] = 0;
    }
    result[coin] = diff;
  }
  return { base, target, result };
};
