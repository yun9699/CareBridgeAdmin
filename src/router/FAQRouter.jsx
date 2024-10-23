import {lazy} from "react";

const FAQIndexBase = lazy(() => import('../page/faq/FAQIndex.jsx'))
const FAQ = lazy(() => import('../page/faq/FAQPage.jsx'))

const FaqRouter = {
    path: "/faq",
    element: <FAQIndexBase/>,
    children: [
        {
            path: "",
            element: <FAQ/>
        },
    ]
}

export default FaqRouter;