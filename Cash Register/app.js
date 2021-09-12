function checkCashRegister(price, cash, cid) {
    //cid stands for cash in drawer and is an array
    // figure out change amount due:
    let change = cash - price;
    let totalCid = 0;
    let status = { status: "", change: [] };
  
    let cidObj = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    // figure out total of cid
    for (let i = 0; i < cid.length; i++) {
      totalCid += cid[i][1];
    }
  
    totalCid = Math.round(totalCid * 100) / 100;
    if (change === totalCid) {
      status.status = "CLOSED";
      status.change = cid;
      return status;
    } else if (totalCid < change) {
      status.status = "INSUFFICIENT_FUNDS";
      status.change = [];
    } else {
      for (let i = cid.length - 1; i >= 0; i--) {
        if (change >= cidObj[cid[i][0]] && change >= cid[i][1]) {
          status.change.push(cid[i]);
          change -= cid[i][1];
          change = Math.round(change * 100) / 100;
        } else if (change >= cidObj[cid[i][0]] && change < cid[i][1]) {
          let amount = Math.floor(change / cidObj[cid[i][0]]) * cidObj[cid[i][0]];
  
          status.change.push([cid[i][0], amount]);
          change -= amount;
          change = Math.round(change * 100) / 100;
        }
      }
    }
  
    if (change >= 0.01) {
      status.status = "INSUFFICIENT_FUNDS";
      status.change = [];
    } else {
      status.status = "OPEN";
    }
  
    return status;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]);
  