import { TokenBalance } from "../pages/address-balance";
import BigNumber from "bignumber.js";
import { Transaction } from "../pages/transactions";

/**
 * Return the total value from token list
 * @param {*} escrowFactories Array of escrow Factories
 * @returns the total count of factory
 */
export const countTotalInOut = (tx: Transaction[], address: string) => {
  if (!tx) {
    return ["0", "0"];
  }

  const txIn = tx.filter(tx => !getIsOut(tx, address));
  const txOut = tx.filter(tx => getIsOut(tx, address));

  return [
    txIn
      .reduce(
        (previousValue, currentValue) =>
          previousValue + parseFloat(formatBalance(currentValue.value || "0")),
        0
      )
      .toFixed(3),
    txOut
      .reduce(
        (previousValue, currentValue) =>
          previousValue + parseFloat(formatBalance(currentValue.value || "0")),
        0
      )
      .toFixed(3),
  ];
};

export const getIsOut = (tx: Transaction, address: string) => {
  const params = tx.log_events[0]?.decoded?.params?.find(
    p => (p.name = "sender")
  );

  if (
    params?.value.toLocaleLowerCase() === address.toLocaleLowerCase() ||
    address.toLocaleLowerCase() === tx.from_address.toLocaleLowerCase() ||
    params?.value.toLocaleLowerCase() === tx.from_address.toLocaleLowerCase()
  ) {
    return true;
  }

  return false;
};

export const getTo = ( tx: Transaction ) =>
{
  
  try {
    if (tx.log_events[0] && tx.log_events[0].sender_contract_ticker_symbol) {
    return `${tx.log_events[0].sender_contract_ticker_symbol}:${tx.log_events[0].sender_name}`;
  } else {
    return tx.to_address_label || `${tx.to_address}`;
  }
  } catch (error) {
    console.log(error)
  }
  
};

export const getLogo = ( tx: Transaction ) =>
{
  try {
   if (tx.log_events[0] && tx.log_events[0].sender_logo_url) {
    return tx?.log_events[0] && tx?.log_events[0]?.sender_logo_url;
  }
  return undefined;
} catch (error) {
      console.log(error)

}

 
};

export const getEventType = ( tx: Transaction ) =>
{
  try {
    if (tx.log_events[0]?.decoded?.name) {
    return tx.log_events[0]?.decoded?.name;
  }
  if (tx.to_address && tx.from_address && tx.value) {
    return "Transfer";
  }
  return "";
  } catch (error) {
        console.log(error)

  }
  
};

export const calculateHoldings = ( items: TokenBalance[] ) =>
{
  
  try {
     const holdings = [];
  const excluded = [];
  const total = items.length > 0 ? items[0].holdings.length || 0 : 0;
  for (let index = 0; index < total; index++) {
    let close = 0;
    items.forEach(item => {
      //We exclude the token (SCAM)
      if (!excluded.includes(item.address)) {
        if (item?.holdings[index]?.close?.quote === null) {
          console.log("by");
          excluded.push(item.address);
        } else {
          close = close + item?.holdings[index]?.close?.quote || 0;
        }
      }
    });
    const date = items[0].holdings[index].timestamp;
    holdings.push({ close, date });
  }

  return holdings;
  } catch (error) {
        console.log(error)

  }
 
};

export const calculateActualValue = (
  
  holdings: {
    close: number;
    timestamp: string;
  }[]
) => {
  if (holdings.length < 1) {
    return 0;
  }

  return holdings[0]?.close || 0;
};

// export const calculateDiffValue = (
  
//   holdings: {
//     close: number;
//     timestamp: string;
//   }[]
// ) => {
//   if (holdings.length < 1) {
//     return 0;
//   }

// };

/**
 * Return the total value from token list
 * @param {*} escrowFactories Array of escrow Factories
 * @returns the total count of factory
 */
export const countTotalBalance = (tokens: TokenBalance[]) => {
  if (!tokens) {
    return 0;
  }

  return tokens.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quote,
    0
  );
};

