import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 导入 thirdweb provider 和 Rinkeby ChainId
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// 指定我们构建的 dApp运行在哪条链上.
const activeChainId = ChainId.Mumbai;

// 用thirdweb provider将App包裹起来
// 目的：1.保存用户的钱包数据（如果它们之前登录过）
//       2.将数据传递给App
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
