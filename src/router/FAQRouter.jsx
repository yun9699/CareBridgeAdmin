import { lazy, Suspense } from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const FAQIndexBase = lazy(() => import('../page/faq/FAQIndex.jsx'));
const FAQ = lazy(() => import('../page/faq/FAQPage.jsx'));
const ReadPage = lazy(() => import('../page/faq/FAQReadPage.jsx'));

const Loading = <LoadingPage/>

const FaqRouter = {
    path: "/faq",
    element: <Suspense fallback={Loading}><FAQIndexBase/></Suspense>,
    children: [
        {
            path: "list",
            element: <Suspense fallback={Loading}><FAQ/></Suspense>
        },
        {
            path:'read/:fno',
            element: <Suspense fallback={Loading}><ReadPage/></Suspense>
        }
    ]
}

export default FaqRouter;