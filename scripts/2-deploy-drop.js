// 创建ERC-1155集合
// 适用于：多个人成为同一NFT的持有者
import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // 集合的名称
      name: "baoziDAO Membership",
      // 给集合做个介绍
      description: "A DAO for homeless people",
      // 在NFT上会展示的图片
      image: readFileSync("scripts/assets/baozi.jpg"),
      // 要在合同中传递那些通过售卖NFT接收到收益的人的地址
      // 我们计划不向空投的人收费，所以要跳过以0x00开头的地址
      primary_sale_recipient: AddressZero,
    });

    // 这个初始化会返回合同的地址
    // 我们用这个来初始化sdk上的合约
    const editionDrop = sdk.getEditionDrop(editionDropAddress);

    // 得到合约的元数据
    const metadata = await editionDrop.metadata.get();

    console.log("成功部署了editionDrop合约，地址是：", editionDropAddress);
    console.log("editionDrop元数据：", metadata);
  } catch (error) {
    console.log("部署editionDrop合约失败", error);
  }
})();
