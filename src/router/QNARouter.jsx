import {lazy} from "react";

const QNAIndexBase = lazy(() => import('../page/QNAIndex'))
const QNA = lazy(() => import('../page/QNAPage'))
const ReadPage = lazy(() => import('../page/QNAReadPage'))

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