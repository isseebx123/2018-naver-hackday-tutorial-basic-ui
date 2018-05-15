import React from 'react'

class ContactTable extends React.Component{
    constructor(props) {
        super(props);
    }

    _makeContactTable() {
        return (
            <tr></tr>
        );
    }

    render(){
        return (
            <table>
                <tr>
                    <th></th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>이메일</th>
                    <th>소속부서</th>
                    <th>직책</th>
                    <th>주소</th>
                </tr>
                {this._makeContactTable()}
            </table>
        )
    }
}

export default ContactTable;