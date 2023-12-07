// 随便写一个就可以访问到该页面
function Page({params}: {params: {slug: string}}) {
    return (
        <div  className="min-h-screen">
            当前动态路径：{params.slug}
        </div>
    )
}
export default Page;
