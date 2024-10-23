import {lazy} from "react";

const QNAIndexBase = lazy(() => import('../page/qna/QNAIndex.jsx'))
const QNA = lazy(() => import('../page/qna/QNAPage.jsx'))
const ReadPage = lazy(() => import('../page/qna/QNAReadPage.jsx'))

const QnaRouter = {
    path: "/qna",
    element: <QNAIndexBase/>,
    children: [
        {
            path: "",
            element: <QNA/>
        },
        {
            path:'read',
            element: <ReadPage/>
        }
    ]
}
export default QnaRouter;