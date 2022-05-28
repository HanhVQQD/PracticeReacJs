import React, { Component } from 'react';

class DanhSachDoUong extends Component {
    render() {
        return (
            <div>
                <table className="tbl">
                        <tbody>
                            <td><h4 className='h4Menu'>Menu</h4></td>
                            <tr id="menu_tr">
                                <td id="menu">Milk Coffee      .................. 12$</td>
                            </tr>
                            <tr id="menu_tr">
                                <td id="menu">Ice Coffee       .................. 10$</td>
                            </tr>
                            <tr id="menu_tr">
                                <td id="menu">Strawberry Sting .................. 8$</td>
                            </tr>
                            <tr id="menu_tr">
                                <td id="menu">Ice Tea          .................. 2$</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default DanhSachDoUong;