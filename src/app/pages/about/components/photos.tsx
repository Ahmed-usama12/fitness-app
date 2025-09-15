import man1 from "@assets/images/about-man1.png";
import man2 from "@assets/images/about-man2.png";
import man3 from "@assets/images/about-man3.png";

export default function Photos() {
  return (
    <div className="relative row-start-2 h-[400px] max-w-[610px] md:row-start-1 md:h-[760px]">
      <img
        src={man2}
        className="rtl:right:0 absolute top-0 max-h-3/4 max-w-3/5 rounded-2xl ltr:left-0"
      />

      <div className="absolute bottom-0 h-10/12 max-w-3/5 ltr:right-0 rtl:left-0">
        <img src={man3} className="ms-auto mb-3 max-w-3/5 rounded-2xl md:mb-5" />
        <img src={man1} className="ms-auto max-h-3/4 rounded-2xl" />
      </div>
    </div>
  );
}
