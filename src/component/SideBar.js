import React from 'react'

class SideBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <nav style={headerStyle}>NAVER 스마트 주소록</nav>
                <div style={sidebarStyle}>
                    <div style={divInSidebarStyle}>
                        <input type="button" value="연락처 추가" />
                        <input type="button" value="그룹 추가" />
                        <input type="button" value="자주 사용하는 연락처" />
                    </div>
                    <div style={divInSidebarStyle}>
                        <a href="#">전체 연락처</a>
                        <a href="#">새 그룹</a>
                        <input type="button" value="그룹 수정" />
                        <input type="button" value="그룹 삭제" />
                    </div>
                    <div style={divInSidebarStyle}>
                        <a href="#">중복연락처 찾기</a>
                        <a href="#">유사연락처 찾기</a>
                    </div>
                    <div style={divInSidebarStyle}>

                    </div>
                </div>
            </div>
        )
    }
}

// TODO: border 겹치는 것 조정

var headerStyle = {
    width: '100%',
    border: '1px solid black',
}

var sidebarStyle = {
    width: '400px',
    border: '1px solid black',
    display: 'inline-block',
}

var divInSidebarStyle = {
    border: '1px solid black',
}

export default SideBar;