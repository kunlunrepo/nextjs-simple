"use client";

import {useSearchParams} from "next/navigation";

function About(props:any) {
    const searchParams = useSearchParams();
    const xd = searchParams.get("xd") as string;
    const name = searchParams.get("name") as  string;
    console.log(props.searchParams);
    return (
        <div  className="min-h-screen">
            <div>关于页面1</div>
            <div>
                personal1 页面传递过来的参数：{xd + name}
            </div>
        </div>
    )
}
export default About;
