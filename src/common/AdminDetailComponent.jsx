

function AdminDetailComponent() {
    const user = {
        name: '현미',
        email: 'tierrasea@naver.com',
        group: ['치매초기증상', 'vip회원'],
        joinDate: '2017-12-13 14:27:30',
        lastLogin: '2018/01/19 (6회)',
        lastLoginIP: '192.168.0.1',
        posts: 0,
        comments: 0,
        purchases: 0,
        inquiries: 0,
        logs: [
            { date: '2018. 01. 29 10:08', description: '약 복용 완료, 건강상태 양호', amount: 100 },
            { date: '2018. 01. 19 09:45', description: '', amount: 50 },
            // 포인트 내역 더 추가 가능
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* 상단 헤더 */}
            <div className="mb-4">
                <h1 className="text-2xl font-bold">목록 &gt; 상세 페이지</h1>
            </div>

            {/* 회원 정보 및 활동 정보 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex space-x-8">
                {/* 왼쪽: 회원 정보 */}
                <div className="w-1/2">
                    <div className="flex items-center space-x-4">
                        <img
                            className="w-24 h-24 rounded-full border"
                            src="https://via.placeholder.com/150"
                            alt="프로필 이미지"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg font-medium mb-2">회원 정보</h3>
                        <div className="space-y-2">
                            <div>
                                <label className="font-semibold">그룹</label>
                                <div className="flex space-x-2 mt-1">
                                    <input type="checkbox" checked readOnly className="mr-2" /> 허리디스크
                                    <input type="checkbox" checked readOnly className="mr-2" /> 치매초기증상
                                </div>
                            </div>
                            <div>
                                <label className="font-semibold">닉네임</label>
                                <div>{user.name}</div>
                            </div>
                            <div>
                                <label className="font-semibold">계정</label>
                                <div>{user.email}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 오른쪽: 활동 정보 */}
                <div className="w-1/2">
                    <h3 className="text-lg font-medium mb-2">활동 정보</h3>
                    <div className="space-y-2">
                        <div>
                            <label className="font-semibold">가입일</label>
                            <div>{user.joinDate}</div>
                        </div>
                        <div>
                            <label className="font-semibold">로그인</label>
                            <div>{user.lastLogin}</div>
                        </div>
                        <div>
                            <label className="font-semibold">최종 로그인 IP</label>
                            <div>{user.lastLoginIP}</div>
                        </div>
                        <div>
                            <label className="font-semibold">작성</label>
                            <div>게시물 {user.posts}개 / 댓글 {user.comments}개 / 구매 {user.purchases}개 / 문의 {user.inquiries}개</div>
                        </div>
                    </div>

                    {/* 포인트 정보 */}
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-2">환자 로그</h3>
                        <div className="space-y-2">
                            {user.logs.map((point, index) => (
                                <div key={index} className="flex justify-between text-gray-700">
                                    <div>{point.date}</div>
                                    <div>{point.description}</div>
                                    <div>{point.amount > 0 }{point.amount.toLocaleString()}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 하단 버튼 */}
            <div className="mt-6 flex justify-end space-x-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">삭제</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">저장</button>
            </div>
        </div>
    );
}

export default AdminDetailComponent;
