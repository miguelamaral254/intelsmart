import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="flex-1">
      <NavBar />
      <div className="">
        <Banner />
      </div>
    </div>
  );
}
