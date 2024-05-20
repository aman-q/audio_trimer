import Image from "next/image";
import Herosection from "./_components/Herosection";
import Converter from "./_components/Converter";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <Herosection/>

      {/* Converter Section */}
      <Converter />

    </div>
  );
}
