"use client";
import Footer from "./components/footer";
import Header from "./components/Header/Header";
import UserBoxContext, {
    UserBoxContext_,
} from "./components/contexts/UserBoxContext";
import { useContext } from "react";
import Main from "./components/Main/Main";

export default function Home() {
    // const showUserBoxContent = useContext(UserBoxContext_);
    return (
        <UserBoxContext>
            {/* <div onClick={() => showUserBoxContent.setShowUserBox(false)}> */}
                <Header />
                <Main />
                {/* <Footer /> */}
            {/* </div> */}
        </UserBoxContext>
    );
}
