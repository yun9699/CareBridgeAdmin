import {lazy, Suspense} from "react";
import LoadingPage from "@/page/LoadingPage.jsx";

const QNAIndexBase = lazy(() => import('../page/qna/QNAIndex.jsx'))
const QNA = lazy(() => import('../page/qna/QNAPage.jsx'))
const ReadPage = lazy(() => import('../page/qna/QNAReadPage.jsx'))

const Loading = <LoadingPage/>

const QnaRouter = {
    path: "/qna",
    element: <Suspense fallback={Loading}><QNAIndexBase/></Suspense>,
    children: [
        {
            path: "list",
            element: <Suspense fallback={Loading}><QNA/></Suspense>
        },
        {
            path:'read/:qno',
            element: <Suspense fallback={Loading}><ReadPage/></Suspense>
        },

    ]
}
export default QnaRouter;