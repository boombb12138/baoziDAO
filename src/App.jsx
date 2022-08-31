import { useAddress, useMetamask } from "@thirdweb-dev/react";

const App = () => {
  // 使用thirdweb提供的hooks
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("address:", address);

  // 这是用户没有连接他们的钱包时的情况，让他们连接钱包
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to baoziDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  // 用户已经连接钱包
  return (
    <div className="landing">
      <h1>wallet connected,now what!</h1>
    </div>
  );
};

export default App;
