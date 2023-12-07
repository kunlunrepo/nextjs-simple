export default function  AboutLayout (
    { children,} : {
        children: React.ReactNode
    }
) {
    return (
        <div>
            <header>关于页面1的其他页面头部共享的组件</header>
            {children}
        </div>

    );

}
