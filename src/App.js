import BillPayments from "./componets/BillPayments/BillPayments";
import CrossBorderPayments from "./componets/CrossBorderPayments/CrossBorderPayments";
import CurrencySwap from "./componets/CurrencySwap/CurrencySwap";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import HeroSection from "./componets/HeroSection/HeroSection";
import Info from "./componets/Info/Info";
import OverTheCounter from "./componets/OverTheCounter/OverTheCounter";
import PaymentGateWay from "./componets/PaymentGateWay/PaymentGateWay";
import SecureVault from "./componets/SecureVault/SecureVault";
import SportTrading from "./componets/SportTrading/SportTrading";

function App() {
  return (
    <>
      <Header />
      <HeroSection />

      <BillPayments />
      <CrossBorderPayments />
      <PaymentGateWay />
      <CurrencySwap />
      <SecureVault />
      <OverTheCounter />
      <SportTrading />
      <Footer />
    </>
  );
}

export default App;
