import {
  readContract,
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";
import { CICC_CONTRACT,PAYMENT_TOKEN } from "@/constants/constants";

import CICCABI from "../constants/ABI.json";
import { config } from "@/app/providers";
// import { BigNumber } from "bignumber.js";
// import PairABI from "../constants/pairABI.json";
// import FactoryABI from "../constants/factoryABI.json";
// import RouterABI from "../constants/routerABI.json";
import { ethers } from "ethers";
export const convertToEther = (amount: unknown) => {
  try {
    const balanceInWeiBigInt: any = amount;
    const balanceInWeiBigNumber = ethers.BigNumber.from(
      balanceInWeiBigInt.toString()
    );

    const balanceInEther = ethers.utils.formatEther(balanceInWeiBigNumber);

    return balanceInEther;
  } catch (e) {
    console.log("error is---->", e);
    return 0;
  }
};

export const convertToWei = (amount: any) => {
  try {
    const balanceInWeiBigInt = amount;
    const balanceInEther = ethers.utils.parseEther(balanceInWeiBigInt);

    return balanceInEther;
  } catch (e) {
    console.log("error is---->", e);
  }
};

export const buy = async (account: any, amount: any) => {
  console.log(account, amount);
  try {
    if (parseInt(amount) == 0) {
     alert("Amount should be greater then zero");
      return;
    }
    console.log("here in buy token ", account, amount);
    let allowance: any = await checkAllowance(
      account,
      CICC_CONTRACT,
      PAYMENT_TOKEN,
      CICCABI
    );

    console.log("allowance is---->", parseInt(allowance), amount);

    if (parseInt(allowance) < parseInt(amount)) {
      let approve = await approveToken(
        account,
        CICC_CONTRACT,
        PAYMENT_TOKEN,
        CICCABI
      );
      console.log("here approve result----->",approve)
      if (approve == false) {
        alert("approval fails");
        return;
      }
    }

    let value = convertToWei(amount.toString());

    console.log("here 405 ---->", value?.toString());
    const data:any = await writeContract(config,{
      abi: CICCABI,
      address: CICC_CONTRACT,
      functionName: "buy",
      args: [value?.toString()],
    });

    console.log("data of buy pool is ------>", data);
    const res: any = await waitForTransactionReceipt(config,{
      hash: data,
    });

    // res = await res.wait();
    console.log("res", res);
    if (res.status == "success") {
      alert("token buy Successfully");
      return res.status;
    } else {
      return -1;
    }
  } catch (e: any) {
    console.log("error in buy token is pool is----->", e);
    const detailsIndex = e?.message.indexOf("Details:");
    const detailsPart = e?.message.substring(detailsIndex);
alert(detailsPart)
    // toast.error(detailsPart);
    return -1;
  }
};

export const approveToken = async (
  account: any,
  spenderContract: any,
  contract: any,
  abi: any
) => {
  let amount: any = "1000000000000000000000";

  
  try {
    const data:any = await writeContract(config,{
      address: contract,
      abi: abi,
      functionName: "approve",
      args: [spenderContract, amount],
    });
    console.log("data is----->",data)
 
    const res: any = await waitForTransactionReceipt(config,{
      hash: data,
    });
    console.log("after transactin finished", res);
    return true;
  } catch (e: any) {
    console.log("here error---->",e)
    // alert(e.message)
    // toast.error(e.message);
    return false;
  }
};

export const checkAllowance = async (
  account: any,
  spenderContract: any,
  contract: any,
  abi: any
) => {
  try {
    const data = await readContract(config,{
      address: contract,
      abi: abi,
      functionName: "allowance",
      args: [account, spenderContract],
    });

    return convertToEther(data);
  } catch (e) {
    console.log("error is----->", e);
  }
};


