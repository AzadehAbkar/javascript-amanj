import Image from "next/image";
import Link from "next/link";

const Box = () => {
  return (
    <Link href={'/'}>
    <div>
      <div className="flex  justify-between items-center bg-slate-200 transition-all duration-300 hover:bg-yellow-400 rounded-lg p-3 w-70">
        <div className="flex flex-col gap-2">
          <h3>فایل های مورد نیاز</h3>
          <p className=" ">فایل های میانبر قدرت مند</p>
        </div>
        <div className="w-16 ">
          <Image
            alt="alt"
            layout="fixed"
            objectFit="cover"
            width={60}
            height={60}
            src={"/image/categories/photoshop2-min.png"}
          />
        </div>
      </div>
    </div>

    </Link>
  );
};

export default Box;
