'use client'
import useAuthCheck from "@/hooks/useAuthCheck";

const { default: Footer } = require("@/components/shared/Footer");
const { default: Navigation } = require("@/components/shared/Navigation");

function AuthChecker ({ children }){
    const authCheck = useAuthCheck();

    return !authCheck? (
        <div className="h-screen flex justify-center items-center">
            <p>Loading..</p>
        </div>
    )
    : (
        <>
            <Navigation/>
                {children}
            <Footer/>
        </>
    )
}
export default AuthChecker