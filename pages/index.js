import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import Section from "../components/Section";
import SmallCard from "../components/SmallCard";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { exploreData,liveAData } = props;
  console.log(liveAData);
  return (
    <div className="flex flex-col item-center py-1 min-h-screen">
      {/* head section for titles,links and meta content */}
      <Head>
        <title>Home:AirBnB-Clone</title>
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* main content */}
      <main className="w-[90%] self-center px-8 sm:px-16">
        <Section sectionClassNames="" headingText="Explore NearBy">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-2">
          {exploreData?.map((place,index)=><SmallCard key={index} img={place.img} location={place.location} distance={place.distance}/>)}
          </div>
        </Section>
        <Section sectionClassNames="" headingText="Live Anywhere">
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide p-3">
              {liveAData?.map((place,index)=><MediumCard key={index} img={place.img} title={place.title} />)}
            </div>
        </Section>
        <Section>
          <LargeCard title={'Explore More'} img={'/cover2.jpg'} description={'Lorem ipsum ipsum'} buttonText={'Explore'} />
        </Section>
      </main>
      {/* seperator */}
      <div className="w-full h-1 shadow-sm text-gray-500 mt-5"></div>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => {
      //console.log("res", res);
      return res.json();
    }
  );

  
  const liveAData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => {
      //console.log("res", res);
      return res.json();
    }
  );

  return {
    props: { exploreData,liveAData },
  };
}
