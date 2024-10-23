import {lazy} from "react";

const FAQ = lazy(() => import('../page/faq/FAQPage.jsx'))
const FAQIndexBase = lazy(() => import('../page/faq/FAQIndexPage'))

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