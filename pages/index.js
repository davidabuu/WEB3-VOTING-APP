
import Header from "../src/components/Header";
import IntroDiv from "../src/components/IntroDiv";
import UserWebLayout from "../src/components/UserWebLayout";

export default function Home() {
  return (
    <UserWebLayout webtitle="Home Page">
      <div style={{ backgroundColor: "#000" }}>
        <Header />
        <IntroDiv />
      </div>
    </UserWebLayout>
  );
}
