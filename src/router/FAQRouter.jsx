import {lazy} from "react";

const FAQ = lazy(() => import('../page/FAQPage'))

const FaqRouter = {
    path: "/faq",
    element: <FAQ />
}

export default FaqRouter;