/**
 * Return the total value from token list
 * @param {*} escrowFactories Array of escrow Factories
 * @returns the total count of factory
 */
export const countTotalFees = (tx: Transaction[]) => {
  if (!tx) {
    return 0;
  }

  return tx
    .reduce(
      (previousValue, currentValue) =>
        previousValue +
        parseFloat(formatBalance(currentValue.fees_paid || "0")),
      0
    )
    .toFixed(3);
};

export const toThousands = (
  num: string,
  delimiter = ",",
  prevDelimiter = ","
) => {
  if ((typeof num !== "number" || isNaN(num)) && typeof num !== "string")
    return "";
  let str = num + "";
  return str
    .replace(new RegExp(prevDelimiter, "igm"), "")
    .split(".")
    .reduce((acc, cur, index) => {
      if (index) {
        return `${acc}.${cur}`;
      } else {
        return cur.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, `$1${delimiter}`);
      }
    }, "");
};

export const formatValue = (balance: any, actualPrice: any) => {
  const bal = new BigNumber(balance);
  const ap = parseFloat(actualPrice);
  const result = ap * bal.toNumber();
  return result.toFixed(2);
};

export const formatBalance = (
  balance: any,
  decimals = 18,
  isShowFull = false,
  opt = {},
  ltValue?: any
) => {
  try {
    const num = new BigNumber(balance).div(new BigNumber(10).pow(decimals));
    if (num.eq(0)) {
      return num.toFixed();
    }
    if (isShowFull) {
      return toThousands(num.toFixed());
    }
    if (ltValue && num.lt(ltValue)) {
      return `<${ltValue}`;
    }
    return formatNumber(num.toString(), opt);
  } catch {
    return "";
  }
};

/**
 * 格式化字符串，向下取整
 * @param {number|string} num 数字或字符串，应尽量使用字符串格式，数字格式如果长度超过 Number.MAX_SAFE_INTEGER 或 Number.MIN_SAFE_INTEGER 可能会有精度损失
 * @param {object} opt 配置参数
 * @returns {string} 格式化后字符串格式数字
 * @todo: 支持四舍五入，向上取整
 * @todo: 支持整数位小数设置精度
 * @todo: 支持负数格式化
 */
