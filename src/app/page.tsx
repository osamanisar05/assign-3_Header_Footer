import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import Image from "next/image";

export default function Home() {
    return (
        <div className="homecontainer">
            <div className="childcontainer">
                Hey, <br /> My Name is <span className="BlueColour">Osama</span> <br />
                I am a developer
                <br /> This is my short introduction with profile picture <br />
            </div>
            <div className="childcontainer">
                <Image className="profilePicture" src="/image.png" alt="profilePicture" width={200} height={200} />
            </div>
            <Header />
          
        </div>
    );
}
