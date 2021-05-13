import React from 'react';
import './App.css';
// import TodoList from "./components/todolist";
// import ComRight from "./components/comRight";
// import LearnEffect from '../src/components/learnEffect/index';
// import ClearSetInterval from '../src/components/clearSetInterval/index';
// import UseEffectNot2Nest from '../src/components/useEffectNot2Nest/index';
// import UseEffectBaseUsage from '../src/components/useEffectBaseUsage/index';
// import UseRefCom from '../src/components/useRefCom/index';
// import LearnContext from './components/learnContext/index';
// import LearnContextPro from '../src/components/learnContextPro/index';
// import LearnReducer from '../src/components/learnReducer/index';
// import CustomHook from '../src/components/customHook/index';

// import PerformanceOptimizationClass from './components/performanceOptimizationClass/index';
// import PerformanceOptimizationHooks from './components/performanceOptimizationHooks/index';
// import LearnHookRouter from '../src/components/learnHookRouter';


//
// import SetIntervalQuestion from '../src/components/setIntervalQuestion/index';
// import PerformanceOptimizationHooks from "./components/performanceOptimizationHooks/index";
//
// import LearnUseCallback from './components/learnUseCallback/index';
// import LearnUseMemo  from './components/learnUseMemo/index';
//
// import SetStateAndUseStateReceiveFc from './components/setStateAndUseStateReceiveFc/index';
//
// import TheWrittenTest from './components/theWrittenTest/index';


import ShengBeiLayout from './cssComponents/shengBeiLayout/index';
import ShuangFeiYiLayout from './cssComponents/shuangFeiYiLayout/index';



function App() {
  return (
    <div className="App">
        {/* redux 的学习*/}
        {/*<TodoList></TodoList>*/}
        {/*<ComRight />*/}

        {/* useEffect的学习 bailing out  */}
        {/*<LearnEffect />*/}

        {/* 学习简单的了解一下组件的卸载与内存泄漏 */}
        {/*<ClearSetInterval/>*/}

        {/* useEffect必须写在函数的第一层 也不能嵌套*/}
        {/*Rendered more hooks than during the previous render.*/}
        {/*<UseEffectNot2Nest/>*/}

        {/*useEffect的基本用法*/}
        {/*<UseEffectBaseUsage/>*/}

        {/*学习useRef*/}
        {/*<UseRefCom/>*/}

        {/*学习context*/}
        {/*<LearnContext/>*/}
        {/*<LearnContextPro/>*/}

        {/*学习reducer*/}
        {/*<LearnReducer/>*/}

        {/*学习自定义hook*/}
        {/*<CustomHook/>*/}

        {/*学习hook的router*/}
        {/*<LearnHookRouter/>*/}

        {/* 性能优化-class 不重复渲染组件*/}
        {/*<PerformanceOptimizationClass/>*/}

        {/* 性能优化-hooks 不重复渲染组件*/}
        {/*<PerformanceOptimizationHooks/>*/}

        {/*setState 与 useState 能够第一个参数接收函数*/}
        {/*<SetStateAndUseStateReceiveFc/>*/}

        {/*性能优化 learnUseMemo*/}
        {/*<LearnUseMemo/>*/}
        {/*性能优化 learnUseCallback*/}
        {/*<LearnUseCallback/>*/}


        {/*test 练习*/}
        {/*<TheWrittenTest/>*/}

        {/* 定时器的问题*/}
        {/*<SetIntervalQuestion/>*/}




        {/*css 布局*/}
        {/*<ShengBeiLayout/>*/}
        <ShuangFeiYiLayout/>


    </div>
  );
}

export default App;

