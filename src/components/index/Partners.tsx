import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className="flex flex-1 overflow-hidden p-4 justify-center items-center my-28">
        <div className="w-[70%] p-3 flex flex-col">
            <font className="font-semibold text-3xl">PARTNERS OF SITE.COM</font>
            <font className="font-normal text-sm  mt-3 text-slate-400">Meet with our special selling partners.</font>
            <div className="w-full h-auto grid xl:grid-cols-5 md:grid-cols-3 max-md:grid-cols-1 gap-10 mt-10">
                <div className="p-3 h-[130px] rounded-2xl shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.2)] hover:border-2 hover:border-background transition ease-in-out duration-300">
                    <Image className="mt-5" src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"} width={254} height={80} />
                </div>
                <div className="p-3 h-[130px] rounded-2xl shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.2)] hover:border-2 hover:border-background transition ease-in-out duration-300">
                    <Image className="mt-5" src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"} width={254} height={80} />
                </div>
                <div className="p-3 h-[130px] rounded-2xl shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.2)] hover:border-2 hover:border-background transition ease-in-out duration-300">
                    <Image className="mt-5" src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"} width={254} height={80} />
                </div>
                <div className="p-3 h-[130px] rounded-2xl shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.2)] hover:border-2 hover:border-background transition ease-in-out duration-300">
                    <Image className="mt-5" src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"} width={254} height={80} />
                </div>
                <div className="p-3 h-[130px] rounded-2xl shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.2)] hover:border-2 hover:border-background transition ease-in-out duration-300">
                    <Image className="mt-5" src={"https://ultra-realhomes.b-cdn.net/wp-content/uploads/2020/06/AA-Builders.png"} width={254} height={80} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners;