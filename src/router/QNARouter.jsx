import {lazy} from "react";

const QNAIndexBase = lazy(() => import('../page/QNA/QNAIndex.jsx'))
const QNA = lazy(() => import('../page/QNA/QNAPage.jsx'))
const ReadPage = lazy(() => import('../page/QNA/QNAReadPage.jsx'))

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