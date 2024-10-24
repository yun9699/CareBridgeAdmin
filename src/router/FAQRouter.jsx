import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const FAQIndexBase = lazy(() => import('../page/faq/FAQIndex.jsx'))
const FAQ = lazy(() => import('../page/faq/FAQPage.jsx'))


const Loading = <LoadingPage/>

const FaqRouter = {
    path: "/faq",
    element: <Suspense fallback={Loading}><FAQIndexBase/></Suspense>,
    children: [
        {
            path: "",
            element: <Suspense fallback={Loading}><FAQ/></Suspense>
        },
    ]
}

export default FaqRouter;