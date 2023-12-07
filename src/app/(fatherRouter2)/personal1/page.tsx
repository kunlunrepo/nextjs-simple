"use client" // 客户端组件内部

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

function Personal() {
    const pathname = usePathname();
    const router = useRouter();
    const xd = "other";
    return (
        <div  className="min-h-screen">
            {/*<Link href="/about1?xd=小滴课堂&name=老王">
                去关于个人的页面
            </Link>*/}
            {/*<Link href={{
                pathname: "/about1",
                query: {xd: "小滴课堂", name: "老王" }
            }}>
                去关于个人的页面
            </Link>*/}
            <div onClick={() => router.push("/about1?xd=小滴课堂&name=老王")}>去关于个人的页面</div>
            <div>个人的页面</div>
        </div>
    )
}
export default Personal;
