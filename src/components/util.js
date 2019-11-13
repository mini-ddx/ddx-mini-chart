function scale(obj) {
  const key = ['range', 'tickCount', 'max', 'min', 'mask', 'type', 'nice', 'ticks'];
  const res = {};
  for (let i = 0; i < key.length; i++) {
    const k = key[i];
    if (obj.hasOwnProperty(k)) {
      res[k] = obj[k];
    }
  }
  return res;
}

function axis(obj) {
  const key = ['label', 'line', 'grid'];
  const res = {};
  for (let i = 0; i < key.length; i++) {
    const k = key[i];
    if (obj.hasOwnProperty(k)) {
      if (k === 'line' && obj[k] === true) {
        obj[k] = F2.Global._defaultAxis.line;
      } else if (k === 'grid' && obj[k] === true) {
        obj[k] = F2.Global._defaultAxis.grid;
      }
      res[k] = obj[k];
    }
  }
  return res;
}

function label(text, index, total) {
  const textCfg = {};
  if (index === 0) {
    textCfg.textAlign = 'left';
  }
  if (index === total - 1) {
    textCfg.textAlign = 'right';
  }
  return textCfg;
}

function tracert(type, appId, url) {
  my.call('remotelog', {
    type: 'monitor',
    bizType: 'FORTUNEAPP',
    logLevel: 2, // 1 - high, 2 - medium, 3 - low
    actionId: 'exposure',
    param1: url,
    param4: {
      chInfo: '',
      type,
      appId,
      url,
    },
    spmId: 'a945.b10625.c25441.d47746',
  });
}

export default {
  scale,
  axis,
  label,
  tracert,
};
