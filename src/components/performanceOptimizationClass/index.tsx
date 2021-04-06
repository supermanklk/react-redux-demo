import React, {Component, PureComponent, Fragment} from 'react';
import {Button} from "antd";
// rcfc 快捷键



// 如果增加了 PureComponent 会自动检测是否需要渲染
// class DemoA extends Component {
// PureComponent，自动比较组件数据是否改变，注意只能比较一层
class DemoA extends PureComponent {
    render() {
        console.log("组件渲染");
        return (
            <div>DemoA</div>
        )
    }
}


class DemoB extends PureComponent {
    render() {
        console.log("组件渲染");
        return (
            <div>DemoB</div>
        )
    }
}

// a定义的是number类型
class PerformanceOptimizationClass extends Component<{}, {a: number}> {
    constructor(props: any) {
        super(props);
        this.state = {
            a: 100
        };
    }

    /**
     * 如果触发了add setState那么会重复渲染组件 DemoA + DemoB
     * 我们如何避免重复渲染状态未变的组件
     * 在class中一种方式我们使用 shouldComponentUpdate
     * 另外我们还可以使用 pureComponent
     */
    add() {
        const { a } = this.state;
        this.setState({
            a: a + 1
        })
    }


    render() {
        return (
            // Fragment 比 <></> 的优点就是就是能够设置属性
            <Fragment>
                    PerformanceOptimizationClass {this.state.a}
                    <Button onClick={() => {this.add()}}>点击button</Button>
                    <DemoA/>
                    <DemoB/>
            </Fragment>

        );
    }
}


export default PerformanceOptimizationClass;
