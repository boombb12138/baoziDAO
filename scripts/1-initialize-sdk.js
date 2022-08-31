import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";

// 导入并配置.env文件 我们用它来安全地存储环境变量
import dotenv from "dotenv";
dotenv.config();

// 快速检查，来确定.env环境正在运行
if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
  console.log("Private key not found");
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
  console.log("ALCHEMY_API_URL not found");
}

if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
  console.log("wallet address not found");
}

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.PRIVATE_KEY,
    // PRC URL,我们将会从.env文件调用ALCHEMY_API_URL来创建以太坊节点
    ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
  ) //创建钱包
);

// 为了确保sdk正确初始化
(async () => {
  try {
    const address = await sdk.getSigner().getAddress();
    console.log("SDK initialized by address:", address);
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})();

export default sdk;
