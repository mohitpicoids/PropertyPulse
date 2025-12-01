import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import ConnectDb from '@/config/database';
const page = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />

    </>
  )
}

export default page;