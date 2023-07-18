import { StyledChainBoxes } from "./styled";
import ChainBox from "../ChainBox";
import avaxLogo from "../../assets/img/avax-logo.png";
import huobiLogo from "../../assets/img/heco-logo.png";
import binanceLogo from "../../assets/img/binance-logo.png";
import polygonLogo from "../../assets/img/polygon-matic-logo.png";

const ChainBoxes = () => {
  const chains = [
    {
      id: 43114,
      logo: avaxLogo,
      title: "AVALANCHE",
      subTitle: "AVAX",
      farmingLink: "https://avax.complus.exchange/",
      chartsLink: "https://avagraph.complus.exchange/",
      exchangeLink: "https://avadex.complus.exchange/",
    },
    {
      id: 128,
      logo: huobiLogo,
      title: "HUOBI",
      subTitle: "ECO CHAIN",
      farmingLink: "https://heco.complus.exchange/",
      chartsLink: "https://hecograph.complus.exchange/",
      exchangeLink: "https://hecodex.complus.exchange/",
    },
    {
      id: 56,
      logo: binanceLogo,
      title: "BINANCE",
      subTitle: "SMART CHAIN",
      farmingLink: "https://bsc.complus.exchange/",
      chartsLink: "https://bscgraph.complus.exchange/",
      exchangeLink: "https://bscdex.complus.exchange/",
    },
    {
      id: 137,
      logo: polygonLogo,
      title: "POLYGON",
      subTitle: "MATIC",
      farmingLink: "https://matic.complus.exchange/",
      chartsLink: "https://maticgraph.complus.exchange/",
      exchangeLink: "https://maticdex.complus.exchange/",
    },
  ];
  return (
    <StyledChainBoxes>
      <ChainBox chains={chains} />
    </StyledChainBoxes>
  );
};
export default ChainBoxes;
