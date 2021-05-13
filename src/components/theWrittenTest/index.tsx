import React, {Component} from 'react';

class Demo extends Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    select(val: string) {
        console.log('you have select' + val);
    }

    find() {
        // 请实现find函数，使下列的代码调用正确。
        // 约定：
        // title数据类型为String
        // userId为主键，数据类型为Number
        let data = [
            {userId: 8, title: 'title1'},
            {userId: 11, title: 'other'},
            {userId: 15, title: null},
            {userId: 19, title: 'title2'}
        ];
        return {
            where : () => {
                console.log('where');
            },
            orderBy : () => {
                console.log('orderBy');
            }
        }
        //
        // var find = function(origin) {
        //     //your code are here...
        // }
        //
        // //查找data中，符合条件的数据，并进行排序
        // var result = find(data).where({
        //     "title": /\d$/
        // }).orderBy('userId', 'desc');
        //
        // console.log(result);
    }

    render() {
        return (
        <ul>
            {
                ['a','b','c'].map((item, index) => {
                return <li onClick={ () => {this.select(item)}}>{item}</li>
                })
            }
        </ul>
        );
    }
}


export default Demo;