export const formatNumber = (num: any, opt?: any) => {
  // 无法通过 bignumber.js 格式化的不处理
  let bNum = new BigNumber(num).toFixed();
  if (bNum === "NaN") {
    return "";
  }
  const option = {
    precision: 3, // 保留小数精度数（注意整数位小数的精度固定为 3，原因是受千分符影响）
    keepDecimal: true, // 是否保留小数位（注意如果整数部分带有小数位，则不保留实际小数位，原因是会显示两个小数点，会误解）
    keepZero: false, // 是否保留小数位的 0（注意此配置优先级高于 precision，会清除 precision 添加的 0）
    delimiter: ",", // 自定义分隔符
    withUnit: true, // 是否显示单位
    unit: "", // 指定单位
    ...opt,
  };
  // 0. 定义返回值
  let int = "";
  let decimal = "";
  let result = "";
  /**
   * 1. 定义单位
   * K - kilo, 10³
   * M - mega, 10⁶
   * G - giga, 10⁹
   * T - tera, 10¹²
   * P - peta, 10¹⁵
   * E - exa, 10¹⁸
   * Z - zetta, 10²¹
   * Y - yotta, 10²⁴
   */
  const UNITS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
  // 2. 拆分出整数和小数，小数默认值为 0
  const [intStr, decimalStr = "0"] = bNum.split(".");
  // 3. 只能处理 27 位数的单位，大于 27 位的字符串从头部截断保留
  // 3.1 获取大于小数点前 27 位的数字 intStrFront
  let intStrFront = intStr.slice(-Infinity, -27);
  // 3.2 获取小数点前 27 位数字 intStrEnd
  let intStrEnd = intStr.slice(-27);
  // 4. intStrEnd 转千分符形式
  const intStrEndAfterToThousands = toThousands(intStrEnd, option.delimiter);
  // 5. intStrEnd 添加单位，此处不对数字有效性做验证，即可能值为 100.000，100.000k 或 000.000Y
  let intStrEndWithUnit = "";

  if (option.withUnit === false) {
    intStrEndWithUnit = intStrEndAfterToThousands;
  } else {
    let unitIndex = 1;
    if (option.unit !== "" && UNITS.includes(option.unit)) {
      unitIndex =
        intStrEndAfterToThousands.split(option.delimiter).length -
        UNITS.findIndex(u => u === option.unit);
    }
    if (unitIndex > 0) {
      intStrEndWithUnit = intStrEndAfterToThousands
        .split(option.delimiter)
        .reduce((prev, curr, index, arr) => {
          const len = arr.length;
          // 无单位整数，为了后面方便处理统一格式
          if (len === 1) {
            return `${curr}.000`;
          }
          if (index === 0) {
            return curr;
          } else if (index === unitIndex) {
            return `${prev}.${curr}${UNITS[len - index]}`;
          } else if (index < unitIndex) {
            return `${prev},${curr}`;
          } else {
            return prev;
          }
        }, "");
    } else {
      intStrEndWithUnit = intStrEndAfterToThousands;
    }
  }
  // 6. 格式化整数
  if (intStrFront) {
    // 如果数字长度超过 27 位，则前面的数字用千分符分割
    int = `${toThousands(intStrFront, option.delimiter)}${
      option.delimiter
    }${intStrEndWithUnit}`;
  } else {
    int = intStrEndWithUnit;
  }
  // 7. 格式化小数
  decimal = new BigNumber(`0.${decimalStr}`).toPrecision(option.precision, 1);
  // 8. 拼接整数，小数和单位
  let unit = int.slice(-1);
  let intWithoutUnit = int;
  if (int && UNITS.includes(unit)) {
    // 8.1 整数位包含单位，则不显示实际小数部分
    if (option.keepDecimal) {
      // 保留整数位整数 + 整数位小数
      intWithoutUnit = int.slice(-Infinity, -1);
    } else {
      // 仅保留整数位整数
      intWithoutUnit = intWithoutUnit.split(".")[0];
    }
    result = `${intWithoutUnit}${unit}`;
  } else {
    unit = "";
    // 8.2 整数位为 0 或无单位整数，拼接小数位
    if (option.keepDecimal) {
      result = new BigNumber(int.toString().replace(/,/g, ""))
        .plus(new BigNumber(decimal))
        .toFixed(option.precision, 1);
    } else {
      result = int.split(".")[0];
    }
    intWithoutUnit = result;
  }
  // 9. 处理小数部分的 0
  if (!option.keepZero) {
    result = `${new BigNumber(
      replaceAll(intWithoutUnit, option.delimiter, "")
    ).toFormat()}${unit}`;
  }
  // 10. 格式化千分符
  result = toThousands(result);
  return result;
};

// alternative of String.prototype.replaceAll
export const replaceAll = (str: string, find: string, replace: any) => {
  return str.replace(
    new RegExp(find.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), "g"),
    replace
  );
};

export const getMappingCurrency = (chainId: string) => {
  switch (chainId) {
    case "1":
      return "ETH";
    case "56":
      return "BNB";
    case "137":
      return "MATIC";
    case "43114":
      return "AVAX";
    case "80001":
      return "Matic";
    case "250":
      return "FTM";
    case "42161":
      return "ETH";
    default:
      break;
  }
};

export const getMappingChains = async( chainId: any ) =>
{
  console.log("line 407",chainId)
  switch ( chainId )
  {
    case 1:
      return "mainnet";
    case 56:
      return "bsc";
    case 137:
      return "polygon";
    case 43114:
      return "avalanche";
    case 10:
      return "optimism";
    case 250:
      return "fantom";
    case 100:
      return "gnosis";
    case 80001:
      return "mumbai";
    case 42161:
      return "arbitrum";
    default:
      break;
  }
}
