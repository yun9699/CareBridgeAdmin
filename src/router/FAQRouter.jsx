import { lazy, Suspense } from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

// 컴포넌트의 이름을 정확히 지정하여 import
const FAQIndexBase = lazy(() => import('../page/faq/FAQIndex.jsx'));
const FAQPage = lazy(() => import('../page/faq/FAQPage.jsx'));

const Loading = <LoadingPage />;

const FAQRouter = {
    path: "/faq",
    children: [
        {
            path: "",
            element: <Suspense fallback={Loading}><FAQIndexBase /></Suspense>,
        },
    ],
};

export default FAQRouter;
