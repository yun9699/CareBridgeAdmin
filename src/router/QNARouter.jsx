import {lazy} from "react";

const QNA = lazy(() => import('../page/QNAPage'))

const QnaRouter = {
    path: "/qna",
    element: <QNA/>
}
export default QnaRouter;