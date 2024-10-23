import {lazy} from "react";

const FAQ = lazy(() => import('../page/FAQ/FAQPage.jsx'))
const FAQIndexBase = lazy(() => import('../page/FAQ/FAQIndexPage'))

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